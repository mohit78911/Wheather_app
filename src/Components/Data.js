import React from "react";

export default function Data(props) {
  return (
    <>
      <div className=" color">
        <div className=" setOfBox round">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          {/* name div start */}
          <div>
            <li className="list-group-item ">
              {props.data.location && (
                <div>
                  CityName: <b>{props.data.location.name}</b>
                </div>
              )}
            </li>
          </div>
          {/* name div end */}
          <br />
          <br />
          <br />

          {/* temprature div start */}
          <div>
            {props.data.current && (
              <div>
                Temp Of City:{" "}
                <b>
                  {props.data.current.temp_c}
                  <sup>o</sup>Cel
                </b>
              </div>
            )}
          </div>
          {/* temprature div end */}
          {/* atmosphere div start */}

          <div>
            <li className="list-group-item">
              {props.data.current && (
                <div>
                  Atmosphere : <b>{props.data.current.condition.text}</b>
                </div>
              )}
            </li>
          </div>
          {/* atmosphere div end */}
          {/* icon div start */}
          <div>
            <li className="list-group-item">
              {props.data.current && (
                <div>
                  Icon:
                  <img
                    src={props.data.current.condition.icon}
                    alt="Weather Icon"
                  />
                </div>
              )}
            </li>
          </div>
          {/* icon div end */}
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
