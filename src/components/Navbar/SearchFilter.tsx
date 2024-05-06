import { useAppDispatch } from "../../store";
import { searchFilter } from "../../store/filterSlice";
import "./SearchFilter.css";

const SearchFilter = () => {

  const dispatch = useAppDispatch()

  dispatch(searchFilter({value : ""}))

  return (
    <div className="search-container">
      <input type="text" placeholder="Enter Company Name" />
    </div>
  );
};

export default SearchFilter;
