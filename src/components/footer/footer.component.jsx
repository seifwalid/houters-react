const Footer =()=>{
    console.log("i am footer ");
    return (

<div>
<footer className="my-5 py-5" >
<img className="w-100" src="assets/bg/bottom_left.png" alt="bottom_left_blur"
     />
<img className="w-100" src="assets/bg/bottom_right.png" alt="bottom_left_blur"
    />
<div className="container">
  <div className="row">
    <div className="col-lg-4">
      <img src="assets/images/Logo.png" className="w-10 mb-3" alt=""/>
      <p>
        We provide information about properties such as houses, villas and apartments to help people find their dream
        home
      </p>
      <div className="socials-container">
        <div className="d-flex align-items-center">
          <i className="fa-brands fa-instagram fs-4 ps-3 me-3 text-primary"></i><i
                className="fa-brands fa-facebook fs-4 ps-3 me-3 text-primary"></i><i
                className="fa-brands fa-twitter fs-4 ps-3 me-3 text-primary"></i>
        </div>
      </div>
    </div>
    <div className="col-lg-7 offset-lg-1 text-lg-left text-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <ul className="list-unstyled">
              <li className="mb-2 fw-bold">
                Property
              </li>
              <li className="mb-2">
                House
              </li>
              <li className="mb-2">
                Apartment
              </li>
              <li className="mb-2">
                Villa
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <ul className="list-unstyled">
              <li className="mb-2 fw-bold">

                Article
              </li>
              <li className="mb-2">
                New Article
              </li>
              <li className="mb-2">
                Popular Article
              </li>
              <li className="mb-2">
                Most Read
              </li>
              <li className="mb-2">
                Tips & Tricks
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <ul className="list-unstyled">
              <li className="mb-2 fw-bold">
                Contact
              </li>
              <li className="mb-2">
                2464 Royal Ln. Mesa, New Jersey 45463
              </li>
              <li className="mb-2">
                (671) 555-0110
              </li>
              <li className="mb-2">
                info@hounter.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</footer>
</div>
)}

export  default Footer ;
