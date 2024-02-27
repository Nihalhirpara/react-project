
import Homeimg from "../components/Homeimg";
import KeyFeatures from "../components/KeyFeatures";
import Newcollection from "../components/Newcollection";


import Whyme from "../components/Whyme";

const Home = () => {
  return (
    <div className="home">
      <Homeimg/>
      {/* <Slider /> */}
      {/* <FeatureProducts />
      <Consultation /> */}
      {/* <BestSelling /> */}
      <Newcollection/>
      <KeyFeatures/>
      {/* <Whyme /> */}
    </div>
  );
};

export default Home;
