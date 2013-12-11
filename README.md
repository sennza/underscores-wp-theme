# Generate a custom Underscores theme using Grunt's Project Scaffolding

> Create an [Underscores](https://github.com/Automattic/_s) based WordPress theme with [grunt-init][]. It'll ask you for some basic info and the template files you'd like for your Underscores based theme

[grunt-init]: http://gruntjs.com/project-scaffolding

## Installation
If you haven't already done so, install [grunt-init][].

Once grunt-init is installed, place this template in your `~/.grunt-init/` directory. It's recommended that you use git to clone this template into that directory, as follows:

### Linux/Mac Users

```
git clone git@github.com:sennza/underscores-wp-theme.git ~/.grunt-init/underscores-wp-theme
```

### Windows Users

```
git clone git@github.com:sennza/underscores-wp-theme.git %USERPROFILE%/.grunt-init/underscores-wp-theme
```

## Demo
![Underscores WP Theme](http://www.sennza.com.au/wp-content/uploads/2013/10/underscores-wp-theme.gif "Underscores WP Theme")

## Usage

At the command-line, cd into an empty directory, for your theme. e.g. wp-content/themes/yourtheme run this command and follow the prompts.

```
grunt-init underscores-wp-theme
```

_Note that this template will generate files in the current directory, so be sure to change to a new directory first if you don't want to overwrite existing files._

Install the NPM modules required to actually process your newly-created project by running:

```
npm install
```

Run Grunt so it can generate your style.css

```
grunt
```

During development run

```
grunt watch
```

##Roadmap

* ~~v0.2.0	Add more prompts for files in the `inc` folder and remove those includes from `functions.php` if required.~~
* ~~v0.3.0	Clean up CSS in `sass` so it's nested as it's currently only stubs taken from Underscores original style.css~~
* ~~v0.4.0	Add Grunt watch tasks for CSS & JS minification, Compass, CSS Janus for RTL~~
* v0.5.0	Add [SVG to webfont converter for Grunt](https://npmjs.org/package/grunt-webfont)
* v0.6.0	Add [Minify PNG and JPEG images](https://npmjs.org/package/grunt-contrib-imagemin)
* v0.7.0	Add build task to grunt to generate a theme zip that doesn't contain any Sass or sass-cache and node-modules
* v0.8.0	Concatenate JS files and add check for SCRIPT_DEBUG and alter wp_enqueue_scripts accordingly in functions.php

## Release History

* 2013-12-11	v0.4.0	Add CSS Janus, Compass, CSS &amp; JS and Grunt tasks
* 2013-12-10	v0.3.0	Nest our Sass files.
* 2013-12-10	v0.2.0	Yay! A smart way to include files :)
* 2013-10-14	v0.1.0	Initial public release.
