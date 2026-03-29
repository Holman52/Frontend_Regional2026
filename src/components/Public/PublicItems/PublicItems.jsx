import React, {useEffect, useState} from 'react';
import PublicFilter from "../PublicFilter/PublicFilter.jsx";
import PublicGrid from "../PublicCard/PublicGrid.jsx";
import {apiGetPublicBoard} from "../../../api/axios.js";

const PublicItems = () => {
    const [publicBoards, setPublicBoards] = useState()
    const [minLikes, setMinLikes] = useState()
    const [maxLikes, setMaxLikes] = useState()
    const getSortedPublicBoards = async(params) => {
        const res = await apiGetPublicBoard(params)
        setPublicBoards(res.data)
    }
    useEffect(() => {
        return getSortedPublicBoards()
    }, [])
    return (
        <div className="container py-4 main-container">
            <PublicFilter
                maxLikes = {maxLikes}
                minLikes = {minLikes}
                setMinLikes = {setMinLikes}
                setMaxLikes = {setMaxLikes}
                handleSubmit = {getSortedPublicBoards}
            />

            <!-- Список досок -->
            <PublicGrid board={publicBoards}/>
        </div>

    );
};

export default PublicItems;