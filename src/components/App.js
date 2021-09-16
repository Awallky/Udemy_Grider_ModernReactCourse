import React from 'react';

import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import QueryDisplay from './QueryDisplay';
import PageBar from './PageBar';


class App extends React.Component {
    state = {urlResults: [], per_page: 10, query: '', page: 1, count: 0}
    onSearchSubmit = async (term) => {
        const results = await unsplash.get('/search/photos', {
            params: {
                query: term,
                page: this.state.page,
                per_page: this.state.per_page
            }
        });
        if (!this.state.getCount || !(this.state.count > 0) ) {
            await this.setState({ urlResults: results.data.results, query: term, getCount: true, count: parseInt(results.headers["x-total"])});
        } else {
            await this.setState({ urlResults: results.data.results, query: term });
        }
    }
    onChangeRowsPerPage = async (rowsPerPage) => {
        await this.setState({ per_page: rowsPerPage });
        await this.onSearchSubmit(this.state.query);
    }
    onChangePage = async (pageNumber) => {
        await this.setState({ page: pageNumber });
        console.log(pageNumber, this.state)
        await this.onSearchSubmit(this.state.query);
    }

    render = () => {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <QueryDisplay urlResults={this.state.urlResults} />
                {
                    this.state.urlResults.length > 0 &&
                    <PageBar
                        onChangeRowsPerPage={this.onChangeRowsPerPage}
                        onChangePage={this.onChangePage}
                        count={ this.state.count }
                    />
                }
            </div>
        );
    }
}

export default App;
