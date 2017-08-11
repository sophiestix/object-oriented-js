// function Song(title, artist, duration) {
//   var song = this; //The song variable is a new instance of the song when we call the song constructor,
//   Media.call(song, title, duration); //Remember the media constructor takes two parameters, title and duration.
//   //So the first parameter here is what we're telling the media function call to use as this.
//   //this call is decorating the song instance with new properties - title, duration
//   this.artist = artist;
// }

function Song(title, artist, duration) {
  Media.call(this, title, duration);
  this.artist = artist;
}

Song.prototype = Object.create(Media.prototype); 
//What this basically does is that it copies the references to the Media's
//prototype properties and methods to the song's prototype.
//We're creating a prototype chain.

Song.prototype.toHTML = function() {
  var htmlString = '<li';
  if(this.isPlaying) {
    htmlString += ' class="current"';
  }
  htmlString += '>';
  htmlString += this.title;
  htmlString += ' - '
  htmlString += this.artist;
  htmlString += '<span class="duration">'
  htmlString += this.duration;
  htmlString += '</span></li>';
  return htmlString;
};
















