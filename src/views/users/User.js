import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import currency from "currency.js";
import moment from "moment";
import { getUserById } from "../../api/users";

const Printing = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  const {
    firstName,
    lastName,
    phone,
    email,
    role,
    createdAt,
    credit,
    picture,
  } = user;

  useEffect(() => {
    if (id) {
      getUserById(id).then(setUser);
    }
  }, [id]);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const getBadge = (type) => {
    switch (type) {
      case "ADMIN":
        return "danger";
      case "USER":
        return "success";
      case "ploteo":
        return "warning";
      default:
        return "primary";
    }
  };

  return (
    <>
      {user.id && (
        <CRow>
          <CCol xs={12} md={8}>
            <CCard>
              <CCardHeader>
                <CRow>
                  <CCol>
                    {firstName} {lastName}
                  </CCol>
                  <CCol>
                    <CBadge color={getBadge(role)}>{role}</CBadge>
                  </CCol>
                </CRow>
              </CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol>
                    <img
                      className="rounded"
                      style={{
                        width: "100%",
                      }}
                      src={
                        picture ||
                        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                      }
                      alt="profile"
                    />
                  </CCol>
                  <CCol>
                    <p>
                      <span className="font-weight-bold">id:</span> {user.id}
                    </p>
                    <p>
                      <span className="font-weight-bold">Nombre:</span>{" "}
                      {firstName}
                    </p>
                    <p>
                      <span className="font-weight-bold">Apellido:</span>{" "}
                      {lastName}
                    </p>
                    <p>
                      <span className="font-weight-bold">Email:</span> {email}
                    </p>
                    <p>
                      <span className="font-weight-bold">Celular:</span> {phone}
                    </p>
                    <p>
                      <span className="font-weight-bold">Fecha Registro:</span>{" "}
                      {moment(createdAt).format("DD/MM/YYYY h:m a")}
                    </p>
                    <p>
                      <span className="font-weight-bold">Saldo:</span>{" "}
                      {currency(credit).format()}
                    </p>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      )}
    </>
  );
};

export default Printing;
