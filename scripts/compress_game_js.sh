#! /bin/bash
JS_PATH=/home/cjy/acapp/game/static/js/
JS_PATH_DIST=${JS_PATH}dist/
JS_PATH_SRC=${JS_PATH}src/

find $JS_PATH_SRC -type f -name '*.js' | sort | xargs cat > ${JS_PATH_DIST}game.js

cd /home/cjy/acapp/
echo yes | python3 manage.py collectstatic