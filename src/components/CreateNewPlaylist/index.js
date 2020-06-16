import React from 'react';
import TextField from '@material-ui/core/Textfield';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class CreateNewPLaylist extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newPlaylistName: ""
        }
    }

    handleNameInputChange = (event) => {
        this.setState({ newPlaylistName: event.target.value })
    }

    handleCreatePlaylist = async () => {
        const axiosConfig = {
            headers: {
                auth: "mariana"
            }
        }

        const body = {
            name: this.state.newPlaylistName
        }

        const response = await axios.post(
            'https://us-central1-spotif4.cloudfunctions.net/api/playlists/createPlaylist',
            body,
            axiosConfig
        )

        this.setState({ newPlaylistName: '' })
        alert('Playlist criada com sucesso!')
    }

    render() {
        return (
            <div>
                <TextField
                    type="text"
                    onChange={this.handleNameInputChange}
                    value={this.state.newPlaylistName}
                />
                <Button onClick={this.handleCreatePlaylist}>Criar playlist</Button>
            </div>
        )
    }
}

export default CreateNewPLaylist;