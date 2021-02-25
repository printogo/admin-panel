import { CButton, CCol, CRow, CSelect } from "@coreui/react";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { updateStatus } from "../../api/orders";

const SelectStatus = ({ order }) => {
  const [value, setValue] = useState(order.status || '');

  const onClick = async () => {
    updateStatus(order.id, value).then(() =>
      toast("Estatus actualizado con éxito!", {
        type: "success",
      })
    );
  };

  return (
    <CRow>
      <ToastContainer />
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
          Actualizar
        </CButton>
      </CCol>
    </CRow>
  );
};

export default SelectStatus;
