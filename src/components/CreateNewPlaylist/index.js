import React from 'react';
import TextField from '@material-ui/core/Textfield';
import Button from '@material-ui/core/Button';

class CreateNewPLaylist extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            newPlaylistName: ""
        }
    }

    handleNameInputChange = (event) => {
        console.log(event.target.value)
        this.setState({
            newPlaylistName: event.target.value
        })
    }

    render(){
        
        return(
            <div>
                <TextField
                    type="text"
                    onChange={this.handleNameInputChange}
                    value={this.state.newPlaylistName}
                />
                <Button>Criar playlist</Button>
            </div>
        )
    }
}

export default CreateNewPLaylist;