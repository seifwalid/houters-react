import "./PropertyForm.css";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";

const PropertyFormTemplate = ({
  onSubmit,
  property,
  onChange,
  dropdownOnchange,
  propertyImageRef,
  disabled,
}) => {
  const propertyTypes = ["house", "villa", "apartment", "other"];
  const propertyCategories = [
    { label: "popular", value: "popular" },
    { label: "new house", value: "newHouse" },
    { label: "best deals", value: "bestDeals" },
    { label: "other", value: "other" },
  ];

  return (
    <form onSubmit={onSubmit}>
      <div className={"mb-1 d-flex justify-content-between "}>
        <label className={"me-3"}>name</label>
        <InputText
          disabled={disabled}
          value={property.name}
          onChange={onChange("name")}
        />
      </div>
      <div className={"mb-1 d-flex justify-content-between "}>
        <label className={"me-3"}>type</label>
        <Dropdown
          disabled={disabled}
          value={property.type}
          onChange={dropdownOnchange("type")}
          options={propertyTypes}
          placeholder={"Select a Type"}
        />
      </div>
      <div className={"mb-1 d-flex justify-content-between "}>
        <label className={"me-3"}>category</label>
        <Dropdown
          disabled={disabled}
          value={property.category}
          onChange={dropdownOnchange("category")}
          options={propertyCategories}
          optionLabel={"label"}
          optionValue={"value"}
          placeholder={"Select a Category"}
        />
      </div>
      <div className={"mb-1 d-flex justify-content-between "}>
        <label className={"me-3"}>ownerName</label>
        <InputText
          disabled={disabled}
          value={property.ownerName}
          onChange={onChange("ownerName")}
        />
      </div>
      <div className={"mb-1 d-flex justify-content-between "}>
        <label className={"me-3"}>ownerImage</label>{" "}
        <InputText disabled value={""} />
      </div>
      <div className={"mb-1 d-flex justify-content-between "}>
        <label className={"me-3"}>propertyImage</label>
        <input
          disabled={disabled}
          type={"file"}
          className={"form-control"}
          accept={"image/png, image/jpeg, .webp"}
          ref={propertyImageRef}
        />
      </div>
      <div className={"mb-1 d-flex justify-content-between "}>
        <label className={"me-3"}>location</label>
        <InputText
          disabled={disabled}
          value={property.location}
          onChange={onChange("location")}
        />
      </div>
      <div className={"mb-1 d-flex justify-content-between "}>
        <label className={"me-3"}>price</label>
        <InputNumber
          disabled={disabled}
          value={property.price}
          onChange={dropdownOnchange("price")}
          minFractionDigits={0}
          maxFractionDigits={2}
        />
      </div>
      <div className="d-flex justify-content-end">
        <button
          disabled={disabled}
          className={"btn btn-primary"}
          type={"submit"}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default PropertyFormTemplate;
