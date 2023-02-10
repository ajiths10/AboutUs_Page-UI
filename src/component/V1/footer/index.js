import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerMainConatiner">
      <div className="footerBodyConatiner">
        <div className="footerBodyone">
          <div>
            <img
              alt="delivery"
              src={require("../../../assets/fast-delivery.png")}
            />
          </div>
          <div>Fast delivery in 3-5 Days</div>
        </div>
        <div className="footerBodytwoWraper">
          <div class="verticalLine"></div>
          <div className="footerBodytwo">
            <div>
              <h2>QUICK LINKS</h2>
            </div>
            <div className="footerBodyTwoBody">
              {[
                "Gift Card",
                "Lookbook 2021",
                "Privacy Policy",
                "Snapping & Refund",
              ].map((item) => {
                return <div> {item} </div>;
              })}
            </div>
          </div>
        </div>
        <div className="footerBodythree">
          <div>
            <h2>COMPANY</h2>
          </div>
          <div className="footerBodythreeBody">
            {["About Us", "contact Us", "Pricing Plan", "Knowledge Base"].map(
              (item) => {
                return <div> {item} </div>;
              }
            )}
          </div>
        </div>
        <div className="footerBodyfour">
          <div>
            <h3>COMPANY</h3>
          </div>
          <div>
            <span>Sign up & get all our latest updates and special offers</span>
          </div>
          <div className="footerform">
            <input type="text" placeholder="Enter Your Email address" />
            <button>SUBSCRIBE</button>
          </div>
          <div className="footericons">
            {[
              "Icon-youtube",
              "Icon-linkedin",
              "Icon-twitter",
              "Icon-facebook",
            ].map((buscat, index) => {
              return (
                <span class="dot">
                  <span class="dotinnner">
                    <img
                      alt={`logo${index}`}
                      src={require(`../../../assets/${buscat}.png`)}
                    />
                  </span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <hr />
      <div className="copyRightsConatiner">
        © 2021 Alba. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
