const PartFour = () => {
  const dataObject = {
    one: {
      heading: "History",
      paragraph:
        "Alba Clothings started its production in the year 1994 at Vaikom, Kottayam District, Kerala. In a span of 25 years, it is our relentless faith with dedicated effort, focused on success, holding tightly on to business ethics and values that enabled Alba Clothings to soar to make a definite mark in the Textile Industry. The impeccable product quality has always ensured customer satisfaction which has emarkably promoted ALBA brand to reach to the present stage.By 2019, over a period of 25 years, ALBA could spread its wings over the Kerala Textile Industry, a part of Tamil Nadu and the Middle-East by acquiring a considerable market share in the innerwear segment. Now ALBA has become a popular Brand. High quality ALBA products are currently available in considerably a good number of Retail outlets in Kerala, Tamil Nadu & in the Middle-Easy at an affordable price.ALBA Registered Offices are located in Vaikom & Irumpanam, Kerala and Tirupur, Tamil Nadu. And Warehous is located in Vaikom, Kerala and the production units are based in Tirupur, Tamil Nadu. The production is being carried out in about 14 leading stitching units with International Standards and expertise under stringent quality control.",
    },
    two: {
      heading: "Why The Brand Name Alba?",
      paragraph:
        "Alba is a given name of Latin origin meaning ‘white’. In Spanish and Italian the name means ‘Sunrise’. Sunrise indicates light, freshness, warmth and closeness. Among our garments the innerwear is the closest to our body. It gives the freshness, warmth, comfort and confidence for a fresh start. And we also intent the brand name Alba to stay in the minds of our customers as a simple and memorable experience.",
    },
    three: {
      heading: "Why The Brand Name Alba?",
      paragraph:
        "Alba is a given name of Latin origin meaning ‘white’. In Spanish and Italian the name means ‘Sunrise’. Sunrise indicates light, freshness, warmth and closeness. Among our garments the innerwear is the closest to our body. It gives the freshness, warmth, comfort and confidence for a fresh start. And we also intent the brand name Alba to stay in the minds of our customers as a simple and memorable experience.",
    },
  };
  return (
    <div className="mt-[100px]">
      <div className="text-xl font-bold text-center">Corprate info</div>
      <div>
        {Object.keys(dataObject).map((buscat) => {
          return (
            <div className="mt-4">
              <h2 className="inline-block text-lg font-semibold">
                {dataObject[buscat].heading}
              </h2>
              <p className=" text-sm">{dataObject[buscat].paragraph}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PartFour;
