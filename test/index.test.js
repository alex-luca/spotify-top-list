import checkPlaylist  from '../src/index.js';
import expect from 'expect';
import fs from 'fs';

describe( "Playlist", () => {
  
   it( "should return the top 2020 songs", async () => {
      const result = await checkPlaylist();
   //    fs.writeFile("test.json", result, function(err) {
   //       if(err) {
   //           return console.log(err);
   //       }
   //       console.log("The file was saved!");
   //   }); 
     
      expect(result).toBe.ok;
   
    } );
});
