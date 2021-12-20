import fetch from 'node-fetch';

export default async function checkPlaylist() {
    const token = 'add your token';
    const headers = {
        Authorization: `Bearer ${token}`,
      };
    const playlist = 'add yout playlist'  
    const response = await fetch(`https://api.spotify.com/v1/playlists/${playlist}`, { method: 'GET', headers });
    const body = await response.json();
    const items = body.tracks.items;
    const filteredSongs = items.filter((item)=> {
        const releasedateString = item.track.album.release_date;
        const releaseDate = new Date(releasedateString);
        return releaseDate > new Date("2020-12-01");

    });

    filteredSongs.forEach(element => {
        console.log(`${element.track.name} , ${element.track.artists[0].name}`);
    });
    return filteredSongs;
}

