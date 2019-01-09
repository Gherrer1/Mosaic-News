import React from 'react';

function Headline({ article }) {
    return (
        <p>
            <a href={article.url}>{article.title}</a>
        </p>
    );
}

export default Headline;