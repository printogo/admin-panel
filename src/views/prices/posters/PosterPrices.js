import { CCardBody, CCardHeader, CCol, CDataTable, CRow } from '@coreui/react';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { getPosterPrice } from 'src/api/prices';

const PosterPrices = () => {
  const fields = ["tipo papel", "medidas", "adicional"]
  const [items, setItems] = useState([]);

  useEffect(() => {
    getPosterPrice().then((res) => {
      setItems(res)
    })
  }, []);
  return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCardHeader className="d-flex justify-content-between">
            Planos
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={items}
              fields={fields}
              itemsPerPage={20}
              pagination
              scopedSlots={{
                "tipo papel": (({ paperType }) => (
                  <td>
                    {paperType}
                  </td>
                )),
                medidas: (({ id, paperDimension }) => (
                  <td>
                    <Link to={`/poster-prices/base/${id}`}>
                      {paperDimension.map((pd) => pd.description).join(", ")}
                    </Link>
                  </td>
                )),
                adicional: (({ id, customSize }) => (
                  <td>
                    <Link to={`/poster-prices/custom/${id}`}>
                      CADA {customSize.step} cm ADICIONAL
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

export default PosterPrices
