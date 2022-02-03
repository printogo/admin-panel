import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getOtherPrices, updateOtherPrices } from "../../api/prices";
import OtherPricesTable from "./OtherPricesTable";
import PricesTable from "./PricesTable";

const OtherPrices = () => {
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    getOtherPrices()
      .then((data) => {
        setPrices(data);
        console.table(data);
      })
      .catch((e) => {
        console.log(e);
        toast("Ha ocurrido un error");
      });
  }, []);

  return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader className="d-flex justify-content-between">
              Precios
            </CCardHeader>
            <CCardBody>
              <OtherPricesTable
                costs={prices}
                setCosts={setPrices}
                fields={[
                  { key: "nombre" },
                  { key: "precio" },
                  { key: "acciones" },
                ]}
                onClick={updateOtherPrices}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default OtherPrices;
