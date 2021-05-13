import {useParams} from 'react-router-dom'
import Header from '../components/Header.js'

const GenrePage = () => {
    let {id} = useParams()
    return <Header page={id}>{id.toString()}</Header>


}

export default GenrePage