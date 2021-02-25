import GooglePlacesAutocomplete, {
  geocodeByAddress,
} from "react-google-places-autocomplete";

import React from "react";

export const GoogleMapAutocomplete = ({ address, setAddress }) => {

  const onSelect = async (selection) => {
    try {
      const res = await geocodeByAddress(selection["value"]["description"]);
      const address = {
        description: selection["value"]["description"],
        country: "",
        state: "",
        streetAddress: "",
        streetNumber: "",
        zipcode: "",
        lat: 0,
        lng: 0,
      };
      res[0]["address_components"].forEach((item) => {
        if (item.types.includes("street_number")) {
          address.streetNumber = item["short_name"];
        } else if (item.types.includes("route")) {
          address.streetAddress = item["short_name"];
        } else if (item.types.includes("administrative_area_level_1")) {
          address.state = item["short_name"];
        } else if (item.types.includes("postal_code")) {
          address.zipcode = item["short_name"];
        } else if (item.types.includes("country")) {
          address.country = item["short_name"];
        }
      });
      address.lat = res[0].geometry.location.lat();
      address.lng = res[0].geometry.location.lng();
      setAddress({
        ...address,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <div className="flex items-center">
        <GooglePlacesAutocomplete
          inputClassName="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          selectProps={{
            placeholder: "Dirección",
            onChange: onSelect,
          }}
          autocompletionRequest={{
            componentRestrictions: {
              country: "mx",
            },
          }}
        />{" "}
      </div>{" "}
      <div className="mb-4 flex justify-center items-center mt-2">
        <label className="text-gray-700 text-sm font-bold mr-5">
          Número exterior{" "}
        </label>{" "}
        <input
          className="w-1/2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="ejemplo: 42"
          onChange={({ target: { value: streetNumber } }) =>
            setAddress({
              ...address,
              streetNumber,
            })
          }
          value={address.streetNumber || ""}
        />{" "}
      </div>{" "}
      <div className="mb-4 flex justify-center items-center mt-2">
        <label className="text-gray-700 text-sm font-bold mr-5">
          Número interior{" "}
        </label>{" "}
        <input
          className="w-1/2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="ejemplo: Depto. 3B"
          onChange={({ target: { value: interior } }) =>
            setAddress({
              ...address,
              interior,
            })
          }
          value={address.interior || ""}
        />{" "}
      </div>{" "}
    </div>
  );
};
