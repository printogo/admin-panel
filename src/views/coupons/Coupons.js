import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CSelect,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import InputIcon from "src/reusable/InputIcon";
import {
  faCalendar,
  faMoneyBill,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import CouponsTable from "./CouponsTable";
import {
  createMoneyCoupon,
  createPercentageCoupon,
  getAllCoupons,
} from "src/api/coupons";
import { deleteCoupon } from "../../api/coupons";

const Coupons = () => {
  const [maintenances, setMaintenances] = useState([]);
  const [coupons, setCoupons] = useState([]);
  const [coupon, setCoupon] = useState({
    code: "",
    percentage: "",
    expDate: new Date(),
    quantity: "",
    type: "percentage",
  });
  useEffect(() => {
    getAllCoupons()
      .then((data) => {
        setCoupons(data);
        console.table(data);
      })
      .catch((e) => {
        console.log(e);
        toast("Ha ocurrido un error");
      });
  }, []);

  const onCreateClick = () => {
    if (coupon.type === "percentage") {
      createPercentageCoupon({
        code: coupon.code.trim().toUpperCase(),
        percentage: parseFloat(coupon.percentage),
        expDate: new Date(coupon.expDate).toISOString(),
        quantity: parseInt(coupon.quantity),
      })
        .then((newCoupon) => {
          toast("Cupón creado con éxito", {
            type: "success",
          });
          setCoupons([newCoupon, ...coupons]);
        })
        .catch(() => {
          toast("Ha ocurrido un error al crear el cupón", {
            type: "error",
          });
        });
    } else {
      createMoneyCoupon({
        code: coupon.code.trim().toUpperCase(),
        money: parseFloat(coupon.percentage),
        expDate: new Date(coupon.expDate).toISOString(),
        quantity: parseInt(coupon.quantity),
      })
        .then((newCoupon) => {
          toast("Cupón creado con éxito", {
            type: "success",
          });
          setCoupons([newCoupon, ...coupons]);
        })
        .catch(() => {
          toast("Ha ocurrido un error al crear el cupón", {
            type: "error",
          });
        });
    }
  };

  const onDeleteClick = (id) => {
    deleteCoupon(id)
      .then(() => {
        toast("Cupón eliminado con éxito", {
          type: "success",
        });
        setCoupons(coupons.filter((coupon) => coupon.id !== id));
      })
      .catch(() => {
        toast("Ha ocurrido un error al eliminar el cupón", {
          type: "error",
        });
      });
  };

  return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader className="d-flex justify-content-between">
              Cupones
            </CCardHeader>
            <CRow>
            <CCol xs="12" lg="4">
              <InputIcon
                icon={faTag}
                type="text"
                placeholder="Código"
                value={coupon.code}
                onChange={(e) =>
                  setCoupon({
                    ...coupon,
                    code: e.target.value,
                  })
                }
              />
            </CCol>
              <CCol xs="12" lg="4">
                <InputIcon
                  icon={faMoneyBill}
                  type="number"
                  placeholder="Descuento"
                  value={coupon.percentage}
                  onChange={(e) =>
                    setCoupon({
                      ...coupon,
                      percentage: e.target.value,
                    })
                  }
                />
              </CCol>
              <CCol xs="12" lg="4">
                <InputIcon
                  icon={faTag}
                  type="number"
                  placeholder="Cantidad de cupones"
                  value={coupon.quantity}
                  onChange={(e) =>
                    setCoupon({
                      ...coupon,
                      quantity: e.target.value,
                    })
                  }
                />
              </CCol>
              <CCol xs="12" lg="4">
                <InputIcon
                  icon={faCalendar}
                  type="datetime-local"
                  placeholder="Fin"
                  value={coupon.expDate}
                  onChange={(e) =>
                    setCoupon({
                      ...coupon,
                      expDate: e.target.value,
                    })
                  }
                />
              </CCol>
              <CCol xs="12" lg="4">
                <CSelect
                  className="mt-3"
                  value={coupon.type}
                  onChange={(e) =>
                    setCoupon({
                      ...coupon,
                      type: e.target.value,
                    })
                  }
                  id="searchFor"
                >
                  <option value="percentage">Porcentaje</option>
                  <option value="money">Dinero</option>
                </CSelect>
              </CCol>
              <CCol xs="12" lg="4">
                <CButton
                  onClick={onCreateClick}
                  className="mt-3 w-50 ml-3"
                  color="success"
                >
                  Crear
                </CButton>
              </CCol>
            </CRow>
            <CCardBody>
              <CouponsTable
                coupons={coupons}
                fields={[
                  { key: "codigo" },
                  { key: "descuento" },
                  { key: "tipo" },
                  { key: "fin" },
                  { key: "disponibles" },
                  { key: "acciones" },
                ]}
                onDeleteClick={onDeleteClick}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Coupons;
