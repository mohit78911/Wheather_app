import React from "react";

export default function Data(props) {
  return (
    <>
      <div>
        <div class="card">
          <ul class="list-group list-group-flush ">
            <li class="list-group-item ">
              {props.data.location && (
                <div>
                  CityName: <b>{props.data.location.name}</b>
                </div>
              )}
            </li>
            <li class="list-group-item">
              {props.data.current && (
                <div>
                  Temp Of City: <b>{props.data.current.temp_c}</b>
                </div>
              )}
            </li>
            <li class="list-group-item">
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
            <li class="list-group-item">
              {props.data.current && (
                <div>
                  Atmosphere : <b>{props.data.current.condition.text}</b>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </>
  );
}
