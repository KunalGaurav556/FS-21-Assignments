import "./footer.modular.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-items">
        <div className="footer-logo">
          <img
            src="https://www.amplethemes.com/wp-content/uploads/edd/2020/07/5345488-icon-png-logos-208178-free-icons-library-png-logos-1000_979_preview.png"
            alt="logoipsum"
          />
          <h2>LogoIpsum</h2>
        </div>
        <div className="footer-para">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/> Incidunt
            consequuntur amet culpa cum itaque neque.
          </p>
        </div>
        <div className="footer-links">
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>History</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Blogs</li>
          </ul>
        </div>
        <div className="footer-icons">
          <img
            src="https://cdn-icons-png.flaticon.com/256/20/20673.png"
            alt="Facebook Icon"
          />
          <img
            src="https://static.vecteezy.com/system/resources/previews/023/986/521/non_2x/instagram-logo-instagram-logo-transparent-instagram-icon-transparent-free-free-png.png"
            alt="Instagram icon"
          />
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/twitter-icon.png"
            alt="twitter icon"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="github icon"
          />
          <img
            src="https://static.vecteezy.com/system/resources/previews/022/062/579/original/planet-earth-icon-free-png.png"
            alt="earth icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;