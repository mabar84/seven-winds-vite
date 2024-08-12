import {Outlet} from 'react-router-dom';

import s from './Layout.module.scss';

export const Layout = () => {

  return (
    <>
      <header className={s.header}>
      header
      </header>

      <main className={s.main}>
        <Outlet />
      </main>
    </>
  );
};
