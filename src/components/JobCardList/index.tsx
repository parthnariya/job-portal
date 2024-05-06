import { useFilterData } from "../../hooks/useFilterData";
import { useAppSelector } from "../../store";
import JobCard from "./JobCard";
import "./JobCardList.css";
function JobCardList() {
  const { jobs } = useAppSelector((state) => state.jobportalReducer);
  const { filterArray } = useAppSelector((state) => state.filterReducer);
  const filterData = useFilterData(jobs, filterArray);
  return (
    <div className="job-card-list">
      {filterData.length > 0 &&
        filterData.map((item) => <JobCard data={item} key={item.jdLink} />)}
    </div>
  );
}

export default JobCardList;
