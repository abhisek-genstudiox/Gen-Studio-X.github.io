import React from 'react';
import Intro from './howitworks/Intro';
import Overview from './howitworks/Overview';
import Stats from './howitworks/Stats';

const HowItWorks: React.FC = () => (
  <section className="bg-black">
    <Intro />
    <Overview />
  </section>
);

export default React.memo(HowItWorks);