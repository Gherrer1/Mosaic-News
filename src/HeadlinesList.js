import React from 'react';
import Headline from './Headline';

function HeadlinesList({ articles }) {
    console.log(articles);
    return (
        <ul>
            {articles.map(article => (
                <Headline key={article.publishedAt} article={article} />
            ))}
        </ul>
    )
}

export default HeadlinesList;