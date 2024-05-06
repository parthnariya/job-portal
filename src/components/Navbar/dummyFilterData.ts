import { FilterType, FilterTypeEnum } from "./types";

/* Here I am using dummy data for filter options we can use option which we get from the server side as well by replacing this options */
export const dummyFilterData: FilterType[] = [
  {
    type: FilterTypeEnum.Experience,
    value: ["1", "2", "3", "4", "5+"],
  },
  {
    type: FilterTypeEnum.Remote,
    value: ["Hybrid", "Remote", "In-Office"],
  },
  {
    type: FilterTypeEnum.Role,
    value: ["Backend", "Frontend", "Flutter", "IOS", "Fullstack", "Android"],
  },

  {
    type: FilterTypeEnum.MinimumBasePaySalary,
    value: ["10L", "20L", "30L", "40L", "50L"],
  },
];
