import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CFormGroup,
  CInput,
  CLabel,
  CPagination,
  CRow,
  CSelect,
} from "@coreui/react";
import React, { useEffect, useState } from "react";

import currency from "currency.js";
import { getUsers } from "../../api/users";
import moment from "moment";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Users = () => {
  const [options, setOptions] = useState({
    page: 1,
    quantity: 20,
    sort: "createdAt",
    sortOrder: "DESC",
    search: {
      field: "firstName",
      value: "",
    },
  });

  const [users, setUsers] = useState([]);

  const [pages, setPages] = useState(1);

  const { role } = useParams();

  useEffect(() => {
    getUsers(options, role).then((res) => {
      setUsers(res.users);
      setPages(Math.floor(res.total / options.quantity));
    });
  }, [options, role]);

  useEffect(() => {
    console.log(users);
  }, [users]);

  const getRoleBadge = (role) => {
    switch (role) {
      case "ADMIN":
        return {
          text: "Administrador",
          color: "danger",
        };
      case "USER":
        return {
          text: "Usuario",
          color: "success",
        };
      case "STATIONERY":
        return {
          text: "Papelería",
          color: "warning"
        }
      default:
        return {
          text: "Usuario",
          color: "success",
        };
    }
  };

  const fields = [
    "imagen",
    "id",
    "nombre",
    "apellido",
    "email",
    "telefono",
    "saldo",
    "fechaCreacion",
    "rol",
  ];

  return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>Usuarios</CCardHeader>
            <CCard className="px-5 py-1">
              <CRow className="align-items-center">
                <CCol xs="12" md="6" lg="4" xl="3">
                  <CFormGroup>
                    <CLabel htmlFor="searchFor">Criterio</CLabel>
                    <CSelect
                      value={options.search.field}
                      onChange={(e) =>
                        setOptions({
                          ...options,
                          search: {
                            ...options.search,
                            field: e.target.value,
                          },
                        })
                      }
                      id="searchFor"
                    >
                      <option value="firstName">Nombre</option>
                      <option value="lastName">Apellido</option>
                      <option value="email">Email</option>
                      <option value="phone">Telefono</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="12" md="6" lg="4" xl="3">
                  <CFormGroup>
                    <CLabel htmlFor="value">Valor</CLabel>
                    <CInput
                      value={options.search.value}
                      onChange={(e) =>
                        setOptions({
                          ...options,
                          search: {
                            ...options.search,
                            value: e.target.value,
                          },
                        })
                      }
                      id="value"
                      placeholder="Busqueda"
                      required
                    />
                  </CFormGroup>
                </CCol>
              </CRow>
            </CCard>
            <CCardBody>
              <CDataTable
                items={users}
                fields={fields}
                itemsPerPage={options.quantity}
                pagination
                scopedSlots={{
                  id: ({ id }) => (
                    <td>
                      <Link to={`/user/${id}`}>{id}</Link>
                    </td>
                  ),
                  imagen: ({ picture }) => (
                    <td>
                      {
                        <img
                          style={{
                            width: "40px",
                          }}
                          src={
                            picture ||
                            "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                          }
                          alt="profile"
                        />
                      }
                    </td>
                  ),
                  nombre: ({ firstName }) => <td>{firstName}</td>,
                  apellido: ({ lastName }) => <td>{lastName}</td>,
                  mail: ({ email }) => <td>{email}</td>,
                  telefono: ({ phone }) => <td>{phone}</td>,
                  saldo: ({ credit }) => <td>{currency(credit).format()}</td>,
                  fechaCreacion: ({ createdAt }) => (
                    <td>{moment(createdAt).format("DD/MM/YYYY h:m a")}</td>
                  ),
                  rol: ({ role }) => (
                    <td>
                      <CBadge color={getRoleBadge(role).color}>
                        {getRoleBadge(role).text}
                      </CBadge>
                    </td>
                  ),
                }}
              />
              <CPagination
                activePage={options.page}
                pages={pages}
                onActivePageChange={(i) => {
                  setOptions({ ...options, page: i });
                }}
              ></CPagination>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Users;
