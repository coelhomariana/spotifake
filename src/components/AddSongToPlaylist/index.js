import React from 'react';
import TextField from '@material-ui/core/Textfield';
import Button from '@material-ui/core/Button';

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