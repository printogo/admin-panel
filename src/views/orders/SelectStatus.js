import CIcon from "@coreui/icons-react";
import { CButton, CRow, CSelect } from "@coreui/react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { updateStatus } from "../../api/orders";

const SelectStatus = ({ order, setModal, setOrder, status }) => {
  const [value, setValue] = useState(order.status || "");

  const onClick = async () => {
    updateStatus(order.id, value).then(() =>
      toast("Estatus actualizado con éxito!", {
        type: "success",
      })
    );
  };

  return (
    <CRow>
      <CSelect
        className="mb-2"
        value={value}
        style={{ width: "200px" }}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="">Selecciona un status</option>
        <option value="ASSIGNED">Asignado</option>
        <option value="PENDING">Imprimiendo</option>
        <option value="READYTPU">Listo para recoger</option>
        <option value="FINISHED">Finalizado</option>
      </CSelect>
      <CButton className="mr-2" onClick={onClick} color="primary">
        <CIcon name="cil-save"></CIcon>
      </CButton>
      <CButton
        onClick={() => {
          setOrder(order.id);
          setModal(true);
        }}
        className="btn btn-secondary"
      >
        <CIcon name="cil-pencil"></CIcon>
      </CButton>
    </CRow>
  );
};

export default SelectStatus;
