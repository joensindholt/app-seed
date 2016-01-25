var globalPath = {
    app : "./src/",
    bower : "./bower_components/"
};

module.exports = {
	app: {
        base: globalPath.app,
        html: [
            globalPath.app+"index.html"
        ],
        sass:[
            globalPath.app+'sass/**/*.scss'
        ],
        partials: [
            globalPath.app+"**/*.html"
        ],
        img: [
            globalPath.app+"img/**/*",
        ],
        fonts: [
            globalPath.app+'fonts/**/*'
        ],
        sprite: [
            globalPath.app+"/sprite/**/*"
        ],
        tests: [
            globalPath.app+"/**/*_test.js"
        ]
    },
    libs: {
        script:[
            globalPath.bower+'angular/angular.js',
            globalPath.bower+'angular-route/angular-route.js',
            globalPath.bower+'angular-ui-router/release/angular-ui-router.js'
        ],
        css:[
        ],
        fonts: [
        ],
        sass:[
        ]
    },
    dist : "./dist/"
};