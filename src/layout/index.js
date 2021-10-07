import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import Header from './Header';
import MainContent from './MainContent';

function Layout(props) {
  const { children } = props;
  const menuList = [
    { name: '倒數抽獎', url: '/', title: '計時倒數抽大獎' },
    { name: '參與名單', url: '/participants', title: '此期參與者名單' },
  ];

  const title = menuList.find((item) => item.url === window.location.pathname)?.title;
  return (
    <div>
      <NavBar menuList={menuList} />
      <Header title={title} />
      <MainContent>{children}</MainContent>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
};

Layout.defaultProps = {
  children: undefined,
};

export default Layout;
