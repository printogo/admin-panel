import { CButton, CCol, CRow } from "@coreui/react";
import {
  faAt,
  faBuilding,
  faLock,
  faPhone,
  faPiggyBank,
  faPrint,
  faRoad,
  faSortNumericUp,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { GoogleMapAutocomplete } from "../../reusable/GoogleMapsAutocomplete";
import InputIcon from "../../reusable/InputIcon";
import React from "react";
import StationeryCosts from "./StationeryCosts";
import ZipCodes from "./ZipCodes";
import { useEditStationery } from "./hooks/useEditStationery";

const EditStationery = () => {
  const {
    address,
    setAddress,
    user,
    setUser,
    stationery,
    setStationery,
    representative,
    setRepresentative,
    paymentData,
    setPaymentData,
    costs,
    setCosts,
    reachableZipcodes,
    addZipcode,
    removeZipcode,
    editStationeryCosts,
    editStationeryPaymentInfo,
    editStationeryAccessData
  } = useEditStationery();

  return (
    <div>
      <h1>Agregar papelería</h1>
      <CRow>
        <CCol lg={4} md={6} sm={12}>
          <h4>Datos de la papelería</h4>
          <InputIcon
            className="p-2 my-2"
            icon={faPrint}
            type="text"
            placeholder="Nombre de la papelería"
            value={stationery.name}
            onChange={(e) => setStationery("name", e)}
          />
          <GoogleMapAutocomplete address={address} setAddress={setAddress} />
          <textarea
            value={address.description}
            disabled={true}
            className="w-100"
            icon={faRoad}
            type="text"
            placeholder="C.P"
          ></textarea>
          <InputIcon
            icon={faPhone}
            type="tel"
            placeholder="Telefono"
            value={stationery.phone}
            onChange={(e) => setStationery("phone", e)}
          />
          <InputIcon
            icon={faPhone}
            type="tel"
            placeholder="Telefono 2"
            value={stationery.phone2}
            onChange={(e) => setStationery("phone2", e)}
          />
        </CCol>
        <CCol lg={4} md={6} sm={12}>
          <h4>Datos de acceso al panel</h4>
          <InputIcon
            className="p-2 my-2"
            icon={faAt}
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser("email", e)}
          />
          <InputIcon
            icon={faLock}
            type="password"
            placeholder="Nueva Contraseña"
            value={user.password}
            onChange={(e) => setUser("password", e)}
          />
          <InputIcon
            icon={faLock}
            type="password"
            placeholder="Confirmar Nueva Contraseña"
            value={user.confirmPassword}
            onChange={(e) => setUser("confirmPassword", e)}
          />
          <CButton
            onClick={editStationeryAccessData}
            className="w-100 mb-2"
            size="lg"
            color="primary"
          >
            Guardar
          </CButton>
          <ZipCodes
            addZipCode={addZipcode}
            reachableZipcodes={reachableZipcodes}
            removeZipcode={removeZipcode}
          />
        </CCol>
        <CCol lg={4} md={6} sm={12}>
          <h4>Datos de un representante</h4>
          <InputIcon
            className="p-2 my-2"
            icon={faUser}
            type="text"
            placeholder="Nombre"
            value={representative.firstName}
            onChange={(e) => setRepresentative("firstName", e)}
          />
          <InputIcon
            className="p-2 my-2"
            icon={faUser}
            type="text"
            placeholder="Apellido(s)"
            value={representative.lastName}
            onChange={(e) => setRepresentative("lastName", e)}
          />
          <InputIcon
            className="p-2 my-2"
            icon={faAt}
            type="email"
            placeholder="Correo"
            value={representative.email}
            onChange={(e) => setRepresentative("email", e)}
          />
          <InputIcon
            className="p-2 my-2"
            icon={faPhone}
            type="tel"
            placeholder="Telefono"
            value={representative.phone}
            onChange={(e) => setRepresentative("phone", e)}
          />
        </CCol>
      </CRow>
      <CRow>
        <CCol lg={4}>
          <h4>Datos de pago</h4>
          <InputIcon
            className="p-2 my-2"
            icon={faUser}
            type="text"
            placeholder="Nombre Completo o Razón Social"
            value={paymentData.accountName}
            onChange={(e) => setPaymentData("accountName", e)}
          />
          <InputIcon
            className="p-2 my-2"
            icon={faBuilding}
            type="text"
            placeholder="Banco"
            value={paymentData.bank}
            onChange={(e) => setPaymentData("bank", e)}
          />
          <InputIcon
            className="p-2 my-2"
            icon={faPiggyBank}
            type="text"
            placeholder="Número de cuenta"
            value={paymentData.accountNumber}
            onChange={(e) => setPaymentData("accountNumber", e)}
          />
          <InputIcon
            className="p-2 my-2"
            icon={faSortNumericUp}
            type="text"
            placeholder="Clabe Interbancaria (18 digitos)"
            value={paymentData.clabe}
            onChange={(e) => setPaymentData("clabe", e)}
          />
          <CButton
            onClick={editStationeryPaymentInfo}
            className="w-100"
            size="lg"
            color="primary"
          >
            Actualizar Datos Pago
          </CButton>
        </CCol>
        <CCol lg={8} md={10} sm={12}>
          <h4>Costos</h4>
          <div style={{ height: "500px", overflowY: "scroll" }}>
            <StationeryCosts costs={costs} setCosts={setCosts} />
          </div>
          <CButton
            onClick={editStationeryCosts}
            className="w-100"
            size="lg"
            color="primary"
          >
            Actualizar Costos
          </CButton>

        </CCol>
      </CRow>
      
    </div>
  );
};

export default EditStationery;
