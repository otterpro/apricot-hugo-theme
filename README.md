# Apricot Hugo Theme

Apricot is a theme for blogs. Originally created for Jekyll, I migrated my blog to Hugo and ported the theme as well.

## Goals
* Made specifically for blogs
* Easy to read style, with high contrast and large fonts
* Stylish Table of Contents (not done yet)

## Pre-requisite
* Install Hugo on your computer.

## Installation
Inside the folder of our Hugo site, run:

	$ git clone https://github.com/otterpro/apricot-hugo-theme/"
	$ cd apricot-hugo-theme

## Configuration
The `config.toml` should be changed to your needs.

To change the header image for individual blog posts, add the 'img' in the front-matter.

	---
	title: Hello World
	img: /img/selfie1.jpg
	---
	Hello world...

To change the header image for home page, add `headerImage` in `config.toml`

	[params]
		...
		headerImage = "https://source.unsplash.com/zgTXw53Pdko/800x450"
* Don't forget to place the image file in /static/img/.


Example `config.toml`:
To customize your theme you can use the following settings.

	baseURL = "http://www.example.com"
	languageCode = "en-us"
	title = "My Website Title!!!"
	theme = "apricot-hugo-theme"
	summaryLength = 15
	copyright = "Copyright &copy 2018 (INSERT MY NAME). All Rights Reserved."
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

