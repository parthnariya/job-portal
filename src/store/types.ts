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
