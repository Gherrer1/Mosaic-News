import React from 'react';

class SearchFrom extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const value = e.target.value;

        this.setState({
            query: value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { query } = this.state;
        const { history } = this.props;
        history.push({
            pathname: '/headlines/1',
            search: `?query=${query}`,
        });
        this.setState({
            query: '',
        });
    }

    render() {
        const { query } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="e.g. Lebron James"
                    value={query}
                    onChange={this.handleChange}
                />
                <button type="submit">Search!</button>
            </form>
        )
    }
}

export default SearchFrom;