import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';
import { FormattedMessage as IntlMsg } from 'react-intl';
import _ from 'lodash';
import { lifecycle } from 'recompose';

function PostalCode({
  validatePostal,
  handleOnChange,
  shippingPostalCode,
  clearValidationError,
}) {
  return (
    <div className="input__row">
      <div className="input__row--postal-code">
        <p>
          <IntlMsg id="checkout.shipping-address.postal" />&nbsp;
          <span className="required">*</span>
        </p>
        <Validation.components.Input
          errorClassName="is-invalid-input"
          type="text"
          containerClassName=""
          name="shippingPostalCode"
          validations={['required', 'japan-postal']}
          onChange={handleOnChange}
          onBlur={validatePostal}
          onFocus={() => clearValidationError('shippingPostalCode')}
          value={shippingPostalCode}
        />
      </div>
    </div>

    <div className="postal-section__container">
      <label className="form__label" for="Post-Code">
        Post Code
        <strong className="label__asterisk">*</strong>
      </label>
      <input
        className="form__text-field text-field__error w-input"
        data-name="Post Code"
        id="Post-Code"
        maxlength="256"
        name="Post-Code"
        required="required"
        type="text"
      >
    </div>
  );
}
const PostalCodeWithLifecycle = lifecycle({
  shouldComponentUpdate(nextProps) {
    if (!_.isEqual(nextProps, this.props)) return true;
    return false;
  },
})(PostalCode);
const { func, string } = PropTypes;
PostalCode.propTypes = {
  handleOnChange: func.isRequired,
  validatePostal: func.isRequired,
  shippingPostalCode: string,
  clearValidationError: func.isRequired,
};

PostalCode.defaultProps = {
  apiError: '',
  shippingPostalCode: '',
};

export default PostalCodeWithLifecycle;
