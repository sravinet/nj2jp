import React from 'react';
import FontAwesome from 'react-fontawesome';

function BulkSaleModal({ showModal, modalHandler, taxRate }) {
  console.log('showBulkModal: ', showModal);
  let style;
  if (showModal) {
    style = {
      display: 'flex',
      opacity: 1,
      height: '100%',
      width: '100%',
    };
  } else {
    style = {
      display: 'none',
      opacity: 0,
      height: 0,
      width: 0,
    };
  }
  return (
    <div style={style} className="bulk-modal">
      <div className="bulk-modal__dialogue">
        <div className="dialogue__exit--container">
          <button
            data-parent="promotion-bulk"
            data-tag=""
            className="exit-btn"
            onClick={modalHandler}
          >
            <FontAwesome name="plus" />
          </button>
        </div>
        <div className="dialogue__product-title">
          <p>{'Let\'s Make a Deal'}!</p>
          <br />
          <p>
            <span className="required">BUY 4 BOTTLES</span>
            and we’ll slice
            <span className="required">25% OFF</span>
            the price.
          </p>
          <p>
            <i>Example:</i>
          </p>
        </div>
        <table className="dialogue__table">
          <thead className="table__header">
            <tr className="header__row">
              <td className="header--qty">QTY</td>
              <td className="header--description">Juice Description</td>
              <td className="header--price">Price</td>
            </tr>
          </thead>
          <tbody>
            <tr className="body__row--main">
              <td className="body--qty">4</td>
              <td className="body--description">
                <p className="description__title">Fruity Bamm-Bamm</p>
                <br />
                <p className="description__nicotine-strength">
                  Nicotine Strenght: <i>6mg</i>
                </p>
                <br />
                <p className="description__sku">
                  SKU: VSJ0001
                </p>
              </td>
            </tr>
            <tr className="body__row--totals">
              <td className="body--total--categories" colSpan="2">
                <p className="category__subtotal">Subtotal</p>
                <br />
                <p className="category__tax">Tax</p>
                <br />
                <p className="category__discount">Discount</p>
                <br />
                <p className="category__shipping">Free International Shipping</p>
                <br />
                <p className="category__order-total">Order Total</p>
              </td>
              <td className="body--total--prices">
                <p className="price__subtotal">$ 120.00</p>
                <br />
                <p className="price__tax">$ {taxRate}</p>
                <br />
                <p className="price__discount required">
                  25% OFF: $ -32.78
                </p>
                <br />
                <p className="price__shipping">$ 0.00</p>
                <br />
                <p className="price__order-total">$ 98.02</p>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="dialogue__action-btns">
          <button
            data-parent="promotion-bulk"
            data-tag=""
            className="action-btn__continue sweep-right"
            onClick={modalHandler}
          >Close</button>
          <div className="action-btn__msg">
            <div className="msg__title">
              <p>Oh!</p>
            </div>
            <div className="msg__sub-title">
              <p>
                Did we mention you get
                <span className="sub-title__free required"> FREE </span>
                International Shipping.
              </p>
            </div>
          </div>
          <button
            data-parent="promotion-bulk"
            data-tag="view-juices"
            className="action-btn__checkout sweep-right"
            onClick={modalHandler}
          >{'Let\'s Do It!'}</button>
        </div>
      </div>
    </div>
  );
}
const { bool, func, number } = React.PropTypes;
BulkSaleModal.propTypes = {
  showModal: bool.isRequired,
  modalHandler: func.isRequired,
  taxRate: number.isRequired,
};
export default BulkSaleModal;