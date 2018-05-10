# Apricot Hugo Theme

Apricot is a theme for blogs. Originally created for Jekyll, I migrated my blog to Hugo and ported the theme as well.

## Goals
* Made specifically for blogs
* Easy to read style, with high contrast and large fonts
* Stylish Table of Contents (not finished yet / coming soon)

<!--
## Special Notes

You can create a graphically formatted note (caution), warning, info or tip box.

	Tip
	: There is a better way to do this.

Floating box similar to `aside`.

	>>> Place text here...
-->

## Pre-requisite
* Install Hugo on your computer.

## Installation
Inside the folder of our Hugo site, run:

	$ cd MY_SITE_PATH/themes/
	$ git clone git://github.com/otterpro/apricot-hugo-theme/"

As usual, add to site's config.toml: `theme = "apricot-hugo-theme"` to activate the theme.
#### Notes:
* There are no other dependencies.  
* There are no additional configuration required to get started. 
* It was tested with plain `hugoBasicExample` site. 
* It was tested with various `baseURL` to make sure it works under different paths.  This seems to be the most common issue with the new theme submission.

## Configuration
The `config.toml` should be changed to your needs.

To change the header image for individual blog posts, add the `headerImage` in the front-matter.

Example: `/content/hello.md`

	---
	title: Hello World
	headerImage: img/selfie1.jpg
	---
	Hello world...

To change the header image for home page, add `headerImage` in `config.toml`

	[params]
		...
		headerImage = "https://source.unsplash.com/zgTXw53Pdko/800x450"
* Don't forget to place the image file in the correct directory (ie `/static/img/`) .

Example `config.toml`:
This is an example of customized config 

	baseURL = "http://www.example.com"
	languageCode = "en-us"
	title = "My Website Title!!!"
	theme = "apricot-hugo-theme"
	summaryLength = 15
	copyright = "Copyright &copy; 2018 (INSERT MY NAME). All Rights Reserved."
	googleAnalytics = "XXXXX"
	disqusShortname = "XXXXX"

	# Pagination.  Show 10 articles in the home page
	paginate = 10

	sectionPagesMenu = "main"
	[menu]
	 [[menu.main]]
	    name = "Github"
	    url = "https://github.com/GITHUB_USERNAME/"
	    weight = -110

	[blackfriday]
	    extensions = [ "noEmptyLineBeforeBlock"]
		extensionsmask = ["spaceHeaders", "backslashLineBreak"]

	[params]
		email = "ME@example.com"
		github= "GITHUB_USERNAME"
		twitter = "TWITTER_NAME"
		headerImage = "https://source.unsplash.com/zgTXw53Pdko/800x450"

## License
This theme is released under the [MIT License](https://github.com/otterpro/apricot-hugo-theme/blob/master/LICENSE.md).

## Additional Thanks
* [Image of apricot label from California Historical Society](https://flic.kr/p/rbYkYV)
* [HTML inline SVG Icons](http://codepen.io/ruandre/pen/howFi)
* [Font-Awesome-SVG-PNG](https://github.com/encharm/Font-Awesome-SVG-PNG)
