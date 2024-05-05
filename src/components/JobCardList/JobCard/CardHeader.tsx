import "./CardHeader.css";
const CardHeader = () => {
  return (
    <div className="card-header">
      <div className="company-logo">
        <img
          src="https://storage.googleapis.com/weekday-assets/airtableAttachment_1713598322273_sjxlt.jpg"
          alt="logo"
          className="logo"
        />
      </div>
      <div className="company-info">
        <div className="name">FlexWash Technologies</div>
        <div className="role">Senior Engineer</div>
        <div className="location">India</div>
      </div>
    </div>
  );
};

export default CardHeader;
