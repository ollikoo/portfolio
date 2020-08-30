import React, { useState } from 'react';
import Hamburger from 'react-hamburgers';

const Burger = props => {

  const [active, setActive] = useState(false);

  return ( 
    <>
      <Hamburger
        active={active}
        type="emphatic"
        onClick={() => {setActive(!active); props.handleClick()} }
      />
    </>
   );
}
 
export default Burger;