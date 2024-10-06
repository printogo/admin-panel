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
import { useParams, useLocation } from "react-router-dom";
import currency from "currency.js";
import {
  getBlueprint,
  getDocument,
  getPlot,
  getPrinting,
} from "src/api/printings";
import getRanges from "src/helpers/get-ranges";

const Printing = () => {
  const [printing, setPrinting] = useState({});
  const { id } = useParams();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const docType = searchParams.get("type");

  const {
    type,
    fileName,
    paperSize,
    blackPages,
    colorPages,
    fileUrl,
    customWidth,
    customHeight,
    copies,
    crimpOption,
    doubleSided,
    additionalInfo,
    numFolders,
    laminateOption,
    paperDimension,
    customScale,
    totalWidth,
    totalHeight,
    numberOfPages,
  } = printing;

  useEffect(() => {
    if (id) {
      if (docType === "DOCUMENTO") {
        getDocument(id, docType).then(setPrinting);
      } else if (docType === "PLANO") {
        getBlueprint(id).then(setPrinting);
      } else if (docType === "POSTER") {
        getPlot(id).then(setPrinting);
      }
    }
  }, [id, docType]);

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
    <>
      {printing.id && (
        <CRow>
          <CCol xs={12} md={6} lg={4}>
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
                  <span className="font-weight-bold">id:</span> {printing.id}
                </p>
                <p>
                  <span className="font-weight-bold">Nombre Archivo:</span>{" "}
                  {fileName}
                </p>
                <p>
                  <span className="font-weight-bold">Tipo de papel:</span>{" "}
                  {paperSize && paperSize[0].paperType}
                  {paperDimension && paperDimension.paperType}
                </p>
                <p>
                  <span className="font-weight-bold">Tamaño:</span>{" "}
                  {paperSize && paperSize[0].paperSheetType}
                  {totalWidth && `Alto: ${totalHeight} Largo: ${totalWidth}`}
                </p>

                {numberOfPages && (
                  <p>
                    <span className="font-weight-bold"># hojas:</span>{" "}
                    {numberOfPages}
                  </p>
                )}

                {blackPages && (
                  <p>
                    <span className="font-weight-bold"># hojas b/n:</span>{" "}
                    {blackPages?.length}
                  </p>
                )}
                {colorPages && (
                  <p>
                    <span className="font-weight-bold"># hojas a color:</span>{" "}
                    {colorPages?.length}
                  </p>
                )}
                {blackPages && blackPages.length > 0 && (
                  <p>
                    <span className="font-weight-bold">Hojas b/n:</span>{" "}
                    {getRanges(blackPages).map((r) => r + " ")}
                  </p>
                )}
                {colorPages && colorPages.length > 0 && (
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
                {crimpOption && (
                  <p>
                    <span className="font-weight-bold">Engargolar:</span>{" "}
                    {crimpOption.crimpType}
                  </p>
                )}
                {laminateOption && (
                  <p>
                    <span className="font-weight-bold">Enmicado:</span>{" "}
                    {laminateOption.laminateType ? "Sí" : "No"}
                  </p>
                )}
                {customScale && (
                  <p>
                    <span className="font-weight-bold">Escala:</span>{" "}
                    {customScale}
                  </p>
                )}

                <p>
                  <span className="font-weight-bold">Folder:</span> {numFolders}
                </p>
                <p>
                  <span className="font-weight-bold">
                    Información Adicional:
                  </span>{" "}
                  {additionalInfo}
                </p>
                <a href={fileUrl} target="blank" download>
                  <CButton block color="primary">
                    Descargar archivo
                  </CButton>
                </a>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      )}
    </>
  );
};

export default Printing;
