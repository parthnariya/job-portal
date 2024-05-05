export enum FilterTypeEnum {
  NumberOfEmployee = "Number Of Employee",
  Experience = "Experience",
  Remote = "Remote",
  MinimumBasePaySalary = "Minimum Base Pay Salary",
  Role = "Roles",
}
export type FilterType = {
  type: FilterTypeEnum;
  value: string[];
};
