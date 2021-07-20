import React from "react";

import './Header.scss'

const Header=()=> {
    return <div className='navbar'>
        <div className='container'>
            <ul className='link-list'>
                <li>link1</li>
                <li>link1</li>
                <li>link1</li>
                <li>link1</li>
            </ul>
            <div className='logo'>logo</div>
        </div>
    </div>;
  }

export default Header;