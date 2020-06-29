import React from 'react';
import axios from 'axios';
import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import ListWrapper from '../ListWrapper';

class PlaylistDetail extends React.Component {
    render() {
        return (
            <div>
                <Typography>{this.props.playlistName}</Typography>
                <ListWrapper>
                    <List subheader={<ListSubheader>Músicas</ListSubheader>}>
                        {this.props.musics.map((playlist) => {
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
                </ListWrapper>
            </div>
        )
    }

}

export default PlaylistDetail;