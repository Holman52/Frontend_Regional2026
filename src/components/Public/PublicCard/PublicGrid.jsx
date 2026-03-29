import React, {useEffect, useState} from 'react';
import {apiGetPublicBoard} from "../../../api/axios.js";

const PublicGrid = () => {
    const [PublicBoards, setPublicBoards] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (PublicBoards.length > 0) {
            return null;
        }
        const getBoards = async () =>{
            try {
                setLoading(true);
               const res = await apiGetPublicBoard()
                setPublicBoards(res.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
       return getBoards();
    },[])
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {PublicBoards.map((publicBoard,i)=>{

            })}
        </div>

    );
};

export default PublicGrid;