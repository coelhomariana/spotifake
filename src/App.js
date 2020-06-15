import React from 'react';
import './App.css';
import CreateNewPLaylist from './components/CreateNewPlaylist';
import AddSongToPlaylist from './components/AddSongToPlaylist';
import PlaylistsList from './components/PlaylistsList';
import PlaylistDetail from './components/PlaylistDetail';
import { createGenerateClassName } from '@material-ui/core';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 'ListAndCreate',
      selectedPlaylistId: undefined,
      selectedPlaylistName: undefined,
    }
  }

  handleCurrentPlaylistChange = (playlistId, playlistName) => {
    this.setState({
      currentPage: 'playlistDetails',
      selectedPlaylistId: playlistId
    })
  }

  render() {
    return (
      <div>
        {this.state.currentPage === 'ListAndCreate' && (
          <>
            <CreateNewPLaylist />
            <PlaylistsList onPlaylistClick={this.handleCurrentPlaylistChange}/>
          </>
        )}

        {this.state.currentPage === 'playlistDetails' && (
          <>
            <AddSongToPlaylist />
            <PlaylistDetail />
          </>
        )}
      </div>
    )
  }
}

export default App;
