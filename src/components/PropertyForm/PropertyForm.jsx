import { FC, SyntheticEvent, useEffect, useState } from "react";
import PropertyFormTemplate from "./PropertyForm.template";
import { createProperty, updateProperty } from "../../api/properties";

const PropertyForm: FC = ({
  initialProperty,
  closeDialog,
  refreshPropertyList,
}) => {
  const [property, setProperty] = useState({
    name: "",
    type: "",
    category: "",
    price: 0,
    location: "",
    ownerName: "",
    propertyImage: "",
  });

  useEffect(() => {
    if (initialProperty !== undefined) {
      setProperty(initialProperty);
    }
  }, [initialProperty]);

  const defaultThen = (response) => {
    console.log(response);
    if (response.status < 400) {
      refreshPropertyList();
      closeDialog();
    }
  };

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("initial property: ", initialProperty);
    if (initialProperty === undefined) {
      console.log("creating new property", property);
      createProperty(property).then(defaultThen);
    } else {
      const { id, ...requestBody } = property;
      updateProperty(id, requestBody).then(defaultThen);
    }
  };

  const onChange = (field) => {
    return (e) => {
      const newProperty = { ...property };
      newProperty[field] = e.target.value;
      setProperty(newProperty);
    };
  };

  const dropdownOnChange = (field) => {
    return (e) => {
      const newProperty = { ...property };
      newProperty[field] = e.value;
      setProperty(newProperty);
    };
  };

  return (
    <PropertyFormTemplate
      onChange={onChange}
      property={property}
      onSubmit={onSubmit}
      dropdownOnchange={dropdownOnChange}
    />
  );
};

export default PropertyForm;
