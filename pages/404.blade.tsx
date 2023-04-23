import Image from "next/image";
import Link from "next/link";

function PageNotFound() {
  return (
    <section className="bg-home d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12 text-center">
            <img
              src="{{ URL::asset('site/images/404.svg')}}"
              className="img-fluid"
              alt=""
            />
            <div className="text-uppercase mt-4 display-3">Oh ! no</div>
            <div className="text-capitalize text-dark mb-4 error-page">
              Page Not Found
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center">
            <Link href="/" className="btn btn-primary mt-4 ml-2">
              Go To Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default PageNotFound;
