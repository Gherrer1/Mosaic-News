import React from 'react';
import Headline from './Headline';

function HeadlinesList({ articles }) {
    return (
        <ul style={{ padding: '0px 15px', listStyle: 'none' }}>
            {articles.map((article, index) => (
                <li><Headline key={index} article={article} /></li>
            ))}
        </ul>
    )
}

export default HeadlinesList;