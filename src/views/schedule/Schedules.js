import { CCard, CCardBody, CCol, CRow } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  getAllSchedules,
  updateSchedule,
} from "../../api/schedules";
import SchedulesTable from "./SchedulesTable";

const Schedules = () => {
  const [schedules, setSchedules] = useState([]);
  useEffect(() => {
    getAllSchedules()
      .then((data) => {
        setSchedules(data);
        console.table(data);
      })
      .catch((e) => {
        console.log(e);
        toast("Ha ocurrido un error");
      });
  }, []);

  const onSaveClick = async (id, body) => {
    try {
      await updateSchedule(id, body);
      toast("Horario actualizado con éxito", { type: "success" });
    } catch (error) {
      toast("Ha ocurrido un error al actualizar el horario", { type: "error" });
    }
  };

  return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardBody>
              <SchedulesTable
                schedules={schedules}
                setSchedules={setSchedules}
                onSaveClick={onSaveClick}
                fields={[
                  { key: "dia" },
                  { key: "apertura" },
                  { key: "cierre" },
                  { key: "acciones" },
                ]}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Schedules;
