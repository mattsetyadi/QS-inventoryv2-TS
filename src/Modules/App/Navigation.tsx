import { Route, Switch } from 'react-router-dom';

import Home from '../Dashboard/Home';
import InventoryContainer from '../Inventory/Container/InventoryContainer';
import React from 'react';
import SupplierContainer from '../Supplier/Container/SupplierContainer';
import WithTemplate from './WithTemplate';

const Navigation = () => {
  const HomeDisplay = WithTemplate(Home);
  const Supplier = WithTemplate(SupplierContainer);
  const Inventory = WithTemplate(InventoryContainer);
  return (
    <Switch>
      <Route component={Inventory} path="/inventory" />
      <Route component={Supplier} path="/suppliers" />
      <Route component={HomeDisplay} path="/" />
    </Switch>
  );
};

export default Navigation;
