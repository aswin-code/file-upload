import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useQuery } from 'react-query'
import { useLocation, useNavigate } from 'react-router-dom'
import NavBar from '../../component/NavBar/NavBar'
const Folder = () => {
    const { state } = useLocation()
    console.log(state)
    const navigate = useNavigate()
    const [files, setFiles] = useState([])
    useEffect(() => {
        { !state && navigate('/') }
    }, [])

    const { data, refetch } = useQuery('fetch-folder', () => {
        return axios.get("http://localhost:5000/api/v1/folders/" + state)
    })

    const handleChange = (e) => {
        console.log(e.target.files)
        setFiles(Object.values(e.target.files))
    }

    const handleUpload = async () => {
        if (!files.length) return toast.error("please choose a file")

        const formData = new FormData()
        console.log(files)
        files.forEach(file => {
            formData.append('file', file)
        })
        await axios.post('http://localhost:5000/api/v1/folders/' + state,
            formData, { headers: { 'Content-Type': 'multipart/form-data' } }).then(e => {
                setFiles([])
                toast.success("file uploaded successfully")
                refetch()
            }).catch(e => {
                toast.error(e.message)
            })
    }

    console.log(data?.data)

    const Doucments = data?.data.files.map(e => (
        <div className="folder">
            <img src="https://www.iconpacks.net/icons/2/free-file-icon-1453-thumb.png" alt="" height={"100px"} />
            <span>{e}</span>
        </div>
    ))


    return (
        <div>
            <NavBar />
            <div className='folder-wrapper'>
                <input type="file" multiple="multiple" onChange={handleChange} />
                <button onClick={handleUpload}>Upload</button>
                <div className="folder-container">
                    {data?.data.files.length ? Doucments : "Empty"}
                </div>
            </div>
        </div>
    )
}

export default Folder