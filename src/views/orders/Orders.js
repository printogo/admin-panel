import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CFormGroup,
  CInput,
  CPagination,
  CRow,
} from "@coreui/react";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

import SelectStatus from "./SelectStatus";
import currency from "currency.js";
import { getOrders } from "src/api/orders";
import moment from "moment";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const [options, setOptions] = useState({
    page: 1,
    sort: "createdAt",
    sortOrder: "DESC",
    quantity: 20,
  });

  const [pages, setPages] = useState(0);

  const [search, setSearch] = useState({
    field: "orderNumber",
    value: "",
  });

  const { status } = useParams();

  useEffect(() => {
    getOrders(
      status.toUpperCase(),
      options.page,
      options.sort,
      options.sortOrder,
      options.quantity,
      search.field,
      search.value
    ).then((res) => {
      setOrders(
        res.orders.map((order) => {
          order.printings = res.documents.filter((document) => {
            return document.orderId === order.id;
          });
          return order;
        })
      );
      setPages(res.count);
    });
  }, [options, status, search]);

  useEffect(() => {
    console.log(orders);
  }, [orders]);

  const fields = [
    "#Orden",
    "direccion",
    "papelería",
    "telefono",
    "usuario",
    "costoDeEnvio",
    "costoTotal",
    "fechaPedido",
    "impresiones",
    "status",
  ];

  return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>Ordenes</CCardHeader>
            <CCard className="px-5 py-1">
              <CRow className="align-items-center">
                <CCol xs="12" md="6" lg="4" xl="3">
                  <CFormGroup className="d-flex">
                    <CInput
                      type="number"
                      value={search.value}
                      onChange={(e) =>
                        setSearch({ ...search, value: e.target.value })
                      }
                      id="value"
                      placeholder="Numero de orden"
                      required
                    />
                  </CFormGroup>
                </CCol>
              </CRow>
            </CCard>
            <CCardBody>
              <CDataTable
                items={orders}
                fields={fields}
                itemsPerPage={20}
                pagination
                scopedSlots={{
                  "#Orden": (order) => <td>{order.orderNumber}</td>,
                  direccion: (order) => (
                    <td>
                      <Link to={`/address/${order.address.id}`}>
                        {order.address.description}
                      </Link>
                    </td>
                  ),
                  papelería: (order) => (
                    <td>
                      <Link to={`/stationery-address/${order.stationery.id}`}>
                        {order.stationery.name}
                      </Link>
                    </td>
                  ),
                  numeroDeOrden: (order) => <td>{order.orderNumber}</td>,
                  telefono: (order) => (
                    <td>
                      <a href={`tel:${order.phone}`}>{order.phone}</a>
                    </td>
                  ),
                  costoDeEnvio: (order) => (
                    <td>{currency(order.shppingCost).format()}</td>
                  ),
                  costoTotal: (order) => (
                    <td>{currency(order.totalCost).format()}</td>
                  ),
                  fechaPedido: (order) => (
                    <td>
                      {moment(order.createdAt).format("DD/MM/YY, h:mm a")}
                    </td>
                  ),
                  usuario: (order) => (
                    <td>
                      <Link to={`/user/${order.user.id}`}>
                        {order.user.firstName} {order.user.lastName}
                      </Link>
                    </td>
                  ),
                  impresiones: (order) => (
                    <td>
                      {order.printings.map((printing) => (
                        <ul key={order.id}>
                          {printing.printings.map((doc) => (
                            <li key={doc.id}>
                              {" "}
                              <Link to={`/printing/${doc.id}`}>
                                {doc.fileName}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ))}
                      <Link to={`/printings/${order.id}`}>
                        <CButton className="ml-5" color="success">
                          Ver todos
                        </CButton>
                      </Link>
                    </td>
                  ),
                  status: (order) => (
                    <td>
                      <SelectStatus order={order} />
                    </td>
                  ),
                }}
              />
              <CPagination
                activePage={options.page}
                pages={pages}
                onActivePageChange={(i) => {
                  setOptions({ ...options, page: i });
                }}
              ></CPagination>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Orders;
