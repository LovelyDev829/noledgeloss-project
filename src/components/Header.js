import React from 'react'
import './Header.scss';
import { ReactComponent as HeaderSearchIcon } from "../assets/header-search.svg";

function Header() {
  return (
    <div className='Header'>
      <div className='search-box'>
        <HeaderSearchIcon/>
        <input placeholder="Search..."/>
      </div>
    </div>
  )
}

export default Header