import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';
import Breadcrumb from '../../../../Components/breadcrumbs';
import UserSideBar from '../userDashboard_sidebar/userSideBar';
import UserWelcomeMsg from '../userDashboard_welcomeMsg/userWelcomeMsg';

const propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

function UserOrders({ location }) {
  const homeDashboard = location.pathname.split('/')[1];
  return (
    <div className="orders--main">
      <div className="orders--container">
        <Breadcrumb
          paths={['Home', 'Your Account']}
          classes={['home', 'your-account']}
          destination={['', homeDashboard]}
          lastCrumb="Login Apps"
        />
        <UserWelcomeMsg />
        <div className="orders__body">
          <UserSideBar location={location} />

          <div className="body__dashboard">
            <div className="dashboard--container">
              <div className="dashboard--title">
                <h1>Your Order</h1>
              </div>

              <div className="dashboard__tabs">
                <button className="tabs--completed-orders sweep-right">
                  <p>Completed Orders</p>
                </button>
                <button className="tabs--open-orders sweep-right">
                  <p>Open Orders</p>
                </button>
              </div>

              <div className="dashboard__filter">
                {/* TODO: These 3 element will be rendered dynamically. */}
                <div className="filter__results-msg">
                  <p className="result-msg--number">99</p>
                  <p className="results-msg--periodcity">Open Order(s)</p>
                  <p className="results-msg--rest">placed in the last</p>
                </div>
                <div className="filter__periodcity-ddn--container">
                  <div className="periodicity__ddn--readout">
                    <input type="text" className="readout--msg" disabled value="Month" />
                    <button className="readout--btn sweep-right">
                      <FontAwesome name="angle-down" />
                    </button>
                  </div>
                  <div className="periodicity__ddn--content">
                    <ul className="ddn--content__list">
                      {/* NOTE: These need to be rendered dynamically, and the option selected, should absent from the available choices. */}
                      <li className="list--option sweep-right-white">
                        <p>Week</p>
                      </li>
                      <li className="list--option sweep-right-white">
                        <p>Month</p>
                      </li>
                      <li className="list--option sweep-right-white">
                        <p>Quarter</p>
                      </li>
                      <li className="list--option sweep-right-white">
                        <p>Year</p>
                      </li>
                      <li className="list--option sweep-right-white">
                        <p>All</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="dashboard__results-table">
                <table className="results-table--container">
                  <thead className="results-table__header">
                    <tr className="header--row">
                      <th className="header__date">
                        <p>Order Placed</p>
                      </th>
                      <th className="header__total">
                        <p>Order Total</p>
                      </th>
                      <th className="header__ship-to">
                        <p>Ship To</p>
                      </th>
                      <th className="header__bill-to">
                        <p>Bill To</p>
                      </th>
                      <th className="header__status">
                        <p>Status</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="results-table__body">
                    {/* NOTE: Obviously these rows will be dynamic. */}
                    <tr className="body__row">
                      <td className="row__cell-date">
                        <p>{moment().format('LLL')}</p>
                      </td>
                      <td className="row__cell-total">
                        <FontAwesome name="usd" />
                        {'\u00A0'}
                        <p>120.00</p>
                      </td>
                      <td className="row__cell-ship-to">
                        <p>1400012, 東京都品川...</p>
                      </td>
                      <td className="row__cell-bill-to">
                        <p>2400 Roudel Lane...</p>
                      </td>
                      <td className="row__cell-status">
                        <p>Shipped</p>
                      </td>
                    </tr>
                    <tr className="body_row--product">
                      <td className="product__info" colSpan="5">
                        <div className="info--container">
                          <div className="info--product">
                            {/* NOTE: Everything is Dynamic */}
                            <img src="../Images/nj2jp_juice_card_klp.png" alt="" className="product--img" />
                            <div className="product--description">
                              <div className="description--title">
                                <p>Strawberries {'N\''} Cream</p>
                              </div>
                              <div className="description--info">
                                <p className="info__manufacturer">by VapeSwitch</p>
                                <p className="info__nicotine">Nicotine Strength:<i>6 mg</i> </p>
                                <p className="info__sku">SKU: 12312123</p>
                              </div>
                            </div>

                          </div>
                          <div className="info--action-section">
                            <ul className="action-section--list">
                              <li className="list--add-to-cart">
                                <button>Add To Cart</button>
                              </li>
                              <li className="list--track-order">
                                <button>Track Your Order</button>
                              </li>
                              <li className="list--tracking-number">
                                <p>Tracking #:{'\u00A0'}
                                  <span className="order-number--tracking">
                                    {/* NOTE: Dyanmic */}
                                    123123123
                                  </span>
                                </p>
                              </li>
                              <li className="list--order-number">

                                {/* NOTE: RR address = Dynamic */}
                                <p>Order #:{'\u00A0'}</p>

                                {/* NOTE: Dyanmic */}
                                <Link
                                  to={`/${123123123}`} className="order-number--link"
                                >123123123</Link>
                              </li>
                              <li className="list--order-invoice">

                                {/* NOTE: RR address = Dynamic */}
                                <p>Invoice #:{'\u00A0'}</p>

                                {/* NOTE: Dyanmic */}
                                <Link
                                  to={`/${123123123}`} className="order-number--invoice"
                                >123123123</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="body_row--product">
                      <td className="product__info" colSpan="5">
                        <div className="info--container">
                          <div className="info--product">
                            {/* NOTE: Everything is Dynamic */}
                            <img src="../Images/nj2jp_juice_card_klp.png" alt="" className="product--img" />
                            <div className="product--description">
                              <div className="description--title">
                                <p>Strawberries {'N\''} Cream</p>
                              </div>
                              <div className="description--info">
                                <p className="info__manufacturer">by VapeSwitch</p>
                                <p className="info__nicotine">Nicotine Strength:<i>6 mg</i> </p>
                                <p className="info__sku">SKU: 12312123</p>
                              </div>
                            </div>

                          </div>
                          <div className="info--action-section">
                            <ul className="action-section--list">
                              <li className="list--add-to-cart">
                                <button>Add To Cart</button>
                              </li>
                              <li className="list--track-order">
                                <button>Track Your Order</button>
                              </li>
                              <li className="list--tracking-number">
                                <p>Tracking #:{'\u00A0'}
                                  <span className="order-number--tracking">
                                    {/* NOTE: Dyanmic */}
                                    123123123
                                  </span>
                                </p>
                              </li>
                              <li className="list--order-number">

                                {/* NOTE: RR address = Dynamic */}
                                <p>Order #:{'\u00A0'}</p>

                                {/* NOTE: Dyanmic */}
                                <Link
                                  to={`/${123123123}`} className="order-number--link"
                                >123123123</Link>
                              </li>
                              <li className="list--order-invoice">

                                {/* NOTE: RR address = Dynamic */}
                                <p>Invoice #:{'\u00A0'}</p>

                                {/* NOTE: Dyanmic */}
                                <Link
                                  to={`/${123123123}`} className="order-number--invoice"
                                >123123123</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
UserOrders.propTypes = propTypes;
export default UserOrders;
