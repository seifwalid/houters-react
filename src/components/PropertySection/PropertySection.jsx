import { useEffect, useState } from "react";
import PropertySectionTemplate from "./PropertySection.template";
import { getProperties } from "../../api/properties";

function PropertySection() {
  const [propertyList, setPropertyList] = useState([]);
  const [filter, setFilter] = useState("");
  const [navDisabled, setNavDisabled] = useState({ left: true, right: false });

  const changeFilter = (propertyType) => {
    if (filter === propertyType) {
      setFilter("");
    } else {
      setFilter(propertyType);
    }
  };

  useEffect(() => {
    const carousel = document.querySelector(".property-carousel-container");
    updateDisabled({ target: carousel });
  }, [filter]);

  useEffect(() => {
    getProperties().then((response) => setPropertyList(response.data));
  }, []);

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
      changeFilter={changeFilter}
      scrollPropertyCarousel={scrollPropertyCarousel}
      navDisabled={navDisabled}
      updateDisabled={updateDisabled}
    />
  );
}

export default PropertySection;
