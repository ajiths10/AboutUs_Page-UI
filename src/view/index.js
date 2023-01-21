import Footer from "../component/footer";
import Header from "../component/header";
import TopBar from "../component/topBar/TopBar";
import "./Home.css";

const Home = () => {
  const dataArray = [
    "Listen to them. We give opportunities for them to express their views- personal and official.",
    "Appreciate the employees for the effort put in verbally and also through incentives, awards, accolades and public acknowledgements in meetings.",
    "Organise training programmes to enhance their professional skills, and also for personal re engineering to build strong self- esteem, develop interpersonal, social, team communication skills and attitude.,",
    "The work environment is made proactive, positive, calm, joyful, effective, productive and enjoyable through meditation and other Self Building activities.",
    "Timely Financial assistance is rendered as a part of employee welfare scheme as and when required.",
  ];

  const dataArrayTwo = [
    "Ensure the quality of the product excellence through monitoring at every stages of production till delivery and customer satisfaction.",
    "Focus on widening the business every year through a progressive approach of associating with prospective textile shops, appointing distributors and contracting with business agents.",
    "Share part of the profit to ensure the welfare of the employees, society & the environment.",
  ];

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
    <>
      <TopBar />
      <Header />
      <span class="honeDotOne"></span>
      <span class="honeDotTwo"></span>
      <div className="sideController">
        <span class="material-icons">home</span>
        <span> {">"} </span>
        <span className="spanlabel"> About Us </span>
      </div>
      <div className="mainConatiner">
        <div className="flexWraper">
          <div className="oneConatiner">
            <h1>Happiness Is Our Culture</h1>
            <p>
              The productivity and prosperity of an organisation is the
              reflection of the happiness and contentment of its employees. We
              believe that is what builds a family and the nation too. Happy
              employees are not just an asset to the organisation, but the love,
              contentment and enthusiasm they display build the whole world.So
              it is our prime responsibility to give a conducive, happy work
              culture for our employees, a climate which gives them
              opportunities for self growth and skill development.
            </p>
            <img alt="student" src={require("../assets/student.png")} />
          </div>
          <div className="twoConatiner">
            <div>
              <img alt="group" src={require("../assets/group.png")} />
            </div>
            <div className="dataListConatainer">
              <h2>
                What Do We Do To Make Our Employees Stay Happy And Satisfied ?
              </h2>
              <div className="pointerConatiner">
                {dataArray.map((buscat) => {
                  return (
                    <span>
                      <img
                        alt="verify"
                        src={require("../assets/stick_simpal.png")}
                      />
                      &nbsp;
                      {buscat}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="threeConatiner">
            <div className="imgSetOne">
              <div className="block_one">
                <div className="block_one_wraper">
                  <h2>Our Vision</h2>
                  <p>
                    Our vision is to provide prime value to customers by
                    delivering supreme quality undergarments in the global
                    market with the intent to touch the lives of our employees,
                    immediate society and the world community with the
                    understanding -‘we exist because they exist’.
                  </p>
                </div>
              </div>
              <div className="block_two">sadasd</div>
            </div>
            <div className="imgSetTwo">
              <div className="block_three">
                <div className="block_two_wraper">
                  <h2>Our Mission</h2>
                  <p>Our mission is to put in effort wholeheartedly to:</p>
                  <ul>
                    {dataArrayTwo.map((buscat) => {
                      return <li>{buscat}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="fourConatiner">
            <h1>Corporate Info</h1>

            {Object.keys(dataObject).map((buscat) => {
              return (
                <>
                  <h6>{dataObject[buscat].heading}</h6>
                  <p>{dataObject[buscat].paragraph}</p>
                </>
              );
            })}
          </div>
          <div className="fiveConatiner">
            <img alt="student" src={require("../assets/video_playback.png")} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
