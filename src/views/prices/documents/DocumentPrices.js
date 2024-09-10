import { CCardBody, CCardHeader, CCol, CDataTable, CRow } from '@coreui/react';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { getDocumentPrice } from 'src/api/prices';

const DocumentPrices = () => {

    const fields = ["tipo papel", "papel opcional", "enmicado", "opciones encuadernado", "folder"]
    const [items, setItems] = useState([]);
    useEffect(() => {
        getDocumentPrice().then((res) => {
            setItems(res)
            console.log(res)
        })
    }, []);

    return (
        <>
            <CRow>
                <CCol xs="12" lg="12">
                    <CCardHeader className="d-flex justify-content-between">
                        Documentos
                    </CCardHeader>
                    <CCardBody>
                        <CDataTable
                            items={items}
                            fields={fields}
                            itemsPerPage={20}
                            pagination
                            scopedSlots={{
                                "tipo papel": (({ id, paperSheetType }) => (
                                    <td>
                                        <Link to={`/document-prices/base/${id}`}>
                                            {paperSheetType}
                                        </Link>
                                    </td>
                                )),
                                "papel opcional": (({ id, paperOption }) => (
                                    <td>
                                        <Link to={`/document-prices/paper/${id}`}>
                                            {paperOption.map((po) => po.paperType).join(", ")}
                                        </Link>
                                    </td>
                                )),
                                enmicado: (({ id, laminateOption }) => (
                                    <td>
                                        <Link to={`/document-prices/laminate/${id}`}>
                                            {laminateOption.description}
                                        </Link>
                                    </td>
                                )),
                                "opciones encuadernado": (({ id, paperSheetType }) => (
                                    <td>
                                        <Link to={`/document-prices/crimp/${id}`}>
                                            ENCUADERNADO/ENGARGOLADO {paperSheetType}
                                        </Link>
                                    </td>
                                )),
                                "folder": (({ id, folderOption }) => (
                                    <td>
                                        <Link to={`/document-prices/folder/${id}`}>
                                            {folderOption?.description}
                                        </Link>
                                    </td>
                                ))
                            }}
                        />
                    </CCardBody>
                </CCol>
            </CRow>
        </>
    )
}

export default DocumentPrices
