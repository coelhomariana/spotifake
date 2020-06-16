import React from 'react';
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import ListWrapper from '../ListWrapper'

class PlaylistsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            allPlaylists: []
        }
    }

    render() {
        return (
            <ListWrapper>
                <List subheader={<ListSubheader>Playlists</ListSubheader>}>
                    {this.state.allPlaylists.map((playlist) => {
                        return (
                            <ListItem key={playlist.id}>
                                <ListItemText primary={playlist.name}
                                    onClick={() => this.props.onPlaylistClick(playlist.id, playlist.name)}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )
                    })}
                </List>
            </ListWrapper>

        )
    }
}

export default PlaylistsList;