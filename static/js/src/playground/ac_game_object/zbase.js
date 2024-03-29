let AC_GAME_OBJECT = [];

class AcGameObject {
    constructor() {
        AC_GAME_OBJECT.push(this);

        this.has_called_start = false; //是否执行过start()函数
        this.timedelta = 0; //当前帧距离上一帧的时间间隔
    }
    start() { //只会在第一帧执行一次

    }
    update() { //每帧都会执行一次

    }

    on_destroy() { //在被销毁前执行一次

    }

    destroy() { //删掉该物体
        this.on_destroy();
        for (let i = 0; i < AC_GAME_OBJECT.length; i++) {
            if (AC_GAME_OBJECT[i] === this) {
                AC_GAME_OBJECT.splice(i, 1);
                break;
            }
        }
    }
}


let last_timestamp;
let AC_GAME_ANIMATION = (timestamp) => {
    for (let i = 0; i < AC_GAME_OBJECT.length; i++) {
        let obj = AC_GAME_OBJECT[i];
        if (!obj.has_called_start) {
            obj.start();
            obj.has_called_start = true;//这里自作聪明，把他写到start中导致翻车
        } else {
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }
    last_timestamp = timestamp;
    requestAnimationFrame(AC_GAME_ANIMATION);
}

requestAnimationFrame(AC_GAME_ANIMATION);