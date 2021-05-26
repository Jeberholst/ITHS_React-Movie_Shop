
import React from 'react';



const Spinner = () =>{

    return(
       
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style={{margin: "auto" background: "rgb(241, 242, 243)" display: "block"; shape-rendering: "auto";}} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="50" cy="50" fill="none" stroke="#df1317" stroke-width="4" r="33" stroke-dasharray="155.50883635269477 53.83627878423159">
          <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.4255319148936171s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
        </circle>
        </svg>
    );
}

export default Spinner;