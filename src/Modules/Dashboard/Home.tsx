import * as ActionInventory from '../Inventory/Store/InventoryAction';
import * as ActionSupplier from '../Supplier/Store/SupplierAction';

import React, { useEffect } from 'react';
import { bindActionCreators, compose } from 'redux';

import { connect } from 'react-redux';

const Home = (props: any) => {
  console.log('Home props goes here >>', props);
  const { actionSupplier, actionInventory } = props;

  useEffect(() => {
    actionSupplier.fetchSupplierListRequested();
    actionInventory.fetchInventoryListRequested();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h1>Welcome to Dashboard</h1>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  actionSupplier: bindActionCreators(ActionSupplier, dispatch),
  actionInventory: bindActionCreators(ActionInventory, dispatch),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(Home);
