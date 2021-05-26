import React, {useState} from 'react';

const Loading = () =>{

    const fakeFetch = () =>{
        console.log("Fetching......");
    }


    return(
       <div>
          <div className="input-group">
              <input type="checkbox" name="overlay">
          </div>
          <button onClick={fakeFetch}>Fake Fetch</button>
       </div>
    );
}

export default Loading;