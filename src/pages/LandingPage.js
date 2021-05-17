import MockDataHolder from "../mockData/MockDataHolder";
import React from "react";
import { fetchers } from "../mockData/mock-data-fetcher";

const LandingPage = () => {


    function fetchMockData(){
        fetchers.fetchPopular()
    }

    return(

    <div className="App-Content">
        <p>LandingPage</p>
        {fetchMockData()}
        <MockDataHolder/>
    </div>
    )


}

export default LandingPage