import { FilterTypeEnum } from "../components/Navbar/types";
import { FilterTypeArray } from "../utils/filterType";

export type JobDetailsType = {
  jdUid?: string;
  jdLink?: string;
  jobDetailsFromCompany?: string;
  maxJdSalary?: number;
  minJdSalary?: number;
  salaryCurrencyCode?: string;
  location?: string;
  minExp?: number;
  maxExp?: number;
  jobRole?: string;
  companyName?: string;
  logoUrl?: string;
};

/* type of slice which store all the jobs data */

export type JobSliceStateType = {
  jobs: JobDetailsType[];
  isLoading: boolean;
  error: string | undefined;
};

/* type of slice which store all filters */
export type FilterSliceStateType = {
  filterArray: FilterTypeArray;
};

/* Add filter payload type */
export type AddFilterPayloadType = {
  filter: FilterTypeEnum;
  value: string;
};

/* Remove filter payload type */
export type RemoveFilterPayloadType = {
  filter: FilterTypeEnum;
  value: string;
};
