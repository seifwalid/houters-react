import PropertyCard from "../PropertyCard/PropertyCard.component";
import "./PropertySection.style.css";

function PropertySectionTemplate({ propertyList, filter, setFilter }) {
  return (
    <section className="property-section">
      <p className="text-start subheading">-- Our Recommendations</p>
      <div className="row-carousel " id="properties">
        <img className="bg-blur right" src="/assets/bg/right_blur.png" alt="" />
        <div className="container-fluid">
          <div className="row justify-content-md-between justify-content-center align-items-center mb-2">
            <h1 className="offset-lg-1 col-md-4 text-center text-lg-start">
              Featured Houses
            </h1>
            <ul className="col-md w-fit filter-btn-list row justify-content-center mb-1 px-1 me-md-1">
              <li
                className="col-sm flex-grow-0"
                onClick={() => setFilter("house")}
              >
                <img src="/assets/svgs/house.svg" alt="" />
                house
              </li>

              <li
                className="col-sm flex-grow-0"
                onClick={() => setFilter("villa")}
              >
                <img src="/assets/svgs/villa.svg" alt="" />
                Villa
              </li>

              <li
                className="col-sm flex-grow-0"
                onClick={() => setFilter("apartment")}
              >
                <img src="/assets/svgs/appartment.svg" alt="" />
                Apartment
              </li>
            </ul>

            <div
              className="col-md-2 row-nav d-flex
                    justify-content-center justify-content-lg-end align-items-center"
            >
              <button className={"arrow-btn"} disabled>
                <img src="/assets/svgs/left-arrow.svg" alt="prev" />
              </button>
              <button className={"arrow-btn"}>
                <img src="/assets/svgs/right-arrow.svg" alt="next" />
              </button>
            </div>
          </div>
        </div>

        <div className="property-carousel-container">
          <div
            id={"property-carousel"}
            className="d-flex w-fit align-content-center justify-content-center gy-4 gap-4"
          >
            {propertyList
              .filter((property) => filter === "" || filter === property.type)
              .map((property) => {
                console.log(property);
                return <PropertyCard {...property} />;
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertySectionTemplate;
