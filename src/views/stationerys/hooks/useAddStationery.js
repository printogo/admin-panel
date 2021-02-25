import StationeryCostsData from "../StationeryCostsData";
import { addStationery as addStationeryApi } from "../../../api/stationerys";
import { useState } from "react";

export const useAddStationery = () => {
  const [user, _setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [address, setAddress] = useState({
    country: "MX",
    description: "Hacienda el Ciervo, Villa Florence, Méx., México",
    lat: 19.431705,
    lng: -99.18651,
    state: "Méx.",
    streetAddress: "Hacienda el Ciervo",
    streetNumber: "",
    zipcode: "52763",
  });

  const [stationery, _setStationery] = useState({
    name: "",
    phone: "",
    phone2: "",
  });

  const [representative, _setRepresentative] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [paymentData, _setPaymentData] = useState({
    accountName: "",
    bank: "",
    accountNumber: "",
    clabe: "",
  });

  const setUser = (key, e) =>
    _setUser({
      ...user,
      [key]: e.target.value,
    });

  const setStationery = (key, e) =>
    _setStationery({
      ...stationery,
      [key]: e.target.value,
    });

  const setRepresentative = (key, e) =>
    _setRepresentative({
      ...representative,
      [key]: e.target.value,
    });

  const setPaymentData = (key, e) =>
    _setPaymentData({
      ...paymentData,
      [key]: e.target.value,
    });

  const [costs, setCosts] = useState(
    StationeryCostsData.map((cost) => ({
      ...cost,
      price: (cost.price / 2).toFixed(2),
    }))
  );

  const [reachableZipcodes, setReachableZipcodes] = useState([]);

  const addZipcode = (zipcode) => {
    const newZipcodes = [...new Set([...reachableZipcodes, zipcode])];
    newZipcodes.sort();
    setReachableZipcodes(newZipcodes);
  };

  const removeZipcode = (zipcode) => {
    setReachableZipcodes(reachableZipcodes.filter((item) => item !== zipcode));
  };

  const addStationery = () => {
    addStationeryApi({
      stationeryAddress: address,
      stationeryCosts: costs,
      reachableZipcodes,
      name: stationery.name,
      phone: stationery.phone,
      phone2: stationery.phone2,
      admin: {
        firstName: representative.firstName,
        lastName: representative.lastName,
        email: user.email,
        password: user.password,
        confirmPassword: user.confirmPassword,
        phone: representative.phone,
      },
      stationeryPaymentData: paymentData,
    });
  };

  return {
    address,
    setAddress,
    user,
    setUser,
    stationery,
    setStationery,
    representative,
    setRepresentative,
    paymentData,
    setPaymentData,
    costs,
    setCosts,
    reachableZipcodes,
    addZipcode,
    removeZipcode,
    addStationery,
  };
};
