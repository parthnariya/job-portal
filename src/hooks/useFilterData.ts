import { FilterTypeEnum } from "../components/Navbar/types";
import { JobDetailsType } from "../store/types";
import { FilterTypeArray } from "../utils/filterType";

function filterFunction(
  jobs: JobDetailsType[],
  filter: FilterTypeEnum,
  filterValue: string
) {
  let result: JobDetailsType[] = [];
  switch (filter) {
    case FilterTypeEnum.Experience:
      result = jobs.filter((item) => item.minExp === +filterValue);
      break;
    case FilterTypeEnum.Role:
      result = jobs.filter(
        (item) =>
          item.jobRole?.toLocaleLowerCase() === filterValue.toLocaleLowerCase()
      );
      break;
    case FilterTypeEnum.MinimumBasePaySalary:
      result = jobs.filter((item) => item.minJdSalary === +filterValue);
      break;
    case FilterTypeEnum.Remote:
      if (filterValue === "Remote") {
        result = jobs.filter((item) => item.location === "remote");
      } else if (filterValue === "In-Office") {
        result = jobs.filter((item) => item.location !== "remote");
      }
      break;
    default:
      result = jobs;
      break;
  }
  return result;
}

export function useFilterData(
  jobs: JobDetailsType[],
  filterArray: FilterTypeArray
) {
  let filteredData = jobs;
  filterArray.map((filter) => {
    filteredData = filterFunction(filteredData, filter.type, filter.value);
  });
  return filteredData;
}
