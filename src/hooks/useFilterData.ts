import { FilterTypeEnum } from "../components/Navbar/types";
import { JobDetailsType } from "../store/types";
import { FilterTypeArray } from "../utils/filterType";

function filterFunction(
  jobs: JobDetailsType[],
  filter: FilterTypeEnum,
  filterValue: string[]
) {
  let result: JobDetailsType[] = [];
  switch (filter) {
    case FilterTypeEnum.Experience:
      result = jobs.filter(
        (item) => item.minExp && filterValue.includes(item.minExp.toString())
      );
      break;
    case FilterTypeEnum.Role:
      result = jobs.filter(
        (item) => item.jobRole && filterValue.includes(item.jobRole)
      );
      break;
    case FilterTypeEnum.MinimumBasePaySalary:
      result = jobs.filter(
        (item) =>
          item.minJdSalary && filterValue.includes(item.minJdSalary.toString())
      );
      break;
    case FilterTypeEnum.Remote:
      result = jobs.filter(
        (item) => item.location && filterValue.includes(item.location)
      );
      break;
    case FilterTypeEnum.CompanyName:
      result = jobs.filter(
        (item) =>
          item.companyName &&
          item.companyName
            .toLocaleLowerCase()
            .toLocaleLowerCase()
            .includes(filterValue[0])
      );
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
