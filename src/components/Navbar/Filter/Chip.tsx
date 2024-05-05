import "./Chip.css";

type PropsType = {
  label: string;
};

const Chip = ({ label }: PropsType) => {
  return (
    <div className="chip">
      <div className="label">{label}</div>
      <div className="cross">&#10005;</div>
    </div>
  );
};

export default Chip;
