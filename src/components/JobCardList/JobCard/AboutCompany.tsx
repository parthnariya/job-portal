import "./AboutCompany.css";

type PropsType = {
  description: string;
};

const AboutCompany = ({ description }: PropsType) => {
  return (
    <div className="about-company">
      <div>About Company</div>
      <div className="description">{description}</div>
      <div className="view-job">View job</div>
    </div>
  );
};

export default AboutCompany;
