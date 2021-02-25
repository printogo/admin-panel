import { CBadge, CButton, CDataTable } from "@coreui/react";
import {
  faCheck,
  faDollarSign,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputIcon from "src/reusable/InputIcon";
import React from "react";

const StationeryCosts = ({costs, setCosts}) => {

  const getItemIndex = (item) =>
    costs.findIndex(
      (cost) =>
        cost.printingType === item.printingType &&
        cost.paperType === item.paperType &&
        cost.paperSize === item.paperSize &&
        cost.color === item.color
    );

  const fields = [
    { key: "tipoDeImpresion" },
    { key: "tipoDePapel" },
    { key: "tamano" },
    { key: "color" },
    { key: "costo" },
    { key: "activo" },
  ];

  return (
    <CDataTable
      items={costs}
      fields={fields}
      scopedSlots={{
        tipoDeImpresion: (item) => (
          <td className="text-capitalize">{item.printingType}</td>
        ),
        tipoDePapel: (item) => (
          <td className="text-capitalize">{item.paperType}</td>
        ),
        tamano: (item) => <td className="text-capitalize">{item.paperSize}</td>,
        color: (item) => (
          <td className="text-capitalize">
            <CBadge color={item.color === "blancoYNegro" ? "dark" : "primary"}>
              {item.color}
            </CBadge>
          </td>
        ),
        costo: (item) => (
          <td>
            <InputIcon
              onChange={(e) => {
                // Search for cost to change
                const itemIndex = getItemIndex(item);
                const newCosts = [...costs];
                newCosts[itemIndex].price = e.target.value;
                setCosts(newCosts);
              }}
              icon={faDollarSign}
              value={item.price}
            />
          </td>
        ),
        activo: (item) => (
          <td className="">
            {item.active ? (
              <CButton
                color="success"
                onClick={() => {
                  // Search for cost to change
                  const itemIndex = getItemIndex(item);
                  const newCosts = [...costs];
                  newCosts[itemIndex].active = false;
                  setCosts(newCosts);
                }}
              >
                <FontAwesomeIcon icon={faCheck} />
              </CButton>
            ) : (
              <CButton
                color="danger"
                onClick={() => {
                  // Search for cost to change
                  const itemIndex = getItemIndex(item);
                  const newCosts = [...costs];
                  newCosts[itemIndex].active = true;
                  setCosts(newCosts);
                }}
              >
                <FontAwesomeIcon icon={faTimes} />
              </CButton>
            )}
          </td>
        ),
      }}
    />
  );
};

export default StationeryCosts;
