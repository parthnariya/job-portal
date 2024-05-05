import Chip from "./Chip";
import "./Filter.css";
const Filter = () => {
  return (
    <div className="filter-container">
      <div className="dropdown-container">
        {/* <div className="placeholder">Enter Employee</div> */}

        <Chip />
        <Chip />
        <Chip />
        <div className="input-container">
          <input type="text" className="input" />
        </div>
      </div>
      <div className="icon-container">
        <span className="divider"></span>
        <div className="icon">&#709;</div>
      </div>
    </div>
  );
};

export default Filter;
