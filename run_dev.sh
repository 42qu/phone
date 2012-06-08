PREFIX=$(cd "$(dirname "$0")"; pwd)
mkdir -p $PREFIX/js
jitter $PREFIX/coffee/ $PREFIX/js/
 


