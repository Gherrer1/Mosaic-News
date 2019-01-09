import React from 'react';
import { Link } from 'react-router-dom';

function Pages({ currentPage, search }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            {currentPage > 1 && (
                <Link
                    to={{
                        pathname: `/headlines/${currentPage - 1}`,
                        search,
                    }}
                >
                    {currentPage - 1}
                </Link>
            )}
            <Link
                to={{
                    pathname: `/headlines/${currentPage + 1}`,
                    search,
                }}
            >
                {currentPage + 1}
            </Link>
        </div>
    )
}

export default Pages;