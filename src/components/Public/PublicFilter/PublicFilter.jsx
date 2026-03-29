import React, {useState} from 'react';

const PublicFilter = (props) => {
    const [minLikes, setMinLikes] = useState()
    const [maxLikes, setMaxLikes] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        const params = {
            ...(minLikes && { min_likes: minLikes }),
            ...(maxLikes && { max_likes: maxLikes }),
        };

        props.handleSubmit(params)
    }
    return (
        <div
            className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
            <div className="mb-3 mb-md-0">
                <h1 className="h3 mb-2">Публичные доски</h1>
                <p className="text-muted mb-0">Смотрите и вдохновляйтесь работами других пользователей</p>
            </div>
            <div className="d-flex flex-wrap gap-2">
                <form onSubmit={handleSubmit}>
                    <div>
                        <p className="text-muted mb-0">Количество лайков</p>
                        <input type="text" className="form-control" onChange={(e) => setMinLikes(e.target.value)} value={minLikes} placeholder="От"/>
                        <input type="text" className="form-control" onChange={(e) => setMaxLikes(e.target.value)} value={maxLikes} placeholder="До"/>
                    </div>

                    <button type={"submit"} className="btn btn-outline-primary">
                        <i className="bi bi-filter"></i> Фильтр
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PublicFilter;