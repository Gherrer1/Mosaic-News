const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('22813d5757cf47348d53ccc9ccdcefc7');

async function getHeadlinesForQuery(query, page = 1) {
    const results = await newsapi.v2.everything({
        q: query,
        language: 'en',
        sortBy: 'publishedAt',
        pageSize: 10,
        page,
    });
    return results.articles;
}

const api = {
    getHeadlinesForQuery,
};

export default api;