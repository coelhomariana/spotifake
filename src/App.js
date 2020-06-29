import React from 'react';
import './App.css';
import axios from 'axios';
import CreateNewPLaylist from './components/CreateNewPlaylist';
import AddSongToPlaylist from './components/AddSongToPlaylist';
import PlaylistsList from './components/PlaylistsList';
import PlaylistDetail from './components/PlaylistDetail';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 'ListAndCreate',
      selectedPlaylistId: undefined,
      selectedPlaylistName: undefined,
      allPlaylists: [],
      selectedPlaylistSongs: []
    }
  }

  fetchAllPlaylists = () => {
    const axiosConfig = {
      headers: {
        auth: 'mariana'
      }
    }

    axios.get('https://us-central1-spotif4.cloudfunctions.net/api/playlists/getAllPlaylists', axiosConfig).then(response => {
      this.setState({ allPlaylists: response.data.result.list })
    })
  }

  fetchAllPlaylistSongs = async () => {
    const axiosConfig = {
      headers: {
        auth: "mariana"
      }
    }
    const response = await axios.get(`https://us-central1-spotif4.cloudfunctions.net/api/playlists/getPlaylistMusics/${this.props.playlistId}`, axiosConfig)

    this.setState({
      musics: response.data.result.musics
    })
  }

  componentDidMount() {
    this.fetchAllPlaylists();
  }

  handleCurrentPlaylistChange = (playlistId, playlistName) => {
    this.fetchAllPlaylistSongs(playlistId)

    this.setState({
      currentPage: 'playlistDetails',
      selectedPlaylistId: playlistId,
      selectedPlaylistName: playlistName
    })
  }

  render() {
    return (
      <div>
        {this.state.currentPage === 'ListAndCreate' && (
          <>
            <CreateNewPLaylist refreshPlaylists={this.fetchAllPlaylists} />

            <PlaylistsList
              allPlaylists={this.state.allPlaylists}
              refreshPlaylists={this.fetchAllPlaylists}
              onPlaylistClick={this.handleCurrentPlaylistChange} />
          </>
        )}

        {this.state.currentPage === 'playlistDetails' && (
          <>
            <AddSongToPlaylist
              playlistId={this.selectedPlaylistId}
              refreshPlaylistSongs={() => this.fetchAllPlaylistSongs(this.state.playlistId)}
            />

            <PlaylistDetail
              playlistId={this.state.playlistId}
              playlistName={this.state.selectedPlaylistName}
              musics={this.state.selectedPlaylistSongs} />
          </>
        )}
      </div>
    )
  }
}

export default App;
