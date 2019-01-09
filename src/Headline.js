import React from 'react';

function Headline({ article }) {
    return (
        <p>
            <a
                href={article.url}
                target="_blank"
            >
                {article.title}
            </a>
        </p>
    );
}

export default Headline;