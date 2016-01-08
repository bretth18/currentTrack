// shoot js when DOM is loaded
$(document).ready(function() {

    // setting global variables
    var recentTrackUrl = "https://ws.audioscrobbler.com/2.0?method=user.getRecentTracks&user=bretth18&limit=1&api_key=6e7c0a29cd508f42a6737e5fd3d6110b&format=json"
    var defaultCoverImage = "http://cdn.last.fm/flatness/responsive/2/noimage/default_album_300_g4.png"
    var refreshTime = 1000 //look for updated JSON every "xxx" miliseconds

    //definig the function which gets JSON data from the last.fm api and sets it to the
    function setRecentTrack() {
        $.getJSON(recentTrackUrl, function(data){
            var info = data.recenttracks.track[0];
                var track = info["name"];
                var artist = info.artist["#text"];
                var album = info.album["#text"];
                var cover = info.image[3]["#text"];
                var url = info["url"];

            if ( cover.length > 0 ) {
                   $(".cover").attr("src", cover)
                }
                else {
                    $(".cover").attr("src", defaultCoverImage)
                }

                $(".cover-container").attr("href", url)
                $(".cover").attr("title", track)
                $(".artist").html(artist)
                $(".track").html(track)
                $(".album").html(album)
            });
    }
    //run function on pageload then load on time interval
    setRecentTrack();
    setInterval(setRecentTrack, refreshTime);


})
