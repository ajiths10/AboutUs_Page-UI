import "./Header.css";

const Header = () => {
  return (
    <div className="headerConatiner">
      <div className="logoHeaderBtn">Logo</div>
      <div className="HeaderItemContainer">
        <div className="homeHeaderBtn">Home</div>
        <div className="menHeaderBtn">
          <span>MEN</span>
          <span class="arrow-down"></span>
        </div>
        <div className="menHeaderBtn">
          <span>WOMEN</span>
          <span class="arrow-down"></span>
        </div>
        <div className="menHeaderBtn">
          <span>GIRLS</span>
          <span class="arrow-down"></span>
        </div>
        <div className="menHeaderBtn">
          <span>BOYS</span>
          <span class="arrow-down"></span>
        </div>
      </div>
      <div className="HeaderIconContainer">
        <div>
          <span class="material-icons">search</span>
        </div>
        <div>
          <span class="material-icons">shopping_cart_checkout</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
