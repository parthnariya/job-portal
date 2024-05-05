import "./Filter.css";
const Filter = () => {
  return (
    <div className="filter-container">
      <div className="input-container">
        <div className="placeholder">Enter Employee</div>
        <div className="chip-container">
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
