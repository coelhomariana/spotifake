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

    handlePlaylistDeletion = async (playlistId) => {
        const axiosConfig = {
            headers: {
                auth: "mariana"
            }
        }

        if (window.confirm('Tem certeza que deseja deletar a playlist?')) {
            await axios.delete(`https://us-central1-spotif4.cloudfunctions.net/api/playlists/deletePlaylist?playlistId=${playlistId}`, axiosConfig)
            this.props.refreshPlaylists();
        }
    }

    render() {
        return (
            <ListWrapper>
                <List subheader={<ListSubheader>Playlists</ListSubheader>}>
                    {this.props.allPlaylists.map((playlist) => {
                        return (
                            <ListItem key={playlist.id}>
                                <ListItemText primary={playlist.name}
                                    onClick={() => this.props.onPlaylistClick(playlist.id, playlist.name)}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton aria-label="delete" onClick={() => this.handlePlaylistDeletion(playlist.id)}>
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