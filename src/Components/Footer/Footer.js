import './Footer.css'
function Footer(){
    return (
      <>
        <div className="footer-container">
          <div></div>
          <div className="contact-links">
            <div className="phone">
              <p>123-123-56464</p>
            </div>
            <div className="website">
              <p>frutohomedesugn.com</p>
            </div>
            <div className="instagram">
              <p>instagram</p>
            </div>
          </div>
          <div>
            <div>
              <p>asdf</p>
            </div>
            <div></div>
          </div>
          <div></div>
        </div>
        <div className="email-container">
          <div></div>
          <div className="email-subscribe">
            <p className="email-desc">Subscribe for instant updates</p>
            <input type="text" placeholder="email" className="input" />
            <button>Subscibe</button>
          </div>
          <div></div>
        </div>
      </>
    );
}
export default Footer;