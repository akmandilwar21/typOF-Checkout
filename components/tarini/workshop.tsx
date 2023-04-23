import Image from "next/image";
import { useState } from "react";

function Workshops() {
  let [workshops, setWorkshops] = useState<any>([]);
  let img_url = "";
  let indian_State = [
    "Telangana",
    "Andaman and Nicobar",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Pondicherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Tripura",
    "Uttar Pradesh",
    "Uttaranchal",
    "West Bengal",
  ];
  function wregister(id: any) {
    return null;
  }
  return (
    <>
      <div
        className="page-header text-center"
        style={{ backgroundImage: "portal/images/page-header-bg.jpg" }}
      >
        <div className="container">
          <h1 className="page-title"></h1>
        </div>
      </div>
      <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Workshops
            </li>
          </ol>
        </div>
      </nav>
      <main>
        <div className="page-content">
          <div className="container">
            <div className="entry-container" data-layout="fitRows">
              {workshops.map((workshop: any) => {
                return (
                  <div className="entry-item lifestyle shopping col-sm-6 col-lg-6">
                    <article className="entry">
                      <figure className="entry-media">
                        <img src={img_url} alt={workshop.title} />
                      </figure>
                      <div className="entry-body">
                        <div className="entry-meta">
                          <span className="entry-author">
                            {workshop.workshop_date}
                          </span>
                          <span className="meta-separator">|</span>
                          {workshop.duration > 1 && (
                            <span>For {workshop.duration} days</span>
                          )}
                          <span className="meta-separator">|</span>
                          {workshop.workshop_time}
                        </div>
                        <h2 className="entry-title">{workshop.title}</h2>
                        <div className="entry-cats">
                          <span
                            style={{
                              color: "#eea287",
                              fontSize: "18px",
                              fontWeight: "bold",
                            }}
                          >
                            {workshop.price > 0 ? (
                              <span>Starts at ₹{workshop.price}</span>
                            ) : (
                              <span>FREE</span>
                            )}
                          </span>
                        </div>
                        <div className="entry-content">
                          {workshop.description}
                          <a
                            href={"#address-modal" + workshop.workshop_id}
                            data-toggle="modal"
                            className="form-control btn btn-primary"
                          >
                            Register Now
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
            <div className="mb-3"></div>
          </div>
        </div>
      </main>
      {workshops.map((workshop: any) => {
        return (
          <div
            className="modal fade"
            id="address-modal{{$workshop->workshop_id}}"
            tabIndex={-1}
            role="dialog"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">
                      <i className="icon-close"></i>
                    </span>
                  </button>
                  <div className="form-box">
                    <div className="form-tab">
                      <ul className="nav nav-pills nav-fill" role="tablist">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="signin-tab"
                            data-toggle="tab"
                            href="#signin"
                            role="tab"
                            aria-controls="signin"
                            aria-selected="true"
                          >
                            Register
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content" id="tab-content-5">
                        <div
                          className="tab-pane fade show active"
                          id="signin"
                          role="tabpanel"
                          aria-labelledby="signin-tab"
                        >
                          <form>
                            <input
                              type="hidden"
                              name="workshop_id"
                              value={workshop.workshop_id}
                            />
                            <div className="form-group">
                              <input
                                type="text"
                                id={"name" + workshop.workshop_id}
                                placeholder="Full Name *"
                                className="form-control"
                                name="name"
                                required
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Email *"
                                id={"email" + workshop.workshop_id}
                                name="email"
                                required
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Mobile *"
                                id={"mobile" + workshop.workshop_id}
                                name="mobile"
                                required
                              />
                            </div>
                            <div className="form-group">
                              <textarea
                                name="address"
                                id={"address" + workshop.workshop_id}
                                className="form-control"
                                placeholder="Address *"
                                required
                              ></textarea>
                            </div>
                            <div className="row">
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <select
                                    name="country"
                                    required
                                    className="form-control"
                                    id={"country" + workshop.workshop_id}
                                  >
                                    <option value="IND">India</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <select
                                    name="state"
                                    required
                                    className="form-control"
                                    id={"state" + workshop.workshop_id}
                                  >
                                    <option value="">Select State</option>
                                    {indian_State.map((state: any) => {
                                      return (
                                        <option value={state}>{state}</option>
                                      );
                                    })}
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id={"city" + workshop.workshop_id}
                                    placeholder="City *"
                                    name="city"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id={"pin" + workshop.workshop_id}
                                    placeholder="Postcode / ZIP *"
                                    name="pin"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Coupon Code"
                                id={"coupon" + workshop.workshop_id}
                                name="coupon_code"
                              />
                            </div>
                            <div className="form-footer">
                              <button
                                type="button"
                                onClick={() => wregister(workshop.workshop_id)}
                                className="btn btn-outline-primary-2"
                                id="wr{{$workshop->workshop_id}}"
                              >
                                <span>Register</span>
                                <i className="icon-long-arrow-right"></i>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default Workshops;

//workshop_date line 36
