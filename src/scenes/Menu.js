class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    /*preload() {
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
        this.load.image('grass', './assets/grass.png');
    }*/
    create() {
        this.add.text(20, 20, "Rocket Patrol Menu");
        this.scene.start("playScene");
        /*this.grass = this.add.tileSprite(0, 0, 640, 480, 'grass').setOrigin(0, 0);
        //this.add.text(20, 20, "Rocket Patrol Menu");
        //this.scene.start("playScene");
        let menuConfig = {
            fontFamily: 'Impact',
            fontSize: '40px',
            backgroundColor: '#FFD8DE',
            color: '#7FA8CF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        this.add.text(game.config.width/2, game.config.height/2 - borderUISize * 3 - borderPadding, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
        menuConfig.fontFamily = 'Comic Sans MS';
        menuConfig.fontSize = '28px';
        this.add.text(game.config.width/2, game.config.height/2, 'Player1: Use ←→ arrows to move & ↑ to fire', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding + 10, 'Player2: Use (A)(D) to move & (F) to fire', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#FFDBA7';
        menuConfig.color = '#AB594B';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize * 2 + borderPadding * 2 + 20, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        
    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            // one player
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60000,
                players: 1  
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            // two player
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 45000,
                players: 2 
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');
        }*/
    }
}