run-server:
	./node_modules/.bin/nodemon index.js

# NODE_ENV=production allows to ignore the react-hot-loader preset.
tests:
	NODE_ENV=production ./node_modules/.bin/ava

watch-tests:
	NODE_ENV=production ./node_modules/.bin/ava --watch
