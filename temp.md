# Temp codes
```
Place to hold Temporary codes while I'm making changes

{{/* if hasPrefix .Params.img "http" */}}
{{/* else }} /img/{{ .Params.img }} {{ end */}}
    {{/* if .Params.img}}{{ .Params.img | safeHTML */}}

    {{/* else if .Site.Params.headerImage }}{{ .Site.Params.headerImage | safeHTML */ }}

{{ $headerImage2 := (.Params.img | default .Site.Params.headerImage) | default "img/header_default.jpg"  }}

<header class="site-header" 
  style="background:url(
    {{ if .Params.img}}
      '{{.Params.img | safeCSS }}'
    {{ else if .Site.Params.headerImage }}
      '{{ .Site.Params.headerImage | safeHTML }}'
      '{{ .Site.Params.headerImage | safeHTMLAttr }}'
      '{{ .Site.Params.headerImage | safeURL }}'
      '{{ .Site.Params.headerImage | safeCSS }}'
    {{ else }}
      '{{"img/header_default.jpg" | absURL }}'
    {{ end }}
    ) top center no-repeat fixed ; background-size:100% auto;
    "
    >
	
FINAL
{{ $headerImage := $.Param "headerImage" | default "img/header_default.jpg" }}

{{/* remove leading "/" if present, but not if there are "//" */}}
{{ print "header Image:" $headerImage}}

{{ print "headerImage after replace:" }}
{{ $headerImage := $headerImage | replaceRE "^/([^/])" "$1" }} 
*{{ $headerImage}}*

{{ print "headerImage relURL:" ($headerImage  | relURL) }}
{{ print "headerImage absURL:" ($headerImage  | absURL) }}
{{ $headerImage := $headerImage | absURL }}
{{ print "final headerImage as variable:"}}
*{{$headerImage }}*
{{ print ".Params.headerImage:"  .Params.headerImage}}
{{ print ".Params.headerImage absurl:"}} {{ (.Params.headerImage| default "NONE") | absURL }}
{{ $headerImage := ($headerImage | absURL) | safeHTML }}
{{ "test.css" | absURL }}
{{ "img/no-slash-test.jpg" | absURL }}
{{ "/img/start-slash-test.jpg" | absURL }}
{{ "img/no-slash-test.jpg" | relURL }}
{{ "/img/start-slash-test.jpg" | relURL}}


```
