import Advertising from "../Advertising/Advertising";
import ApplyToday from "../ApplyToday/ApplyToday";
import Header from "../Header/Header";
import Industry from "../Industry/Industry";
import Marketer from "../Marketer/Marketer";
import TrafficSource from "../Mktraffic/TrafficSource";
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
    </div>
  );
};

export default Home;
