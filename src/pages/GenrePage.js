import {useParams} from 'react-router-dom'
import Header from '../components/Header.js'
import React, { useState } from 'react'
import FetcherAPI, { FETCH_API_TYPE } from '../util/FetcherAPI.jsx'

const GenrePage = () => {
    
    let { id } = useParams()
    console.log('ID: ', id)

    return(  
        <div className="App-Content">
            <Header page={`${id}`}>{id}</Header> 
            <FetcherAPI {...{ type: FETCH_API_TYPE.LIST_GENRE, extras: { id: id, search: ''}}}/>
        </div>
    ) 

}

export default GenrePage