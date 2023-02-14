const FooterDeliveryBox = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <img
          alt="delivery"
          className=" opacity-70"
          src={require("../../../assets/fast-delivery.png")}
        />
      </div>
      <div>Fast delivery in 3-5 Days</div>
    </div>
  );
};

export default FooterDeliveryBox;
