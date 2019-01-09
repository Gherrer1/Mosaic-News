import React from 'react';
import queryString from 'query-string';
import HeadlinesList from './HeadlinesList';
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

    render() {
        const { articles } = this.state;
        if (articles.length == 0) {
            return <div>No articles found.</div>
        }

        return (
            <HeadlinesList
                articles={articles}
            />
        )
    }
}

export default HeadlinesListContainer;