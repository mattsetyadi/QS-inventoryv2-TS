import { Route, Switch } from 'react-router-dom';

import Home from '../Dashboard/Home';
import React from 'react';
import SupplierContainer from '../Supplier/Container/SupplierContainer';
import WithTemplate from './WithTemplate';

const Navigation = () => {
  const HomeDisplay = WithTemplate(Home);
  const Supplier = WithTemplate(SupplierContainer);
  return (
    <Switch>
      <Route component={Supplier} path="/suppliers" />
      <Route component={HomeDisplay} path="/" />
    </Switch>
  );
};

export default Navigation;
