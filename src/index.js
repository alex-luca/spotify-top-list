import fetch from 'node-fetch';

export default async function checkPlaylist() {
    const response = await fetch('https://github.com/');
    const body = await response.text();
    return body;
}

