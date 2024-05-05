import { useState } from "react";
import Chip from "./Chip";
import ChipOptionList from "./ChipOptionList";
import "./Filter.css";
import { FilterTypeEnum } from "../types";

type PropsType = {
  type: FilterTypeEnum;
  options: string[];
};

const Filter = ({ type, options }: PropsType) => {
  /* state which control the condition to show list of option */
  const [showOptionList, setShowOptionList] = useState(false);

  /* state which store the all options list */
  const [listOptions, setListOptions] = useState(options);

  /* state which maintain the array of selected options */
  const [selectedValue, setSelectedValue] = useState<Array<string>>([]);

  /* function to open list */
  const openListHandler = () => {
    setShowOptionList(() => true);
  };

  /* function to close list */
  const closeListHandler = () => {
    setShowOptionList(() => false);
  };

  /* function to handler option selection on list */
  const onSelectHandler = (opt: string) => {
    if (listOptions.length === 0) return;

    /* remove selected option from option list */
    const newOptions = listOptions.filter((item) => item !== opt);
    setListOptions(() => newOptions);

    /* add item to selected value's array */
    setSelectedValue((prev) => [...prev, opt]);

    closeListHandler();
  };

  /* function to handel deletion of selected options */
  const onDeselectValueHandler = (opt: string) => {
    /* remove selected option from  selected value list */
    const newOptions = selectedValue.filter((item) => item !== opt);
    setSelectedValue(() => newOptions);

    /* add item to  option list */
    setListOptions((prev) => [...prev, opt]);
  };

  return (
    <div className="filter-container">
      <div className="dropdown-container">
        {selectedValue.length === 0 && (
          <div className="placeholder">{type}</div>
        )}
        {selectedValue.length > 0 &&
          selectedValue.map((item, index) => (
            <Chip
              key={index}
              label={item}
              onDeselect={onDeselectValueHandler}
            />
          ))}

        <div className="input-container">
          <input type="text" className="input" />
        </div>
      </div>

      <div className="icon-container" onClick={openListHandler}>
        <span className="divider"></span>
        <div className="icon">&#709;</div>
      </div>
      {showOptionList && listOptions.length > 0 && (
        <ChipOptionList
          onSelectHandler={onSelectHandler}
          options={listOptions}
        />
      )}
    </div>
  );
};

export default Filter;
