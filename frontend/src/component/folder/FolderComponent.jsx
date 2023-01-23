import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
const FolderComponent = ({ data, refetch }) => {
    const [value, setValue] = useState('')
    const [close, setClose] = useState(false)
    const navigate = useNavigate()

    const handleClick = async () => {
        if (value === '') return toast.error("please provide a name")
        await axios.post('http://localhost:5000/api/v1/folders', { folder: value }).then(e => {
            console.log("folder created successfully")
            refetch()
            setClose(false)
        }).catch(e => {
            console.log(e)
        })
    }


    const handleNavigate = (e) => {
        navigate('/folder', { state: e })
    }


    const Folders = data?.data?.map(e => (
        <div className="folder" key={e._id} onClick={() => handleNavigate(e._id)}>
            <img src="https://www.tenforums.com/geek/gars/images/2/types/thumb_14486407500Folder.png" alt="" height={"100px"} />
            <span>{e.name}</span>
        </div>
    ))

    return (
        <div className='folder-wrapper'>
            <Popup trigger={<button style={{ alignSelf: 'center' }}>New</button>} position="right center">
                <div>
                    <input type="text" name="folder" id="" placeholder='new folder' value={value} onChange={(e) => setValue(e.target.value)} />
                    <button onClick={handleClick}>create</button>
                </div>
            </Popup>
            <div className="folder-container">
                {data?.data.length ? Folders : "Empty"}
            </div>

        </div>
    )
}

export default FolderComponent
