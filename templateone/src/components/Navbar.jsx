import React from "react";
import { Navbar, NavDropdown} from "react-bootstrap";
import logo from '../images/mainimages/logo-aero1.png';
import img1 from '../images/mainimages/1-600x600_300x300_crop_center.jpg';
import img2 from '../images/mainimages/2-600x600_300x300_crop_center.jpg';
import img3 from '../images/mainimages/3-600x600_41086c79-e865-4c8c-aa93-15a03b384a3e_300x300_crop_center.jpg';
import img4 from '../images/mainimages/4-600x600_ceb87a56-6b62-4a7c-a226-3ca7edddbc07_300x300_crop_center.jpg';
import { FaBars, FaSearch } from 'react-icons/fa';
import { FaSquare } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';



function NavbarComponent() {
  return (
    <div expand="lg" className="custom-navbar">
      <div className="logomenu">
      <div className="resmenu d-flex d-xxl-none d-xl-none d-lg-none"><FaBars size={15} color="black"/></div>
      <Navbar.Brand href="#home" className="logo"><img src={logo} alt="Logo" /></Navbar.Brand>
      </div>
      <div className="custom-nav d-none d-xxl-flex d-xl-flex d-lg-flex">
        <NavDropdown title="HOME" id="basic-nav-dropdown" className="drop custom-dropdown-title">
          <div className="maindrop">
            <NavDropdown.Item href="#action/3.1">HOME 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">HOME 2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">HOME 3</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">HOME 4</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">HOME 5</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">HOME FASHION</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">HOME JEWELLERY</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">HOME JEWELLERY</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">HOME JEWELLERY</NavDropdown.Item>
          </div>
        </NavDropdown>
        <NavDropdown title="SHOP" id="basic-nav-dropdown" className="drop custom-dropdown-title">
          <div className="drop2main">
            <div className="drop2">
              <h1>WHEELS</h1>
              <NavDropdown.Item href="#action/3.1">HOME 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">HOME 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">HOME 3</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">HOME 4</NavDropdown.Item>
            </div>
            <div className="line"></div>
            <div className="drop2">
              <h1>MOTORS</h1>
              <NavDropdown.Item href="#action/3.1">HOME 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">HOME 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">HOME 3</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">HOME 4</NavDropdown.Item>
            </div>
            <div className="line"></div>
            <div className="drop2">
              <h1>WHEELS</h1>
              <NavDropdown.Item href="#action/3.1">HOME 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">HOME 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">HOME 3</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">HOME 4</NavDropdown.Item>
            </div>
            <div className="line"></div>
            <div className="drop2">
              <h1>ENGINES</h1>
              <NavDropdown.Item href="#action/3.1">HOME 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">HOME 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">HOME 3</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">HOME 4</NavDropdown.Item>
            </div>
          </div>
        </NavDropdown>
        <NavDropdown title="FEATURED" id="basic-nav-dropdown" className="drop custom-dropdown-title">
          <div className="drop3main">
            <div className="drop3">
              <div className="img">
                <img src={img1} alt="image1" />
              </div>
              <h1>APPO DESIGN WOOLRICH</h1>
              <h1>KETTLERACK</h1>
              <p className="price">$150</p>
            </div>
            <div className="drop3">
              <div className="img">
                <img src={img2} alt="image1" />
              </div>
              <h1>APPO DESIGN WOOLRICH</h1>
              <h1>KETTLERACK</h1>
              <p className="price">$150</p>
            </div>
            <div className="drop3">
              <div className="img">
                <img src={img3} alt="image1" />
              </div>
              <h1>APPO DESIGN WOOLRICH</h1>
              <h1>KETTLERACK</h1>
              <p className="price">$150</p>
            </div>
            <div className="drop3">
              <div className="img">
                <img src={img4} alt="image1" />
              </div>
              <h1>APPO DESIGN WOOLRICH</h1>
              <h1>KETTLERACK</h1>
              <p className="price">$150</p>
            </div>

          </div>
        </NavDropdown>
        <NavDropdown title="LAYOUTS" id="basic-nav-dropdown" className="drop custom-dropdown-title">
          <div className="drop4main">
            <div className="drop2">
              <h1>WHEELS</h1>
              <NavDropdown.Item href="#action/3.1">HOME 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">HOME 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">NO SIDEBAR</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">HOME 3</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">HOME 4</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">NO SIDEBAR</NavDropdown.Item>
            </div>
            <div className="drop2">
              <h1>WHEELS</h1>
              <NavDropdown.Item href="#action/3.1">HOME 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">HOME 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">NO SIDEBAR</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">HOME 3</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">HOME 4</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">NO SIDEBAR</NavDropdown.Item>
            </div>
          </div>npm
        </NavDropdown>
        <NavDropdown title="PAGES" id="basic-nav-dropdown" className="drop custom-dropdown-title">
          <div className="maindrop">
            <NavDropdown.Item href="#action/3.1">HOME 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">HOME 2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">HOME 3</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">HOME 4</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">HOME 5</NavDropdown.Item>
            <NavDropdown title="ABOUT" id="basic-nav-dropdown" className="subdrop">
              <div className="subdropmain">
                <NavDropdown.Item href="#action/3.1">HOME 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">HOME 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">HOME 3</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">HOME 4</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">HOME 5</NavDropdown.Item>
              </div>
            </NavDropdown>
            <NavDropdown.Item href="#action/3.3">HOME FASHION</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">HOME JEWELLERY</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">HOME JEWELLERY</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">HOME JEWELLERY</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">HOME JEWELLERY</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">HOME JEWELLERY</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">HOME JEWELLERY</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">HOME JEWELLERY</NavDropdown.Item>
          </div>
        </NavDropdown>
      </div>
      <div className="socialicons">
        <FaSearch size={20} color="white"/>
        <FaSquare size={20} color="white"/>
        <FaShoppingBag size={20} color="white"/>
      </div>
    </div>
  );
}
export default NavbarComponent;
