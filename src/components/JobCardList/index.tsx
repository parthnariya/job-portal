/* import { useEffect } from "react";
import { useAppSelector } from "../../store"; */
import JobCard from "./JobCard";
import "./JobCardList.css";
function JobCardList() {
  /* const { jobs, error, isLoading } = useAppSelector(
    (state) => state.jobportalReducer
  );

  useEffect(() => {
    console.log(jobs);
  }, [jobs]); */
  return (
    <div className="job-card-list">
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
    </div>
  );
}

export default JobCardList;
