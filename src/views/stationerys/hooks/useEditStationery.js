import StationeryCostsData from "../StationeryCostsData";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getStationery, updateStationery, updateStationeryCosts } from "../../../api/stationerys";

export const useEditStationery = () => {
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
    id: "",
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

  const { id } = useParams();

  // useEffect get stationery by param
  useEffect(() => {
    if (!id) {
      return;
    }
    // Get stationery by id
    getStationery(id).then((stationery) => {
      console.log(stationery);
      _setStationery({
        name: stationery.name,
        phone: stationery.phone,
        phone2: stationery.phone2,
      });
      console.log(stationery.admin);
      setAddress(stationery.address);
      _setRepresentative({
        email: stationery.admin.email,
        firstName: stationery.admin.firstName,
        lastName: stationery.admin.lastName,
        phone: stationery.admin.phone,
      });
      if (stationery.costs) {
        setCosts(stationery.costs);
      }
      if (stationery.reachableZipcodes) {
        setReachableZipcodes(stationery.reachableZipcodes);
      }
      if (stationery.paymentData) {
        _setPaymentData(stationery.paymentData);
      }
      _setUser({
        ...user,
        email: stationery.admin.email,
      });
    });
  }, [id]);

  const addZipcode = (zipcode) => {
    const newZipcodes = [...new Set([...reachableZipcodes, zipcode])];
    newZipcodes.sort();
    setReachableZipcodes(newZipcodes);
  };

  const removeZipcode = (zipcode) => {
    setReachableZipcodes(reachableZipcodes.filter((item) => item !== zipcode));
  };

  const editStationery = () => {
    updateStationery(id, {
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

  const editStationeryCosts = () => {
    console.log(costs);
    updateStationeryCosts(id, costs);
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
    editStationery,
    editStationeryCosts,
  };
};
