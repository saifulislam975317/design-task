import Advertising from "../Advertising/Advertising";
import ApplyToday from "../ApplyToday/ApplyToday";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Industry from "../Industry/Industry";
import Marketer from "../Marketer/Marketer";
import TrafficSource from "../Mktraffic/TrafficSource";
import PeopleSay from "../PeopleSay/PeopleSay";
import Publishers from "../Publishers/Publishers";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <ApplyToday></ApplyToday>
      <Marketer></Marketer>
      <Advertising></Advertising>
      <Publishers></Publishers>
      <TrafficSource></TrafficSource>
      <Industry></Industry>
      <Publishers></Publishers>
      <PeopleSay></PeopleSay>
      <Contact></Contact>
    </div>
  );
};

export default Home;
