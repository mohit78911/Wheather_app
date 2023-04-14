import React from 'react'

export default function Data(props) {
  return (
    <div>
      {props.data.location && (
        <div>
          CityName: <b>{props.data.location.name}</b>
        </div>
      )}
      {props.data.current && (
        <div>
          Temp Of City: <b>{props.data.current.temp_c}</b>
        </div>
      )}
      {props.data.current && (
        <div>
          Icon:
          <img src={props.data.current.condition.icon} alt="Weather Icon" />
        </div>
      )}
    </div>
  );
}
