import React from 'react';
import './App.css';
import CreateNewPLaylist from './components/CreateNewPlaylist';
import AddSongToPlaylist from './components/AddSongToPlaylist';
import PlaylistsList from './components/PlaylistsList';

function App() {
  return (
    <div>
      <CreateNewPLaylist/>
      <AddSongToPlaylist/>
      <PlaylistsList/>
    </div>
  );
}

export default App;
