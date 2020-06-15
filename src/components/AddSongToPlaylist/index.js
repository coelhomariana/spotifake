import React from 'react';
import TextField from '@material-ui/core/Textfield';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

class AddSongToPlaylist extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            artist: '',
            link: ''
        }
    }

    handleTextFieldChange = (event) => {
        console.log(event.target.name, event.target.value)
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div> 
                <Typography playlistName={this.props.playlistName}></Typography>
                <TextField
                    name="name"
                    value={this.state.name}
                    onChange={this.handleTextFieldChange}
                />

                <TextField
                    name="artist"
                    value={this.state.artist}
                    onChange={this.handleTextFieldChange}
                />

                <TextField
                    name="link"
                    value={this.state.link}
                    onChange={this.handleTextFieldChange}
                />

                <Button>Adicionar música</Button>
            </div>
        )
    }
}

export default AddSongToPlaylist;