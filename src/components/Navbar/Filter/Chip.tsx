import "./Chip.css";

type PropsType = {
  label: string;
  onDeselect: (opt: string) => void;
};

const Chip = ({ label, onDeselect }: PropsType) => {
  const onClickHandler = (opt: string) => {
    onDeselect(opt);
  };
  return (
    <div className="chip">
      <div className="label">{label}</div>
      <div className="cross" onClick={() => onClickHandler(label)}>
        &#10005;
      </div>
    </div>
  );
};

export default Chip;
