import React from 'react';

const PublicCard = () => {
    return (
        <div className="col">
            <div className="card board-card shadow-sm">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                        <div>
                            <h5 className="card-title mb-1">Дизайн лендинга</h5>
                            <p className="text-muted small mb-0">Создано: 15.01.2024</p>
                        </div>
                        <span className="badge bg-success">Публичная</span>
                    </div>
                    <div className="board-preview mb-3"></div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <button className="btn btn-sm btn-outline-danger likes-btn active">
                                <i className="bi bi-heart-fill"></i> <span className="likes-count">42</span>
                            </button>

                        </div>
                        <a href="public_boards_view.html" className="btn btn-sm btn-primary">Открыть</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PublicCard;