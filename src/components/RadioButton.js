import React from "react";

const RadioButton = ({
  id,
  label,
  description,
  name,
  onChange,
  onPress,
  value,
  checked,
  disabled,
  radioStyles,
  type,
  AddressLine1,
  AddressLine2,
  AddressCity,
  AddressState,
  ZipCode,
  CategoryType,
  faIcon,
  PaymentType,
  width,
  buttonIcon
}) => {
  if (!checked) {
    var className = "radio-button-unselected";
  } else {
    className = "radio-button-selected";
  }
  return (
    <div className="single-radio-button">
      <div className={`radio-button ` + className}>
        <label id={id} className="radio-button-row">
          <div className="input-radio">
            <input
              checked={checked}
              className="radio"
              //id={id}
              name={name}
              onChange={e => onChange && onChange(e.target)}
              type="radio"
              value={value}
            />
            {/* <span>
              <span className="checked" />
            </span> */}
          </div>
          <div className="radio-button-content">
            <div className="title">{label}</div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default RadioButton;
