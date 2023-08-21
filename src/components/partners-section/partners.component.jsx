import './partners.styles.css';

const Partners =()=>(

    <div className="intro col-md-11 col-lg-5 offset-md-1 vh-lg-100">
      <div className="content-container d-flex justify-content-start align-items-center w-100 h-100">
        <div className="w-80">
          <h1 className="aa">
            find the place to live
            <span className="hollow-text">your dreams</span>
            easily here
          </h1>
          <p>
            Everything you need about finding your place to live will be
            here, where it will be easier for you
          </p>
          <div className="rounded-pill border border-1 d-flex justify-content-between align-items-center p-1 mb-4">
            <div className="icon-placeholder-container d-flex align-items-center w-75">
              <i className="fa-solid fa-location-dot text-warning location-icon fs-4 ps-3 me-3"></i>
              <input type="text" name="search-box" id="search-box" className="bg-transparent border-0 w-75"
                     placeholder="Search for the location you want!"/>
            </div>
            <button className="btn btn-success rounded-pill">search</button>
          </div>
          <p className="mb-0">Our Partnership</p>
          <div className="d-flex justify-content-between align-content-center">
            <div className="logo-container">
              <div className="d-flex justify-content-between align-content-center">
                <img src="assets/images/traveloka_logo 2.png" alt="" className="w-100"/>
              </div>
            </div>
            <div className="logo-container">
              <div className="d-flex justify-content-between align-content-center">
                <img src="assets/images/traveloka_logo 3.png" alt="" className="w-100"/>
              </div>
            </div>
            <div className="logo-container">
              <div className="d-flex justify-content-between align-content-center">
                <img src="assets/images/traveloka_logo 4.png" alt="" className="w-100"/>
              </div>
            </div>
            <div className="logo-container">
              <div className="d-flex justify-content-between align-content-center">
                <img src="assets/images/traveloka_logo 5.png" alt="" className="w-100"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  



);

export default Partners ;
