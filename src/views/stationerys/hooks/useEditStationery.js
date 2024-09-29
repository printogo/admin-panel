import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {getStationery, updateStationery, updateStationeryAccessData} from '../../../api/stationerys';

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

  const { id } = useParams();

  // useEffect get stationery by param
  useEffect(() => {
    if (!id) {
      return;
    }
    // Get stationery by id
    getStationery(id).then((stationery) => {
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
      _setUser({
        ...user,
        email: stationery.admin.email,
        id: stationery.admin.id,
      });
    });
    // eslint-disable-next-line
  }, [id]);

  const editStationery = () => {
    updateStationery({
      stationeryId: id,
      stationeryAddress: address,
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
    }).then((res) => {
      alert("Papelería actualizada");
    });
  };

  const editStationeryAccessData = () => {
    updateStationeryAccessData(user.id, user);
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
    editStationery,
    editStationeryAccessData
  };
};
