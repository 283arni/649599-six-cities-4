import * as React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {userType} from '../../types/user';

interface Props {
  user: userType;
}

const Header: React.FunctionComponent<Props> = ({user}: Props) => {

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              className="header__logo-link header__logo-link--active"
              to={AppRoute.MAIN}
            >
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={user ? AppRoute.FAVORITES : AppRoute.LOGIN}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">{user ? user.mail : `Sign in`}</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};


export default Header;
