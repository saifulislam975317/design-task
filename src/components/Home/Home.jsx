import Advertising from "../Advertising/Advertising";
import ApplyToday from "../ApplyToday/ApplyToday";
import Header from "../Header/Header";
import Marketer from "../Marketer/Marketer";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <ApplyToday></ApplyToday>
      <Marketer></Marketer>
      <Advertising></Advertising>
    </div>
  );
};

export default Home;
