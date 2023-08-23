import "./Section1.styles.css";

const Section1 = () => {
  return (
    <section className="section-1 container-fluid mb-5 mainContainer ">
      <div className="row">
        <div className="intro col-md-11 col-lg-5 offset-md-1 vh-lg-100">
          <div className="content-container d-flex justify-content-start align-items-center w-100 h-100">
            <div className="w-80">
              <h1>
                find the place to live{" "}
                <span className="hollow-text"> your dreams </span> easily here
              </h1>
              <p>
                Everything you need about finding your place to live will be
                here, where it will be easier for you
              </p>
              <div className="rounded-pill border border-1 d-flex justify-content-between align-items-center p-1 mb-4">
                <div className="icon-placeholder-container d-flex align-items-center w-75">
                  <i className="fa-solid fa-location-dot text-warning location-icon fs-4 ps-3 me-3"></i>
                  <input
                    type="text"
                    name="search-box"
                    id="search-box"
                    className=" search-box bg-transparent border-0 w-75"
                    placeholder="Search for the location you want!"
                  />
                </div>
                <button className="btn btn-success rounded-pill">search</button>
              </div>
              <p className="mb-0">Our Partnership</p>
              <div className="d-flex justify-content-between align-content-center">
                <div className="logo-container">
                  <div className="d-flex justify-content-between align-content-center">
                    <img
                      src="/assets/images/traveloka_logo 2.png"
                      alt=""
                      className="w-100 h-100"
                    />
                  </div>
                </div>
                <div className="logo-container">
                  <div className="d-flex justify-content-between align-content-center">
                    <img
                      src="/assets/images/traveloka_logo 3.png"
                      alt=""
                      className="w-100 h-100"
                    />
                  </div>
                </div>
                <div className="logo-container">
                  <div className="d-flex justify-content-between align-content-center">
                    <img
                      src="/assets/images/traveloka_logo 4.png"
                      alt=""
                      className="w-100 h-100"
                    />
                  </div>
                </div>
                <div className="logo-container">
                  <div className="d-flex justify-content-between align-content-center">
                    <img
                      src="/assets/images/traveloka_logo 5.png"
                      alt=""
                      className="w-100 h-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex col-lg-6 image-container justify-content-around align-items-end p-4">
          <div className="row flex-wrap flex-md-nowrap">
            <div className="mb-2 me-2 px-5 px-md-3 col-md-5 d-flex text-end text-md-start justify-content-between justify-content-md-evenly align-items-center offset-lg-1 bg-light item rounded-5 card1">
              <div className="card-image">
                <img
                  src="/assets/images/Group 7.png"
                  className="w-100 h-100"
                  alt=""
                />
              </div>
              <div className="content">
                <h6>1K+ People</h6>
                <span className="fs-7">Successfully Getting Home</span>
              </div>
            </div>

            <div className="mb-2 me-2 px-5 px-md-3 col-md-3 d-flex  bg-light item rounded-5 card2 text-end text-md-start justify-content-between justify-content-md-evenly align-items-center">
              <div className="card-image">
                <img
                  src="/assets/images/Rectangle 12.png"
                  className="w-100 h-100"
                  alt=""
                />
              </div>
              <div className="content">
                <h6>56 Houses</h6>
                <span className="fs-7">Sold Monthly</span>
              </div>
            </div>

            <div className="px-5 px-md-3 col-md-4 d-flex align-items-center text-end text-md-start justify-content-between justify-content-md-evenly bg-light item rounded-5 card3">
              <div className="card-image">
                <img
                  src="/assets/images/Ellipse 6.png"
                  className="w-100 h-100"
                  alt=""
                />
              </div>
              <div className="content">
                <h6>4K+</h6>
                <span className="fs-7">People Looking for New Homes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
