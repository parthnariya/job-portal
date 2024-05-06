export enum FilterTypeEnum {
  Experience = "Experience",
  Remote = "Remote",
  Role = "Roles",
  MinimumBasePaySalary = "Minimum Base Pay Salary",
  CompanyName = "Search Company",
}
export type FilterType = {
  type: FilterTypeEnum;
  value: string[];
};
