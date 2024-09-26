import { CCardBody, CCardHeader, CCol, CDataTable, CRow } from '@coreui/react';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDocumentPrice, updateDocumentCrimpPrice } from 'src/api/prices';
import { parseMoney } from 'src/helpers/formatter';
import { toast } from 'react-toastify';
import UpdateCrimpDocumentPriceModal from './UpdateCrimpPriceModal';
import Loader from 'src/reusable/Loader';

const CrimpDocumentPrice = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    const fields = ["tipo impresion", "sku", "descripcion", "precio", "acciones"]
    const [items, setItems] = useState([]);
    const [impType, setImpType] = useState("");
    const [modal, setModal] = useState(false);
    const [value, setValue] = useState("");
    const [currentValue, setCurrentValue] = useState({});

    useEffect(() => {
        getDocumentPrice().then((res) => {
            const ite = res.filter((r) => r.id === id)[0];
            setItems(ite.crimpOption)
            setImpType(`${ite.printingType} ${ite.paperSheetType}`)
        }).finally(() => setIsLoading(false))
    }, [id]);

    const handleUpdate = async () => {
        updateDocumentCrimpPrice(currentValue, value)
            .then((res) => {
                setItems(res)
            })
            .catch(() => {
                toast("Ha ocurrido un error al actualizar el precio", { type: "error" });
            })
            .finally(() => {
                toast("Precio actualizado con éxito", { type: "success" });
            })
    }

    return (
        <>
            <Loader isLoading={isLoading} />
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
                                "tipo impresion": (() => (
                                    <td>
                                        {impType}
                                    </td>
                                )),
                                descripcion: (({ description }) => (
                                    <td>
                                        {description}
                                    </td>
                                )),
                                sku: (({ sku }) => (
                                    <td>
                                        {sku}
                                    </td>
                                )),
                                precio: (({ crimpOptionPrice }) => (
                                    <td>
                                        {parseMoney(parseFloat(crimpOptionPrice))}
                                    </td>
                                )),
                                acciones: ((curr) => (
                                    <td>
                                        <UpdateCrimpDocumentPriceModal
                                            currentValue={curr}
                                            setCurrentValue={setCurrentValue}
                                            modal={modal}
                                            setModal={setModal}
                                            onUpdate={handleUpdate}
                                            value={value}
                                            setValue={setValue}
                                            description={curr.description}
                                            title={`SKU: ${curr.sku}`}
                                        />
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

export default CrimpDocumentPrice
