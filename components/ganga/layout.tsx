import Meta from "./head";
import Header from "./header";
import Footer from "./footer";
import { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";

export default function layout(props: any) {
  return (
    <div>
      <Meta />
      <Header prop={props} />
      <div className="container">
        <Skeleton height={400} />
      </div>
      <div className="container mt-5">
        <h4 className="text-center">
          <Skeleton width={"70%"} />
        </h4>
        <p className="text-center">
          <Skeleton width={"70%"} />
        </p>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <Skeleton height={200} />
            <p>
              <Skeleton />
            </p>
          </div>
          <div className="col-md-4">
            <Skeleton height={200} />
            <p>
              <Skeleton />
            </p>
          </div>
          <div className="col-md-4">
            <Skeleton height={200} />
            <p>
              <Skeleton />
            </p>
          </div>
        </div>
      </div>
      <Footer prop={props} />
    </div>
  );
}
