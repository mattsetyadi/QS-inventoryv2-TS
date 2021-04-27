import React from 'react';
import TemplateComponent from '../Component/TemplateComponent';

const TemplateContainer = (props: any) => {
  console.log('props Template Container', props);
  return (
    <div>
      <TemplateComponent {...props} />
    </div>
  );
};

export default TemplateContainer;
