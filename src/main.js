import { k } from "./kaboomCtx";

k.loadSprite("spritesheet", "./public/home.png", {
    sliceX: 16,
    sliceY: 16,
    anims: {
        "idle-down": 949,
        "walk-down": { from: 949, to: 952, loop: true, speed: 8 },
        "idle-side": 987,
        "walk-side": { from: 987, to: 990, loop: true, speed: 8 },
        "idle-up": 1023,
        "walk-up": { from: 1023, to: 1026, loop: true, speed: 8 },
      },
    });
    k.loadSprite("map", "./map.png");

