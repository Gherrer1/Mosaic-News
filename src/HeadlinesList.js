import React from 'react';
import Headline from './Headline';

function HeadlinesList({ articles }) {
    return (
        <ul style={{ padding: '0px 15px' }}>
            {articles.map((article, index) => (
                <Headline key={index} article={article} />
            ))}
        </ul>
    )
}

export default HeadlinesList;