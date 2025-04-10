import React from 'react';
import Intro from './howitworks/Intro';
import Overview from './howitworks/Overview';

const HowItWorks: React.FC = () => (
  <section >
    <Intro />
    <Overview />
  </section>
);

export default React.memo(HowItWorks);