import {
    CButton,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CInput
} from "@coreui/react";
import React from "react";

const UpdateBaseDocumentPriceModal = ({
    modal,
    setModal,
    onUpdate,
    currentValue,
    setCurrentValue,
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
            <CButton onClick={() => {
                toggle();
                setCurrentValue(currentValue);
                setValue(currentValue?.paperSizePrice ?? "")
            }} className="mr-1" color="info" >
                Cambiar precio
            </CButton>
            <CModal show={modal} onClose={toggle}>
                <CModalHeader closeButton>{title}</CModalHeader>
                <CModalBody>
                    <h4>{description}</h4>
                    <CInput value={value} onChange={(e) => setValue(e.target.value)} />
                </CModalBody>
                <CModalFooter>
                    <CButton color="primary" onClick={() => {
                        onUpdate();
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

export default UpdateBaseDocumentPriceModal;
