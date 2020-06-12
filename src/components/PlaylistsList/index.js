import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';

const PlaylistsList = (props) => {

    const mockPlaylistList = [
        {
            id: "1",
            name: "Playlist teste 1"
        },
        {
            id: "2",
            name: "Playlist teste 2"
        }
    ]

    return (
        <List>
            {mockPlaylistList.map((playlist) => {
                return (
                    <ListItem key={playlist.id}>
                        <ListItemText primary={playlist.name} />
                        <ListItemSecondaryAction>
                            <IconButton aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>  
                )
            })}

        </List>
    )
}

export default PlaylistsList;