import React from 'react';
import queryString from 'query-string';
import HeadlinesList from './HeadlinesList';
import Pages from './Pages';
import api from './api';

class HeadlinesListContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: [],
        };
    }

    async componentDidMount() {
        // what if there is no location/search?
        const search = queryString.parse(this.props.location.search);
        const articles = await api.getHeadlinesForQuery(search.query);
        this.setState({ articles });
    }

    async componentDidUpdate(prevProps) {
        const oldPage = Number(prevProps.match.params.page);
        const newPage = Number(this.props.match.params.page);
        const search = queryString.parse(this.props.location.search);
        if (oldPage !== newPage) {
            const articles = await api.getHeadlinesForQuery(search.query, newPage);
            this.setState({ articles });
        }
    }

    render() {
        const { match } = this.props;
        const page = Number(match.params.page);
        const { search } = this.props.location;
        const { articles } = this.state;
        if (articles.length === 0) {
            return <div>No articles found.</div>
        }

        return (
            <div>
                <HeadlinesList
                    articles={articles}
                />
                <Pages currentPage={page} search={search} />
            </div>
        )
    }
}

export default HeadlinesListContainer;