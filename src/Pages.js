import React from 'react';
import { Link } from 'react-router-dom';

function Pages({ currentPage }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            {currentPage > 1 && (
                    <Link to={`/headlines/${currentPage - 1}`}>{currentPage - 1}</Link>
            )}
            <Link to={`/headlines/${currentPage + 1}`}>{currentPage + 1}</Link>
        </div>
    )
}

export default Pages;