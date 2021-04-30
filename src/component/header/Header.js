import React from 'react';
import Title from './Title';
import Description from './Description';
import Answer42 from '../answer/Answer42';

const Header = () => {
  return (
    <React.Fragment>
      <Title />
      <Description />
      <Answer42 />
    </React.Fragment>
  );
};

export default Header;
