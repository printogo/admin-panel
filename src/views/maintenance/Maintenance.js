import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import MaintenanceTable from "./MaintenanceTable";
import {
  getAllMaintenances,
  createMaintenance,
  deleteMaintenance,
} from "../../api/maintenances";
import InputIcon from "src/reusable/InputIcon";
import { faCalendar, faTextHeight } from "@fortawesome/free-solid-svg-icons";

const Maintenances = () => {
  const [maintenances, setMaintenances] = useState([]);
  const [newMaintenance, setNewMaintenance] = useState({
    startDate: new Date(),
    endDate: new Date(),
    message: "",
  });
  useEffect(() => {
    getAllMaintenances()
      .then((data) => {
        setMaintenances(data);
        console.table(data);
      })
      .catch((e) => {
        console.log(e);
        toast("Ha ocurrido un error");
      });
  }, []);

  const onCreateClick = () => {
    createMaintenance(newMaintenance)
      .then((maintenance) => {
        toast("Mantenimiento programado con éxito", {
          type: "success",
        });
        setMaintenances([maintenance, ...maintenances]);
      })
      .catch(() => {
        toast("Ha ocurrido un error al crear el mantenimiento", {
          type: "error",
        });
      });
  };

  const onDeleteClick = (id) => {
    deleteMaintenance(id)
      .then(() => {
        toast("Mantenimiento programado con éxito", {
          type: "success",
        });
        setMaintenances(
          maintenances.filter((maintenance) => maintenance.id !== id)
        );
      })
      .catch(() => {
        toast("Ha ocurrido un error al eliminar el mantenimiento", {
          type: "error",
        });
      });
  };

  return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader className="d-flex justify-content-between">
              Mantenimientos
              <CButton color="primary">Crear Mantenimiento</CButton>
            </CCardHeader>
            <CRow>
              <CCol xs="12" lg="3">
                <InputIcon
                  icon={faCalendar}
                  type="datetime-local"
                  placeholder="Inicio"
                  value={newMaintenance.startDate}
                  onChange={(e) =>
                    setNewMaintenance({
                      ...newMaintenance,
                      startDate: e.target.value,
                    })
                  }
                />
              </CCol>
              <CCol xs="12" lg="3">
                <InputIcon
                  icon={faCalendar}
                  type="datetime-local"
                  placeholder="Inicio"
                  value={newMaintenance.endDate}
                  onChange={(e) =>
                    setNewMaintenance({
                      ...newMaintenance,
                      endDate: e.target.value,
                    })
                  }
                />
              </CCol>
              <CCol xs="12" lg="3">
                <InputIcon
                  icon={faTextHeight}
                  type="text"
                  placeholder="Mensaje"
                  value={newMaintenance.message}
                  onChange={(e) =>
                    setNewMaintenance({
                      ...newMaintenance,
                      message: e.target.value,
                    })
                  }
                />
              </CCol>
              <CCol xs="12" lg="3">
                <CButton
                  onClick={onCreateClick}
                  className="mt-3"
                  color="success"
                >
                  Crear
                </CButton>
              </CCol>
            </CRow>
            <CCardBody>
              <MaintenanceTable
                maintenances={maintenances}
                fields={[
                  { key: "inicio" },
                  { key: "fin" },
                  { key: "mensaje" },
                  { key: "acciones" },
                ]}
                onDeleteClick={onDeleteClick}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Maintenances;
