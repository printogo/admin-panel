import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import currency from "currency.js";
import { getPrintings } from "src/api/printings";
import getRanges from "src/helpers/get-ranges";

const Printings = () => {
  const [printings, setPrintings] = useState([]);
  const { orderId } = useParams();

  useEffect(() => {
    if (orderId) {
      getPrintings(orderId).then(setPrintings);
    }
  }, [orderId]);

  const getBadge = (type) => {
    switch (type) {
      case "documento":
        return "success";
      case "planos":
        return "secondary";
      case "ploteo":
        return "warning";
      default:
        return "primary";
    }
  };

  return (
    <CRow>
      {printings.map(
        ({
          id,
          type,
          fileName,
          paperType,
          paperSize,
          blackPages,
          numBlackPages,
          colorPages,
          numColorPages,
          fileUrl,
          customWidth,
          customHeight,
          customScale,
          copies,
          folder,
          crimp,
          doubleSided,
          price,
          additionalInfo,
        }) => (
          <CCol xs={12} md={6} lg={4} key={id}>
            <CCard>
              <CCardHeader>
                <CRow>
                  <CCol>{fileName}</CCol>
                  <CCol>
                    <CBadge color={getBadge(type)}>{type}</CBadge>
                  </CCol>
                </CRow>
              </CCardHeader>
              <CCardBody>
                <p>
                  <span className="font-weight-bold">id:</span> {id}
                </p>
                <p>
                  <span className="font-weight-bold">Nombre Archivo:</span>{" "}
                  {fileName}
                </p>
                <p>
                  <span className="font-weight-bold">Tipo de papel:</span>{" "}
                  {paperType}
                </p>
                <p>
                  <span className="font-weight-bold">Tamaño:</span> {paperSize}
                </p>
                {paperSize === "Personalizado" && (
                  <>
                    <p>
                      <span className="font-weight-bold">Ancho:</span>{" "}
                      {customWidth}
                    </p>
                    <p>
                      <span className="font-weight-bold">Largo:</span>{" "}
                      {customHeight}
                    </p>
                    <p>
                      <span className="font-weight-bold">Escala:</span>{" "}
                      {customScale}
                    </p>
                  </>
                )}
                <p>
                  <span className="font-weight-bold"># hojas b/n:</span>{" "}
                  {numBlackPages}
                </p>
                <p>
                  <span className="font-weight-bold"># hojas a color:</span>{" "}
                  {numColorPages}
                </p>
                {blackPages.length > 0 && (
                  <p>
                    <span className="font-weight-bold">Hojas b/n:</span>{" "}
                    {getRanges(blackPages).map((r) => r + " ")}
                  </p>
                )}
                {colorPages.length > 0 && (
                  <p>
                    <span className="font-weight-bold">Hojas color:</span>
                    {getRanges(colorPages).map((r) => r + " ")}
                  </p>
                )}
                <p>
                  <span className="font-weight-bold">Copias:</span> {copies}
                </p>
                <p>
                  <span className="font-weight-bold">Doble Cara:</span>{" "}
                  <CBadge color={doubleSided ? "success" : "danger"}>
                    {doubleSided ? "Sí" : "No"}
                  </CBadge>
                </p>
                <p>
                  <span className="font-weight-bold">Engargolar:</span>{" "}
                  <CBadge color={crimp ? "success" : "danger"}>
                    {crimp ? "Sí" : "No"}
                  </CBadge>
                </p>
                <p>
                  <span className="font-weight-bold">Folder:</span>{" "}
                  <CBadge color={folder ? "success" : "danger"}>
                    {folder ? "Sí" : "No"}
                  </CBadge>
                </p>
                <p>
                  <span className="font-weight-bold">
                    Información Adicional:
                  </span>{" "}
                  {additionalInfo}
                </p>
                <p>
                  <span className="font-weight-bold">Precio:</span>{" "}
                  <CBadge color="success">{currency(price).format()}</CBadge>
                </p>
                <a href={fileUrl} target="blank" download>
                  <CButton block color="primary">
                    Descargar archivo
                  </CButton>
                </a>
              </CCardBody>
            </CCard>
          </CCol>
        )
      )}
    </CRow>
  );
};

export default Printings;
