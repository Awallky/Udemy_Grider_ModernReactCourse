import React from 'react';

import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = { term: '', maxResults: 5, youtubeVideos: [], activeVideo: undefined };
    onSubmitForm = async (term) => {
        await this.setState({ term });
        const results = await youtube.get('/search',
            {
                params: {
                    q: this.state.term,
                    maxResults: this.state.maxResults
                }
            }
        );
        this.setState({ youtubeVideos: results.data, activeVideo: results.data.items[0] });
    }
    onClickVideo = (video) => {
        this.setState({ activeVideo: video });
    }
    componentDidMount() {
        this.onSubmitForm('bunny');
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar
                    onSubmitForm={this.onSubmitForm}
                />
                <div className="ui grid" >
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail activeVideo={this.state.activeVideo} onClickVideo={this.onClickVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onClickVideo={this.onClickVideo} youtubeVideos={this.state.youtubeVideos} />
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}

export default App;
