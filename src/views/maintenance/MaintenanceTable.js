import { CDataTable, CButton } from "@coreui/react";
import React from "react";
import CIcon from "@coreui/icons-react";
import { toast } from "react-toastify";
import dayjs from "dayjs";
require("dayjs/locale/es");
dayjs.locale("es");
const MaintenanceTable = ({
  maintenances,
  onDeleteClick,
  fields = [
    { key: "inicio" },
    { key: "fin" },
    { key: "mensaje" },
    { key: "acciones" },
  ],
}) => {
  return (
    <CDataTable
      items={maintenances}
      fields={fields}
      scopedSlots={{
        inicio: (item) => (
          <td className="text-capitalize">
            {dayjs(item.startDate).format("DD/MMMM/YYYY HH:MM")}
          </td>
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

export default MaintenanceTable;
