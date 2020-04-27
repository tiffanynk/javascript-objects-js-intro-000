var playlist = {
  artistNames: "song titles"
};

function updatePlaylist(playlist, "artistName", "songTitle") {
  return Object.Assign({}, playlist, { [artistName]: songTitle });
}
