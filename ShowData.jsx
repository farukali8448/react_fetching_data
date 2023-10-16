import React from "react";

const ShowData = ({ text }) => {
  return (
    <div>
      <div className="row mx-2 my-2">
        <div className="col-md-4">
          <div className="card my-2">
            <div className="card-body">
              <h5 className="card-title">Description</h5>
              <p className="card-text">{text.description}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card my-2">
            <div className="card-body">
              <h5 className="card-title">Tempreture</h5>
              <p className="card-text">{text.temp} </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card my-2">
            <div className="card-body">
              <h5 className="card-title">Maximum Tempreture</h5>
              <p className="card-text">{text.temp_max}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card my-2">
            <div className="card-body">
              <h5 className="card-title">Minimum Tempreture</h5>
              <p className="card-text">{text.temp_min}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card my-2">
            <div className="card-body">
              <h5 className="card-title">Humidity</h5>
              <p className="card-text">{text.humidity} </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card my-2">
            <div className="card-body">
              <h5 className="card-title">Sunrise</h5>
              <p className="card-text">{text.sunrise}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card my-2">
            <div className="card-body">
              <h5 className="card-title">Sunset</h5>
              <p className="card-text">{text.sunset}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card my-2">
            <div className="card-body">
              <h5 className="card-title">Country</h5>
              <p className="card-text">{text.country}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowData;
