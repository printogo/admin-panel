import { CDataTable, CButton } from "@coreui/react";
import React from "react";
import CIcon from "@coreui/icons-react";
import dayjs from "dayjs";
import InputIcon from "src/reusable/InputIcon";
import { faClock } from "@fortawesome/free-solid-svg-icons";
require("dayjs/locale/es");
dayjs.locale("es");
const SchedulesTable = ({ schedules, onSaveClick, fields, setSchedules }) => {
  return (
    <CDataTable
      items={schedules}
      fields={fields}
      scopedSlots={{
        dia: (item) => <td className="text-capitalize">{item.day}</td>,
        apertura: (item) => (
          <td className="text-capitalize">
            <InputIcon
              onChange={(e) => {
                const scheduleIndex = schedules.findIndex(
                  (schedule) => schedule.id === item.id
                );
                console.log(scheduleIndex);
                const newSchedules = [...schedules];
                newSchedules[scheduleIndex] = {
                  ...schedules[scheduleIndex],
                  openTime: e.target.value,
                };
                setSchedules(newSchedules);
              }}
              icon={faClock}
              value={item.openTime}
            />
          </td>
        ),
        cierre: (item) => (
          <td className="text-capitalize">
            <InputIcon
              onChange={(e) => {
                const scheduleIndex = schedules.findIndex(
                  (schedule) => schedule.id === item.id
                );
                console.log(scheduleIndex);
                const newSchedules = [...schedules];
                newSchedules[scheduleIndex] = {
                  ...schedules[scheduleIndex],
                  closeTime: e.target.value,
                };
                setSchedules(newSchedules);
              }}
              icon={faClock}
              value={item.closeTime}
            />
          </td>
        ),
        mensaje: (item) => <td className="text-capitalize">{item.message}</td>,
        acciones: (item) => (
          <td>
            <CButton
              className=""
              color="success"
              onClick={() =>
                onSaveClick(item.id, {
                  openTime: item.openTime,
                  closeTime: item.closeTime,
                })
              }
            >
              <CIcon name="cil-save"></CIcon>
            </CButton>
          </td>
        ),
      }}
    />
  );
};

export default SchedulesTable;
