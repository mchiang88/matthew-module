import React from 'react';
import styles from '../css/Footer.css';
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
      <div className={styles.agreement}>
        By clicking the "Sign up" button, I confirm I am over 13 years of age. Sign me up for adidas
        emails, featuring exclusive offers, latest product info, news about upcoming events, and
        more. See our <span className={styles.privacy}>adidas privacy policy</span> for details. Selected
        products may be excluded from the 15% off promotion.
      </div>
    );
    this.emailError = <div className={styles.emailError}>Please enter a valid e-mail address</div>;
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
      <div className={styles.footer}>
        <div className={styles.footerHead}>
          <div className={styles.headerContent}>
            <div className={styles.signUp}>
              SIGN UP FOR NEWS & GET <span className={styles.bargain}>15% OFF</span>
              {this.state.emailStatus ? this.agreement : null}
            </div>
            <div className={styles.signAndButton}>
              <div className={styles.emailWrapper}>
                <input
                  onChange={this.onInputChange}
                  onClick={this.onEmailClick}
                  type="email"
                  className={this.state.valid ? styles.email : styles.emailRed}
                  placeholder="YOUR EMAIL"
                />
                {this.state.valid ? (
                  <button type="button" className={styles.emailButton}>
                    <FooterArrow />
                  </button>
                ) : (
                  <div className={styles.X} />
                )}
                {this.state.valid ? null : this.emailError}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerFoot}>
          <ul className={styles.list1}>
            <h5 className={styles.label}>CUSTOMER SUPPORT</h5>
            <li className={styles.footerListItem}>Help</li>
            <li className={styles.footerListItem}>Order Tracker</li>
            <li className={styles.footerListItem}>Returns & Refunds</li>
            <li className={styles.footerListItem}>Sizing</li>
            <li className={styles.footerListItem}>How to Clean</li>
            <li className={styles.footerListItem}>Store Locator</li>
            <li className={styles.footerListItem}>Site Map</li>
          </ul>
          <ul className={styles.list2}>
            <h5 className={styles.label}>COMPANY INFO</h5>
            <li style={{'height': '14px'}}></li>
            <li className={styles.footerListItem}>About Us</li>
            <li className={styles.footerListItem}>Careers</li>
            <li className={styles.footerListItem}>Press</li>
            <li className={styles.footerListItem}>Sustainability</li>
            <li className={styles.footerListItem}>Affiliates</li>
            <li className={styles.footerListItem}>Students</li>
            <li className={styles.footerListItem}>Mobile Apps</li>
            <li className={styles.footerListItem}>Creators Club</li>
          </ul>
          <ul className={styles.list3}>
            <h5 className={styles.label}>PARTNER SITES</h5>
            <li style={{'height': '14px'}}></li>
            <li className={styles.footerListItem}>shoedidas Outdoor</li>
            <li className={styles.footerListItem}>miTeam</li>
            <li className={styles.footerListItem}>shoedidas Archive</li>
          </ul>
          <ul className={styles.list4}>
            <h5 className={styles.label}>PRIVACY & TERMS</h5>
            <li style={{'height': '14px'}}></li>
            <li className={styles.footerListItem}>Privacy & Security</li>
            <li className={styles.footerListItem}>shoedidas - Runtastic Privacy</li>
            <li className={styles.footerListItem}>Statement</li>
            <li className={styles.footerListItem}>Terms and Conditions</li>
            <li className={styles.footerListItem}>Policy on Human Trafficking</li>
          </ul>
          <ul className={styles.list5}>
            <h5 className={styles.label}>GIFT CARDS</h5>
            <li style={{'height': '14px'}}></li>
            <li className={styles.footerListItem}>Email a Gift Card</li>
            <li className={styles.footerListItem}>Ship a Gift Card</li>
            <li className={styles.footerListItem}>Check Balance</li>
          </ul>
        </div>
        <div className={styles.tradeMarkFooter}>
          <div className={styles.tmfContent}>
            <div className={styles.USA}>
              <img className={styles.flag} src="https://www.adidas.com/glass/assets/flags/us.svg" alt="us flag" />
              <span>USA</span>
            </div>
            <ol className={styles.tmfList}>
              <li style={{'paddingRight': '27px'}} className={styles.tmfListItem}>|</li>
              <li style={{'paddingRight': '8px', 'cursor': 'pointer'}} className={styles.tmfListItem}>Privacy Policy</li>
              <li style={{'paddingRight': '27px'}} className={styles.tmfListItem}>|</li>
              <li style={{'paddingRight': '8px', 'cursor': 'pointer'}} className={styles.tmfListItem}>Terms and Conditions</li>
              <li style={{'paddingRight': '27px'}} className={styles.tmfListItem}>|</li>
              <li style={{'paddingRight': '8px'}} className={styles.tmfListItem}>© 2018 adidas America Inc.</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
