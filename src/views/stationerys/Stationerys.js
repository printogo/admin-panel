import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import { getAllStationerys, updateStationery } from "src/api/stationerys";

import CIcon from "@coreui/icons-react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const Stationerys = () => {
  const history = useHistory();
  const [stationerys, setStationerys] = useState([]);

  useEffect(() => {
    getAllStationerys()
      .then((data) => {
        setStationerys(data);
      })
      .catch((error) => console.error(error.response.data.message));
  }, []);

  const fields = ["id", "nombre", "direccion", "acciones"];

  const handleClick = async (id, status) => {
    try {
      await updateStationery(id, status);
      toast("La papelería se actualizó con éxito", {
        type: "success",
      });
    } catch (error) {
      console.log(error.response);
      toast("Ha ocurrido un error", {
        type: "success",
      });
    }
  };

  return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader className="d-flex justify-content-between">
              Ordenes
              <CButton
                className=""
                color="primary"
                onClick={() => history.push("/stationerys/add")}
              >
                <CIcon name="cil-plus"></CIcon>
                Agregar Nueva
              </CButton>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={stationerys}
                fields={fields}
                itemsPerPage={20}
                pagination
                scopedSlots={{
                  nombre: ({ name }) => <td>{name}</td>,
                  direccion: ({ address: { description, id } }) => (
                    <td>
                      <Link to={`/stationery-address/${id}`}>
                        {description}
                      </Link>
                    </td>
                  ),
                  acciones: ({ id, active }) => (
                    <td>
                      {active ? (
                        <button
                          onClick={() => handleClick(id, false)}
                          className="btn btn-danger"
                        >
                          Desactivar
                        </button>
                      ) : (
                        <button
                          onClick={() => handleClick(id, true)}
                          className="btn btn-success"
                        >
                          Activar
                        </button>
                      )}
                      <button
                        onClick={() => history.push(`/stationerys/edit/${id}`)}
                        className="btn btn-secondary"
                      >
                        <CIcon name="cil-pencil"></CIcon>
                      </button>
                    </td>
                  ),
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Stationerys;
