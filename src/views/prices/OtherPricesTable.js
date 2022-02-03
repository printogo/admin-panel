import { CBadge, CDataTable, CButton } from "@coreui/react";
import {
  faCheck,
  faDollarSign,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import InputIcon from "src/reusable/InputIcon";
import React from "react";
import CIcon from "@coreui/icons-react";
import { updatePrice } from "../../api/prices";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OtherPricesTable = ({
  costs,
  setCosts,
  fields = [
    { key: "tipoDeImpresion" },
    { key: "tipoDePapel" },
    { key: "tamano" },
    { key: "color" },
    { key: "precio" },
    { key: "acciones" },
  ],
  onClick = updatePrice,
}) => {
  return (
    <CDataTable
      items={costs}
      fields={fields}
      scopedSlots={{
        nombre: (item) => <td className="text-capitalize">{item.type}</td>,
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
        precio: (item) => (
          <td>
            <InputIcon
              onChange={(e) => {
                // Search for cost to change
                const itemIndex = costs.findIndex((c) => c.id === item.id);
                const newCosts = [...costs];
                newCosts[itemIndex].price = e.target.value;

                setCosts(newCosts);
              }}
              icon={faDollarSign}
              value={item.price}
            />
          </td>
        ),
        acciones: (item) => (
          <td>
            <CButton
              className="mr-2"
              color="success"
              onClick={async () => {
                await onClick(item.id, parseFloat(item.price));
                toast("Precio actualizado con éxito", {
                  type: "success",
                });
              }}
            >
              <CIcon name="cil-save"></CIcon>
            </CButton>
          </td>
        ),
      }}
    />
  );
};

export default OtherPricesTable;
