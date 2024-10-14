import {
  CButton,
  CHeader,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CSelect,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import { getAllStationerys } from "src/api/stationerys";
import Typography from "../theme/typography/Typography";

const ChangeOrderStationeryModal = ({ modal, setModal }) => {
  const [stationerys, setStationerys] = useState([]);

  const [selectedStationery, setSelectedStationery] = useState();

  useEffect(() => {
    getAllStationerys()
      .then((data) => {
        console.log(data);
        setStationerys(data);
      })
      .catch((error) => console.error(error.response.data.message));
  }, []);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <CButton onClick={toggle} className="mr-1">
        {/* Launch demo modal */}
      </CButton>
      <CModal show={modal} onClose={toggle}>
        <CModalHeader closeButton>Modificar papelería</CModalHeader>
        <CModalBody>
          <h4>Selecciona la papelería</h4>
          <CSelect
            value={selectedStationery}
            onChange={(e) => setSelectedStationery(e.target.value)}
          >
            {stationerys.map((stationery) => (
              <option value={stationery.id}>{stationery.name}</option>
            ))}
          </CSelect>
        </CModalBody>
        <CModalFooter>
          <CButton color="primary">Actualizar Papelería</CButton>{" "}
          <CButton color="secondary" onClick={toggle}>
            Cancelar
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default ChangeOrderStationeryModal;
