import "./CardHeader.css";

type PropType = {
  imageUrl: string;
  name: string;
  role: string;
  location: string;
};

const CardHeader = ({ imageUrl, location, name, role }: PropType) => {
  return (
    <div className="card-header">
      <div className="company-logo">
        <img src={imageUrl} alt={name} className="logo" />
      </div>
      <div className="company-info">
        <div className="name">{name}</div>
        <div className="role">{role}</div>
        <div className="location">{location}</div>
      </div>
    </div>
  );
};

export default CardHeader;
