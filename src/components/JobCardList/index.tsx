import { useAppSelector } from "../../store";
import JobCard from "./JobCard";
import "./JobCardList.css";
function JobCardList() {
  const { jobs } = useAppSelector((state) => state.jobportalReducer);
  return (
    <div className="job-card-list">
      {jobs.length > 0 &&
        jobs.map((item) => <JobCard data={item} key={item.jdLink} />)}
    </div>
  );
}

export default JobCardList;
