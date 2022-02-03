import {
  CBadge,
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
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import currency from "currency.js";
import moment from "moment";
import { getUserById } from "../../api/users";
import { changeStationeryOrder, getOrdersUser } from "src/api/orders";
import { getAllStationerys } from "src/api/stationerys";
import { toast } from "react-toastify";
import SelectStatus from "../orders/SelectStatus";
import SelectModal from "../orders/SelectModal";

const Printing = () => {
  const [user, setUser] = useState({});
  const [orders, setOrders] = useState([]);
  const { id } = useParams();


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
    if (!id) {
      return;
    }
    getOrdersUser(
      id,
      'ALL',
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
  }, [id, options, search]);

  useEffect(() => {
    getAllStationerys().then(setStationerys);
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

  const {
    firstName,
    lastName,
    phone,
    email,
    role,
    createdAt,
    credit,
    picture,
  } = user;

  useEffect(() => {
    if (id) {
      getUserById(id).then(setUser);
    }
  }, [id]);

  const getBadge = (type) => {
    switch (type) {
      case "ADMIN":
        return "danger";
      case "USER":
        return "success";
      case "ploteo":
        return "warning";
      default:
        return "primary";
    }
  };

  return (
    <>
      {user.id && (
        <CRow>
          <CCol xs={12} md={8}>
            <CCard>
              <CCardHeader>
                <CRow>
                  <CCol>
                    {firstName} {lastName}
                  </CCol>
                  <CCol>
                    <CBadge color={getBadge(role)}>{role}</CBadge>
                  </CCol>
                </CRow>
              </CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol>
                    <img
                      className="rounded"
                      style={{
                        width: "100%",
                      }}
                      src={
                        picture ||
                        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                      }
                      alt="profile"
                    />
                  </CCol>
                  <CCol>
                    <p>
                      <span className="font-weight-bold">id:</span> {user.id}
                    </p>
                    <p>
                      <span className="font-weight-bold">Nombre:</span>{" "}
                      {firstName}
                    </p>
                    <p>
                      <span className="font-weight-bold">Apellido:</span>{" "}
                      {lastName}
                    </p>
                    <p>
                      <span className="font-weight-bold">Email:</span> {email}
                    </p>
                    <p>
                      <span className="font-weight-bold">Celular:</span> {phone}
                    </p>
                    <p>
                      <span className="font-weight-bold">Fecha Registro:</span>{" "}
                      {moment(createdAt).format("DD/MM/YYYY h:m a")}
                    </p>
                    <p>
                      <span className="font-weight-bold">Saldo:</span>{" "}
                      {currency(credit).format()}
                    </p>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      )}

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

export default Printing;
