import { CListGroup, CListGroupItem } from "@coreui/react";
import React, { useState } from "react";
import { faHome, faTimes } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputIcon from "src/reusable/InputIcon";

const ZipCodes = ({
  reachableZipcodes = ["52763", "54236", "55874"],
  addZipCode,
  removeZipcode,
}) => {
  const [value, setValue] = useState("");
  return (
    <div>
      <h4 className="text-center">
        Códigos postales alcanzables por la papelería
      </h4>
      <InputIcon
        icon={faHome}
        type="text"
        placeholder="Ingresa un Código postal alcanzable"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            if (value.length !== 5) {
              alert("El código postal debe contener 5 digitos");
              return;
            }
            if (!/^[0-9]*$/.test(value)) {
              alert("El código postal solo debe contener números");
              return;
            }
            addZipCode(value);
            setValue("");
          }
        }}
      />
      <CListGroup>
        {reachableZipcodes.map((zipcode) => (
          <CListGroupItem className="text-center" key={zipcode}>
            {zipcode}
            <FontAwesomeIcon
              className="ml-3"
              icon={faTimes}
              onClick={() => removeZipcode(zipcode)}
              style={{
                cursor: "pointer",
                color: "red",
              }}
            />
          </CListGroupItem>
        ))}
      </CListGroup>
    </div>
  );
};

export default ZipCodes;
