import "./Header.css";

const Header = () => {
  return (
    <div className="headerConatiner">
      <div className="logoHeaderBtn">Logo</div>
      <div className="HeaderItemContainer">
        <div className="homeHeaderBtn">Home</div>
        <div className="menHeaderBtn">MEN</div>
        <div className="womenHeaderBtn">WOMEN</div>
        <div className="girlsHeaderBtn">GIRLS</div>
        <div className="boysHeaderBtn">BOYS</div>
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
