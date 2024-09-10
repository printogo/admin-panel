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
import { changeStationeryOrder, getOrders } from "src/api/orders";
import moment from "moment";
import SelectModal from "./SelectModal";
import { getAllStationerys } from "src/api/stationerys";
import { toast } from "react-toastify";

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

  const [modal, setModal] = useState(false);

  const { status } = useParams();

  const [stationerys, setStationerys] = useState([]);

  const [selectedStationery, setSelectedStationery] = useState("");
  const [selectedOrder, setSelectedOrder] = useState("");

  const onClick = async () => {
    try {
      const newOrder = await changeStationeryOrder(
        selectedOrder,
        selectedStationery
      );
      console.log(newOrder);
      const updatedOrders = orders.map((order) => {
        if (newOrder.id === order.id) {
          return { ...order, stationery: newOrder.stationery };
        }
        return order;
      });
      setOrders(updatedOrders);
      toast("Orden actualizada con éxito", { type: "success" });
    } catch (error) {
      console.log("error", error);
      toast("Ha ocurrido un error al actualizar la orden", { type: "error" });
    }
  };

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
      setOrders(res.orders)
      setPages(res.count);
    });
  }, [options, status, search]);

  useEffect(() => {
    getAllStationerys().then(setStationerys);
  }, [orders]);

  const fields = [
    "#Orden",
    "direccion",
    "papelería",
    "telefono",
    "usuario",
    // "costoDeEnvio",
    // "costoPapeleria",
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
                      <Link to={`/stationery-address/${order.stationery.address?.id}`}>
                        {order.stationery.address.description}
                      </Link>
                    </td>
                  ),
                  papelería: (order) => (
                    <td>
                      <Link to={`/stationery-address/${order.stationery.address.id}`}>
                        {order.stationery.name}
                      </Link>
                    </td>
                  ),
                  numeroDeOrden: (order) => <td>{order.orderNumber}</td>,
                  telefono: (order) => (
                    <td>
                      <a href={`tel:${order.user.phone}`}>{order.user.phone}</a>
                    </td>
                  ),
                  // costoDeEnvio: (order) => (
                  //   <td>{currency(order.shppingCost).format()}</td>
                  // ),
                  // costoPapeleria: (order) => (
                  //   <td>{currency(order.stationeryCost).format()}</td>
                  // ),
                  costoTotal: (order) => (
                    <td>{currency(order.grandSubtotal).format()}</td>
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
                        <ul key={order.id}>
                      {order.cart.documents.length > 0 && (
                        order.cart.documents?.map((doc) => (
                          <li key={doc.id}>
                            {" "}
                            <Link to={`/printing/${doc.id}`}>
                              {doc.fileName}
                            </Link>
                          </li>
                        ))
                      )}
                      {order.cart.posters.length > 0 && (
                        order.cart.posters?.map((doc) => (
                          <li key={doc.id}>
                            {" "}
                            <Link to={`/printing/${doc.id}`}>
                              {doc.fileName}
                            </Link>
                          </li>
                        ))
                      )}
                      {order.cart.blueprints.length > 0 && (
                        order.cart.blueprints?.map((doc) => (
                          <li key={doc.id}>
                            {" "}
                            <Link to={`/printing/${doc.id}`}>
                              {doc.fileName}
                            </Link>
                          </li>
                        ))
                      )}
                        </ul>
                      <Link to={`/printings/${order.id}`}>
                        <CButton className="ml-5" color="success">
                          Ver todos
                        </CButton>
                      </Link>
                    </td>
                  ),
                  status: (order) => (
                    <td>
                      <SelectStatus
                        setOrder={setSelectedOrder}
                        setModal={setModal}
                        order={order}
                      />
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
      <SelectModal
        options={stationerys}
        modal={modal}
        setModal={setModal}
        onClick={onClick}
        title="Cambiar papelería de la orden"
        description="Selecciona una papelería"
        value={selectedStationery}
        setValue={setSelectedStationery}
      />
    </>
  );
};

export default Orders;
