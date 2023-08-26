import "./ArticleSection.css";

function ArticleSection() {
  return (
    <section className="article-section container text-center">
      <div className="title-crown my-5 py-5 mx-auto col-8 col-sm-6 col-md-4 col-lg-3">
        <div className="subheading">
          _____ <br />
          <span className="text-capitalize">
            see tips and tricks from our partnerships
          </span>
        </div>
        <h2 className="text-center">
          Find out more about selling and buying homes
        </h2>
        <button className="mx-auto d-block btn btn-success rounded-pill">
          More articles
        </button>
      </div>
      <div className="row align-items-center">
        <div className="text-center d-flex flex-column col-lg align-items-center justify-content-center mb-5 mb-lg-0 gap-5">
          <div className="row gap-1">
            <div className="col-4 p-0">
              <img
                src="/assets/images/first_card_image.png"
                alt="first_card_image"
              />
            </div>
            <div className="col-8 row align-items-center justify-content-center">
              <div className="row align-items-center gap-3">
                <img
                  src="/assets/images/girl_in_card.png"
                  alt="girl"
                  className="author-img"
                />
                Dianne Russell
              </div>
              <div className="row article-stuff1">
                The things we need to check when we want to buy a house
              </div>
              <div className="row gap-3">
                <img
                  src="/assets/images/ic_round-access-time.svg"
                  alt="clock"
                  className={"clock-img"}
                />
                4 min read | 25 Apr 2021
              </div>
            </div>
          </div>
          <div className="row gap-1">
            <div className="col-4 p-0">
              <img
                src="/assets/images/Rectangle%2022%20(1).png"
                alt="first_card_image"
              />
            </div>
            <div className="col-8 row align-items-center justify-content-center">
              <div className="row align-items-center gap-3">
                <img
                  src="/assets/images/girl_in_card.png"
                  alt="girl"
                  className="author-img"
                />
                Courtney Henry
              </div>
              <div className="row article-stuff1">
                7 Ways to distinguish the quality of the house we want to buy
              </div>
              <div className="row gap-3">
                <img
                  src="/assets/images/ic_round-access-time.svg"
                  alt="clock"
                  className={"clock-img"}
                />
                6 min read | 24 Apr 2021
              </div>
            </div>
          </div>
          <div className="row gap-1">
            <div className="col-4 p-0">
              <img
                src="/assets/images/Rectangle%2022%20(2).png"
                alt="first_card_image"
              />
            </div>
            <div className="col-8 row align-items-center justify-content-center">
              <div className="row align-items-center gap-3">
                <img
                  src="/assets/images/girl_in_card.png"
                  alt="girl"
                  className="author-img"
                />
                Darlene Robertson
              </div>
              <div className="row article-stuff1">
                The best way to know the quality of the house we want to buy
              </div>
              <div className="row gap-3">
                <img
                  src="/assets/images/ic_round-access-time.svg"
                  alt="clock"
                  className={"clock-img"}
                />
                4 min read | 25 Apr 2021
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg d-flex flex-column gap-4">
          <div className="row">
            <img src="/assets/images/Rectangle%2023.png" alt="image" />
          </div>
          <div className="row px-4">
            <div className="row">
              <div className="row align-items-center gap-3">
                <img
                  src="/assets/images/girl_in_card.png"
                  alt="girl"
                  className="author-img"
                />
                Cameron Williamson
              </div>
            </div>
            <div
              className="row text-capitalize"
              style={{ fontSize: "24px", fontWeight: 500 }}
            >
              12 Things to know before buying a house
            </div>
            <div
              className="row text-start fw-normal"
              style={{ fontSize: "14px" }}
            >
              Want to buy a house but are unsure about what we should know, here
              I will try to explain what we should know and check when we want
              to buy a house
            </div>
            <div
              className="row gap-3 align-items-center"
              style={{ fontSize: "14px" }}
            >
              <img
                src="/assets/images/ic_round-access-time.svg"
                alt="clock"
                className={"clock-img"}
              />
              4 min read | 25 Apr 2021
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArticleSection;
