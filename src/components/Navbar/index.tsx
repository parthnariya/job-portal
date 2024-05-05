import Filter from "./Filter";
import "./Navbar.css";
import { dummyFilterData } from "./dummyFilterData";

const Navbar = () => {
  return (
    <header className="header">
      {dummyFilterData.map((item, index) => (
        <Filter key={index} options={item.value} type={item.type} />
      ))}
    </header>
  );
};

export default Navbar;
