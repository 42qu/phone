PREFIX=$(cd "$(dirname "$0")"; pwd)
coffee -wc -o $PREFIX/js/ $PREFIX/coffee/*.coffee


