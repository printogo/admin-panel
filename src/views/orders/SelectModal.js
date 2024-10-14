import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CSelect,
} from "@coreui/react";
import React from "react";

const SelectModal = ({
  modal,
  setModal,
  options,
  onClick,
  value,
  setValue,
  title,
  description,
  saveText = "Guardar",
  cancelText = "Cancelar",
}) => {
  const toggle = () => setModal(!modal);

  return (
    <>
      <CButton onClick={toggle} className="mr-1">
        {/* Launch demo modal */}
      </CButton>
      <CModal show={modal} onClose={toggle}>
        <CModalHeader closeButton>{title}</CModalHeader>
        <CModalBody>
          <h4>{description}</h4>
          <CSelect value={value} onChange={(e) => setValue(e.target.value)}>
            <option value="" disabled>Selecciona una opción</option>
            {options.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </CSelect>
        </CModalBody>
        <CModalFooter>
          <CButton color="primary" onClick={() => {
            onClick();
            toggle();
          }}>
            {saveText}
          </CButton>{" "}
          <CButton color="secondary" onClick={toggle}>
            {cancelText}
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default SelectModal;
