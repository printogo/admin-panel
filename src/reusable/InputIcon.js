import {
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
} from "@coreui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const InputIcon = ({
  icon,
  type = "text",
  placeholder = "",
  onChange,
  value,
  className = "p-2 my-2",
  onKeyUp = null,
  disabled= false,
}) => {
  return (
    <CInputGroup className={className}>
      <CInputGroupPrepend>
        <CInputGroupText>
          <FontAwesomeIcon icon={icon} />
        </CInputGroupText>
      </CInputGroupPrepend>
      <CInput
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onKeyUp={onKeyUp}
        disabled={disabled}
      />
    </CInputGroup>
  );
};

export default InputIcon;
