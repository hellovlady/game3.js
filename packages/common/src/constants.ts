export const APP_TITLE = 'Game3.js';

// General
export const WS_PORT = 3001;
export const ROOM_NAME = 'game'; // Colyseus Room<T>'s name (no need to change)
export const ROOM_REFRESH = 3000;
export const DEBUG = false;

// GAME NAMES
export const TOSIOS = 'tosios';
export const WOM = 'wom';
export const FP = 'flappybird';

// GAME IMAGES
export const TOSIOS_IMG = 'tosios.gif';
export const WOM_IMG = 'wom.gif';
export const FP_IMG = 'flappybird.gif';

// Game
export const MAPS_NAMES = ['small', 'gigantic'];
export const ROOM_PLAYERS_MIN = 1;
export const ROOM_PLAYERS_MAX = 16;
export const ROOM_PLAYERS_SCALES = [1, 2, 4, 8, 16];
export const ROOM_NAME_MAX = 16;
export const PLAYER_NAME_MAX = 16;
export const LOG_LINES_MAX = 5;
export const LOBBY_DURATION = 1000 * 10; // 10 seconds
export const GAME_DURATION = 1000 * 90; // 90 seconds
export const GAME_MODES = ['score attack', 'deathmatch', 'team deathmatch'];

// Background
export const BACKGROUND_COLOR = '#25131A';

// Tile (rectangle)
export const TILE_SIZE = 32;

// Player (circle)
export const PLAYER_SIZE = 32;
export const PLAYER_SPEED = 3;
export const PLAYER_MAX_LIVES = 3;
export const PLAYER_WEAPON_SIZE = 12; // The bigger, the further away a bullet will be shot from.

// Monster
export const MONSTERS_COUNT = 3;
export const MONSTER_SIZE = 32;
export const MONSTER_SPEED_PATROL = 0.75;
export const MONSTER_SPEED_CHASE = 1.25;
export const MONSTER_SIGHT = 128;
export const MONSTER_LIVES = 3;
export const MONSTER_IDLE_DURATION_MIN = 1000;
export const MONSTER_IDLE_DURATION_MAX = 3000;
export const MONSTER_PATROL_DURATION_MIN = 1000;
export const MONSTER_PATROL_DURATION_MAX = 3000;
export const MONSTER_ATTACK_BACKOFF = 3000;

// Props (rectangle)
export const FLASKS_COUNT = 3;
export const FLASK_SIZE = 24;

// Bullet (circle)
export const BULLET_SIZE = 4;
export const BULLET_SPEED = 12;
export const BULLET_RATE = 400; // The bigger, the slower.
