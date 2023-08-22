import "./ContactUsSection.styles.css";

function ContactUsSection() {
  return (
    <section id="contact-us" className="my-5 py-5">
      <div className="container rounded-5 mb-5  py-3 px-5">
        <div className="row">
          <div className="col-lg-3 text-end">
            <img
              src="/assets/images/Component 1.png"
              className="footer-img"
              alt=""
            />
          </div>
          <div className="col-lg-6">
            <div className="container-fluid h-100">
              <div className="row justify-content-center align-items-center h-100">
                <div className="content text-center">
                  <h1 className="mb-5">
                    Subscribe For More Info and update from Houters
                  </h1>
                  <div className="rounded-pill border border-1 d-flex justify-content-between align-items-center p-1 w-75 mx-auto">
                    <div className="icon-placeholder-container d-flex align-items-center w-75">
                      <i className="fa-solid fa-envelope fs-4 ps-3 me-3 text-primary"></i>
                      <input
                        type="text"
                        id="subscribe-box"
                        className="bg-transparent border-0 w-75"
                        placeholder="Your email here"
                      />
                    </div>
                    <button className="btn btn-success rounded-pill text-white">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <img
              src="/assets/images/a.png"
              className="footer-img"
              alt="footer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUsSection;
