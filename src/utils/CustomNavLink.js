import React from 'react';
import { HashLink } from 'react-router-hash-link'
import { useLocation } from 'react-router-dom';

const CustomNavLink = ({to, className, children}) => {
    const location = useLocation();

    const getClassName = () => {
        if (to === ''){
            return '';
        }else{
            return to.substring(1);
        }
    }

  return (
    <HashLink 
        to={to} 
        smooth 
        className={location.hash === getClassName() ? `active ${className}` : className}>
        {children}
    </HashLink>
  )
}

export default CustomNavLink