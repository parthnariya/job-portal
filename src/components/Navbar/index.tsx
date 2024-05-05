import Filter from "./Filter";
import "./Navbar.css";
import { FilterTypeEnum } from "./types";

const Navbar = () => {
  return (
    <header className="header">
      <Filter type={FilterTypeEnum.Role} options={["Frontend", "Backend"]} />
      {/* <Filter type={FilterTypeEnum.NumberOfEmployee} valueSet={[]} />
      <Filter type={FilterTypeEnum.Experience} valueSet={[]} />
      <Filter type={FilterTypeEnum.Remote} valueSet={[]} />
      <Filter type={FilterTypeEnum.MinimumBasePaySalary} valueSet={[]} /> */}
    </header>
  );
};

export default Navbar;
