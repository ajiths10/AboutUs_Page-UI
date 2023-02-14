import Header from "../../component/V2/Header";
import Layout from "../../component/V2/Layout";
import PartFive from "../../component/V2/pages/PartFive";
import PartFour from "../../component/V2/pages/PartFour";
import PartOne from "../../component/V2/pages/PartOne";
import PartThree from "../../component/V2/pages/PartThree";
import PartTwo from "../../component/V2/pages/PartTwo";
import Footer from "../../component/V2/Footer";

const HomeAdvance = () => {
  return (
    <div className="m-0 w-full">
      <Layout>
        <PartOne />
        <PartTwo />
        <PartThree />
        <PartFour />
        <PartFive />
      </Layout>
    </div>
  );
};

export default HomeAdvance;
