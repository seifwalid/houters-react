import { FC, SyntheticEvent, useEffect, useRef, useState } from "react";
import PropertyFormTemplate from "./PropertyForm.template";
import { createProperty, updateProperty } from "../../api/properties";
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { randomInt } from "../../utils/random";
import { deletePropertyImage } from "../../utils/firebase/storage";

const PropertyForm: FC = ({
  initialProperty,
  closeDialog,
  refreshPropertyList,
  setLoading,
  loading,
}) => {
  const [property, setProperty] = useState({
    name: "",
    type: "",
    category: "",
    price: 0,
    location: "",
    ownerName: "",
    propertyImage: {
      url: "",
      fullpath: "",
    },
  });
  const propertyImageRef = useRef(null);
  const [propertyImageData, setPropertyImageData] = useState("");
  const [propertyImageValue, setPropertyImageValue] = useState("");
  const [previewDialog, setPreviewDialog] = useState(false);
  const [willClearImage, setWillClearImage] = useState(false);

  const clearPropertyImageInput = () => {
    setPropertyImageData("");
    setPropertyImageValue("");
    const newProperty = { ...property };
    newProperty.propertyImage = {
      url: "",
      fullpath: "",
    };
    setProperty({ ...newProperty });
    console.log(newProperty);
    if (property.propertyImage.fullpath) {
      setWillClearImage(true);
    }
  };

  const propertyImageOnChange = async (e: SyntheticEvent<InputEvent>) => {
    const inputElement: HTMLInputElement = e.target;
    const file = inputElement.files[0];
    setPropertyImageData(URL.createObjectURL(file));
    setPropertyImageValue(inputElement.value);
  };

  useEffect(() => {
    if (initialProperty !== undefined) {
      setProperty(initialProperty);
    }
  }, [initialProperty]);

  const defaultThen = (response) => {
    setLoading(false);
    if (response.status < 400) {
      refreshPropertyList();
      closeDialog();
    }
  };

  const defaultCatch = (err) => {
    console.error(err);
    setLoading(false);
  };

  const createPropertyImageRef = (file) => {
    const [name, ...suffixArr] = file.name.split(".");
    const suffix = "." + suffixArr.join(".");

    return ref(
      storage,
      `propertyImages/${name}_${randomInt(0, 999999)}${suffix}`
    );
  };

  const uploadPropertyImage = () => {
    const file = propertyImageRef.current.files[0];
    const imageRef = createPropertyImageRef(file);

    return uploadBytes(imageRef, file).then((r) => {
      return imageRef;
    });
  };

  const uploadPropertyImageWithRequest = (requestBody, requestFn: Function) => {
    return uploadPropertyImage().then((imageRef) => {
      getDownloadURL(imageRef).then((url) => {
        requestBody.propertyImage = {
          fullPath: imageRef.fullPath,
          url,
        };
        requestFn();
      });
    });
  };

  const createPropertyWithImage = (requestBody) => {
    return uploadPropertyImageWithRequest(requestBody, () =>
      createProperty(requestBody).then(defaultThen)
    );
  };

  const updatePropertyWithImage = (id, requestBody) => {
    console.log("initial prop: ", initialProperty);
    if (initialProperty.propertyImage.length !== null) {
      deletePropertyImage(initialProperty.propertyImage.fullPath)
        .then(() => console.log("deleted property image"))
        .catch(() => {
          console.log("deleting failed");
        });
    }

    return uploadPropertyImageWithRequest(requestBody, () =>
      updateProperty(id, requestBody).then(defaultThen)
    );
  };

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("initial property: ", initialProperty);
    setLoading(true);
    if (initialProperty === undefined) {
      const requestBody = { ...property };
      if (propertyImageRef.current.files.length > 0) {
        createPropertyWithImage(requestBody).catch(defaultCatch);
      } else {
        createProperty(requestBody).then(defaultThen);
      }
    } else {
      const { id, ...requestBody } = property;
      if (willClearImage) {
        deletePropertyImage(property.propertyImage.fullpath).then(() => {
          console.log("successfully deleted image");
        });
      }
      if (propertyImageRef.current.files.length > 0) {
        updatePropertyWithImage(id, requestBody).catch(defaultCatch);
      } else {
        updateProperty(id, requestBody).then(defaultThen);
      }
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

  const togglePreviewDialog = () => {
    setPreviewDialog((p) => !p);
  };

  return (
    <PropertyFormTemplate
      onChange={onChange}
      property={property}
      onSubmit={onSubmit}
      dropdownOnchange={dropdownOnChange}
      propertyImageRef={propertyImageRef}
      propertyImageData={propertyImageData}
      propertyImageOnChange={propertyImageOnChange}
      disabled={loading}
      previewDialog={previewDialog}
      togglePreviewDialog={togglePreviewDialog}
      willClearPropertyImage={willClearImage}
      clearPropertyImageInput={clearPropertyImageInput}
      propertyImageValue={propertyImageValue}
    />
  );
};

export default PropertyForm;
