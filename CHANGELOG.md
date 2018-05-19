# Release Notes (CHANGELOG)

## Unreleased (WIP/dev branch) 
* replaced js code that opens external link with Hugo/BlackFriday's built-in setting
* Google Analytics
* add Table of Contents in single.html and in config.toml, frontmatter
	* TOC is hidden by default in mobile browser
* add aside-like box using `>>>`
* rename file CHANGES.md to CHANGELOG.md

## v0.1.3
* add generic favicon.ico
* open external link in new window (`_blank` target).  See `js/main.js`.
	* this was removed in next release (using BlackFriday)

## v0.1.2
* fixed absURL issue with tags/categories in article_meta.html

## v0.1.1
* fixed absURL issue with various `baseURL` paths

## v0.1.0
* first release

## Future plans (in order of priority)
- [ ] add wikilink for internal pages
- [ ] Youtube, Gist, CodePen integration
- [ ] paginate - add numbered page selector 
- [ ] add 2 column layout as feature
- [ ] independent 2 column using float (not flexbox) ie Pro/Con (comparison) box layout
- [ ] use `Socials` params instead of hard-coded params (Twitter, Instagram, etc)
- [ ] clean up source files, remove unnecessary CSS
- [ ] minify source, if needed
- [ ] dark mode
- [ ] improve README.md
- [ ] test and include Disqus
