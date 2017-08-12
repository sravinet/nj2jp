import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';

function PostalCode() {
  return (
    <div className="input__row">
      <div className="input__row--postal-code">
        <p>Postal Code <span className="required">*</span></p>
        <Validation.components.Input
          errorClassName="is-invalid-input"
          type="text"
          containerClassName=""
          name="shippingPostalCode"
          validations={['required', 'japan-postal']}
          onChange={this.handleOnChange}
          onBlur={this.props.SgValidatePostal}
          value={this.props.shippingPostalCode}
        />
      </div>
    </div>
  );
}

const { func, string } = PropTypes;
PostalCode.propTypes = {
  apiError: string,
  handleOnChange: func.isRequired,
  shippingPostalCode: string,
  SgValidatePostal: func.isRequired,
};

PostalCode.defaultProps = {
  apiError: '',
  shippingPostalCode: '',
};

export default PostalCode;
