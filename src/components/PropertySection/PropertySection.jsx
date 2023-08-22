import { useState } from "react";
import PropertySectionTemplate from "./PropertySection.template";

const mockPropertyList = Array(6);

const mockProperty = {
  name: "House of the People",
  propertyImage: "/assets/images/third_house.png",
  type: "house",
  ownerName: "Smarty Pants",
  ownerImage: "/assets/images/avatar1.png",
  location: "Piltover",
  category: "popular",
  price: 10000.99,
};

for (let i = 0; i < mockPropertyList.length; i++) {
  mockPropertyList[i] = { ...mockProperty };
}
mockPropertyList[3].type = "villa";
mockPropertyList[1].type = "apartment";
mockPropertyList[2].type = "apartment";

function PropertySection() {
  const [propertyList, setPropertyList] = useState(mockPropertyList);
  const [filter, setFilter] = useState("");
  console.log();

  return (
    <PropertySectionTemplate
      propertyList={propertyList}
      filter={filter}
      setFilter={setFilter}
    />
  );
}

export default PropertySection;
