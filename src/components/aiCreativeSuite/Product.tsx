import React from 'react';
import Intro from './product/Intro';
import CardGrid from './product/CardGrid';

const Product: React.FC = () => (
  <>
    <Intro />
    <CardGrid />
  </>
);

export default React.memo(Product);
