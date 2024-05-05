import "./ChipOptionList.css";

type PropsType = {
  onSelectHandler: (opt: string) => void;
  options: string[];
};

const ChipOptionList = ({ onSelectHandler, options }: PropsType) => {
  const onClickHandler = (opt: string) => {
    onSelectHandler(opt);
  };

  return (
    <ul className="list">
      {options.map((item, index) => (
        <li
          key={index}
          className="list-item"
          onClick={() => onClickHandler(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ChipOptionList;
