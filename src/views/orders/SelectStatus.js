import CIcon from "@coreui/icons-react";
import { CButton, CCol, CRow, CSelect } from "@coreui/react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { updateStatus } from "../../api/orders";

const SelectStatus = ({ order, setModal, setOrder }) => {
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
      <CCol>
        <CSelect onChange={(e) => setValue(e.target.value)}>
          <option value="">Selecciona un status</option>
          <option value="UNPAID">Pendiente de Pago</option>
          <option value="SEARCHING_STATIONERY">Buscando Papelería</option>
          <option value="PRINTING">Imprimiendo</option>
          <option value="SENDING">Enviando</option>
          <option value="COMPLETED">Completado</option>
          <option value="REVIEWING">En Revisión</option>
        </CSelect>
      </CCol>
      <CCol>
        <CButton onClick={onClick} color="primary">
          <CIcon name="cil-save"></CIcon>
        </CButton>
      </CCol>
      <CCol>
        <CButton onClick={() => {
            setOrder(order.id);
            setModal(true)}
          } className="btn btn-secondary">
          <CIcon name="cil-pencil"></CIcon>
        </CButton>
      </CCol>
    </CRow>
  );
};

export default SelectStatus;
