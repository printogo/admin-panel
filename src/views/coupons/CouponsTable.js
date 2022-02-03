import { CDataTable, CButton } from "@coreui/react";
import React from "react";
import CIcon from "@coreui/icons-react";
import { toast } from "react-toastify";
import dayjs from "dayjs";
require("dayjs/locale/es");
dayjs.locale("es");
const CouponsTable = ({ coupons, onDeleteClick, fields }) => {
  return (
    <CDataTable
      items={coupons}
      fields={fields}
      scopedSlots={{
        codigo: (item) => <td className="text-capitalize">{item.code}</td>,
        descuento: (item) => (
          <td className="text-capitalize">{item.discount}</td>
        ),
        tipo: (item) => (
          <td className="text-capitalize">
            {item.isPercentage ? "Porcentaje" : "Dinero"}
          </td>
        ),
        disponibles: (item) => (
          <td className="text-capitalize">{item.quantity}</td>
        ),
        fin: (item) => (
          <td className="text-capitalize">
            {dayjs(item.endDate).format("DD/MMMM/YYYY HH:MM")}
          </td>
        ),
        mensaje: (item) => <td className="text-capitalize">{item.message}</td>,
        acciones: (item) => (
          <td>
            <CButton
              className=""
              color="danger"
              onClick={() => onDeleteClick(item.id)}
            >
              <CIcon name="cil-trash"></CIcon>
            </CButton>
          </td>
        ),
      }}
    />
  );
};

export default CouponsTable;
