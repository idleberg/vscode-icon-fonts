# Icon Fonts for Visual Studio Code

[![The MIT License](https://flat.badgen.net/badge/license/MIT/orange)](http://opensource.org/licenses/MIT)
[![GitHub](https://flat.badgen.net/github/release/idleberg/vscode-icon-fonts)](https://github.com/idleberg/vscode-icon-fonts/releases)
[![Visual Studio Marketplace](https://vsmarketplacebadge.apphb.com/installs-short/idleberg.icon-fonts.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=idleberg.icon-fonts)
[![CircleCI](https://flat.badgen.net/circleci/github/idleberg/vscode-icon-fonts)](https://circleci.com/gh/idleberg/vscode-icon-fonts)

Snippets for a variety of icon fonts ([see details](https://github.com/idleberg/vscode-icon-fonts#prefixes)).

This package is also available for [Atom](https://github.com/idleberg/atom-icon-fonts) and [Sublime Text](https://github.com/idleberg/sublime-icon-fonts).

![Screenshot](https://raw.githubusercontent.com/idleberg/vscode-icon-fonts/master/images/screenshot.gif)

*Screenshot nicked from the Sublime Text package, but you get the idea*

## Installation

### Extension Marketplace

Launch Quick Open, paste the following command, and press <kbd>Enter</kbd>

`ext install idleberg.icon-fonts`

### CLI

With [shell commands](https://code.visualstudio.com/docs/editor/command-line) installed, you can use the following command to install the extension:

`$ code --install-extension idleberg.icon-fonts`

### Packaged Extension

Download the packaged extension from the the [release page](https://github.com/idleberg/vscode-icon-fonts/releases) and install it from the command-line:

```bash
$ code --install-extension path/to/icon-fonts-*.vsix
```

Alternatively, you can download the packaged extension from the [Open VSX Registry](https://open-vsx.org/) or install it using the [`ovsx`](https://www.npmjs.com/package/ovsx) command-line tool:

```bash
$ ovsx get idleberg.icon-fonts
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

Snippets are limited to the `html`, `css|less|sass|scss|stylus`, `jsx`, `blade` and `vue` scopes. Typing the class name of an icon using the designated prefix will complete to a tag containing the icon class. Exceptions are `fa-layers`, `fa-layers-counter`, `fa-layers-text` and `fa-layers` (`<span>`).

### Prefixes

| Prefix            | Icon Font                               | Version |
|-------------------|-----------------------------------------|---------|
| `ai`              | [Android Icons][ai]                     | 1.0.0   |
| `cc`              | [Creative Commons Icon Font][cc]        | 1.2.1   |
| `bx`              | [BoxIcons][bx]                          | -       |
| `dashicons`       | [WordPress Dashicons][dashicons]        | –       |
| `devicons`        | [Devicons][devicons]                    | 1.8.0   |
| `el`              | [Elusive Icons][el]                     | 2.0.0   |
| `fas`,`far`,`fab` | [Font Awesome Pro][fa]                  | 5.15.3  |
| `fl`              | [Font Logos][fl]                        | 0.12    |
| `glyphicon`       | [Bootstrap Glyphicons][glyphicon]       | 3.3.7   |
| `icono`           | [Icono][icono]                          | 1.3.0   |
| `ion`             | [Ionicons][ion]                         | 2.0.1   |
| `mdi`             | [Material Design Icons][mdi]            | 5.9.55  |
| `mfg`             | [MFG Labs Iconset][mfg]                 | –       |
| `mfizz`           | [Font Mfizz][mfizz]                     | 2.4.1   |
| `mio`             | [Material Design Icons (Official)][mio] | 3.0.1   |
| `octicon`         | [GitHub Octicons][octicon]              | 4.1.0   |
| `oi`              | [Open Iconic][oi]                       | 1.1.0   |
| `openwebicons`    | [OpenWeb Icons][openwebicons]           | 1.6.2   |
| `pf`              | [PaymentFont][pf]                       | 1.2.5   |
| `ri`              | [RemixIcon][ri]                         | 2.5.0   |
| `st`              | [Stack Icons][st]                       | 1.0.0   |
| `typcn`           | [Typicons][typcn]                       | 2.1.1   |
| `wi`              | [Weather Icons][wi]                     | 2.0.12  |
| `zmdi`            | [Material Design Iconic Font][zmdi]     | 2.2.0   |

⚠️ Several previously supported fonts have been removed and are now available in the [SVG icons](https://github.com/idleberg/vscode-svg-icons) package or the icon fonts [legacy package](https://github.com/idleberg/vscode-icon-fonts-legacy).

Examples:

* `fa-check`+<kbd>Tab</kbd> completes to `<i class="fa fa-check"></i>`
* `glyphicon-check`+<kbd>Tab</kbd> completes to `<span class="glyphicon glyphicons-check"></span>`
* well, you get the idea

## License

This work is licensed under [The MIT License](https://opensource.org/licenses/MIT)

[ai]: https://github.com/opoloo/androidicons
[bx]: https://github.com/atisawd/boxicons
[cc]: https://github.com/cc-icons/cc-icons
[dashicons]: https://github.com/WordPress/dashicons
[devicons]: https://github.com/vorillaz/devicons
[el]: https://github.com/reduxframework/Elusive-Icons
[fa]: https://github.com/FortAwesome/Font-Awesome-Pro
[fl]: https://github.com/Lukas-W/font-linux
[glyphicon]: https://github.com/twbs/bootstrap/tree/v3.3.7
[icono]: https://github.com/saeedalipoor/icono
[ion]: https://github.com/driftyco/ionicons
[mdi]: https://github.com/Templarian/MaterialDesign-Webfont
[mfg]: https://github.com/MfgLabs/mfglabs-iconset
[mfizz]: https://github.com/fizzed/font-mfizz
[mio]: https://github.com/google/material-design-icons
[octicon]: https://github.com/primer/octicons/tree/v4.1.0
[oi]: https://github.com/iconic/open-iconic
[openwebicons]: https://github.com/pfefferle/openwebicons
[pf]: https://github.com/vendocrat/PaymentFont
[ri]: https://github.com/Remix-Design/RemixIcon
[st]: https://github.com/parkerbennett/stackicons
[typcn]: https://github.com/stephenhutchings/typicons.font
[wi]: https://github.com/erikflowers/weather-icons
[zmdi]: https://github.com/zavoloklom/material-design-iconic-font
