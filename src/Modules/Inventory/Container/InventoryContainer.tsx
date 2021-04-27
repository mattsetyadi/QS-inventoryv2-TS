import * as ActionInventory from '../Store/InventoryAction';
import * as ActionTemplate from '../../Template/Store/TemplateAction';
import * as SelectorInventory from '../Selector/InventorySelector';
import * as SelectorTemplate from '../../Template/Selector/TemplateSelector';

import React, { useEffect } from 'react';
import { bindActionCreators, compose } from 'redux';

import InventoryComponent from '../Component/InventoryComponent';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const InventoryContainer = (props: any) => {
  const { listData, actionInventory } = props;

  console.log(listData);

  useEffect(() => {
    actionInventory.fetchInventoryListRequested();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <InventoryComponent {...props} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  listData: SelectorInventory.listSelector(),
  modalInventoryIsShow: SelectorTemplate.modalInventorySelector(),
});

const mapDispatchToProps = (dispatch: any) => ({
  actionInventory: bindActionCreators(ActionInventory, dispatch),
  actionTemplate: bindActionCreators(ActionTemplate, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(InventoryContainer);
