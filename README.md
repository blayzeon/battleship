# battleship coding notes

Part of The Odin Project: https://www.theodinproject.com/lessons/node-path-javascript-battleship

PROJECT STARTED 4/16/22

Assignment

    Begin your app by creating the Ship factory function.
        Your ‘ships’ will be objects that include their length, where they’ve been hit and whether or not they’ve been sunk.
        REMEMBER you only have to test your object’s public interface. Only methods or properties that are used outside of your ‘ship’ object need unit tests.
        Ships should have a hit() function that takes a number and then marks that position as ‘hit’.
        isSunk() should be a function that calculates it based on their length and whether all of their positions are ‘hit’.

The ship factory function seemed simple enough.  I completed it without writing any tests.


    Create Gameboard factory.
        Note that we have not yet created any User Interface. We should know our code is coming together by running the tests. You shouldn’t be relying on console.logs or DOM methods to make sure your code is doing what you expect it to.
        Gameboards should be able to place ships at specific coordinates by calling the ship factory function.
        Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
        Gameboards should keep track of missed attacks so they can display them properly.
        Gameboards should be able to report whether or not all of their ships have been sunk.

At this point I started having trouble.  It was difficult to imagine how to code some of these things without a UI to play with.  I also had trouble conceptualizing why we stored the hits on the ships themselves and not the gameboard, as it made looping a lot more of a chore--at least with how I was doing things. 

I started writing tests at this point, and they helped a lot.  I ended up having to rewrite some of ship() in order for gameboard() to make more sense.  I struggled a lot with the hit/miss tracking and ended up deciding to include both hits and misses in the miss array, and track hits on the ships themselves (their coordinance and whether or not they have been hit).


    Create Player.
        Players can take turns playing the game by attacking the enemy Gameboard.
        The game is played against the computer, so make ‘computer’ players capable of making random plays. The AI does not have to be smart, but it should know whether or not a given move is legal. (i.e. it shouldn’t shoot the same coordinate twice).

This part was very easy compared to the gameboard factory. I just had it check the misses array for the gameboard and return false if it wasn't able to attack because there was a move made there already.

I got this far all on 4/16/22.  This seems like it will be a long project.

---

4/30/22

Today I started working on the game board grid and the css for the UI.  I am not sure if a table is the best way or correct to do this, but remembering old Battleship gameboards as a kid, the gamefields were set up like tables.  Two tables on top of each other, each with their own grid.  The bottom table was were you put your own pieces and the top table started off blank and represented the enemy's board.

Writing out the individual <tr>/<th>s and the <td>s that the user could place ships on seemed tedious, and I wanted to make things easier on myself if I ever needed to resize the gameboard, so I decided to generate it all in JavaScript, which was simple enough.  I used loops and acsii characters to get the job done. 

Styling was a little trickier than I had anticipated, as the column of letters on the left-hand side tended to want to stray from the rest of the table.  I fixed this by making sure styling was the same for <th> and <td>.

I added some nice blues for both the boards, and white for the text and <td> grid border. I have gray side boarders hugging the left and right of the gameboard that I intend to add images to later, similar to the old plastic Battleship sets. 

I will work on having the JavaScript add game pieces to the UI next.

    Create the main game loop and a module for DOM interaction.
        At this point it is appropriate to begin crafting your User Interface.
        The game loop should set up a new game by creating Players and Gameboards. For now just populate each Gameboard with predetermined coordinates. You can implement a system for allowing players to place their ships later.
        We’ll leave the HTML implementation up to you for now, but you should display both the player’s boards and render them using information from the Gameboard class.
            You need methods to render the gameboards and to take user input for attacking. For attacks, let the user click on a coordinate in the enemy Gameboard.
        The game loop should step through the game turn by turn using only methods from other objects. If at any point you are tempted to write a new function inside the game loop, step back and figure out which class or module that function should belong to.

So this ended up being very challenging.  Everything I need is available on my objects but not always in the most optimal places because I just did not have the foresight to plan it the way that would be most convenient now.  I could have redone my objects but then I may have needed to redo my tests, so instead I just worked with what I had already made. 

Although the JavaScript tests are making my life a whole lot easier, I wish I knew how to do integration tests to test how it interacts with my HTML.  Currently I am using webpack and just manually testing it in my browser, but the console errors aren't incredibly clear when using webpack.

At this point I still need to implement ship rotation and a visual effect when the ships are destroyed. I also need to have it check for when the ships are sunk.

---

5/7
The batleship.js scripts that I had wrote previously were not working out.  It was very apparent that I didn't know what I was doing when I wrote them.  I have rewrote everything today and am progressing much faster now.  

I was also having trouble with the table UI so I rewrote that as well. 

        Create conditions so that the game ends once one players ships have all been sunk. This function is appropriate for the Game module.

I ran into a lot of issues with Virtual Box during this.  There were some loop issues and it basically destroyed my Xubuntu.  Literally would not boot any more half the time, and the other half the time, it was constantly freezing, black screening, or not detecting my mouse.  I managed to commit the project but I realized VM was kind of unusable.  Lately it had been eating up all my RAM, so I got more, but it seems to just not free up RAM whenever I restart it, meaning every time it lags/freezes and I need to reboot, it eats up another 4GB of RAM for seeingly no reason.

I installed WSL and it is working a lot better.  

    Finish it up
        There are several options available for letting users place their ships. You can let them type coordinates for each ship, or investigate implementing drag and drop.
        You can polish the intelligence of the computer player by having it try adjacent slots after getting a ‘hit’.
        Optionally, create a 2 player option that lets users take turns by passing the device back and forth. If you’re going to go this route, make sure the game is playable on a mobile screen and implement a ‘pass device’ screen so that players don’t see each others boards!

