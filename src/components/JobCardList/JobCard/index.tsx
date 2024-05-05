import { JobDetailsType } from "../../../store/types";
import AboutCompany from "./AboutCompany";
import CardHeader from "./CardHeader";
import EasyApplyButton from "./EasyApplyButton";
import "./JobCard.css";
import ReferralButton from "./ReferralButton";

type PropsType = {
  data: JobDetailsType;
};

const JobCard = ({ data }: PropsType) => {
  return (
    <div className="card">
      <CardHeader
        imageUrl={data.logoUrl || "https://logo.clearbit.com/intel.com"}
        location={data.location || "Delhi"}
        name={data.companyName || "Company Name"}
        role={data.jobRole || "Role"}
      />
      <div className="salary">Estimated Salary: ₹20 - 25 LPA ✅</div>
      <AboutCompany />
      <div className="experience">
        <div className="experience-label">Minimum Experience</div>
        <div className="experience-value">3 years</div>
      </div>
      <EasyApplyButton />
      <ReferralButton />
    </div>
  );
};

export default JobCard;
