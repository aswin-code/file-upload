import React from 'react'
import { useQuery } from 'react-query'
import FolderComponent from '../../component/folder/FolderComponent'
import NavBar from '../../component/NavBar/NavBar'
import axios from 'axios'


const Home = () => {
    const { isLoading, data, refetch } = useQuery('fetchFolder', () => {
        return axios.get('http://localhost:5000/api/v1/folders')
    })
    return (
        <div>
            <NavBar />
            <FolderComponent data={data} refetch={refetch} />
        </div>
    )
}

export default Home