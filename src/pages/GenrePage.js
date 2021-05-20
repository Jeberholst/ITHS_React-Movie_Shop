import {useParams} from 'react-router-dom'
import Header from '../components/Header.js'
import MockDataHolder from '../components/Header.js'
import { fetchers } from "../mockData/mock-data-fetcher";
import React from 'react'

const GenrePage = () => {
    let {id} = useParams()
    console.log(id)
    return(  
        <div className="App-Content">
        <Header page={`${id}`}>{id}</Header>         
        </div>
    ) 

}

export default GenrePage