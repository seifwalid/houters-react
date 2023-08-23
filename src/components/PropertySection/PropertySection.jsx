import { useEffect, useState } from "react";
import PropertySectionTemplate from "./PropertySection.template";

const mockPropertyList = Array(10);

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
  const [navDisabled, setNavDisabled] = useState({ left: true, right: false });

  useEffect(() => {
    const carousel = document.querySelector(".property-carousel-container");
    updateDisabled({ target: carousel });
  }, [filter]);

  const updateDisabled = (e: { target: HTMLElement }) => {
    const carousel = e.target;
    setNavDisabled({
      left: carousel.scrollLeft === 0,
      right:
        carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth - 1,
    });
  };

  const scrollPropertyCarousel = (n) => {
    const carousel = document.querySelector(".property-carousel-container");
    const cardWidth = carousel.querySelector(".property-card").clientWidth;

    carousel.scrollBy({
      left: n * (carousel.clientWidth - cardWidth / 2),
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <PropertySectionTemplate
      propertyList={propertyList}
      filter={filter}
      setFilter={setFilter}
      scrollPropertyCarousel={scrollPropertyCarousel}
      navDisabled={navDisabled}
      updateDisabled={updateDisabled}
    />
  );
}

export default PropertySection;
