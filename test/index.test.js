import checkPlaylist  from '../src/index.js';
import expect from 'expect';

describe( "Playlist", () => {
  
   it( "should return the playlist", async () => {
      const result = await checkPlaylist();
      console.log(result);
      expect(result).toBe.ok;
   
    } );
});
