import { useEffect, useState } from "react";
import { useAppDispatch } from "../../store";
import { searchFilter } from "../../store/filterSlice";
import "./SearchFilter.css";
import { useDebounce } from "../../hooks/useDebounce";

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const debouncedSearchTerm = useDebounce(searchTerm, 200);

  const dispatch = useAppDispatch();

  dispatch(searchFilter({ value: "" }));

  useEffect(() => {
    if (debouncedSearchTerm && searchTerm) {
      dispatch(searchFilter({ value: debouncedSearchTerm }));
    }
  }, [debouncedSearchTerm, dispatch, searchTerm]);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter Company Name"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchFilter;
