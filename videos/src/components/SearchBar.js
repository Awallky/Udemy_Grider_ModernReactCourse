import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
    }
    onFormSubmit = async (e) => {
        e.preventDefault();
        await this.props.onSubmitForm(this.state.term);
    }
    onSearchChange = async (e) => {
        await this.setState({ term: e.target.value });
    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form
                    className="ui form"
                    onSubmit={this.onFormSubmit}
                >
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            onChange={this.onSearchChange}
                            type="text"
                            value={this.state.term}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
