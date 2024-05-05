export enum FilterTypeEnum {
  NumberOfEmployee = "NumberOfEmployee",
  Experience = "Experience",
  Remote = "Remote",
  MinimumBasePaySalary = "MinimumBasePaySalary",
  Role = "Role",
}
export type FilterType = {
  type: FilterTypeEnum;
  value: string[];
};
