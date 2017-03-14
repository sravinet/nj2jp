import React from 'react';
import { Route, Router, IndexRoute } from 'react-router';
// import Navbar from '../Pages/Navbar/navbarComponents/navbarMain';

/* NOTE:
1. Remove UUID hard code.

*/
import App from '../App';
import Homepage from '../Pages/Home/homePage';
import SingleProduct from '../Pages/Products/productComponents/products_singleProduct';
import AllProducts from '../Pages/Products/productComponents/products_allProducts';
import Cart from '../Pages/Cart/cart';
import EmptyCart from '../Pages/Cart/EmptyCart/emptyCart';
import ExpressCheckout from '../Pages/ExpressCheckout/expressCheckout';
import Login from '../Pages/Auth/Login/login';
import Register from '../Pages/Auth/Register/register';
import Forgot from '../Pages/Auth/Forgot/forgot';

import UserDashboard from '../Pages/UserDashboard/userDashComponents/userDashboard';
import AdminDashboard from '../Pages/AdminDashboard/adminDashboard';
import UserOrderTracking from '../Pages/UserDashboard/userDashComponents/userDashboard_orders/userOrderTracking';

import About from '../Pages/Legal/about';
import ContactUs from '../Pages/Legal/contactUs';
import Phone from '../Pages/Legal/phone';
import Reviews from '../Pages/Media/reviews';
import UserStories from '../Pages/Media/userStories';
import VapeNews from '../Pages/Media/vapeNews';
import Faqs from '../Pages/Legal/faqs';
import MissionStatement from '../Pages/Legal/missionStatement';
import SocialMedia from '../Pages/Legal/socialMedia';

import NicotineDisclaimer from '../Pages/Legal/nicotineDisclaimer';
import Shipping from '../Pages/Legal/shippingPolicy';
import Returns from '../Pages/Legal/returnsPolicy';
import PrivacyPolicy from '../Pages/Legal/privacyPolicy';
import TermsConditions from '../Pages/Legal/termsConditions';
import Wholesale from '../Pages/Legal/wholesale';
import Affiliates from '../Pages/Legal/affiliateProgram';
import NotFound from '../Pages/404/notFound404';
import ResetPasswordEmail from '../Pages/Auth/ResetEmail/reset';
import OrderSuccess from '../Pages/ExpressCheckout/orderSuccess';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Homepage} />
    {/* MEDIA */}
    <Router path={'/about'} component={About} />
    <Router path={'/contact_us'} component={ContactUs} />
    <Router path={'/phone'} component={Phone} />
    <Router path={'/reviews'} component={Reviews} />
    <Router path={'/vape_news'} component={VapeNews} />
    <Router path={'/stories'} component={UserStories} />
    <Router path={'/social_media'} component={SocialMedia} />
    <Router path={'/mission_statement'} component={MissionStatement} />
    <Router path={'/faqs'} component={Faqs} />
    {/* LEGAL */}
    <Router path={'/nicotine_disclaimer'} component={NicotineDisclaimer} />
    <Router path={'/return_policy'} component={Returns} />
    <Router path={'/shipping_policy'} component={Shipping} />
    <Router path={'/privacy_policy'} component={PrivacyPolicy} />
    <Router path={'/terms_and_conditions'} component={TermsConditions} />
    <Router path={'/wholesale'} component={Wholesale} />
    <Router path={'/affiliate_program'} component={Affiliates} />
    {/* AUTH */}
    <Router path={'/login'} component={Login} />
    <Router path={'/register'} component={Register} />
    <Router path={'/forgot'} component={Forgot} />
    {/* User Experience */}
    <Router path={'/home'} component={Homepage} />
    <Router path={'/juice/:id'} component={SingleProduct} />
    <Router path={'/juices'} component={AllProducts} />
    <Router path={'/cart'} component={Cart} />
    <Router path={'/empty'} component={EmptyCart} />
    <Router path={'/express_checkout'} component={ExpressCheckout} />
    <Router path={'/not_found'} component={NotFound} />
    <Router path={'/reset_email'} component={ResetPasswordEmail} />
    <Router path={'/successfully_ordered'} component={OrderSuccess} />

    {/* -------------------- DASHBOARDS -------------------- */}
    {/* User Dashboard */}
    <Router
      path={'/user_:id'}
      component={UserDashboard}
    />
    <Router
      path={'/user_:id/order_:orderid/tracking_:trackingid'} component={UserOrderTracking}
    />
    <Router
      path={'/user_:id/home_dashboard'}
      component={UserDashboard}
    />

    {/* Admin Dashboard */}
    <Router path={'/admin/:id'} component={AdminDashboard} />
  </Route>
);
