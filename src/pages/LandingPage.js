import MockDataHolder from "../mockData/MockDataHolder";
import React from "react";
import {getSearchedTitlePaged, getTitleFull} from "../mockData/mock-data-fetcher";

const LandingPage = () => {


    function fetchMockData(){
        getTitleFull()
        getSearchedTitlePaged()
    }

    return(

    <div className="App-Content">
        <p>LandingPage</p>
        <h1 style={{color: '#388e3c'}}>Content-container--</h1>
        {fetchMockData()}
        <MockDataHolder/>
    </div>
    )


}

export default LandingPage