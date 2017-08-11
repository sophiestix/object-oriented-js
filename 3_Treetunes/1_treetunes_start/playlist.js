function Playlist() {
    this.songs = [];
    this.nowPlayingIndex = 0;
}

Playlist.prototype.add = function(song) {
    this.songs.push(song);
};

Playlist.prototype.play = function() {
    var currentSong = this.songs[this.nowPlayingIndex];
    currentSong.play();
};

Playlist.prototype.stop = function(){
    var currentSong = this.songs[this.nowPlayingIndex];
    currentSong.stop();
};

Playlist.prototype.next = function() {
    this.stop(); // stop the song currently playing
    this.nowPlayingIndex++; //move to the index of the next song
    if(this.nowPlayingIndex === this.songs.length) {
        this.nowPlayingIndex = 0; // if we are at the end of the list, we have to start over
    }
    this.play()
};

Playlist.prototype.renderIn = function() {

};