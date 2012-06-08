rm js -rf
cp js_dev js -R
find  js/ -name "*.js"  -exec uglifyjs -nc --overwrite {} \;


