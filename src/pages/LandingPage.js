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
        {fetchMockData()}
        <MockDataHolder/>
    </div>
    )


}

export default LandingPage