var playlist = {TheBeatles: "Eleanor Rigby", TheWho: "My Generation", Drake: "Six God"};

function updatePlaylist(obj, name, song) {
  return Object.assign(playlist, {[name]: song})
}

function removeFromPlaylist(playlist, artistName) {
 delete playlist[artistName]
  return playlist 
}