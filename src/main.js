/*
Qiuting Zhao
Title: GO! GO! Little Red.
Time: ~ 7 hours
Points breakdown:
    Implement a simultaneous two-player mode: 30 pts
        Press → at the menu scene can go to the two-player mode
    Redesign the game's artwork, UI, and sound to change its theme: 60 pts
        The theme is no longer sci-fi, it follows the story of famous fairy tale Little Red Riding Hood,
        players can control Little Red and her Grandma to defeat the Wolf. 
        And the sound and UI also change to a warm and lovely style.
    Add your own (copyright-free) background music to the Play scene: 5 pts
    Allow the player to control the Rocket after it's fired: 5 pts
    Replace the UI borders with new artwork: 10 pts
    Create a new animated sprite for the Spaceship enemies: 10 pts
    Create a new title screen (e.g., new artwork, typography, layout): 10 pts
    Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points: 20 pts
    Create new artwork for all of the in-game assets (rocket, spaceships, explosion): 20 pts
NOTE: The above points breakdown has repeated points, since I don't know which one is repeated, so I put all together.
*/
let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [ Menu, Play ]
}
let game = new Phaser.Game(config);
// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT, keyA, keyD, keyUP;