# Icon Fonts for Visual Studio Code

[![The MIT License](https://img.shields.io/badge/license-MIT-orange.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![GitHub](https://img.shields.io/github/release/idleberg/vscode-icon-fonts.svg?style=flat-square)](https://github.com/idleberg/vscode-icon-fonts/releases)
[![Visual Studio Marketplace](https://vsmarketplacebadge.apphb.com/installs-short/idleberg.icon-fonts.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=idleberg.icon-fonts)
[![Travis](https://img.shields.io/travis/idleberg/vscode-icon-fonts.svg?style=flat-square)](https://travis-ci.org/idleberg/vscode-icon-fonts)
[![David](https://img.shields.io/david/dev/idleberg/vscode-icon-fonts.svg?style=flat-square)](https://david-dm.org/idleberg/vscode-icon-fonts?type=dev)

Snippets for a variety of icon fonts ([see details](https://github.com/idleberg/vscode-icon-fonts#prefixes)).

This package is also available for [Atom](https://github.com/idleberg/atom-icon-fonts) and [Sublime Text](https://github.com/idleberg/sublime-icon-fonts).

![Screenshot](https://raw.githubusercontent.com/idleberg/vscode-icon-fonts/master/images/screenshot.gif)

*Screenshot nicked from the Sublime Text package, but you get the idea*

## Installation

### Extension Marketplace

Launch Quick Open, paste the following command, and press <kbd>Enter</kbd>

`ext install icon-fonts`

### Packaged Extension

Download the package extension from the the [release page](https://github.com/idleberg/vscode-icon-fonts/releases) and install it from the command-line:

```bash
$ code --install-extension icon-font-*s.vsix
```

### Clone Repository

Change to your Visual Studio Code extensions directory:

```bash
# Windows
$ cd %USERPROFILE%\.vscode\extensions

# Linux & macOS
$ cd ~/.vscode/extensions/
```

Clone repository as `icon-fonts`:

```bash
$ git clone https://github.com/idleberg/vscode-icon-fonts icon-fonts
```

### Usage

Snippets are limited to the `html`, `css|less|sass|scss|stylus`, `jsx`, `blade` and `vue` scopes. Typing the class name of an icon using the designated prefix will complete to a tag containing the icon class. Exceptions are `fa-stack` (`<span>`) and `fa-ul` (`<ul>`).

### Prefixes

Prefix         | Icon Font                           | Version | cdnjs | jsDelivr
---------------|-------------------------------------|---------|-------|---------
`ai`           | [Android Icons][ai]                 | 1.0.0   | 🚫    | 🚫
`brandico`     | [Brandico Font][brandico]           | –       | 🚫    | 🚫
`cc`           | [Creative Commons Icon Font][cc]    | 1.2.1   | ✅    | ✅
`dashicons`    | [WordPress Dashicons][dashicons]    | –       | 🚫    | 🚫
`devicons`     | [Devicons][devicons]                | 1.8.0   | ✅    | ✅
`el`           | [Elusive Icons][el]                 | 2.0.0   | 🚫    | 🚫
`fa`           | [Font Awesome][fa]                  | 4.7.0   | ✅    | ✅
`fi`           | [Foundation Icons][fi]              | 3.0     | ✅    | ✅
`fl`           | [Font Linux][fl]                    | 0.9     | 🚫    | 🚫
`geomicon`     | [Geomicons Open][geomicon]          | 2.0.0   | 🚫    | ✅
`glyphicon`    | [Bootstrap Glyphicons][glyphicon]   | 3.3.6   | 🚫    | 🚫
`icofont`      | [ShapeBootstrap IcoFont][icofont]   | 1.0.0b  | 🚫    | 🚫
`icono`        | [Icono][icono]                      | 1.3.0   | ✅    | 🚫
`ion`          | [Ionicons][ion]                     | 2.0.1   | 🚫    | 🚫
`mdi`          | [Material Design Icons][mdi]        | 1.7.22  | ✅    | 🚫
`mfg`          | [MFG Labs Iconset][mfg]             | –       | 🚫    | 🚫
`mfizz`        | [Font Mfizz][mfizz]                 | 2.3.0   | ✅    | 🚫
`octicon`      | [GitHub Octicons][octicon]          | 4.1.0   | 🚫    | 🚫
`oi`           | [Open Iconic][oi]                   | 1.1.0   | 🚫    | ✅
`openwebicons` | [OpenWeb Icons][openwebicons]       | 1.4.2   | ✅    | ✅
`pf`           | [PaymentFont][pf]                   | 1.1.2   | ✅    | 🚫
`ratchicon`    | [Ratchicons][ratchicon]             | 2.0.2   | ✅    | ✅
`st`           | [Stack Icons][st]                   | 1.0.0   | 🚫    | 🚫
`typcn`        | [Typicons][typcn]                   | 2.0.7   | 🚫    | 🚫
`ui`           | [Semantic UI Icons][ui]             | 2.0.7   | ✅    | ✅
`wi`           | [Weather Icons][wi]                 | 2.0.10  | ✅    | 🚫
`zmdi`         | [Material Design Iconic Font][zmdi] | 2.2.0   | ✅    | 🚫

Several previously supported fonts have been removed and are now available in the [SVG icons](https://github.com/idleberg/vscode-svg-icons) package or the icon fonts [legacy package](https://github.com/idleberg/vscode-icon-fonts-legacy).

Examples:

* `fa-check`+<kbd>Tab</kbd> completes to `<i class="fa fa-check"></i>`
* `glyphicon-check`+<kbd>Tab</kbd> completes to `<span class="glyphicon glyphicons-check"></span>`
* well, you get the idea

### CDNs

If a supported CDN is indicated in the [table](#prefixes) above, you can use the prefixes `cdnjs` or `jsdelivr` to quickly insert a link to the CDN-hosted asset:

Examples:

* `cdnjs-fa`+<kbd>Tab</kbd> completes to a `<link>` tag to the Font Awesome style-sheet
* `jsdelivr-fa`+<kbd>Tab</kbd> completes to a `<link>` tag to the Font Awesome style-sheet
* `jsdelivr-geomicon`+<kbd>Tab</kbd> completes to a `<script>` tag to the Geomicons script

## License

This work is licensed under [The MIT License](https://opensource.org/licenses/MIT)

## Donate

You are welcome support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/vscode-icon-fonts) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`

[ai]: http://www.androidicons.com
[brandico]: https://github.com/fontello/brandico.font
[cc]: https://github.com/cc-icons/cc-icons
[dashicons]: https://github.com/WordPress/dashicons
[devicons]: https://github.com/vorillaz/devicons
[el]: https://github.com/reduxframework/Elusive-Icons
[fa]: https://github.com/FortAwesome/Font-Awesome
[fi]: http://zurb.com/playground/foundation-icons
[fl]: https://github.com/Lukas-W/font-linux
[geomicon]: https://github.com/jxnblk/geomicons-open
[glyphicon]: https://getbootstrap.com/components/#glyphicons
[icofont]: http://icofont.com/
[icono]: https://github.com/saeedalipoor/icono
[ion]: https://github.com/driftyco/ionicons
[line]: http://www.elegantthemes.com/blog/resources/how-to-use-and-embed-an-icon-font-on-your-website
[mdi]: https://github.com/Templarian/MaterialDesign-Webfont
[mfg]: https://github.com/MfgLabs/mfglabs-iconset
[mfizz]: https://github.com/fizzed/font-mfizz
[octicon]: https://github.com/primer/octicons/tree/v4.1.0
[oi]: https://github.com/iconic/open-iconic
[openwebicons]: https://github.com/pfefferle/openwebicons
[pf]: https://github.com/vendocrat/PaymentFont
[ratchicon]: http://goratchet.com/components/#ratchicons
[st]: https://github.com/parkerbennett/stackicons
[typcn]: https://github.com/stephenhutchings/typicons.font
[ui]: http://semantic-ui.com/elements/icon.html
[wi]: https://github.com/erikflowers/weather-icons
[zmdi]: https://github.com/zavoloklom/material-design-iconic-font
