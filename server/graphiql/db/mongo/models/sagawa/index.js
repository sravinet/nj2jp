/* eslint-disable no-use-before-define, no-console */
import { Promise as bbPromise } from 'bluebird';
import axios from 'axios';
import sagawaSchema from '../../schemas/sagawaSchema';
import db from '../../connection';
import cleanSagawaResponse from './cleanSagawaResponse';

/**
* Function: "xmlOut";
* 1. Receives standard Javascript string
* 2. Replaces special characters with XML compliant syntax.
* 3. Returns the result.
*
* @param {string} postalCode - the postal code to validate.
*
* @return {string} cleaned
*/
const xmlOut = str => str
.replace(/&/g, '&amp;')
.replace(/</g, '&lt;')
.replace(/>/g, '&gt;')
.replace(/"/g, '');

sagawaSchema.statics.verifyPostal = ({ userId, postalCode }) =>
new Promise((resolve, reject) => {
  console.log('SENDING REQUEST TO SAGAWA');
  axios.post('http://asp4.cj-soft.co.jp/SWebServiceComm/services/CommService/getAddr',
  `<?xml version='1.0' encoding='utf-8'?>
  <soap:Envelope xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'  xmlns:xsd='http://www.w3.org/2001/XMLSchema' xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/'>
  <soap:Body>
    <getAddr xmlns='http://ws.com'>
    <zipcode>${xmlOut(postalCode)}</zipcode>
  </getAddr>
  </soap:body>
  </soap:Envelope>`, {
    headers: {
      'Content-Type': 'text/xml; charset=utf-8',
      SOAPAction: 'http://ws.com',
    },
  })
  .then((response) => { //eslint-disable-line
    console.log('Received response from Sagawa.');
    const { problem, data } = cleanSagawaResponse.handlepostal(response);

    if (problem) {
      console.log('There was an error while trying to validate postal code', postalCode, '.  Error = ', problem);
      reject({
        error: {
          hard: true,
          soft: false,
          message: problem,
        },
      });
    } else {
      console.log('Successfully received a valid Address from postal code input.  Creating Sagawa document now.');
      return bbPromise(cb => Sagawa.create(({
        userId,
        postalInfo: { ...data },
      }), cb));
    }
  })
  .then((newDoc) => {
    console.log('Successfully created new Sagawa document.', newDoc);
    resolve({
      _id: newDoc._id,
      postalInfo: newDoc.postalInfo,
    });
  })
  .catch((error) => {
    console.log(`Network Error while trying to validate postal code. Error = ${error}`);
    reject(`Network Error while trying to validate postal code. Error = ${error}`);
  });
});

const Sagawa = db.model('Sagawa', sagawaSchema);
export default Sagawa;