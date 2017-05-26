import React from 'react';
import NavbarLogo from './navbarLogo';
import NavbarMobileOptionsLanguage from './navbar_mobile_options/navbar_mobile_language/navbarOptions_mobile_language';
import NavbarMobileUserActions from './navbar_mobile_userActions/navbar_mobile_userActions';
import NavbarMobileNav from './navbar_mobile_nav/navbar_mobile_nav';

export default function NavbarMobile() {
  static propTypes = {
    activeUser: objectOf(any),
  }
  static defaultProps = {
    activeUser: false,
  }
  return (
    <nav className="navbar navbar__mobile">
      <div className="navbar__mobile--container">
        <NavbarLogo />
        <NavbarMobileOptionsLanguage />
        <NavbarMobileUserActions />
        <NavbarMobileNav />
      </div>
    </nav>
  );
}
const mapStateToProps = ({ user }) => ({
  activeUser: user.profile,
});
export default connect(mapStateToProps)(NavbarMobileUserActions);
