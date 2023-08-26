import "./PropertyCard.style.css";

const categoryIndicator = {
  bestDeals: (
    <div className="category-indicator best-deals">
      <img src="/assets/images/wallet.png" alt="ant_fire" />
      Best Deals
    </div>
  ),
  popular: (
    <div className="category-indicator popular">
      <img src="/assets/images/ant_fire.png" alt="" />
      Popular
    </div>
  ),
  newHouse: (
    <div className="category-indicator new-house">
      <img src="/assets/images/house-fill.png" alt="" />
      New House
    </div>
  ),
};

function PropertyCard({
  name,
  price,
  propertyImage,
  ownerName,
  category,
  location,
}) {
  return (
    <div className="property-card">
      <div
        className={"property-card-image"}
        style={{
          backgroundImage: `url(${propertyImage.url})`,
        }}
      >
        {categoryIndicator[category] ?? null}
      </div>
      <h3>{name}</h3>
      <h4 className={"price mb-2"}>$ {price.toLocaleString()}</h4>
      <div className="d-flex align-items-center gap-3">
        <img src={"/assets/images/avatar1.png"} alt="" />
        <div className="d-flex flex-column gap-1">
          <h4 className={"owner-name"}>{ownerName}</h4>
          <h5 className={"location"}>{location}</h5>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
