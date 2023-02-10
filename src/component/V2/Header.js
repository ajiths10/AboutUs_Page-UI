const Header = () => {
  const topNav = ["HOME", "MEN", "WOMEN", "GIRLS", "BOYS"];
  return (
    <div>
      <div className="grid grid-cols-6 m-0 bg-red-900 text-red-100">
        <div className="col-span-5 p-1 m-2 pl-[100px]">
          Alba Helpline: 04839 222776
        </div>
        <div className="col-span-1 p-1 flex flex-row">
          <div className="m-2">Register</div>
          <div className="m-2">Login</div>
        </div>
      </div>
      <div className="grid grid-cols-12 mt-5">
        <div className="col-span-1 pl-[120px] text-3xl text-red-900 font-bold">
          Logo
        </div>
        <div className="col-span-9 flex justify-center gap-10 text-lg font-light">
          {topNav.map((buscat) => (
            <div className="font-semibold text-base flex flex-row items-center">
              <span>{buscat}</span>
              {buscat !== "HOME" && (
                <span className="arrow-down ml-2 text-slate-400"></span>
              )}
            </div>
          ))}
        </div>
        <div className="col-span-2 flex flex-row text-slate-400 font-bold">
          <div>
            <span className="material-icons">search</span>
          </div>
          <div>
            <span className="material-icons ml-5">shopping_cart_checkout</span>
          </div>
        </div>
      </div>
      <div className="ml-[120px] mt-8 flex items-center text-slate-500">
        <span className="material-icons">home</span>
        <span className="ml-1"> {">"} </span>
        <span className="ml-1 font-semibold text-red-800"> About Us </span>
      </div>
    </div>
  );
};

export default Header;
