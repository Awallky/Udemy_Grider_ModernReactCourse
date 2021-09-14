import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import QueryDisplay from './QueryDisplay';
import PageBar from './PageBar';

class App extends React.Component {
    state = {urlResults: [], per_page: 10, query: '', page: 0, count: 0}
    onSearchSubmit = async (term) => {
        const results = await axios.get('https://api.unsplash.com/search/photos', {
            headers: {
                    Authorization: "Client-ID 4mkjDcEP7A2VATwCI_ZMcBAqiscqWeVCJhGtBcSXahI"
            },
            params: {
                query: term,
                page: this.state.page,
                per_page: this.state.per_page
            }
        });
        console.log(results, this.state)
        if (!this.state.getCount) {
            await this.setState({ urlResults: results.data.results, query: term, getCount: true, count: parseInt(results.headers["x-total"])});
        } else {
            await this.setState({ urlResults: results.data.results, query: term });
        }
    }
    onChangeRowsPerPage = async (rowsPerPage) => {
        await this.setState({ per_page: rowsPerPage });
        this.onSearchSubmit(this.state.query);
    }
    onChangePage = async (pageNumber) => {
        await this.setState({ page: pageNumber });
        console.log(pageNumber, this.state)
        this.onSearchSubmit(this.state.query);
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
