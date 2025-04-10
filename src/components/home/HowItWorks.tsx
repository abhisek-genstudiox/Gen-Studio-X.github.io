import React from 'react';
import Intro from './howitworks/Intro';
import Overview from './howitworks/Overview';

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-black">
      <Intro />
      <Overview />
    </section>
  );
};

export default React.memo(HowItWorks); 