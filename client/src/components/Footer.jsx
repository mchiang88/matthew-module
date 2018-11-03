import React from 'react';
import '../css/Footer.css';
import FooterArrow from '../components/FooterArrow';

const Footer = props => (
  <div className="footer">
    <div className="footerHead">
      <div className="headerContent">
        <div className="signUp">
          SIGN UP FOR NEWS & GET <span className="bargain">0.5% OFF</span>
        </div>
        <div className="signAndButton">
          <input type="email" className="email" placeholder='YOUR EMAIL' />
          <button type="button" className='emailButton'>
            <FooterArrow />
          </button>
        </div>
      </div>
    </div>
    <div className="footerFoot">
      <ul className="list1">
        <h5>CUSTOMER SUPPORT</h5>
        <li>Help</li>
        <li>Order Tracker</li>
        <li>Returns & Refunds</li>
        <li>Sizing</li>
        <li>How to Clean</li>
        <li>Store Locator</li>
        <li>Site Map</li>
      </ul>
      <ul className="list2">
        <h5>COMPANY INFO</h5>
        <li>About Us</li>
        <li>Careers</li>
        <li>Press</li>
        <li>Sustainability</li>
        <li>Affiliates</li>
        <li>Students</li>
        <li>Mobile Apps</li>
        <li>Creators Club</li>
      </ul>
      <ul className="list3">
        <h5>PARTNER SITES</h5>
        <li>shoedidas Outdoor</li>
        <li>miTeam</li>
        <li>shoedidas Archive</li>
      </ul>
      <ul className="list4">
        <h5>PRIVACY & TERMS</h5>
        <li>Privacy & Security</li>
        <li>shoedidas - Runtastic Privacy</li>
        <li>Statement</li>
        <li>Terms and Conditions</li>
        <li>Policy on Human Trafficking</li>
      </ul>
      <ul className="list5">
        <h5>GIFT CARDS</h5>
        <li>Email a Gift Card</li>
        <li>Ship a Gift Card</li>
        <li>Check Balance</li>
      </ul>
    </div>
  </div>
);

export default Footer;
