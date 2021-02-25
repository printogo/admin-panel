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
      />
    </CInputGroup>
  );
};

export default InputIcon;
