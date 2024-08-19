import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from 'moment';
import { getStationeryAddress } from "../../api/stationeryAddress";

const StationeryAddress = () => {
  const { id } = useParams();

  const [address, setAddress] = useState();

  useEffect(() => {
    if (id) {
      getStationeryAddress(id).then((add) => {
        setAddress(add)
      });
    }
  }, [id]);

  return (
    <>
      {address && (
        <CRow>
          <CCol xs={12} md={6} lg={4}>
            <CCard>
              <CCardHeader>
                <CRow>
                  <CCol>{address.description}</CCol>
                </CRow>
              </CCardHeader>
              <CCardBody>
                <p>
                  <span className="font-weight-bold">id:</span> {id}
                </p>
                <p>
                  <span className="font-weight-bold">Dirección:</span>{" "}
                  {address.description}
                </p>
                <p>
                  <span className="font-weight-bold">Calle:</span>{" "}
                  {address.streetAddress}
                </p>
                <p>
                  <span className="font-weight-bold"># Exterior:</span>{" "}
                  {address.streetNumber}
                </p>
                <p>
                  <span className="font-weight-bold"># Interior:</span>{" "}
                  {address.interior}
                </p>
                <p>
                  <span className="font-weight-bold">Código Postal:</span>{" "}
                  {address.zipcode}
                </p>
                <p>
                  <span className="font-weight-bold">Estado:</span>{" "}
                  {address.state}
                </p>
                <p>
                  <span className="font-weight-bold">País:</span>{" "}
                  {address.country}
                </p>
                <p>
                  <span className="font-weight-bold">Latitud:</span>{" "}
                  {address.lat}
                </p>
                <p>
                  <span className="font-weight-bold">Longitud:</span>{" "}
                  {address.lng}
                </p>
                <p>
                  <span className="font-weight-bold">Agregada:</span>{" "}
                  {moment(address.createdAt).format("DD/MM/YYYY h:mm a")}
                </p>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      )}
    </>
  );
};

export default StationeryAddress;
