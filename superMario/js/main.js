/**
 * Created by Aaron on 2017/5/4.
 */
var game = new Phaser.Game(480, 320, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    game.load.tilemap('level1', 'assets/marioWorld.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('gameTiles', 'assets/super_mario.png');

}
var map;
var layer;
function create() {
    map = game.add.tilemap('level1');
    //marioworld :json 中tilesets的name
    map.addTilesetImage('marioworld', 'gameTiles');
    //\u5757\u5c42 1 ： json中layers的name
    layer = map.createLayer("\u5757\u5c42 1");
    layer.resizeWorld();

}

function update() {

}
