/**
 * Created by Aaron on 2017/5/5.
 */
/**
 * Created by Aaron on 2017/5/4.
 */
var game = new Phaser.Game(480, 320, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    game.load.tilemap('level1', 'assets/7777.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('gameTiles', 'assets/characters.png');

}
var map;
var layer;
var sprite;
function create() {
    map = game.add.tilemap('level1');
    //marioworld :json 中tilesets的name
    map.addTilesetImage('cc', 'gameTiles');
    //\u5757\u5c42 1 ： json中layers的name
    layer = map.createLayer("\u5757\u5c42 1");
    layer.resizeWorld();

    sprite = game.add.tileSprite(0, 0, 800, 600, '\u5bf9\u8c61\u5c42 1');
    sprite.animations.add('walk');
    sprite.animations.play('walk', 20, true);
}

function update() {

}