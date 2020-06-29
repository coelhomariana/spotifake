import React from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/Textfield';
import Button from '@material-ui/core/Button';

class AddSongToPlaylist extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            artist: '',
            url: ''
        }
    }

    handleTextFieldChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleAddSong = () => {
        const axiosConfig = {
            headers: {
                auth: "mariana"
            }
        }

        const body = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.url
        }

        axios.post(
            `https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists/${this.props.playlistId}/songs`,
            body,
            axiosConfig
        )
        this.setState({name:'', artist:'', url:''}) 
        this.props.refreshPlaylistSongs()
    }

    render() {
        return (
            <div>
                <TextField
                    name="name"
                    label="Nome da música"
                    value={this.state.name}
                    onChange={this.handleTextFieldChange}
                />

                <TextField
                    name="artist"
                    label="Nome do artista"
                    value={this.state.artist}
                    onChange={this.handleTextFieldChange}
                />

                <TextField
                    name="link"
                    label="Link para o MP3"
                    value={this.state.link}
                    onChange={this.handleTextFieldChange}
                />

                <Button onClick={this.handleAddSong}>Adicionar música</Button>
            </div>
        )
    }
}

export default AddSongToPlaylist;