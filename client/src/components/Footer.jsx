import React from 'react';
import '../css/Footer.css';
import FooterArrow from '../components/FooterArrow';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailStatus: false,
      email: '',
      valid: true,
    };
    this.agreement = (
      <div className="agreement">
        By clicking the "Sign up" button, I confirm I am over 13 years of age. Sign me up for adidas
        emails, featuring exclusive offers, latest product info, news about upcoming events, and
        more. See our <span className="privacy">adidas privacy policy</span> for details. Selected
        products may be excluded from the 15% off promotion.
      </div>
    );
    this.emailError = <div className="emailError">Please enter a valid e-mail address</div>;
    this.onEmailClick = this.onEmailClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onEmailClick() {
    if (this.state.emailStatus !== true) {
      this.setState({
        emailStatus: true,
        valid: false,
      });
    }
  }

  onInputChange(e) {
    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (re.test(e.target.value)) {
      this.setState({
        valid: true,
      });
    } else {
      this.setState({
        valid: false,
      });
    }
  }

  render() {
    return (
      <div className="footer">
        <div className="footerHead">
          <div className="headerContent">
            <div className="signUp">
              SIGN UP FOR NEWS & GET <span className="bargain">15% OFF</span>
              {this.state.emailStatus ? this.agreement : null}
            </div>
            <div className="signAndButton">
              <div className="emailWrapper">
                <input
                  onChange={this.onInputChange}
                  onClick={this.onEmailClick}
                  type="email"
                  className={this.state.valid ? 'email' : 'email emailRed'}
                  placeholder="YOUR EMAIL"
                />
                {this.state.valid ? (
                  <button type="button" className="emailButton">
                    <FooterArrow />
                  </button>
                ) : (
                  <div className="X" />
                )}
                {this.state.valid ? null : this.emailError}
              </div>
            </div>
          </div>
        </div>
        <div className="footerFoot">
          <ul className="list1">
            <h5>CUSTOMER SUPPORT</h5>
            <li className="footerListItem" className="footerListItem">Help</li>
            <li className="footerListItem">Order Tracker</li>
            <li className="footerListItem">Returns & Refunds</li>
            <li className="footerListItem">Sizing</li>
            <li className="footerListItem">How to Clean</li>
            <li className="footerListItem">Store Locator</li>
            <li className="footerListItem">Site Map</li>
          </ul>
          <ul className="list2">
            <h5>COMPANY INFO</h5>
            <li style={{'height': '14px'}}></li>
            <li className="footerListItem">About Us</li>
            <li className="footerListItem">Careers</li>
            <li className="footerListItem">Press</li>
            <li className="footerListItem">Sustainability</li>
            <li className="footerListItem">Affiliates</li>
            <li className="footerListItem">Students</li>
            <li className="footerListItem">Mobile Apps</li>
            <li className="footerListItem">Creators Club</li>
          </ul>
          <ul className="list3">
            <h5>PARTNER SITES</h5>
            <li style={{'height': '14px'}}></li>
            <li className="footerListItem">shoedidas Outdoor</li>
            <li className="footerListItem">miTeam</li>
            <li className="footerListItem">shoedidas Archive</li>
          </ul>
          <ul className="list4">
            <h5>PRIVACY & TERMS</h5>
            <li style={{'height': '14px'}}></li>
            <li className="footerListItem">Privacy & Security</li>
            <li className="footerListItem">shoedidas - Runtastic Privacy</li>
            <li className="footerListItem">Statement</li>
            <li className="footerListItem">Terms and Conditions</li>
            <li className="footerListItem">Policy on Human Trafficking</li>
          </ul>
          <ul className="list5">
            <h5>GIFT CARDS</h5>
            <li style={{'height': '14px'}}></li>
            <li className="footerListItem">Email a Gift Card</li>
            <li className="footerListItem">Ship a Gift Card</li>
            <li className="footerListItem">Check Balance</li>
          </ul>
        </div>
        <div className="tradeMarkFooter">
          <div className="tmfContent">
            <div className="USA">
              <img className="flag" src="https://www.adidas.com/glass/assets/flags/us.svg" alt="us flag" />
              <span>USA</span>
            </div>
            <ol className="tmfList">
              <li style={{'paddingRight': '27px'}} className="tmfListItem">|</li>
              <li style={{'paddingRight': '8px', 'cursor': 'pointer'}} className="tmfListItem">Privacy Policy</li>
              <li style={{'paddingRight': '27px'}} className="tmfListItem">|</li>
              <li style={{'paddingRight': '8px', 'cursor': 'pointer'}} className="tmfListItem">Terms and Conditions</li>
              <li style={{'paddingRight': '27px'}} className="tmfListItem">|</li>
              <li style={{'paddingRight': '8px'}} className="tmfListItem">© 2018 adidas America Inc.</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
