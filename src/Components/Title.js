import React from 'react'
import "../App.css"

 function Title(props) {
  return (
    <div>
          <h2 className="fontfamily">{ props.title}</h2>
    </div>
  );
}
export default Title;