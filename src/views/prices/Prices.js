import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllPrices } from "../../api/prices";
import PricesTable from "./PricesTable";

const Prices = () => {
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    getAllPrices()
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
              <PricesTable costs={prices} setCosts={setPrices} />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Prices;
