import React from 'react';
import TemplateContainer from '../Template/Container/TemplateContainer';

const WithTemplate = (ContentComponet: any) => {
  const combinedComponent = (props: any) => {
    return (
      <TemplateContainer>
        <ContentComponet {...props} />
      </TemplateContainer>
    );
  };
  return combinedComponent;
};

export default WithTemplate;
