import React from 'react';
import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';

const PlaylistDetail = (props) => {

    const mockPlaylistDetail = {
        name: "Genérias vol. 2",
        musics: [
            {
                id:"1",
                name:"oi",
                artist:"neg",
                url:"www.google.com"  
            },

            {
                id:"2",
                name:"ragatanga",
                artist:"rouge",
                url:"www.yahoo.com"  
            }
        ]
    }

return (
    <div>
        <Typography>{props.playlistName}</Typography>
        <List>
            {mockPlaylistDetail.musics.map((playlist) => {
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
    </div>
)
}

export default PlaylistDetail;