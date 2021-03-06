import * as ActionSupplier from '../Store/SupplierAction';
import * as ActionTemplate from '../../Template/Store/TemplateAction';
import * as SelectorSupplier from '../Selector/SupplierSelector';
import * as SelectorTemplate from '../../Template/Selector/TemplateSelector';

import React, { useEffect } from 'react';
import { bindActionCreators, compose } from 'redux';

import SupplierComponent from '../Component/SupplierComponent';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const SupplierContainer = (props: any) => {
  // console.log('props supplier container', props);
  const { listData, actionSupplier } = props;

  console.log(listData);

  useEffect(() => {
    actionSupplier.fetchSupplierListRequested();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <SupplierComponent {...props} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  listData: SelectorSupplier.listSelector(),
  modalSupplierIsShow: SelectorTemplate.modalSupplierSelector(),
});

const mapDispatchToProps = (dispatch: any) => ({
  actionSupplier: bindActionCreators(ActionSupplier, dispatch),
  actionTemplate: bindActionCreators(ActionTemplate, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(SupplierContainer);
