import React from 'react';
import '../App.css';
import { Nav } from 'react-bootstrap';

function Navbar() {
  return (
    <div>
      <div className='Logo'>
        <h1>ProjectVanlife</h1>
        <p>
          Inspiring the Vanlife and providing in depth informational content
          related to this lifestyle. <br />
          We are currently the biggest <em>#vanlife</em> community on the web
        </p>
      </div>
      <Nav
        justify
        activeKey='/home'
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <span>37</span>
          <Nav.Link>Boards</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <span>9.0K</span>
          <Nav.Link>Pins</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <span>980</span>
          <Nav.Link>Likes</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <span>46K</span>
          <Nav.Link>Followers</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <span>1.5K</span>
          <Nav.Link>Following</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Navbar;
