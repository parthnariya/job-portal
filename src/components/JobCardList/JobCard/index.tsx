import AboutCompany from "./AboutCompany";
import CardHeader from "./CardHeader";
import EasyApplyButton from "./EasyApplyButton";
import "./JobCard.css";
import ReferralButton from "./ReferralButton";
const JobCard = () => {
  return (
    <div className="card">
      <CardHeader />
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
