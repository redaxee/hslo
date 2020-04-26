



<!DOCTYPE html>
<html>
<head>
  <title>NESTO v.5.2.5 By Érnest </title>
  <meta charset="UTF-8">
  <meta name="robots" content="noindex">
  <meta name="googlebot" content="noindex">
  <meta name="version" content="5.3.2">
  <meta name="renderer-type" content="Canvas">
  
  
  
  
   <!--LINK TO UR HOST-->
  <script type="text/javascript" src="https://hslov5.glitch.me/lib.js"></script>
  
  
  

  
  
  
  
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css">
  <link href="https://fonts.googleapis.com/css?family=Oswald:300,400|Raleway:300,400,500|Ubuntu:400,500,700" rel="stylesheet">
  
  
     <!--LINK TO UR HOST-->
  <link rel="stylesheet" type="text/css" href="">
  
  
  
  
  
  <!--<script src="https://www.google.com/recaptcha/api.js?render=6LcEt74UAAAAAIc_T6dWpsRufGCvvau5Fd7_G1tY"></script>-->
  <script src="https://www.google.com/recaptcha/api.js?render=explicit&onload=asyncInit"></script>
  <!--<script src="https://www.google.com/recaptcha/api.js?render=explicit&onload=recaptchaAsyncInit" async defer></script>-->  
  <script type="text/javascript" src="//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0"></script>
  <script src="https://apis.google.com/js/platform.js"></script>
  <script src="https://unpkg.com/tippy.js@2.0.4/dist/tippy.all.min.js"></script>
  <script src="https://pixijs.download/v4.8.7/pixi.min.js"></script>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <style>.grecaptcha-badge{display:none}</style>
</head>
<body>
  
  <style> 
 
.minicolors {
  position: relative;
}
.minicolors-sprite {
  background-image: url(https://cdn.glitch.com/f33c0977-0c25-45e8-bb75-7b87a45880d1%2Fcolorpicker.png?v=1577329199877);
}
.minicolors-swatch {
  position: absolute;
  vertical-align: middle;
  background-position: -80px 0;
  border: solid 3px #505050;
  cursor: pointer;
  padding: 0;
  margin: 0;
  display: inline-block;
}
.minicolors-swatch-color {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.minicolors input[type="hidden"] + .minicolors-swatch {
  width: 28px;
  position: static;
  cursor: pointer;
}
.minicolors input[type="hidden"][disabled] + .minicolors-swatch {
  cursor: default;
}
.minicolors-panel {
  position: absolute;
  width: 173px;
  background: #fff;
  border: solid 2px #fff;
  border-left: 0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  z-index: 99999;
  box-sizing: content-box;
  display: none;
}
.minicolors-panel.minicolors-visible {
  display: block;
}
.minicolors-position-top .minicolors-panel {
  top: -154px;
}
.minicolors-position-right .minicolors-panel {
  right: 0;
}
.minicolors-position-bottom .minicolors-panel {
  top: auto;
}
.minicolors-position-left .minicolors-panel {
  left: 0;
}
.minicolors-with-opacity .minicolors-panel {
  width: 194px;
}
.minicolors .minicolors-grid {
  position: relative;
  top: 1px;
  left: 1px;
  width: 150px;
  height: 150px;
  background-position: -120px 0;
  cursor: crosshair;
}
.minicolors .minicolors-grid-inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 150px;
  height: 150px;
}
.minicolors-slider-saturation .minicolors-grid {
  background-position: -420px 0;
}
.minicolors-slider-saturation .minicolors-grid-inner {
  background-position: -270px 0;
  background-image: inherit;
}
.minicolors-slider-brightness .minicolors-grid {
  background-position: -570px 0;
}
.minicolors-slider-brightness .minicolors-grid-inner {
  background-color: #000;
}
.minicolors-slider-wheel .minicolors-grid {
  background-position: -720px 0;
}
.minicolors-opacity-slider,
.minicolors-slider {
  position: absolute;
  top: 1px;
  left: 152px;
  width: 20px;
  height: 150px;
  background-color: #fff;
  background-position: 0 0;
  cursor: row-resize;
}
.minicolors-slider-saturation .minicolors-slider {
  background-position: -60px 0;
}
.minicolors-slider-brightness .minicolors-slider {
  background-position: -20px 0;
}
.minicolors-slider-wheel .minicolors-slider {
  background-position: -20px 0;
}
.minicolors-opacity-slider {
  left: 173px;
  background-position: -40px 0;
  display: none;
}
.minicolors-with-opacity .minicolors-opacity-slider {
  display: block;
}
.minicolors-grid .minicolors-picker {
  position: absolute;
  top: 70px;
  left: 70px;
  width: 12px;
  height: 12px;
  border: solid 1px #000;
  border-radius: 10px;
  margin-top: -6px;
  margin-left: -6px;
  background: 0 0;
}
.minicolors-grid .minicolors-picker > div {
  position: absolute;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  border-radius: 8px;
  border: solid 2px #fff;
  box-sizing: content-box;
}
.minicolors-picker {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 2px;
  background: #fff;
  box-shadow: 0 0 2px #000;
  margin-top: 0;
  box-sizing: content-box;
}
.minicolors-swatches,
.minicolors-swatches li {
  margin: 5px 0 3px 5px;
  padding: 0;
  list-style: none;
  overflow: hidden;
}
.minicolors-swatches .minicolors-swatch {
  position: relative;
  float: left;
  cursor: pointer;
  margin: 0 4px 0 0;
}
.minicolors-with-opacity .minicolors-swatches .minicolors-swatch {
  margin-right: 7px;
}
.minicolors-swatch.selected {
  border-color: #000;
}
.minicolors-inline {
  display: inline-block;
}
.minicolors-inline .minicolors-input {
  display: none !important;
}
.minicolors-inline .minicolors-panel {
  position: relative;
  top: auto;
  left: auto;
  box-shadow: none;
  z-index: auto;
  display: inline-block;
}
.minicolors-theme-default .minicolors-swatch {
  top: -3px;
  right: 4px;
  width: 18px;
  height: 18px;
}
.minicolors-theme-default .minicolors-swatches .minicolors-swatch {
  margin-bottom: 2px;
  top: 0;
  left: 0;
  width: 18px;
  height: 18px;
}
.minicolors-theme-default.minicolors-position-right .minicolors-swatch {
  left: auto;
  right: 5px;
}
.minicolors-theme-default.minicolors {
  width: auto;
  display: inline-block;
}
.minicolors-theme-default .minicolors-input {
  height: 20px;
  width: auto;
  display: inline-block;
  padding-left: 10px;
}
.minicolors-theme-default.minicolors-position-right .minicolors-input {
  padding-right: 0;
  padding-left: 10px;
}
.minicolors-theme-bootstrap .minicolors-swatch {
  z-index: 2;
  top: 3px;
  left: 3px;
  width: 28px;
  height: 28px;
  border-radius: 3px;
}
.minicolors-theme-bootstrap .minicolors-swatches .minicolors-swatch {
  margin-bottom: 2px;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
}
.minicolors-theme-bootstrap .minicolors-swatch-color {
  border-radius: inherit;
}
.minicolors-theme-bootstrap.minicolors-position-right > .minicolors-swatch {
  left: auto;
  right: 3px;
}
.minicolors-theme-bootstrap .minicolors-input {
  float: none;
  padding-left: 44px;
}
.minicolors-theme-bootstrap.minicolors-position-right .minicolors-input {
  padding-right: 44px;
  padding-left: 12px;
}
.minicolors-theme-bootstrap .minicolors-input.input-lg + .minicolors-swatch {
  top: 4px;
  left: 4px;
  width: 37px;
  height: 37px;
  border-radius: 5px;
}
.minicolors-theme-bootstrap .minicolors-input.input-sm + .minicolors-swatch {
  width: 24px;
  height: 24px;
}
.minicolors-theme-bootstrap .minicolors-input.input-xs + .minicolors-swatch {
  width: 18px;
  height: 18px;
}
.input-group .minicolors-theme-bootstrap:not(:first-child) .minicolors-input {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.minicolors-theme-semanticui .minicolors-swatch {
  top: 0;
  left: 0;
  padding: 18px;
}
.minicolors-theme-semanticui input {
  text-indent: 30px;
}
.ps {
  -ms-touch-action: auto;
  touch-action: auto;
  overflow: hidden !important;
  -ms-overflow-style: none;
}
@supports (-ms-overflow-style: none) {
  .ps {
    overflow: auto !important;
  }
}
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .ps {
    overflow: auto !important;
  }
}


.ps.ps--active-x>.ps__scrollbar-x-rail,.ps.ps--active-y>.ps__scrollbar-y-rail {
    display: block;
    background-color: transparent
}

.ps.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail {
    background-color: #eee;
    opacity: .9
}

.ps.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail>.ps__scrollbar-x {
    background-color: #999;
    height: 11px
}

.ps.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail {
    background-color: #222;
    opacity: .9
}

.ps.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail>.ps__scrollbar-y {
    background-color: #505050;
    width: 6px
}

.ps>.ps__scrollbar-x-rail {
    display: block;
    position: absolute;
    opacity: .6;
    -webkit-transition: background-color .2s linear,opacity .2s linear;
    -o-transition: background-color .2s linear,opacity .2s linear;
    -moz-transition: background-color .2s linear,opacity .2s linear;
    transition: background-color .2s linear,opacity .2s linear;
    bottom: 0;
    height: 15px
}

.ps>.ps__scrollbar-x-rail>.ps__scrollbar-x {
    position: absolute;
    background-color: #aaa;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    -webkit-transition: background-color .2s linear,height .2s linear,width .2s ease-in-out,-webkit-border-radius .2s ease-in-out;
    transition: background-color .2s linear,height .2s linear,width .2s ease-in-out,-webkit-border-radius .2s ease-in-out;
    -o-transition: background-color .2s linear,height .2s linear,width .2s ease-in-out,border-radius .2s ease-in-out;
    -moz-transition: background-color .2s linear,height .2s linear,width .2s ease-in-out,border-radius .2s ease-in-out,-moz-border-radius .2s ease-in-out;
    transition: background-color .2s linear,height .2s linear,width .2s ease-in-out,border-radius .2s ease-in-out;
    transition: background-color .2s linear,height .2s linear,width .2s ease-in-out,border-radius .2s ease-in-out,-webkit-border-radius .2s ease-in-out,-moz-border-radius .2s ease-in-out;
    bottom: 2px;
    height: 6px
}

.ps>.ps__scrollbar-x-rail:active>.ps__scrollbar-x,.ps>.ps__scrollbar-x-rail:hover>.ps__scrollbar-x {
    height: 11px
}

.ps>.ps__scrollbar-y-rail {
    display: block;
    position: absolute;
    opacity: .6;
    -webkit-transition: background-color .2s linear,opacity .2s linear;
    -o-transition: background-color .2s linear,opacity .2s linear;
    -moz-transition: background-color .2s linear,opacity .2s linear;
    transition: background-color .2s linear,opacity .2s linear;
    right: 0;
    width: 10px
}

.ps>.ps__scrollbar-y-rail>.ps__scrollbar-y {
    position: absolute;
    background-color: #ff006e;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    -webkit-transition: background-color .2s linear,height .2s linear,width .2s ease-in-out,-webkit-border-radius .2s ease-in-out;
    transition: background-color .2s linear,height .2s linear,width .2s ease-in-out,-webkit-border-radius .2s ease-in-out;
    -o-transition: background-color .2s linear,height .2s linear,width .2s ease-in-out,border-radius .2s ease-in-out;
    -moz-transition: background-color .2s linear,height .2s linear,width .2s ease-in-out,border-radius .2s ease-in-out,-moz-border-radius .2s ease-in-out;
    transition: background-color .2s linear,height .2s linear,width .2s ease-in-out,border-radius .2s ease-in-out;
    transition: background-color .2s linear,height .2s linear,width .2s ease-in-out,border-radius .2s ease-in-out,-webkit-border-radius .2s ease-in-out,-moz-border-radius .2s ease-in-out;
    right: 2px;
    width: 6px;
}

.ps>.ps__scrollbar-y-rail:active>.ps__scrollbar-y,.ps>.ps__scrollbar-y-rail:hover>.ps__scrollbar-y {
    width: 6px
}

.ps:hover.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail {
    background-color: #eee;
    opacity: .9
}

.ps:hover.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail>.ps__scrollbar-x {
    background-color: #999;
    height: 11px
}

.ps:hover.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail {
    background-color: #14062b;
    opacity: .9
}

.ps:hover.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail>.ps__scrollbar-y {
    background-color: #ff006e;
    width: 6px
}

.ps:hover>.ps__scrollbar-x-rail,.ps:hover>.ps__scrollbar-y-rail {
    opacity: .6
}

.ps:hover>.ps__scrollbar-x-rail:hover {
    background-color: #eee;
    opacity: .9
}

.ps:hover>.ps__scrollbar-x-rail:hover>.ps__scrollbar-x {
    background-color: #eee
}

.ps:hover>.ps__scrollbar-y-rail:hover {
    background-color: rgba(0,0,0,0);
    opacity: .9
}

.ps:hover>.ps__scrollbar-y-rail:hover>.ps__scrollbar-y {
    background-color: #ff006e;
}

/*! * Font Awesome Free 5.3.1 by @fontawesome - https://fontawesome.com * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) */
.fa,
.fab,
.fal,
.far,
.fas {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
}
.fa-lg {
  font-size: 1.33333em;
  line-height: 0.75em;
  vertical-align: -0.0667em;
}
.fa-xs {
  font-size: 0.75em;
}
.fa-sm {
  font-size: 0.875em;
}
.fa-1x {
  font-size: 1em;
}
.fa-2x {
  font-size: 2em;
}
.fa-3x {
  font-size: 3em;
}
.fa-4x {
  font-size: 4em;
}
.fa-5x {
  font-size: 5em;
}
.fa-6x {
  font-size: 6em;
}
.fa-7x {
  font-size: 7em;
}
.fa-8x {
  font-size: 8em;
}
.fa-9x {
  font-size: 9em;
}
.fa-10x {
  font-size: 10em;
}
.fa-fw {
  text-align: center;
  width: 1.25em;
}
.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}
.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit;
}
.fa-border {
  border: 0.08em solid #eee;
  border-radius: 0.1em;
  padding: 0.2em 0.25em 0.15em;
}
.fa-pull-left {
  float: left;
}
.fa-pull-right {
  float: right;
}
.fa.fa-pull-left,
.fab.fa-pull-left,
.fal.fa-pull-left,
.far.fa-pull-left,
.fas.fa-pull-left {
  margin-right: 0.3em;
}
.fa.fa-pull-right,
.fab.fa-pull-right,
.fal.fa-pull-right,
.far.fa-pull-right,
.fas.fa-pull-right {
  margin-left: 0.3em;
}
.fa-spin {
  animation: fa-spin 2s infinite linear;
}
.fa-pulse {
  animation: fa-spin 1s infinite steps(8);
}
@keyframes fa-spin {
  0% {
    transform: rotate(0);
  }
  to {
    transform: rotate(1turn);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}
.fa-rotate-180 {
  transform: rotate(180deg);
}
.fa-rotate-270 {
  transform: rotate(270deg);
}
.fa-flip-horizontal {
  transform: scaleX(-1);
}
.fa-flip-vertical {
  transform: scaleY(-1);
}
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1);
}
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-rotate-90 {
  -webkit-filter: none;
  filter: none;
}
.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2em;
}
.fa-stack-1x,
.fa-stack-2x {
  left: 0;
  position: absolute;
  text-align: center;
  width: 100%;
}
.fa-stack-1x {
  line-height: inherit;
}
.fa-stack-2x {
  font-size: 2em;
}
.fa-inverse {
  color: #fff;
}
.fa-500px:before {
  content: "\f26e";
}
.fa-accessible-icon:before {
  content: "\f368";
}
.fa-accusoft:before {
  content: "\f369";
}
.fa-ad:before {
  content: "\f641";
}
.fa-address-book:before {
  content: "\f2b9";
}
.fa-address-card:before {
  content: "\f2bb";
}
.fa-adjust:before {
  content: "\f042";
}
.fa-adn:before {
  content: "\f170";
}
.fa-adversal:before {
  content: "\f36a";
}
.fa-affiliatetheme:before {
  content: "\f36b";
}
.fa-air-freshener:before {
  content: "\f5d0";
}
.fa-algolia:before {
  content: "\f36c";
}
.fa-align-center:before {
  content: "\f037";
}
.fa-align-justify:before {
  content: "\f039";
}
.fa-align-left:before {
  content: "\f036";
}
.fa-align-right:before {
  content: "\f038";
}
.fa-alipay:before {
  content: "\f642";
}
.fa-allergies:before {
  content: "\f461";
}
.fa-amazon:before {
  content: "\f270";
}
.fa-amazon-pay:before {
  content: "\f42c";
}
.fa-ambulance:before {
  content: "\f0f9";
}
.fa-american-sign-language-interpreting:before {
  content: "\f2a3";
}
.fa-amilia:before {
  content: "\f36d";
}
.fa-anchor:before {
  content: "\f13d";
}
.fa-android:before {
  content: "\f17b";
}
.fa-angellist:before {
  content: "\f209";
}
.fa-angle-double-down:before {
  content: "\f103";
}
.fa-angle-double-left:before {
  content: "\f100";
}
.fa-angle-double-right:before {
  content: "\f101";
}
.fa-angle-double-up:before {
  content: "\f102";
}
.fa-angle-down:before {
  content: "\f107";
}
.fa-angle-left:before {
  content: "\f104";
}
.fa-angle-right:before {
  content: "\f105";
}
.fa-angle-up:before {
  content: "\f106";
}
.fa-angry:before {
  content: "\f556";
}
.fa-angrycreative:before {
  content: "\f36e";
}
.fa-angular:before {
  content: "\f420";
}
.fa-ankh:before {
  content: "\f644";
}
.fa-app-store:before {
  content: "\f36f";
}
.fa-app-store-ios:before {
  content: "\f370";
}
.fa-apper:before {
  content: "\f371";
}
.fa-apple:before {
  content: "\f179";
}
.fa-apple-alt:before {
  content: "\f5d1";
}
.fa-apple-pay:before {
  content: "\f415";
}
.fa-archive:before {
  content: "\f187";
}
.fa-archway:before {
  content: "\f557";
}
.fa-arrow-alt-circle-down:before {
  content: "\f358";
}
.fa-arrow-alt-circle-left:before {
  content: "\f359";
}
.fa-arrow-alt-circle-right:before {
  content: "\f35a";
}
.fa-arrow-alt-circle-up:before {
  content: "\f35b";
}
.fa-arrow-circle-down:before {
  content: "\f0ab";
}
.fa-arrow-circle-left:before {
  content: "\f0a8";
}
.fa-arrow-circle-right:before {
  content: "\f0a9";
}
.fa-arrow-circle-up:before {
  content: "\f0aa";
}
.fa-arrow-down:before {
  content: "\f063";
}
.fa-arrow-left:before {
  content: "\f060";
}
.fa-arrow-right:before {
  content: "\f061";
}
.fa-arrow-up:before {
  content: "\f062";
}
.fa-arrows-alt:before {
  content: "\f0b2";
}
.fa-arrows-alt-h:before {
  content: "\f337";
}
.fa-arrows-alt-v:before {
  content: "\f338";
}
.fa-assistive-listening-systems:before {
  content: "\f2a2";
}
.fa-asterisk:before {
  content: "\f069";
}
.fa-asymmetrik:before {
  content: "\f372";
}
.fa-at:before {
  content: "\f1fa";
}
.fa-atlas:before {
  content: "\f558";
}
.fa-atom:before {
  content: "\f5d2";
}
.fa-audible:before {
  content: "\f373";
}
.fa-audio-description:before {
  content: "\f29e";
}
.fa-autoprefixer:before {
  content: "\f41c";
}
.fa-avianex:before {
  content: "\f374";
}
.fa-aviato:before {
  content: "\f421";
}
.fa-award:before {
  content: "\f559";
}
.fa-aws:before {
  content: "\f375";
}
.fa-backspace:before {
  content: "\f55a";
}
.fa-backward:before {
  content: "\f04a";
}
.fa-balance-scale:before {
  content: "\f24e";
}
.fa-ban:before {
  content: "\f05e";
}
.fa-band-aid:before {
  content: "\f462";
}
.fa-bandcamp:before {
  content: "\f2d5";
}
.fa-barcode:before {
  content: "\f02a";
}
.fa-bars:before {
  content: "\f0c9";
}
.fa-baseball-ball:before {
  content: "\f433";
}
.fa-basketball-ball:before {
  content: "\f434";
}
.fa-bath:before {
  content: "\f2cd";
}
.fa-battery-empty:before {
  content: "\f244";
}
.fa-battery-full:before {
  content: "\f240";
}
.fa-battery-half:before {
  content: "\f242";
}
.fa-battery-quarter:before {
  content: "\f243";
}
.fa-battery-three-quarters:before {
  content: "\f241";
}
.fa-bed:before {
  content: "\f236";
}
.fa-beer:before {
  content: "\f0fc";
}
.fa-behance:before {
  content: "\f1b4";
}
.fa-behance-square:before {
  content: "\f1b5";
}
.fa-bell:before {
  content: "\f0f3";
}
.fa-bell-slash:before {
  content: "\f1f6";
}
.fa-bezier-curve:before {
  content: "\f55b";
}
.fa-bible:before {
  content: "\f647";
}
.fa-bicycle:before {
  content: "\f206";
}
.fa-bimobject:before {
  content: "\f378";
}
.fa-binoculars:before {
  content: "\f1e5";
}
.fa-birthday-cake:before {
  content: "\f1fd";
}
.fa-bitbucket:before {
  content: "\f171";
}
.fa-bitcoin:before {
  content: "\f379";
}
.fa-bity:before {
  content: "\f37a";
}
.fa-black-tie:before {
  content: "\f27e";
}
.fa-blackberry:before {
  content: "\f37b";
}
.fa-blender:before {
  content: "\f517";
}
.fa-blind:before {
  content: "\f29d";
}
.fa-blogger:before {
  content: "\f37c";
}
.fa-blogger-b:before {
  content: "\f37d";
}
.fa-bluetooth:before {
  content: "\f293";
}
.fa-bluetooth-b:before {
  content: "\f294";
}
.fa-bold:before {
  content: "\f032";
}
.fa-bolt:before {
  content: "\f0e7";
}
.fa-bomb:before {
  content: "\f1e2";
}
.fa-bone:before {
  content: "\f5d7";
}
.fa-bong:before {
  content: "\f55c";
}
.fa-book:before {
  content: "\f02d";
}
.fa-book-open:before {
  content: "\f518";
}
.fa-book-reader:before {
  content: "\f5da";
}
.fa-bookmark:before {
  content: "\f02e";
}
.fa-bowling-ball:before {
  content: "\f436";
}
.fa-box:before {
  content: "\f466";
}
.fa-box-open:before {
  content: "\f49e";
}
.fa-boxes:before {
  content: "\f468";
}
.fa-braille:before {
  content: "\f2a1";
}
.fa-brain:before {
  content: "\f5dc";
}
.fa-briefcase:before {
  content: "\f0b1";
}
.fa-briefcase-medical:before {
  content: "\f469";
}
.fa-broadcast-tower:before {
  content: "\f519";
}
.fa-broom:before {
  content: "\f51a";
}
.fa-brush:before {
  content: "\f55d";
}
.fa-btc:before {
  content: "\f15a";
}
.fa-bug:before {
  content: "\f188";
}
.fa-building:before {
  content: "\f1ad";
}
.fa-bullhorn:before {
  content: "\f0a1";
}
.fa-bullseye:before {
  content: "\f140";
}
.fa-burn:before {
  content: "\f46a";
}
.fa-buromobelexperte:before {
  content: "\f37f";
}
.fa-bus:before {
  content: "\f207";
}
.fa-bus-alt:before {
  content: "\f55e";
}
.fa-business-time:before {
  content: "\f64a";
}
.fa-buysellads:before {
  content: "\f20d";
}
.fa-calculator:before {
  content: "\f1ec";
}
.fa-calendar:before {
  content: "\f133";
}
.fa-calendar-alt:before {
  content: "\f073";
}
.fa-calendar-check:before {
  content: "\f274";
}
.fa-calendar-minus:before {
  content: "\f272";
}
.fa-calendar-plus:before {
  content: "\f271";
}
.fa-calendar-times:before {
  content: "\f273";
}
.fa-camera:before {
  content: "\f030";
}
.fa-camera-retro:before {
  content: "\f083";
}
.fa-cannabis:before {
  content: "\f55f";
}
.fa-capsules:before {
  content: "\f46b";
}
.fa-car:before {
  content: "\f1b9";
}
.fa-car-alt:before {
  content: "\f5de";
}
.fa-car-battery:before {
  content: "\f5df";
}
.fa-car-crash:before {
  content: "\f5e1";
}
.fa-car-side:before {
  content: "\f5e4";
}
.fa-caret-down:before {
  content: "\f0d7";
}
.fa-caret-left:before {
  content: "\f0d9";
}
.fa-caret-right:before {
  content: "\f0da";
}
.fa-caret-square-down:before {
  content: "\f150";
}
.fa-caret-square-left:before {
  content: "\f191";
}
.fa-caret-square-right:before {
  content: "\f152";
}
.fa-caret-square-up:before {
  content: "\f151";
}
.fa-caret-up:before {
  content: "\f0d8";
}
.fa-cart-arrow-down:before {
  content: "\f218";
}
.fa-cart-plus:before {
  content: "\f217";
}
.fa-cc-amazon-pay:before {
  content: "\f42d";
}
.fa-cc-amex:before {
  content: "\f1f3";
}
.fa-cc-apple-pay:before {
  content: "\f416";
}
.fa-cc-diners-club:before {
  content: "\f24c";
}
.fa-cc-discover:before {
  content: "\f1f2";
}
.fa-cc-jcb:before {
  content: "\f24b";
}
.fa-cc-mastercard:before {
  content: "\f1f1";
}
.fa-cc-paypal:before {
  content: "\f1f4";
}
.fa-cc-stripe:before {
  content: "\f1f5";
}
.fa-cc-visa:before {
  content: "\f1f0";
}
.fa-centercode:before {
  content: "\f380";
}
.fa-certificate:before {
  content: "\f0a3";
}
.fa-chalkboard:before {
  content: "\f51b";
}
.fa-chalkboard-teacher:before {
  content: "\f51c";
}
.fa-charging-station:before {
  content: "\f5e7";
}
.fa-chart-area:before {
  content: "\f1fe";
}
.fa-chart-bar:before {
  content: "\f080";
}
.fa-chart-line:before {
  content: "\f201";
}
.fa-chart-pie:before {
  content: "\f200";
}
.fa-check:before {
  content: "\f00c";
}
.fa-check-circle:before {
  content: "\f058";
}
.fa-check-double:before {
  content: "\f560";
}
.fa-check-square:before {
  content: "\f14a";
}
.fa-chess:before {
  content: "\f439";
}
.fa-chess-bishop:before {
  content: "\f43a";
}
.fa-chess-board:before {
  content: "\f43c";
}
.fa-chess-king:before {
  content: "\f43f";
}
.fa-chess-knight:before {
  content: "\f441";
}
.fa-chess-pawn:before {
  content: "\f443";
}
.fa-chess-queen:before {
  content: "\f445";
}
.fa-chess-rook:before {
  content: "\f447";
}
.fa-chevron-circle-down:before {
  content: "\f13a";
}
.fa-chevron-circle-left:before {
  content: "\f137";
}
.fa-chevron-circle-right:before {
  content: "\f138";
}
.fa-chevron-circle-up:before {
  content: "\f139";
}
.fa-chevron-down:before {
  content: "\f078";
}
.fa-chevron-left:before {
  content: "\f053";
}
.fa-chevron-right:before {
  content: "\f054";
}
.fa-chevron-up:before {
  content: "\f077";
}
.fa-child:before {
  content: "\f1ae";
}
.fa-chrome:before {
  content: "\f268";
}
.fa-church:before {
  content: "\f51d";
}
.fa-circle:before {
  content: "\f111";
}
.fa-circle-notch:before {
  content: "\f1ce";
}
.fa-city:before {
  content: "\f64f";
}
.fa-clipboard:before {
  content: "\f328";
}
.fa-clipboard-check:before {
  content: "\f46c";
}
.fa-clipboard-list:before {
  content: "\f46d";
}
.fa-clock:before {
  content: "\f017";
}
.fa-clone:before {
  content: "\f24d";
}
.fa-closed-captioning:before {
  content: "\f20a";
}
.fa-cloud:before {
  content: "\f0c2";
}
.fa-cloud-download-alt:before {
  content: "\f381";
}
.fa-cloud-upload-alt:before {
  content: "\f382";
}
.fa-cloudscale:before {
  content: "\f383";
}
.fa-cloudsmith:before {
  content: "\f384";
}
.fa-cloudversify:before {
  content: "\f385";
}
.fa-cocktail:before {
  content: "\f561";
}
.fa-code:before {
  content: "\f121";
}
.fa-code-branch:before {
  content: "\f126";
}
.fa-codepen:before {
  content: "\f1cb";
}
.fa-codiepie:before {
  content: "\f284";
}
.fa-coffee:before {
  content: "\f0f4";
}
.fa-cog:before {
  content: "\f013";
}
.fa-cogs:before {
  content: "\f085";
}
.fa-coins:before {
  content: "\f51e";
}
.fa-columns:before {
  content: "\f0db";
}
.fa-comment:before {
  content: "\f075";
}
.fa-comment-alt:before {
  content: "\f27a";
}
.fa-comment-dollar:before {
  content: "\f651";
}
.fa-comment-dots:before {
  content: "\f4ad";
}
.fa-comment-slash:before {
  content: "\f4b3";
}
.fa-comments:before {
  content: "\f086";
}
.fa-comments-dollar:before {
  content: "\f653";
}
.fa-compact-disc:before {
  content: "\f51f";
}
.fa-compass:before {
  content: "\f14e";
}
.fa-compress:before {
  content: "\f066";
}
.fa-concierge-bell:before {
  content: "\f562";
}
.fa-connectdevelop:before {
  content: "\f20e";
}
.fa-contao:before {
  content: "\f26d";
}
.fa-cookie:before {
  content: "\f563";
}
.fa-cookie-bite:before {
  content: "\f564";
}
.fa-copy:before {
  content: "\f0c5";
}
.fa-copyright:before {
  content: "\f1f9";
}
.fa-couch:before {
  content: "\f4b8";
}
.fa-cpanel:before {
  content: "\f388";
}
.fa-creative-commons:before {
  content: "\f25e";
}
.fa-creative-commons-by:before {
  content: "\f4e7";
}
.fa-creative-commons-nc:before {
  content: "\f4e8";
}
.fa-creative-commons-nc-eu:before {
  content: "\f4e9";
}
.fa-creative-commons-nc-jp:before {
  content: "\f4ea";
}
.fa-creative-commons-nd:before {
  content: "\f4eb";
}
.fa-creative-commons-pd:before {
  content: "\f4ec";
}
.fa-creative-commons-pd-alt:before {
  content: "\f4ed";
}
.fa-creative-commons-remix:before {
  content: "\f4ee";
}
.fa-creative-commons-sa:before {
  content: "\f4ef";
}
.fa-creative-commons-sampling:before {
  content: "\f4f0";
}
.fa-creative-commons-sampling-plus:before {
  content: "\f4f1";
}
.fa-creative-commons-share:before {
  content: "\f4f2";
}
.fa-credit-card:before {
  content: "\f09d";
}
.fa-crop:before {
  content: "\f125";
}
.fa-crop-alt:before {
  content: "\f565";
}
.fa-cross:before {
  content: "\f654";
}
.fa-crosshairs:before {
  content: "\f05b";
}
.fa-crow:before {
  content: "\f520";
}
.fa-crown:before {
  content: "\f521";
}
.fa-css3:before {
  content: "\f13c";
}
.fa-css3-alt:before {
  content: "\f38b";
}
.fa-cube:before {
  content: "\f1b2";
}
.fa-cubes:before {
  content: "\f1b3";
}
.fa-cut:before {
  content: "\f0c4";
}
.fa-cuttlefish:before {
  content: "\f38c";
}
.fa-d-and-d:before {
  content: "\f38d";
}
.fa-dashcube:before {
  content: "\f210";
}
.fa-database:before {
  content: "\f1c0";
}
.fa-deaf:before {
  content: "\f2a4";
}
.fa-delicious:before {
  content: "\f1a5";
}
.fa-deploydog:before {
  content: "\f38e";
}
.fa-deskpro:before {
  content: "\f38f";
}
.fa-desktop:before {
  content: "\f108";
}
.fa-deviantart:before {
  content: "\f1bd";
}
.fa-dharmachakra:before {
  content: "\f655";
}
.fa-diagnoses:before {
  content: "\f470";
}
.fa-dice:before {
  content: "\f522";
}
.fa-dice-five:before {
  content: "\f523";
}
.fa-dice-four:before {
  content: "\f524";
}
.fa-dice-one:before {
  content: "\f525";
}
.fa-dice-six:before {
  content: "\f526";
}
.fa-dice-three:before {
  content: "\f527";
}
.fa-dice-two:before {
  content: "\f528";
}
.fa-digg:before {
  content: "\f1a6";
}
.fa-digital-ocean:before {
  content: "\f391";
}
.fa-digital-tachograph:before {
  content: "\f566";
}
.fa-directions:before {
  content: "\f5eb";
}
.fa-discord:before {
  content: "\f392";
}
.fa-discourse:before {
  content: "\f393";
}
.fa-divide:before {
  content: "\f529";
}
.fa-dizzy:before {
  content: "\f567";
}
.fa-dna:before {
  content: "\f471";
}
.fa-dochub:before {
  content: "\f394";
}
.fa-docker:before {
  content: "\f395";
}
.fa-dollar-sign:before {
  content: "\f155";
}
.fa-dolly:before {
  content: "\f472";
}
.fa-dolly-flatbed:before {
  content: "\f474";
}
.fa-donate:before {
  content: "\f4b9";
}
.fa-door-closed:before {
  content: "\f52a";
}
.fa-door-open:before {
  content: "\f52b";
}
.fa-dot-circle:before {
  content: "\f192";
}
.fa-dove:before {
  content: "\f4ba";
}
.fa-download:before {
  content: "\f019";
}
.fa-draft2digital:before {
  content: "\f396";
}
.fa-drafting-compass:before {
  content: "\f568";
}
.fa-draw-polygon:before {
  content: "\f5ee";
}
.fa-dribbble:before {
  content: "\f17d";
}
.fa-dribbble-square:before {
  content: "\f397";
}
.fa-dropbox:before {
  content: "\f16b";
}
.fa-drum:before {
  content: "\f569";
}
.fa-drum-steelpan:before {
  content: "\f56a";
}
.fa-drupal:before {
  content: "\f1a9";
}
.fa-dumbbell:before {
  content: "\f44b";
}
.fa-dyalog:before {
  content: "\f399";
}
.fa-earlybirds:before {
  content: "\f39a";
}
.fa-ebay:before {
  content: "\f4f4";
}
.fa-edge:before {
  content: "\f282";
}
.fa-edit:before {
  content: "\f044";
}
.fa-eject:before {
  content: "\f052";
}
.fa-elementor:before {
  content: "\f430";
}
.fa-ellipsis-h:before {
  content: "\f141";
}
.fa-ellipsis-v:before {
  content: "\f142";
}
.fa-ello:before {
  content: "\f5f1";
}
.fa-ember:before {
  content: "\f423";
}
.fa-empire:before {
  content: "\f1d1";
}
.fa-envelope:before {
  content: "\f0e0";
}
.fa-envelope-open:before {
  content: "\f2b6";
}
.fa-envelope-open-text:before {
  content: "\f658";
}
.fa-envelope-square:before {
  content: "\f199";
}
.fa-envira:before {
  content: "\f299";
}
.fa-equals:before {
  content: "\f52c";
}
.fa-eraser:before {
  content: "\f12d";
}
.fa-erlang:before {
  content: "\f39d";
}
.fa-ethereum:before {
  content: "\f42e";
}
.fa-etsy:before {
  content: "\f2d7";
}
.fa-euro-sign:before {
  content: "\f153";
}
.fa-exchange-alt:before {
  content: "\f362";
}
.fa-exclamation:before {
  content: "\f12a";
}
.fa-exclamation-circle:before {
  content: "\f06a";
}
.fa-exclamation-triangle:before {
  content: "\f071";
}
.fa-expand:before {
  content: "\f065";
}
.fa-expand-arrows-alt:before {
  content: "\f31e";
}
.fa-expeditedssl:before {
  content: "\f23e";
}
.fa-external-link-alt:before {
  content: "\f35d";
}
.fa-external-link-square-alt:before {
  content: "\f360";
}
.fa-eye:before {
  content: "\f06e";
}
.fa-eye-dropper:before {
  content: "\f1fb";
}
.fa-eye-slash:before {
  content: "\f070";
}
.fa-facebook:before {
  content: "\f09a";
}
.fa-facebook-f:before {
  content: "\f39e";
}
.fa-facebook-messenger:before {
  content: "\f39f";
}
.fa-facebook-square:before {
  content: "\f082";
}
.fa-fast-backward:before {
  content: "\f049";
}
.fa-fast-forward:before {
  content: "\f050";
}
.fa-fax:before {
  content: "\f1ac";
}
.fa-feather:before {
  content: "\f52d";
}
.fa-feather-alt:before {
  content: "\f56b";
}
.fa-female:before {
  content: "\f182";
}
.fa-fighter-jet:before {
  content: "\f0fb";
}
.fa-file:before {
  content: "\f15b";
}
.fa-file-alt:before {
  content: "\f15c";
}
.fa-file-archive:before {
  content: "\f1c6";
}
.fa-file-audio:before {
  content: "\f1c7";
}
.fa-file-code:before {
  content: "\f1c9";
}
.fa-file-contract:before {
  content: "\f56c";
}
.fa-file-download:before {
  content: "\f56d";
}
.fa-file-excel:before {
  content: "\f1c3";
}
.fa-file-export:before {
  content: "\f56e";
}
.fa-file-image:before {
  content: "\f1c5";
}
.fa-file-import:before {
  content: "\f56f";
}
.fa-file-invoice:before {
  content: "\f570";
}
.fa-file-invoice-dollar:before {
  content: "\f571";
}
.fa-file-medical:before {
  content: "\f477";
}
.fa-file-medical-alt:before {
  content: "\f478";
}
.fa-file-pdf:before {
  content: "\f1c1";
}
.fa-file-powerpoint:before {
  content: "\f1c4";
}
.fa-file-prescription:before {
  content: "\f572";
}
.fa-file-signature:before {
  content: "\f573";
}
.fa-file-upload:before {
  content: "\f574";
}
.fa-file-video:before {
  content: "\f1c8";
}
.fa-file-word:before {
  content: "\f1c2";
}
.fa-fill:before {
  content: "\f575";
}
.fa-fill-drip:before {
  content: "\f576";
}
.fa-film:before {
  content: "\f008";
}
.fa-filter:before {
  content: "\f0b0";
}
.fa-fingerprint:before {
  content: "\f577";
}
.fa-fire:before {
  content: "\f06d";
}
.fa-fire-extinguisher:before {
  content: "\f134";
}
.fa-firefox:before {
  content: "\f269";
}
.fa-first-aid:before {
  content: "\f479";
}
.fa-first-order:before {
  content: "\f2b0";
}
.fa-first-order-alt:before {
  content: "\f50a";
}
.fa-firstdraft:before {
  content: "\f3a1";
}
.fa-fish:before {
  content: "\f578";
}
.fa-flag:before {
  content: "\f024";
}
.fa-flag-checkered:before {
  content: "\f11e";
}
.fa-flask:before {
  content: "\f0c3";
}
.fa-flickr:before {
  content: "\f16e";
}
.fa-flipboard:before {
  content: "\f44d";
}
.fa-flushed:before {
  content: "\f579";
}
.fa-fly:before {
  content: "\f417";
}
.fa-folder:before {
  content: "\f07b";
}
.fa-folder-minus:before {
  content: "\f65d";
}
.fa-folder-open:before {
  content: "\f07c";
}
.fa-folder-plus:before {
  content: "\f65e";
}
.fa-font:before {
  content: "\f031";
}
.fa-font-awesome:before {
  content: "\f2b4";
}
.fa-font-awesome-alt:before {
  content: "\f35c";
}
.fa-font-awesome-flag:before {
  content: "\f425";
}
.fa-font-awesome-logo-full:before {
  content: "\f4e6";
}
.fa-fonticons:before {
  content: "\f280";
}
.fa-fonticons-fi:before {
  content: "\f3a2";
}
.fa-football-ball:before {
  content: "\f44e";
}
.fa-fort-awesome:before {
  content: "\f286";
}
.fa-fort-awesome-alt:before {
  content: "\f3a3";
}
.fa-forumbee:before {
  content: "\f211";
}
.fa-forward:before {
  content: "\f04e";
}
.fa-foursquare:before {
  content: "\f180";
}
.fa-free-code-camp:before {
  content: "\f2c5";
}
.fa-freebsd:before {
  content: "\f3a4";
}
.fa-frog:before {
  content: "\f52e";
}
.fa-frown:before {
  content: "\f119";
}
.fa-frown-open:before {
  content: "\f57a";
}
.fa-fulcrum:before {
  content: "\f50b";
}
.fa-funnel-dollar:before {
  content: "\f662";
}
.fa-futbol:before {
  content: "\f1e3";
}
.fa-galactic-republic:before {
  content: "\f50c";
}
.fa-galactic-senate:before {
  content: "\f50d";
}
.fa-gamepad:before {
  content: "\f11b";
}
.fa-gas-pump:before {
  content: "\f52f";
}
.fa-gavel:before {
  content: "\f0e3";
}
.fa-gem:before {
  content: "\f3a5";
}
.fa-genderless:before {
  content: "\f22d";
}
.fa-get-pocket:before {
  content: "\f265";
}
.fa-gg:before {
  content: "\f260";
}
.fa-gg-circle:before {
  content: "\f261";
}
.fa-gift:before {
  content: "\f06b";
}
.fa-git:before {
  content: "\f1d3";
}
.fa-git-square:before {
  content: "\f1d2";
}
.fa-github:before {
  content: "\f09b";
}
.fa-github-alt:before {
  content: "\f113";
}
.fa-github-square:before {
  content: "\f092";
}
.fa-gitkraken:before {
  content: "\f3a6";
}
.fa-gitlab:before {
  content: "\f296";
}
.fa-gitter:before {
  content: "\f426";
}
.fa-glass-martini:before {
  content: "\f000";
}
.fa-glass-martini-alt:before {
  content: "\f57b";
}
.fa-glasses:before {
  content: "\f530";
}
.fa-glide:before {
  content: "\f2a5";
}
.fa-glide-g:before {
  content: "\f2a6";
}
.fa-globe:before {
  content: "\f0ac";
}
.fa-globe-africa:before {
  content: "\f57c";
}
.fa-globe-americas:before {
  content: "\f57d";
}
.fa-globe-asia:before {
  content: "\f57e";
}
.fa-gofore:before {
  content: "\f3a7";
}
.fa-golf-ball:before {
  content: "\f450";
}
.fa-goodreads:before {
  content: "\f3a8";
}
.fa-goodreads-g:before {
  content: "\f3a9";
}
.fa-google:before {
  content: "\f1a0";
}
.fa-google-drive:before {
  content: "\f3aa";
}
.fa-google-play:before {
  content: "\f3ab";
}
.fa-google-plus:before {
  content: "\f2b3";
}
.fa-google-plus-g:before {
  content: "\f0d5";
}
.fa-google-plus-square:before {
  content: "\f0d4";
}
.fa-google-wallet:before {
  content: "\f1ee";
}
.fa-gopuram:before {
  content: "\f664";
}
.fa-graduation-cap:before {
  content: "\f19d";
}
.fa-gratipay:before {
  content: "\f184";
}
.fa-grav:before {
  content: "\f2d6";
}
.fa-greater-than:before {
  content: "\f531";
}
.fa-greater-than-equal:before {
  content: "\f532";
}
.fa-grimace:before {
  content: "\f57f";
}
.fa-grin:before {
  content: "\f580";
}
.fa-grin-alt:before {
  content: "\f581";
}
.fa-grin-beam:before {
  content: "\f582";
}
.fa-grin-beam-sweat:before {
  content: "\f583";
}
.fa-grin-hearts:before {
  content: "\f584";
}
.fa-grin-squint:before {
  content: "\f585";
}
.fa-grin-squint-tears:before {
  content: "\f586";
}
.fa-grin-stars:before {
  content: "\f587";
}
.fa-grin-tears:before {
  content: "\f588";
}
.fa-grin-tongue:before {
  content: "\f589";
}
.fa-grin-tongue-squint:before {
  content: "\f58a";
}
.fa-grin-tongue-wink:before {
  content: "\f58b";
}
.fa-grin-wink:before {
  content: "\f58c";
}
.fa-grip-horizontal:before {
  content: "\f58d";
}
.fa-grip-vertical:before {
  content: "\f58e";
}
.fa-gripfire:before {
  content: "\f3ac";
}
.fa-grunt:before {
  content: "\f3ad";
}
.fa-gulp:before {
  content: "\f3ae";
}
.fa-h-square:before {
  content: "\f0fd";
}
.fa-hacker-news:before {
  content: "\f1d4";
}
.fa-hacker-news-square:before {
  content: "\f3af";
}
.fa-hackerrank:before {
  content: "\f5f7";
}
.fa-hamsa:before {
  content: "\f665";
}
.fa-hand-holding:before {
  content: "\f4bd";
}
.fa-hand-holding-heart:before {
  content: "\f4be";
}
.fa-hand-holding-usd:before {
  content: "\f4c0";
}
.fa-hand-lizard:before {
  content: "\f258";
}
.fa-hand-paper:before {
  content: "\f256";
}
.fa-hand-peace:before {
  content: "\f25b";
}
.fa-hand-point-down:before {
  content: "\f0a7";
}
.fa-hand-point-left:before {
  content: "\f0a5";
}
.fa-hand-point-right:before {
  content: "\f0a4";
}
.fa-hand-point-up:before {
  content: "\f0a6";
}
.fa-hand-pointer:before {
  content: "\f25a";
}
.fa-hand-rock:before {
  content: "\f255";
}
.fa-hand-scissors:before {
  content: "\f257";
}
.fa-hand-spock:before {
  content: "\f259";
}
.fa-hands:before {
  content: "\f4c2";
}
.fa-hands-helping:before {
  content: "\f4c4";
}
.fa-handshake:before {
  content: "\f2b5";
}
.fa-hashtag:before {
  content: "\f292";
}
.fa-haykal:before {
  content: "\f666";
}
.fa-hdd:before {
  content: "\f0a0";
}
.fa-heading:before {
  content: "\f1dc";
}
.fa-headphones:before {
  content: "\f025";
}
.fa-headphones-alt:before {
  content: "\f58f";
}
.fa-headset:before {
  content: "\f590";
}
.fa-heart:before {
  content: "\f004";
}
.fa-heartbeat:before {
  content: "\f21e";
}
.fa-helicopter:before {
  content: "\f533";
}
.fa-highlighter:before {
  content: "\f591";
}
.fa-hips:before {
  content: "\f452";
}
.fa-hire-a-helper:before {
  content: "\f3b0";
}
.fa-history:before {
  content: "\f1da";
}
.fa-hockey-puck:before {
  content: "\f453";
}
.fa-home:before {
  content: "\f015";
}
.fa-hooli:before {
  content: "\f427";
}
.fa-hornbill:before {
  content: "\f592";
}
.fa-hospital:before {
  content: "\f0f8";
}
.fa-hospital-alt:before {
  content: "\f47d";
}
.fa-hospital-symbol:before {
  content: "\f47e";
}
.fa-hot-tub:before {
  content: "\f593";
}
.fa-hotel:before {
  content: "\f594";
}
.fa-hotjar:before {
  content: "\f3b1";
}
.fa-hourglass:before {
  content: "\f254";
}
.fa-hourglass-end:before {
  content: "\f253";
}
.fa-hourglass-half:before {
  content: "\f252";
}
.fa-hourglass-start:before {
  content: "\f251";
}
.fa-houzz:before {
  content: "\f27c";
}
.fa-html5:before {
  content: "\f13b";
}
.fa-hubspot:before {
  content: "\f3b2";
}
.fa-i-cursor:before {
  content: "\f246";
}
.fa-id-badge:before {
  content: "\f2c1";
}
.fa-id-card:before {
  content: "\f2c2";
}
.fa-id-card-alt:before {
  content: "\f47f";
}
.fa-image:before {
  content: "\f03e";
}
.fa-images:before {
  content: "\f302";
}
.fa-imdb:before {
  content: "\f2d8";
}
.fa-inbox:before {
  content: "\f01c";
}
.fa-indent:before {
  content: "\f03c";
}
.fa-industry:before {
  content: "\f275";
}
.fa-infinity:before {
  content: "\f534";
}
.fa-info:before {
  content: "\f129";
}
.fa-info-circle:before {
  content: "\f05a";
}
.fa-instagram:before {
  content: "\f16d";
}
.fa-internet-explorer:before {
  content: "\f26b";
}
.fa-ioxhost:before {
  content: "\f208";
}
.fa-italic:before {
  content: "\f033";
}
.fa-itunes:before {
  content: "\f3b4";
}
.fa-itunes-note:before {
  content: "\f3b5";
}
.fa-java:before {
  content: "\f4e4";
}
.fa-jedi:before {
  content: "\f669";
}
.fa-jedi-order:before {
  content: "\f50e";
}
.fa-jenkins:before {
  content: "\f3b6";
}
.fa-joget:before {
  content: "\f3b7";
}
.fa-joint:before {
  content: "\f595";
}
.fa-joomla:before {
  content: "\f1aa";
}
.fa-journal-whills:before {
  content: "\f66a";
}
.fa-js:before {
  content: "\f3b8";
}
.fa-js-square:before {
  content: "\f3b9";
}
.fa-jsfiddle:before {
  content: "\f1cc";
}
.fa-kaaba:before {
  content: "\f66b";
}
.fa-kaggle:before {
  content: "\f5fa";
}
.fa-key:before {
  content: "\f084";
}
.fa-keybase:before {
  content: "\f4f5";
}
.fa-keyboard:before {
  content: "\f11c";
}
.fa-keycdn:before {
  content: "\f3ba";
}
.fa-khanda:before {
  content: "\f66d";
}
.fa-kickstarter:before {
  content: "\f3bb";
}
.fa-kickstarter-k:before {
  content: "\f3bc";
}
.fa-kiss:before {
  content: "\f596";
}
.fa-kiss-beam:before {
  content: "\f597";
}
.fa-kiss-wink-heart:before {
  content: "\f598";
}
.fa-kiwi-bird:before {
  content: "\f535";
}
.fa-korvue:before {
  content: "\f42f";
}
.fa-landmark:before {
  content: "\f66f";
}
.fa-language:before {
  content: "\f1ab";
}
.fa-laptop:before {
  content: "\f109";
}
.fa-laptop-code:before {
  content: "\f5fc";
}
.fa-laravel:before {
  content: "\f3bd";
}
.fa-lastfm:before {
  content: "\f202";
}
.fa-lastfm-square:before {
  content: "\f203";
}
.fa-laugh:before {
  content: "\f599";
}
.fa-laugh-beam:before {
  content: "\f59a";
}
.fa-laugh-squint:before {
  content: "\f59b";
}
.fa-laugh-wink:before {
  content: "\f59c";
}
.fa-layer-group:before {
  content: "\f5fd";
}
.fa-leaf:before {
  content: "\f06c";
}
.fa-leanpub:before {
  content: "\f212";
}
.fa-lemon:before {
  content: "\f094";
}
.fa-less:before {
  content: "\f41d";
}
.fa-less-than:before {
  content: "\f536";
}
.fa-less-than-equal:before {
  content: "\f537";
}
.fa-level-down-alt:before {
  content: "\f3be";
}
.fa-level-up-alt:before {
  content: "\f3bf";
}
.fa-life-ring:before {
  content: "\f1cd";
}
.fa-lightbulb:before {
  content: "\f0eb";
}
.fa-line:before {
  content: "\f3c0";
}
.fa-link:before {
  content: "\f0c1";
}
.fa-linkedin:before {
  content: "\f08c";
}
.fa-linkedin-in:before {
  content: "\f0e1";
}
.fa-linode:before {
  content: "\f2b8";
}
.fa-linux:before {
  content: "\f17c";
}
.fa-lira-sign:before {
  content: "\f195";
}
.fa-list:before {
  content: "\f03a";
}
.fa-list-alt:before {
  content: "\f022";
}
.fa-list-ol:before {
  content: "\f0cb";
}
.fa-list-ul:before {
  content: "\f0ca";
}
.fa-location-arrow:before {
  content: "\f124";
}
.fa-lock:before {
  content: "\f023";
}
.fa-lock-open:before {
  content: "\f3c1";
}
.fa-long-arrow-alt-down:before {
  content: "\f309";
}
.fa-long-arrow-alt-left:before {
  content: "\f30a";
}
.fa-long-arrow-alt-right:before {
  content: "\f30b";
}
.fa-long-arrow-alt-up:before {
  content: "\f30c";
}
.fa-low-vision:before {
  content: "\f2a8";
}
.fa-luggage-cart:before {
  content: "\f59d";
}
.fa-lyft:before {
  content: "\f3c3";
}
.fa-magento:before {
  content: "\f3c4";
}
.fa-magic:before {
  content: "\f0d0";
}
.fa-magnet:before {
  content: "\f076";
}
.fa-mail-bulk:before {
  content: "\f674";
}
.fa-mailchimp:before {
  content: "\f59e";
}
.fa-male:before {
  content: "\f183";
}
.fa-mandalorian:before {
  content: "\f50f";
}
.fa-map:before {
  content: "\f279";
}
.fa-map-marked:before {
  content: "\f59f";
}
.fa-map-marked-alt:before {
  content: "\f5a0";
}
.fa-map-marker:before {
  content: "\f041";
}
.fa-map-marker-alt:before {
  content: "\f3c5";
}
.fa-map-pin:before {
  content: "\f276";
}
.fa-map-signs:before {
  content: "\f277";
}
.fa-markdown:before {
  content: "\f60f";
}
.fa-marker:before {
  content: "\f5a1";
}
.fa-mars:before {
  content: "\f222";
}
.fa-mars-double:before {
  content: "\f227";
}
.fa-mars-stroke:before {
  content: "\f229";
}
.fa-mars-stroke-h:before {
  content: "\f22b";
}
.fa-mars-stroke-v:before {
  content: "\f22a";
}
.fa-mastodon:before {
  content: "\f4f6";
}
.fa-maxcdn:before {
  content: "\f136";
}
.fa-medal:before {
  content: "\f5a2";
}
.fa-medapps:before {
  content: "\f3c6";
}
.fa-medium:before {
  content: "\f23a";
}
.fa-medium-m:before {
  content: "\f3c7";
}
.fa-medkit:before {
  content: "\f0fa";
}
.fa-medrt:before {
  content: "\f3c8";
}
.fa-meetup:before {
  content: "\f2e0";
}
.fa-megaport:before {
  content: "\f5a3";
}
.fa-meh:before {
  content: "\f11a";
}
.fa-meh-blank:before {
  content: "\f5a4";
}
.fa-meh-rolling-eyes:before {
  content: "\f5a5";
}
.fa-memory:before {
  content: "\f538";
}
.fa-menorah:before {
  content: "\f676";
}
.fa-mercury:before {
  content: "\f223";
}
.fa-microchip:before {
  content: "\f2db";
}
.fa-microphone:before {
  content: "\f130";
}
.fa-microphone-alt:before {
  content: "\f3c9";
}
.fa-microphone-alt-slash:before {
  content: "\f539";
}
.fa-microphone-slash:before {
  content: "\f131";
}
.fa-microscope:before {
  content: "\f610";
}
.fa-microsoft:before {
  content: "\f3ca";
}
.fa-minus:before {
  content: "\f068";
}
.fa-minus-circle:before {
  content: "\f056";
}
.fa-minus-square:before {
  content: "\f146";
}
.fa-mix:before {
  content: "\f3cb";
}
.fa-mixcloud:before {
  content: "\f289";
}
.fa-mizuni:before {
  content: "\f3cc";
}
.fa-mobile:before {
  content: "\f10b";
}
.fa-mobile-alt:before {
  content: "\f3cd";
}
.fa-modx:before {
  content: "\f285";
}
.fa-monero:before {
  content: "\f3d0";
}
.fa-money-bill:before {
  content: "\f0d6";
}
.fa-money-bill-alt:before {
  content: "\f3d1";
}
.fa-money-bill-wave:before {
  content: "\f53a";
}
.fa-money-bill-wave-alt:before {
  content: "\f53b";
}
.fa-money-check:before {
  content: "\f53c";
}
.fa-money-check-alt:before {
  content: "\f53d";
}
.fa-monument:before {
  content: "\f5a6";
}
.fa-moon:before {
  content: "\f186";
}
.fa-mortar-pestle:before {
  content: "\f5a7";
}
.fa-mosque:before {
  content: "\f678";
}
.fa-motorcycle:before {
  content: "\f21c";
}
.fa-mouse-pointer:before {
  content: "\f245";
}
.fa-music:before {
  content: "\f001";
}
.fa-napster:before {
  content: "\f3d2";
}
.fa-neos:before {
  content: "\f612";
}
.fa-neuter:before {
  content: "\f22c";
}
.fa-newspaper:before {
  content: "\f1ea";
}
.fa-nimblr:before {
  content: "\f5a8";
}
.fa-nintendo-switch:before {
  content: "\f418";
}
.fa-node:before {
  content: "\f419";
}
.fa-node-js:before {
  content: "\f3d3";
}
.fa-not-equal:before {
  content: "\f53e";
}
.fa-notes-medical:before {
  content: "\f481";
}
.fa-npm:before {
  content: "\f3d4";
}
.fa-ns8:before {
  content: "\f3d5";
}
.fa-nutritionix:before {
  content: "\f3d6";
}
.fa-object-group:before {
  content: "\f247";
}
.fa-object-ungroup:before {
  content: "\f248";
}
.fa-odnoklassniki:before {
  content: "\f263";
}
.fa-odnoklassniki-square:before {
  content: "\f264";
}
.fa-oil-can:before {
  content: "\f613";
}
.fa-old-republic:before {
  content: "\f510";
}
.fa-om:before {
  content: "\f679";
}
.fa-opencart:before {
  content: "\f23d";
}
.fa-openid:before {
  content: "\f19b";
}
.fa-opera:before {
  content: "\f26a";
}
.fa-optin-monster:before {
  content: "\f23c";
}
.fa-osi:before {
  content: "\f41a";
}
.fa-outdent:before {
  content: "\f03b";
}
.fa-page4:before {
  content: "\f3d7";
}
.fa-pagelines:before {
  content: "\f18c";
}
.fa-paint-brush:before {
  content: "\f1fc";
}
.fa-paint-roller:before {
  content: "\f5aa";
}
.fa-palette:before {
  content: "\f53f";
}
.fa-palfed:before {
  content: "\f3d8";
}
.fa-pallet:before {
  content: "\f482";
}
.fa-paper-plane:before {
  content: "\f1d8";
}
.fa-paperclip:before {
  content: "\f0c6";
}
.fa-parachute-box:before {
  content: "\f4cd";
}
.fa-paragraph:before {
  content: "\f1dd";
}
.fa-parking:before {
  content: "\f540";
}
.fa-passport:before {
  content: "\f5ab";
}
.fa-pastafarianism:before {
  content: "\f67b";
}
.fa-paste:before {
  content: "\f0ea";
}
.fa-patreon:before {
  content: "\f3d9";
}
.fa-pause:before {
  content: "\f04c";
}
.fa-pause-circle:before {
  content: "\f28b";
}
.fa-paw:before {
  content: "\f1b0";
}
.fa-paypal:before {
  content: "\f1ed";
}
.fa-peace:before {
  content: "\f67c";
}
.fa-pen:before {
  content: "\f304";
}
.fa-pen-alt:before {
  content: "\f305";
}
.fa-pen-fancy:before {
  content: "\f5ac";
}
.fa-pen-nib:before {
  content: "\f5ad";
}
.fa-pen-square:before {
  content: "\f14b";
}
.fa-pencil-alt:before {
  content: "\f303";
}
.fa-pencil-ruler:before {
  content: "\f5ae";
}
.fa-people-carry:before {
  content: "\f4ce";
}
.fa-percent:before {
  content: "\f295";
}
.fa-percentage:before {
  content: "\f541";
}
.fa-periscope:before {
  content: "\f3da";
}
.fa-phabricator:before {
  content: "\f3db";
}
.fa-phoenix-framework:before {
  content: "\f3dc";
}
.fa-phoenix-squadron:before {
  content: "\f511";
}
.fa-phone:before {
  content: "\f095";
}
.fa-phone-slash:before {
  content: "\f3dd";
}
.fa-phone-square:before {
  content: "\f098";
}
.fa-phone-volume:before {
  content: "\f2a0";
}
.fa-php:before {
  content: "\f457";
}
.fa-pied-piper:before {
  content: "\f2ae";
}
.fa-pied-piper-alt:before {
  content: "\f1a8";
}
.fa-pied-piper-hat:before {
  content: "\f4e5";
}
.fa-pied-piper-pp:before {
  content: "\f1a7";
}
.fa-piggy-bank:before {
  content: "\f4d3";
}
.fa-pills:before {
  content: "\f484";
}
.fa-pinterest:before {
  content: "\f0d2";
}
.fa-pinterest-p:before {
  content: "\f231";
}
.fa-pinterest-square:before {
  content: "\f0d3";
}
.fa-place-of-worship:before {
  content: "\f67f";
}
.fa-plane:before {
  content: "\f072";
}
.fa-plane-arrival:before {
  content: "\f5af";
}
.fa-plane-departure:before {
  content: "\f5b0";
}
.fa-play:before {
  content: "\f04b";
}
.fa-play-circle:before {
  content: "\f144";
}
.fa-playstation:before {
  content: "\f3df";
}
.fa-plug:before {
  content: "\f1e6";
}
.fa-plus:before {
  content: "\f067";
}
.fa-plus-circle:before {
  content: "\f055";
}
.fa-plus-square:before {
  content: "\f0fe";
}
.fa-podcast:before {
  content: "\f2ce";
}
.fa-poll:before {
  content: "\f681";
}
.fa-poll-h:before {
  content: "\f682";
}
.fa-poo:before {
  content: "\f2fe";
}
.fa-poop:before {
  content: "\f619";
}
.fa-portrait:before {
  content: "\f3e0";
}
.fa-pound-sign:before {
  content: "\f154";
}
.fa-power-off:before {
  content: "\f011";
}
.fa-pray:before {
  content: "\f683";
}
.fa-praying-hands:before {
  content: "\f684";
}
.fa-prescription:before {
  content: "\f5b1";
}
.fa-prescription-bottle:before {
  content: "\f485";
}
.fa-prescription-bottle-alt:before {
  content: "\f486";
}
.fa-print:before {
  content: "\f02f";
}
.fa-procedures:before {
  content: "\f487";
}
.fa-product-hunt:before {
  content: "\f288";
}
.fa-project-diagram:before {
  content: "\f542";
}
.fa-pushed:before {
  content: "\f3e1";
}
.fa-puzzle-piece:before {
  content: "\f12e";
}
.fa-python:before {
  content: "\f3e2";
}
.fa-qq:before {
  content: "\f1d6";
}
.fa-qrcode:before {
  content: "\f029";
}
.fa-question:before {
  content: "\f128";
}
.fa-question-circle:before {
  content: "\f059";
}
.fa-quidditch:before {
  content: "\f458";
}
.fa-quinscape:before {
  content: "\f459";
}
.fa-quora:before {
  content: "\f2c4";
}
.fa-quote-left:before {
  content: "\f10d";
}
.fa-quote-right:before {
  content: "\f10e";
}
.fa-quran:before {
  content: "\f687";
}
.fa-r-project:before {
  content: "\f4f7";
}
.fa-random:before {
  content: "\f074";
}
.fa-ravelry:before {
  content: "\f2d9";
}
.fa-react:before {
  content: "\f41b";
}
.fa-readme:before {
  content: "\f4d5";
}
.fa-rebel:before {
  content: "\f1d0";
}
.fa-receipt:before {
  content: "\f543";
}
.fa-recycle:before {
  content: "\f1b8";
}
.fa-red-river:before {
  content: "\f3e3";
}
.fa-reddit:before {
  content: "\f1a1";
}
.fa-reddit-alien:before {
  content: "\f281";
}
.fa-reddit-square:before {
  content: "\f1a2";
}
.fa-redo:before {
  content: "\f01e";
}
.fa-redo-alt:before {
  content: "\f2f9";
}
.fa-registered:before {
  content: "\f25d";
}
.fa-rendact:before {
  content: "\f3e4";
}
.fa-renren:before {
  content: "\f18b";
}
.fa-reply:before {
  content: "\f3e5";
}
.fa-reply-all:before {
  content: "\f122";
}
.fa-replyd:before {
  content: "\f3e6";
}
.fa-researchgate:before {
  content: "\f4f8";
}
.fa-resolving:before {
  content: "\f3e7";
}
.fa-retweet:before {
  content: "\f079";
}
.fa-rev:before {
  content: "\f5b2";
}
.fa-ribbon:before {
  content: "\f4d6";
}
.fa-road:before {
  content: "\f018";
}
.fa-robot:before {
  content: "\f544";
}
.fa-rocket:before {
  content: "\f135";
}
.fa-rocketchat:before {
  content: "\f3e8";
}
.fa-rockrms:before {
  content: "\f3e9";
}
.fa-route:before {
  content: "\f4d7";
}
.fa-rss:before {
  content: "\f09e";
}
.fa-rss-square:before {
  content: "\f143";
}
.fa-ruble-sign:before {
  content: "\f158";
}
.fa-ruler:before {
  content: "\f545";
}
.fa-ruler-combined:before {
  content: "\f546";
}
.fa-ruler-horizontal:before {
  content: "\f547";
}
.fa-ruler-vertical:before {
  content: "\f548";
}
.fa-rupee-sign:before {
  content: "\f156";
}
.fa-sad-cry:before {
  content: "\f5b3";
}
.fa-sad-tear:before {
  content: "\f5b4";
}
.fa-safari:before {
  content: "\f267";
}
.fa-sass:before {
  content: "\f41e";
}
.fa-save:before {
  content: "\f0c7";
}
.fa-schlix:before {
  content: "\f3ea";
}
.fa-school:before {
  content: "\f549";
}
.fa-screwdriver:before {
  content: "\f54a";
}
.fa-scribd:before {
  content: "\f28a";
}
.fa-search:before {
  content: "\f002";
}
.fa-search-dollar:before {
  content: "\f688";
}
.fa-search-location:before {
  content: "\f689";
}
.fa-search-minus:before {
  content: "\f010";
}
.fa-search-plus:before {
  content: "\f00e";
}
.fa-searchengin:before {
  content: "\f3eb";
}
.fa-seedling:before {
  content: "\f4d8";
}
.fa-sellcast:before {
  content: "\f2da";
}
.fa-sellsy:before {
  content: "\f213";
}
.fa-server:before {
  content: "\f233";
}
.fa-servicestack:before {
  content: "\f3ec";
}
.fa-shapes:before {
  content: "\f61f";
}
.fa-share:before {
  content: "\f064";
}
.fa-share-alt:before {
  content: "\f1e0";
}
.fa-share-alt-square:before {
  content: "\f1e1";
}
.fa-share-square:before {
  content: "\f14d";
}
.fa-shekel-sign:before {
  content: "\f20b";
}
.fa-shield-alt:before {
  content: "\f3ed";
}
.fa-ship:before {
  content: "\f21a";
}
.fa-shipping-fast:before {
  content: "\f48b";
}
.fa-shirtsinbulk:before {
  content: "\f214";
}
.fa-shoe-prints:before {
  content: "\f54b";
}
.fa-shopping-bag:before {
  content: "\f290";
}
.fa-shopping-basket:before {
  content: "\f291";
}
.fa-shopping-cart:before {
  content: "\f07a";
}
.fa-shopware:before {
  content: "\f5b5";
}
.fa-shower:before {
  content: "\f2cc";
}
.fa-shuttle-van:before {
  content: "\f5b6";
}
.fa-sign:before {
  content: "\f4d9";
}
.fa-sign-in-alt:before {
  content: "\f2f6";
}
.fa-sign-language:before {
  content: "\f2a7";
}
.fa-sign-out-alt:before {
  content: "\f2f5";
}
.fa-signal:before {
  content: "\f012";
}
.fa-signature:before {
  content: "\f5b7";
}
.fa-simplybuilt:before {
  content: "\f215";
}
.fa-sistrix:before {
  content: "\f3ee";
}
.fa-sitemap:before {
  content: "\f0e8";
}
.fa-sith:before {
  content: "\f512";
}
.fa-skull:before {
  content: "\f54c";
}
.fa-skyatlas:before {
  content: "\f216";
}
.fa-skype:before {
  content: "\f17e";
}
.fa-slack:before {
  content: "\f198";
}
.fa-slack-hash:before {
  content: "\f3ef";
}
.fa-sliders-h:before {
  content: "\f1de";
}
.fa-slideshare:before {
  content: "\f1e7";
}
.fa-smile:before {
  content: "\f118";
}
.fa-smile-beam:before {
  content: "\f5b8";
}
.fa-smile-wink:before {
  content: "\f4da";
}
.fa-smoking:before {
  content: "\f48d";
}
.fa-smoking-ban:before {
  content: "\f54d";
}
.fa-snapchat:before {
  content: "\f2ab";
}
.fa-snapchat-ghost:before {
  content: "\f2ac";
}
.fa-snapchat-square:before {
  content: "\f2ad";
}
.fa-snowflake:before {
  content: "\f2dc";
}
.fa-socks:before {
  content: "\f696";
}
.fa-solar-panel:before {
  content: "\f5ba";
}
.fa-sort:before {
  content: "\f0dc";
}
.fa-sort-alpha-down:before {
  content: "\f15d";
}
.fa-sort-alpha-up:before {
  content: "\f15e";
}
.fa-sort-amount-down:before {
  content: "\f160";
}
.fa-sort-amount-up:before {
  content: "\f161";
}
.fa-sort-down:before {
  content: "\f0dd";
}
.fa-sort-numeric-down:before {
  content: "\f162";
}
.fa-sort-numeric-up:before {
  content: "\f163";
}
.fa-sort-up:before {
  content: "\f0de";
}
.fa-soundcloud:before {
  content: "\f1be";
}
.fa-spa:before {
  content: "\f5bb";
}
.fa-space-shuttle:before {
  content: "\f197";
}
.fa-speakap:before {
  content: "\f3f3";
}
.fa-spinner:before {
  content: "\f110";
}
.fa-splotch:before {
  content: "\f5bc";
}
.fa-spotify:before {
  content: "\f1bc";
}
.fa-spray-can:before {
  content: "\f5bd";
}
.fa-square:before {
  content: "\f0c8";
}
.fa-square-full:before {
  content: "\f45c";
}
.fa-square-root-alt:before {
  content: "\f698";
}
.fa-squarespace:before {
  content: "\f5be";
}
.fa-stack-exchange:before {
  content: "\f18d";
}
.fa-stack-overflow:before {
  content: "\f16c";
}
.fa-stamp:before {
  content: "\f5bf";
}
.fa-star:before {
  content: "\f005";
}
.fa-star-and-crescent:before {
  content: "\f699";
}
.fa-star-half:before {
  content: "\f089";
}
.fa-star-half-alt:before {
  content: "\f5c0";
}
.fa-star-of-david:before {
  content: "\f69a";
}
.fa-star-of-life:before {
  content: "\f621";
}
.fa-staylinked:before {
  content: "\f3f5";
}
.fa-steam:before {
  content: "\f1b6";
}
.fa-steam-square:before {
  content: "\f1b7";
}
.fa-steam-symbol:before {
  content: "\f3f6";
}
.fa-step-backward:before {
  content: "\f048";
}
.fa-step-forward:before {
  content: "\f051";
}
.fa-stethoscope:before {
  content: "\f0f1";
}
.fa-sticker-mule:before {
  content: "\f3f7";
}
.fa-sticky-note:before {
  content: "\f249";
}
.fa-stop:before {
  content: "\f04d";
}
.fa-stop-circle:before {
  content: "\f28d";
}
.fa-stopwatch:before {
  content: "\f2f2";
}
.fa-store:before {
  content: "\f54e";
}
.fa-store-alt:before {
  content: "\f54f";
}
.fa-strava:before {
  content: "\f428";
}
.fa-stream:before {
  content: "\f550";
}
.fa-street-view:before {
  content: "\f21d";
}
.fa-strikethrough:before {
  content: "\f0cc";
}
.fa-stripe:before {
  content: "\f429";
}
.fa-stripe-s:before {
  content: "\f42a";
}
.fa-stroopwafel:before {
  content: "\f551";
}
.fa-studiovinari:before {
  content: "\f3f8";
}
.fa-stumbleupon:before {
  content: "\f1a4";
}
.fa-stumbleupon-circle:before {
  content: "\f1a3";
}
.fa-subscript:before {
  content: "\f12c";
}
.fa-subway:before {
  content: "\f239";
}
.fa-suitcase:before {
  content: "\f0f2";
}
.fa-suitcase-rolling:before {
  content: "\f5c1";
}
.fa-sun:before {
  content: "\f185";
}
.fa-superpowers:before {
  content: "\f2dd";
}
.fa-superscript:before {
  content: "\f12b";
}
.fa-supple:before {
  content: "\f3f9";
}
.fa-surprise:before {
  content: "\f5c2";
}
.fa-swatchbook:before {
  content: "\f5c3";
}
.fa-swimmer:before {
  content: "\f5c4";
}
.fa-swimming-pool:before {
  content: "\f5c5";
}
.fa-synagogue:before {
  content: "\f69b";
}
.fa-sync:before {
  content: "\f021";
}
.fa-sync-alt:before {
  content: "\f2f1";
}
.fa-syringe:before {
  content: "\f48e";
}
.fa-table:before {
  content: "\f0ce";
}
.fa-table-tennis:before {
  content: "\f45d";
}
.fa-tablet:before {
  content: "\f10a";
}
.fa-tablet-alt:before {
  content: "\f3fa";
}
.fa-tablets:before {
  content: "\f490";
}
.fa-tachometer-alt:before {
  content: "\f3fd";
}
.fa-tag:before {
  content: "\f02b";
}
.fa-tags:before {
  content: "\f02c";
}
.fa-tape:before {
  content: "\f4db";
}
.fa-tasks:before {
  content: "\f0ae";
}
.fa-taxi:before {
  content: "\f1ba";
}
.fa-teamspeak:before {
  content: "\f4f9";
}
.fa-teeth:before {
  content: "\f62e";
}
.fa-teeth-open:before {
  content: "\f62f";
}
.fa-telegram:before {
  content: "\f2c6";
}
.fa-telegram-plane:before {
  content: "\f3fe";
}
.fa-tencent-weibo:before {
  content: "\f1d5";
}
.fa-terminal:before {
  content: "\f120";
}
.fa-text-height:before {
  content: "\f034";
}
.fa-text-width:before {
  content: "\f035";
}
.fa-th:before {
  content: "\f00a";
}
.fa-th-large:before {
  content: "\f009";
}
.fa-th-list:before {
  content: "\f00b";
}
.fa-the-red-yeti:before {
  content: "\f69d";
}
.fa-theater-masks:before {
  content: "\f630";
}
.fa-themeco:before {
  content: "\f5c6";
}
.fa-themeisle:before {
  content: "\f2b2";
}
.fa-thermometer:before {
  content: "\f491";
}
.fa-thermometer-empty:before {
  content: "\f2cb";
}
.fa-thermometer-full:before {
  content: "\f2c7";
}
.fa-thermometer-half:before {
  content: "\f2c9";
}
.fa-thermometer-quarter:before {
  content: "\f2ca";
}
.fa-thermometer-three-quarters:before {
  content: "\f2c8";
}
.fa-thumbs-down:before {
  content: "\f165";
}
.fa-thumbs-up:before {
  content: "\f164";
}
.fa-thumbtack:before {
  content: "\f08d";
}
.fa-ticket-alt:before {
  content: "\f3ff";
}
.fa-times:before {
  content: "\f00d";
}
.fa-times-circle:before {
  content: "\f057";
}
.fa-tint:before {
  content: "\f043";
}
.fa-tint-slash:before {
  content: "\f5c7";
}
.fa-tired:before {
  content: "\f5c8";
}
.fa-toggle-off:before {
  content: "\f204";
}
.fa-toggle-on:before {
  content: "\f205";
}
.fa-toolbox:before {
  content: "\f552";
}
.fa-tooth:before {
  content: "\f5c9";
}
.fa-torah:before {
  content: "\f6a0";
}
.fa-torii-gate:before {
  content: "\f6a1";
}
.fa-trade-federation:before {
  content: "\f513";
}
.fa-trademark:before {
  content: "\f25c";
}
.fa-traffic-light:before {
  content: "\f637";
}
.fa-train:before {
  content: "\f238";
}
.fa-transgender:before {
  content: "\f224";
}
.fa-transgender-alt:before {
  content: "\f225";
}
.fa-trash:before {
  content: "\f1f8";
}
.fa-trash-alt:before {
  content: "\f2ed";
}
.fa-tree:before {
  content: "\f1bb";
}
.fa-trello:before {
  content: "\f181";
}
.fa-tripadvisor:before {
  content: "\f262";
}
.fa-trophy:before {
  content: "\f091";
}
.fa-truck:before {
  content: "\f0d1";
}
.fa-truck-loading:before {
  content: "\f4de";
}
.fa-truck-monster:before {
  content: "\f63b";
}
.fa-truck-moving:before {
  content: "\f4df";
}
.fa-truck-pickup:before {
  content: "\f63c";
}
.fa-tshirt:before {
  content: "\f553";
}
.fa-tty:before {
  content: "\f1e4";
}
.fa-tumblr:before {
  content: "\f173";
}
.fa-tumblr-square:before {
  content: "\f174";
}
.fa-tv:before {
  content: "\f26c";
}
.fa-twitch:before {
  content: "\f1e8";
}
.fa-twitter:before {
  content: "\f099";
}
.fa-twitter-square:before {
  content: "\f081";
}
.fa-typo3:before {
  content: "\f42b";
}
.fa-uber:before {
  content: "\f402";
}
.fa-uikit:before {
  content: "\f403";
}
.fa-umbrella:before {
  content: "\f0e9";
}
.fa-umbrella-beach:before {
  content: "\f5ca";
}
.fa-underline:before {
  content: "\f0cd";
}
.fa-undo:before {
  content: "\f0e2";
}
.fa-undo-alt:before {
  content: "\f2ea";
}
.fa-uniregistry:before {
  content: "\f404";
}
.fa-universal-access:before {
  content: "\f29a";
}
.fa-university:before {
  content: "\f19c";
}
.fa-unlink:before {
  content: "\f127";
}
.fa-unlock:before {
  content: "\f09c";
}
.fa-unlock-alt:before {
  content: "\f13e";
}
.fa-untappd:before {
  content: "\f405";
}
.fa-upload:before {
  content: "\f093";
}
.fa-usb:before {
  content: "\f287";
}
.fa-user:before {
  content: "\f007";
}
.fa-user-alt:before {
  content: "\f406";
}
.fa-user-alt-slash:before {
  content: "\f4fa";
}
.fa-user-astronaut:before {
  content: "\f4fb";
}
.fa-user-check:before {
  content: "\f4fc";
}
.fa-user-circle:before {
  content: "\f2bd";
}
.fa-user-clock:before {
  content: "\f4fd";
}
.fa-user-cog:before {
  content: "\f4fe";
}
.fa-user-edit:before {
  content: "\f4ff";
}
.fa-user-friends:before {
  content: "\f500";
}
.fa-user-graduate:before {
  content: "\f501";
}
.fa-user-lock:before {
  content: "\f502";
}
.fa-user-md:before {
  content: "\f0f0";
}
.fa-user-minus:before {
  content: "\f503";
}
.fa-user-ninja:before {
  content: "\f504";
}
.fa-user-plus:before {
  content: "\f234";
}
.fa-user-secret:before {
  content: "\f21b";
}
.fa-user-shield:before {
  content: "\f505";
}
.fa-user-slash:before {
  content: "\f506";
}
.fa-user-tag:before {
  content: "\f507";
}
.fa-user-tie:before {
  content: "\f508";
}
.fa-user-times:before {
  content: "\f235";
}
.fa-users:before {
  content: "\f0c0";
}
.fa-users-cog:before {
  content: "\f509";
}
.fa-ussunnah:before {
  content: "\f407";
}
.fa-utensil-spoon:before {
  content: "\f2e5";
}
.fa-utensils:before {
  content: "\f2e7";
}
.fa-vaadin:before {
  content: "\f408";
}
.fa-vector-square:before {
  content: "\f5cb";
}
.fa-venus:before {
  content: "\f221";
}
.fa-venus-double:before {
  content: "\f226";
}
.fa-venus-mars:before {
  content: "\f228";
}
.fa-viacoin:before {
  content: "\f237";
}
.fa-viadeo:before {
  content: "\f2a9";
}
.fa-viadeo-square:before {
  content: "\f2aa";
}
.fa-vial:before {
  content: "\f492";
}
.fa-vials:before {
  content: "\f493";
}
.fa-viber:before {
  content: "\f409";
}
.fa-video:before {
  content: "\f03d";
}
.fa-video-slash:before {
  content: "\f4e2";
}
.fa-vihara:before {
  content: "\f6a7";
}
.fa-vimeo:before {
  content: "\f40a";
}
.fa-vimeo-square:before {
  content: "\f194";
}
.fa-vimeo-v:before {
  content: "\f27d";
}
.fa-vine:before {
  content: "\f1ca";
}
.fa-vk:before {
  content: "\f189";
}
.fa-vnv:before {
  content: "\f40b";
}
.fa-volleyball-ball:before {
  content: "\f45f";
}
.fa-volume-down:before {
  content: "\f027";
}
.fa-volume-off:before {
  content: "\f026";
}
.fa-volume-up:before {
  content: "\f028";
}
.fa-vuejs:before {
  content: "\f41f";
}
.fa-walking:before {
  content: "\f554";
}
.fa-wallet:before {
  content: "\f555";
}
.fa-warehouse:before {
  content: "\f494";
}
.fa-weebly:before {
  content: "\f5cc";
}
.fa-weibo:before {
  content: "\f18a";
}
.fa-weight:before {
  content: "\f496";
}
.fa-weight-hanging:before {
  content: "\f5cd";
}
.fa-weixin:before {
  content: "\f1d7";
}
.fa-whatsapp:before {
  content: "\f232";
}
.fa-whatsapp-square:before {
  content: "\f40c";
}
.fa-wheelchair:before {
  content: "\f193";
}
.fa-whmcs:before {
  content: "\f40d";
}
.fa-wifi:before {
  content: "\f1eb";
}
.fa-wikipedia-w:before {
  content: "\f266";
}
.fa-window-close:before {
  content: "\f410";
}
.fa-window-maximize:before {
  content: "\f2d0";
}
.fa-window-minimize:before {
  content: "\f2d1";
}
.fa-window-restore:before {
  content: "\f2d2";
}
.fa-windows:before {
  content: "\f17a";
}
.fa-wine-glass:before {
  content: "\f4e3";
}
.fa-wine-glass-alt:before {
  content: "\f5ce";
}
.fa-wix:before {
  content: "\f5cf";
}
.fa-wolf-pack-battalion:before {
  content: "\f514";
}
.fa-won-sign:before {
  content: "\f159";
}
.fa-wordpress:before {
  content: "\f19a";
}
.fa-wordpress-simple:before {
  content: "\f411";
}
.fa-wpbeginner:before {
  content: "\f297";
}
.fa-wpexplorer:before {
  content: "\f2de";
}
.fa-wpforms:before {
  content: "\f298";
}
.fa-wrench:before {
  content: "\f0ad";
}
.fa-x-ray:before {
  content: "\f497";
}
.fa-xbox:before {
  content: "\f412";
}
.fa-xing:before {
  content: "\f168";
}
.fa-xing-square:before {
  content: "\f169";
}
.fa-y-combinator:before {
  content: "\f23b";
}
.fa-yahoo:before {
  content: "\f19e";
}
.fa-yandex:before {
  content: "\f413";
}
.fa-yandex-international:before {
  content: "\f414";
}
.fa-yelp:before {
  content: "\f1e9";
}
.fa-yen-sign:before {
  content: "\f157";
}
.fa-yin-yang:before {
  content: "\f6ad";
}
.fa-yoast:before {
  content: "\f2b1";
}
.fa-youtube:before {
  content: "\f167";
}
.fa-youtube-square:before {
  content: "\f431";
}
.fa-zhihu:before {
  content: "\f63f";
}
.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
.sr-only-focusable:active,
.sr-only-focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}
@font-face {
  font-family: "Font Awesome 5 Brands";
  font-style: normal;
  font-weight: 400;
  src: url(https://use.fontawesome.com/releases/v5.0.10/webfonts/fa-brands-400.eot);
  src: url(
        https://use.fontawesome.com/releases/v5.0.10/webfonts/fa-brands-400.eot?#iefix
      )format("embedded-opentype"),
    url(
          https://use.fontawesome.com/releases/v5.0.10/webfonts/fa-brands-400.woff2
        )format("woff2"),
      url(
            https://use.fontawesome.com/releases/v5.0.10/webfonts/fa-brands-400.woff
          )format("woff"),
        url(
              https://use.fontawesome.com/releases/v5.0.10/webfonts/fa-brands-400.ttf
            )format("truetype"),
          url(
              https://use.fontawesome.com/releases/v5.0.10/webfonts/fa-brands-400.svg#fontawesome
            )format("svg");
}
.fab {
  font-family: "Font Awesome 5 Brands";
}
@font-face {
  font-family: "Font Awesome 5 Free";
  font-style: normal;
  font-weight: 400;
  src: url(https://use.fontawesome.com/releases/v5.0.10/webfonts/fa-regular-400.eot);
  src: url(
        https://use.fontawesome.com/releases/v5.0.10/webfonts/fa-regular-400.eot?#iefix
      )format("embedded-opentype"),
    url(
          https://use.fontawesome.com/releases/v5.0.10/webfonts/fa-regular-400.woff2
        )format("woff2"),
      url(
            https://use.fontawesome.com/releases/v5.0.10/webfonts/fa-regular-400.woff
          )format("woff"),
        url(
              https://use.fontawesome.com/releases/v5.0.10/webfonts/fa-regular-400.ttf
            )format("truetype"),
          url(
              https://use.fontawesome.com/releases/v5.0.10/webfonts/fa-regular-400.svg#fontawesome
            )format("svg");
}
.far {
  font-weight: 400;
}
@font-face {
  font-family: "Font Awesome 5 Free";
  font-style: normal;
  font-weight: 900;
  src: url(https://use.fontawesome.com/releases/v5.0.10/webfonts/fa-solid-900.eot);
  src: url(
        https://use.fontawesome.com/releases/v5.0.10/webfonts/fa-solid-900.eot?#iefix
      )format("embedded-opentype"),
    url(
          https://use.fontawesome.com/releases/v5.0.10/webfonts/fa-solid-900.woff2
        )format("woff2"),
      url(
            https://use.fontawesome.com/releases/v5.0.10/webfonts/fa-solid-900.woff
          )format("woff"),
        url(
              https://use.fontawesome.com/releases/v5.0.10/webfonts/fa-solid-900.ttf
            )format("truetype"),
          url(
              https://use.fontawesome.com/releases/v5.0.10/webfonts/fa-solid-900.svg#fontawesome
            )format("svg");
}
.fa,
.far,
.fas {
  font-family: "Font Awesome 5 Free";
}
.fa,
.fas {
  font-weight: 900;
}
@keyframes spinRight {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes spinLeft {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(-360deg);
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
#loading-screen {
  z-index: 200;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #f1ecfa;
  opacity: 1;
  background-image: url("https://i.imgur.com/dfyH7QL.png?v=1577328366411");
  background-size: cover;
  background-repeat: no-repeat;
  transition: opacity 1s;
}
#loading-screen .maou-circle-container {
  width: 512px;
  height: 512px;
  position: fixed;
  top: calc(50% - 256px);
  left: calc(50% - 256px);
  transform: scale(1);
  transition: all 0.75s;
}
#loading-screen .maou-circle-container:hover {
  transform: scale(1.1);
}
#loading-screen .maou-circle-container .maou-circle {
  width: 512px;
  height: 512px;
  position: absolute;
}
#loading-screen .maou-circle-container .maou-circle.p1 {
  background: url(https://i.imgur.com/NG5DdAR.png?v=1577328653444);
  animation: spinRight 32s linear infinite, fadeIn 6s;
}
#loading-screen .maou-circle-container .maou-circle.p2 {
  background: url(https://i.imgur.com/81fgaTb.png?v=1577328666934);
  animation: spinLeft 8s linear infinite, fadeIn 6s;
}
#loading-screen .maou-circle-container .maou-circle.p3 {
  background: url(https://i.imgur.com/a6ze0yZ.png?v=1577328672051);
  animation: spinRight 16s linear infinite, fadeIn 6s;
}
#loading-screen .message {
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  font-family: raleway;
  font-size: 25px;
  color: #ffffff;
  text-align: center;
  animation: fadeIn 1s;
  opacity: 1;
  transition: opacity 1s;
}
#loading-screen .product-key {
  bottom: 40px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: #f05c5b;
  border: none;
  height: 30px;
  width: 300px;
  font-family: ubuntu;
  color: #eaeaea;
  text-align: center;
  font-size: 16px;
  border-radius: 2px;
  outline: 0;
  opacity: 0;
  transition: opacity 1s;
}
#loading-screen .product-key::placeholder {
  color: #eaeaea;
}

#loading-screen .info {
  position: fixed;
  bottom: 4px;
  width: 100%;
  text-align: center;
  color: #ffffff;
  font-size: 16px;
}

#leaderboard-hud {
    user-select: none;
    position: fixed;
    right: 5px;
    padding: 10px;
    top: 30px;
    transition: top 0.25s;
    text-shadow: 0px 0px 5px #000;
  
}
#leaderboard-head {
    text-align: right;
    color: #FF006E;
    font-family: oswald;
    font-size: 24px;
    font-weight: 500;
}
#leaderboard-positions {
  color: #fff;
  font-family: ubuntu;
  font-size: 5px;
  text-align: right;
}
#leaderboard-positions span[lbData="position"] {
    font-family: oswald;
    font-weight: 600;
    color:#ff006e;
}
#leaderboard-positions .lb-position {
  display: block;
  white-space: pre;

}
.shop-modal {
  top: 50%;
  left: 50%;
  position: fixed;
  width: 600px;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: none;
  user-select: none;
}
.shop-modal .partition {
  width: 300px;
  box-sizing: border-box;
  padding: 15px;
  display: inline-block;
  position: relative;
}
.shop-modal .partition[login-realm="2"] {
  background: #111;
}
.shop-modal .partition[login-realm="3"] {
  background: #222;
}
.shop-modal .partition .blocker {
  font-size: 16px;
  color: #fff;
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  height: 414px;
  text-align: center;
  padding-top: 172px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.75) 90%, rgba(0, 0, 0, 0));
  box-sizing: border-box;
}
.shop-modal .account-btn {
  background: #333;
  outline: 0;
  border: none;
  padding: 10px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 13px;
  width: 270px;
  border-radius: 2px;
  cursor: pointer;
}
.shop-modal .partition[login-realm="2"] .account-btn {
  background: #3b5998;
}
.shop-modal .partition[login-realm="3"] .account-btn {
  background: #dd4b39;
}
.shop-modal .partition .level-info {
  font-size: 14px;
  text-transform: uppercase;
  color: #d6d6d6;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 13px;
}
.shop-modal .partition .level-info .level {
  display: inline-block;
}
.shop-modal .partition .level-info .xp {
  display: inline-block;
  float: right;
}
.shop-modal .partition .level-info .xp-bar-outer {
  height: 5px;
  width: 100%;
  background: #555;
  margin-top: 5px;
  border-radius: 3px;
}
.shop-modal .partition .level-info .xp-bar-outer .xp-bar-inner {
  background: #fff;
  border-radius: 3px;
  width: 5%;
  height: 100%;
  transition: all 1s;
}
.shop-modal .partition .stats {
  color: #fff;
  margin-top: 4px;
  border-radius: 2px;
  font-weight: 600;
}
.shop-modal .partition .stats .title {
  display: inline-block;
  background: #cc4084;
  font-size: 12px;
  padding: 3px 6px;
  font-family: raleway;
}
.shop-modal .partition .stats .value {
  display: inline-block;
  background: #4a4a4a;
  font-size: 11px;
  padding: 3px 6px;
}
.shop-modal .partition .mass-boost-cont {
  display: inline-block;
  width: 130px;
  margin-top: 20px;
  text-align: center;
  font-size: 12px;
}
.shop-modal .partition .mass-boost-cont .info {
  background: #2b97c5;
  padding: 5px 8px;
  font-size: 16px;
  font-weight: 600;
  display: inline-block;
  color: #fff;
  border-radius: 4px;
  text-align: center;
}
.shop-modal .partition .mass-boost-cont .info div {
  font-size: 12px;
}
.shop-modal .partition .mass-boost-cont button {
  display: inline-block;
  text-align: center;
  border: none;
  margin-top: 5px;
  background: #555;
  color: #fff;
  border-radius: 2px;
  padding: 2px 6px;
  cursor: pointer;
}
.shop-modal .partition .mass-boost-cont .btn-use.disabled {
  background: #383838;
  color: #8e8e8e;
  cursor: not-allowed;
}
.shop-modal .free-coins-btn {
  background: #eaa00b;
  outline: 0;
  border: none;
  padding: 10px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 13px;
  width: 270px;
  border-radius: 2px;
  margin-top: 15px;
  cursor: pointer;
}
.shop-modal .partition[state="logged-in"] [type="state-logged-out"],
.shop-modal .partition[state="logged-out"] [type="state-logged-in"] {
  display: none;
}
body {
  background: #000;
  margin: 0;
  padding: 0;
  font-family: ubuntu;
  font-size: 0;
  overflow: hidden;
}
#canvas {
  user-select: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-transform3d: translate(0, 0, 0);
  -moz-transform3d: translate(0, 0, 0);
  transform3d: translate(0, 0, 0);
}
#anouncement {
  display: none;
  top: 50%;
  left: 50%;
  position: fixed;
  z-index: 150;
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  padding: 20px;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  font-family: ubuntu;
  font-size: 20px;
  cursor: pointer;
}
#Recaptcha-container {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 500;
}
#Recaptcha {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -152px;
  margin-top: -40px;
}










#menu-overlay {
  position: fixed;
  z-index: 100;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.menu-blur {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-size: cover;
    background-image: url(https://i.imgur.com/QUaD9yc.png);
}


#musicPlayer {
  position: absolute;
  z-index: 1;
  transform: translateX(-50%);
  left: 50%;
  top: 100px;
    padding-top: 30px;
}

iframe {
  height: 150px;
  width: 400px;
}















.control-bar-container {
    background: rgba(26, 13, 48, 0.4);
    position: absolute;
    width: 835px;
    height: 140px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0px;
    z-index: 1;
    box-shadow: 0 0 10px #000;
    border-radius: 200px;
}

.control-bar {
    width: 815px;
    position: absolute;
    height: 120px;
    top: 10px;
    left: 10px;
    background: #14062B;
    border-radius: 200px;
}

.bar-button-container {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 795px;
    top: 10px;
}

.bar-button-bg {
    width: 127px;
    height: 100px;
    display: inline-block;
    margin-left: -1px;
    margin-right: -1px;
    position: relative;
    transition: all .5s;
}

.bar-button-bg.left {
}

.bar-button-bg.left:hover {
}

.bar-button-bg.center {
    border-radius: 0 5px 5px 0;
    z-index: 5
}

.bar-button-bg.right {
}

.bar-button-bg.right:hover {
}

.bar-button-bg.settings {
    background: #00B2FF;
    border-radius: 200px 0 0 200px;
}

.bar-button-bg.play {
    background: #fff;
    z-index: 4
}

.bar-button-bg.spectate {
    background: #fff;
    z-index: 3
}

.bar-button-bg.inputs {
    background: #fff;
    z-index: 2
}

.bar-button-bg.theme {
    background: #fff;
    border-radius: 0 200px 200px 0;
    z-index: 1;
}

.bar-button-bg.dummy {
    background: linear-gradient(-90deg,#fff 50%,#00B2FF 50%);
    width: 170px
}

.bar-button i {
    font-size: 36px
}

@keyframes bounceSkinCircle {
    50% {
        transform: scale(1.05) translateX(-280px)
    }

    100% {
        transform: scale(1) translateX(-295px)
    }
}

.bar-circle-outer {
    cursor: pointer;
    width: 210px;
    height: 210px;
    position: absolute;
    background: rgba(255,255,255,.3);
    box-shadow: 0 0 10px #000;
    border-radius: 50%;
    left: 50%;
    transform: scale(1) translate(-295px, -30px);
    transition: transform .5s;
}

.bar-circle-outer:hover {
    transform: scale(1.05) translate(-280px, -30px);
}

.bar-circle {
    position: absolute;
    width: 210px;
    height: 210px;
    background: #fff;
    border-radius: 50%;
}

.skin-preview {
    background: url(https://i.imgur.com/5pE2UGi.png);
    width: 210px;
    height: 210px;
    border-radius: 50%;
    background-color: #dadada!important;
    background-size: cover!important;
}

.bar-button {
    cursor: pointer;
    margin-top: 23px;
    margin-left: -1px;
    width: 125px;
    color: #00B2FF;
    user-select: none;
    font-size: 10px;
    text-align: center;
    height: 45px;
    display: inline-block;
    transform: scale(1);
    transition: transform .5s;
}

#button-settings {
    color: #fff
}

.bar-button:hover {
    transform: scale(1.1)
}

.bar-button.dummy {
    width: 170px
}

.bar-button .text {
    font-family: raleway;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 600
}

.menu-panel {
    z-index: 1;
    border-radius: 20px;
    background: #14062b;
}

@keyframes arrowRightShake {
    0% {
        transform: translate3d(0,0,0)
    }

    25% {
        transform: translate3d(1px,0,0)
    }

    75% {
        transform: translate3d(2px,0,0)
    }

    90% {
        transform: translate3d(1px,0,0)
    }

    100% {
        transform: translate3d(0,0,0)
    }
}

@keyframes arrowLeftShake {
    0% {
        transform: translate3d(0,0,0)
    }

    25% {
        transform: translate3d(-1px,0,0)
    }

    75% {
        transform: translate3d(-2px,0,0)
    }

    90% {
        transform: translate3d(-1px,0,0)
    }

    100% {
        transform: translate3d(0,0,0)
    }
}











#settings {
    display: none;
    width: 380px;
    height: 500px;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 4px 2px;
    transform: translate(-50%,-50%);
}

.settings-container {
    user-select: none;
    position: relative;
    height: 482px;
    border-radius: 20px;
}

.settings-container .row {
    padding: 10px;
    margin-right: 4px;
    margin-left: 4px;
    border-radius: 20px;
    background: rgb(26, 13, 48);
    margin-bottom: 3px;
}

.settings-container .row.divider {
    padding: 2px;
    background: rgba(0,0,0,0)
}

.settings-options {
    float: right;
    font-family: raleway;
    text-transform: uppercase;
    font-size: 12px
}

.settings-options b {
    display: none
}

.settings-options b.active {
    display: inline-block
}

.settings-container .row .title {
    font-family: raleway;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px
}

.settings-options span.outer {
    width: 100px;
    height: 2px;
    overflow: hidden;
    cursor: pointer;
    background: #0a0a0a;
    padding-bottom: 1px;
    display: inline-block;
    transform: translateY(-2px);
    border-radius: 2px
}

.settings-options span.inner {
    width: 50px;
    background: linear-gradient(90deg,#6000ff,#ff006e);
    height: 4px;
    display: block;
    transition: all .5s;
    border-radius: 2px
}

.settings-options span.range-value {
    font-weight: 600;
    font-family: ubuntu;
    background: #1a0d30;
    font-size: 12px;
    padding: 4px 6px;
    margin-top: -3px;
    width: 28px;
    text-align: center;
    display: inline-block;
}

.settings-options[type=range] {
    transform: scale(1);
    transition: transform .5s
}

.settings-options .row:hover .fa-chevron-right {
    animation: arrowRightShake .75s linear infinite
}

.settings-options .row:hover .fa-chevron-left {
    animation: arrowLeftShake .75s linear infinite
}

.settings-container .fa-chevron-left,.settings-container .fa-chevron-right {
    cursor: pointer
}

.settings-close {
    font-family: raleway;
    font-weight: 600;
    font-size: 13px;
    text-align: right;
    cursor: pointer;
    padding-right: 10px;
    padding-bottom: 2px;
}

#inputs {
    display: none;
    width: 400px;
    height: 500px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%)
}

.input-hidden {
    color: transparent!important
}

.input-hidden::selection {
    background: #777!important;
    color: transparent!important
}

.inputs-tab {
    cursor: pointer;
    background: rgb(26, 13, 48);
    padding: 6px 10px;
    border-radius: 20px;
}

.inputs-tab.active {
    background: rgb(32, 22, 57);
}

.inputs-tab-bar {
    color: #fff;
    font-size: 14px;
    font-family: raleway;
    height: 22px;
    margin-top: 11px;
    margin-left: 47px;
    margin-bottom: 5px;
}

.inputs-menu-container {
    width: 100%;
    height: 457px;
    background: rgb(20, 6, 43);
    border-radius: 20px;
}

.inputs-menu {
    width: 100%;
    position: absolute;
    height: 457px;
    display: none;
    color: #fff;
    border-radius: 20px;
}

.inputs-menu.active {
    display: block
}

.inputs-tab.close {
    float: right;
    margin-right: 10px;
    margin-top: -6px;
    border-radius: 50%;
}

#hotkeys .row {
    padding: 10px;
    background-color: #1a0d30;
    border-bottom: 1px solid #080d17;
}

#hotkeys .row .title {
    font-family: raleway;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 13px;
}

#hotkeys .row .key {
    float: right;
    margin-right: 6px;
    font-family: raleway;
    background: #1a0d30;
    padding: 2px 5px;
    border: 2px solid #201639;
    box-shadow: 0px 0px 2px #000;
    color: #ffffff;
    transform: translateY(-3px);
    text-align: center;
    width: 55px;
    font-weight: 700;
    cursor: pointer;
    border-radius: 20px;
}

#mouse .row {
    padding: 10px;
    background: rgb(26, 13, 48);
    border-bottom: 1px solid #080d17;
}

.mouse-options {
    float: right;
    margin-right: 5px;
    font-family: raleway;
    text-transform: uppercase;
    font-size: 13px;
}

.mouse-options b {
    display: none;
}

.mouse-options b.active {
    display: inline-block;
}

#mouse .row .title {
    font-family: raleway;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 13px;
}

#mouse .fa-chevron-left, #mouse .fa-chevron-right {
    cursor: pointer;
}

.mouse-targeting-info {
    font-family: raleway;
    font-size: 16px;
    font-weight: 500;
}

@keyframes wheel-rotate {
    from {
        transform: translateX(-363px) rotate(0)
    }

    to {
        transform: translateX(-363px) rotate(360deg)
    }
}

@keyframes selector-rotate {
    from {
        transform: rotate(360deg)
    }

    to {
        transform: rotate(0)
    }
}














.skin-wheel {
    display: none;
    position: absolute;
    width: 346px;
    height: 346px;
    left: 50%;
    top: -98px;
    transform: translateX(-363px);
    animation: wheel-rotate 120s linear infinite;
}

.skin-wheel-bg {
    position: absolute;
    width: 200px;
    height: 200px;
    border: 73px solid rgba(26, 13, 48, 0.4);
    border-radius: 50%;
}

.skin-selector {
    cursor: pointer;
    background-size: cover!important;
    box-shadow: 0 0 30px #000;
    border: 2px solid #fff;
    width: 61px;
    background: rgba(0,0,0,.59);
    height: 61px;
    position: absolute;
    border-radius: 50%;
    animation: selector-rotate 120s linear infinite;
}

.skin-selector.one {
    left: 140px;
    top: 5px
}

.skin-selector.two {
    top: 50px;
    right: 40px
}

.skin-selector.three {
    right: 5px;
    top: 140px
}

.skin-selector.four {
    right: 40px;
    bottom: 50px
}

.skin-selector.five {
    left: 140px;
    bottom: 5px
}

.skin-selector.six {
    left: 40px;
    bottom: 50px
}

.skin-selector.seven {
    left: 5px;
    top: 140px
}

.skin-selector.eight {
    left: 40px;
    top: 50px
}

#streamMode {
    position: absolute;
    top: -20px;
    right: 0px;
    background: #14062b;
    border: none;
    color: #afafaf;
    cursor: pointer;
    font-size: 18px;
    border-radius: 20px 20px 0px 0px;
    padding: 3px 8px;
}

#streamMode:focus {
    outline: 0
}

#streamMode:hover {
    color: #fff
}

#player-data {
    position: absolute;
    left: 50%;
    top: 48%;
    width: 300px;
    transform: translate(-50%,125px);
    padding: 15px;
    background: #fff;
    border-radius: 20px 0 20px 20px;
    z-index: 1;
    box-sizing: border-box;
    font-size: 0;
}

#player-data .decorator {
    width: 100%;
    height: 69px;
    background: #222;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    display: none;
}

.levels-info {
    background: #111;
    width: 300px;
    padding: 5px;
    top: 50%;
    left: 50%;
    box-sizing: border-box;
    position: fixed;
    transform: translate(-50%,300px)
}

.levels-info .level-bar-outer {
    display: inline-block;
    height: 10px;
    width: 265px;
    background: #333
}

.levels-info .level-bar-inner {
    width: 5%;
    background: #8fd81c;
    height: 100%;
    transition: all 1s
}

.levels-info .level-num {
    display: inline-block;
    height: 10px;
    width: 25px;
    font-size: 10px;
    font-weight: 600;
    color: #fff;
    background: #555;
    text-align: center;
    line-height: 13px
}

.levels-info .level-num span {
    transform: translateY(-1px);
    display: block
}












.menu-inputs {
    background: #1a0d30;
    border: none;
    margin: 2px;
    height: 30px;
    color: #fff;
    border-radius: 20px;
    padding: 2px 10px;
    font-family: raleway;
    font-weight: 600;
    box-sizing: border-box;
    transition: color .25s;
}
.menu-button {
  cursor: pointer;
  height: 22px;
  width: 70px;
  background: #555;
  border: none;
  font-weight: 600;
  border-radius: 10px;
  font-size: 11px;
  font-family: raleway;
  color: #fff;
  text-transform: uppercase;
}
.menu-button:focus {
  outline: 0;
}
.menu-button img {
  width: 55px;
  position: absolute;
  transform: translate(-12px, -13px);
}
.menu-inputs::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.menu-inputs:focus {
  outline: 0;
}
#skin {
  width: 270px;
  margin-right: 0;
  margin-left: 0;
}
#skin2 {
  width: 270px;
  margin-right: 0;
  margin-left: 0;
}
#nick,
#nick2 {
  width: 105px;
}
#nick2 {
  margin-right: 0;
}
.double-tags {
  display: inline-block;
}
.double-tags:hover {
  display: inline-block !important;
}
/*#tag {
    width: 35px;
}

#tag2 {
    width: 35px;
    display: none;
}*/
.tag-buttons {
  width: 30px;
}
.active-tag {
  background: #e839b2;
}
#tag {
  width: 52px;
  margin-left: 0;
}
.party-box {
  margin-top: 8px;
  margin-bottom: 8px;
}
#gamemode {
  cursor: pointer;
  width: 80px;
  margin-left: 0;
  background: #1a0d30;
}
#regions {
  cursor: pointer;
  width: 186px;
  margin-right: 0;
  background: #1a0d30;
}
#join-party {
  background: #00B2FF;
  margin-left: 15px;
  box-shadow: 0 0 15px #080808;
  transition: all 0.5s;
}
#join-party:hover {
  background: #00B2FF;
}
#create-party {
  background: #00B2FF;
  box-shadow: 0 0 15px #080808;
  transition: all 0.5s;
}
#create-party:hover {
  background: #00B2FF;
}
#party-token {
  width: 90px;
  text-align: center;
  height: 22px;
  padding: 2px 5px;
  border-radius: 10px;
  margin: 0 5px;
  font-size: 12px;
  box-shadow: 0 0 15px #080808;
}




#theme {
    display: none;
    width: 380px;
    height: 500px;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 4px 2px;
    transform: translate(-50%,-50%);
}

.theme-container {
    position: relative;
    height: 480px;
    border-radius: 25px;
}

.theme-container .row {
    user-select: none;
    padding: 14px 10px;
    margin-right: 4px;
    margin-left: 4px;
    border-radius: 20px;
    background: #1a0d30;
    color: #ffffff;
    transition: all .5s;
    margin-bottom: 3px;
}

.theme-container .row:hover {
    background: #1a0d30;
}

.theme-container .row.divider {
    padding: 2px;
    background: rgba(0,0,0,0)
}

.theme-options {
    float: right;
    font-family: raleway;
    text-transform: uppercase;
    font-size: 12px
}

.theme-options b {
    display: none;
    transform: translateY(0);
    vertical-align: middle
}

.theme-options b.active {
    display: inline-block
}

.theme-container .row .title {
    font-family: raleway;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px
}

.theme-options span.outer {
    width: 100px;
    height: 2px;
    overflow: hidden;
    cursor: pointer;
    background: #241343;
    padding-bottom: 1px;
    display: inline-block;
    transform: translateY(-2px);
    border-radius: 2px;
}

.theme-options i.fa {
    transform: translateY(3px)
}

.theme-options span.range-value {
    font-weight: 600;
    font-family: ubuntu;
    background: #1a0d30;
    font-size: 12px;
    padding: 4px 6px;
    margin-top: -3px;
    width: 28px;
    text-align: center;
    display: inline-block;
    border-radius: 20px;
}

.theme-options span.inner {
    width: 50px;
    background: linear-gradient(90deg,#5f00ff,#ff006e);
    height: 4px;
    display: block;
    transition: all .5s;
    border-radius: 2px;
}

.theme-options[type=range] {
    transform: scale(1);
    transition: transform .5s
}

.theme-container .fa-chevron-left,.theme-container .fa-chevron-right {
    cursor: pointer
}

.theme-close {
    font-family: raleway;
    font-weight: 600;
    font-size: 13px;
    text-align: right;
    cursor: pointer;
    padding-right: 10px;
    padding-bottom: 2px;
}

.theme-options input {
    background: #1a0d30;
    border: none;
    color: #ffffff;
    font-weight: 600;
    font-family: ubuntu;
    transform: translateY(-7.5px);
    padding: 5px 0;
    border-radius: 20px;
    outline: 0;
}

.theme-options span.minicolors-swatch.minicolors-sprite.minicolors-input-swatch {
    transform: translateY(-1.5px);
    border: solid 3px #3e2765;
}

#cursorDisplay {
    width: 26px;
    margin-top: -15px;
    transform: translateY(10px)
}

#cursorOff {
    display: inline-block;
    font-weight: 600;
    font-family: raleway;
    font-size: 12px
}






#huds {
  z-index: 101;
  position: fixed;
}
#time-hud {
  display: inline-block;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  font-family: ubuntu;
  padding: 3px 7px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 10px;
  margin-right: 10px;
  border-radius: 5px;
}
#stats-hud {
  user-select: none;
  position: fixed;
  bottom: 2px;
  left: 50%;
  transform: translate(-50%, 0);
  color: #fff;
  font-family: ubuntu;
  background: rgba(0, 0, 0, 0.5);
  padding: 6px 10px;
  white-space: pre;
  font-size: 20px;
}
.chart-bar.red {
  background: #e52105;
}
.chart-bar.green {
  background: #06e531;
}
.chart-bar.blue {
  background: #0c1ae5;
}
.minimap-head {
  position: fixed;
  bottom: 209px;
  right: 5px;
}
#top10mass {
  position: fixed;
  user-select: none;
  bottom: 0px;
}
.minimap-button {
  display: none;
  border: none;
  color: #828282;
  font-family: ubuntu;
  background: #1f1f1f;
  padding: 3px 7px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  border-radius: 1px 1px 0px 0px;
}
.minimap-button.active {
  background: #333;
}

.minimap-button:focus {
  outline: none;
}
.minimap-grid {
  user-select: none;
  opacity: 1;
  color: #999;
  width: 200px;
  height: 200px;
  padding: 0;
}
.minimap-sector {
  font-family: ubuntu;
  width: 40px;
  height: 40px;
  display: inline-block;
  text-align: center;
  padding-top: 11px;
  font-size: 15px;
}
.minimap-row {
  width: 200px;
  height: 40px;
  font-size: 0;
}
#minimap-hud {
  user-select: none;
  bottom: 10px;
  position: fixed;
  background:#000;
  right: 10px;
  width: 200px;
  height: 200px;
  border-radius: 5px;
  opacity: 0.8;
  -webkit-box-shadow: 0px 4px 10px 3px rgba(0,0,0,1);
-moz-box-shadow: 0px 4px 10px 3px rgba(0,0,0,1);
box-shadow: 0px 4px 10px 3px rgba(0,0,0,1);
}
#minimap-nodes {
  position: absolute;
  top: 0;
  left: 0;
  
}





#targeting-hud {
  left: 50%;
  transform: translateX(-50%);
  position: fixed;
  top: 0;
  color: #fff;
  text-align: center;
    background: rgba(26, 13, 48, 0.4);
    /* box-shadow: 0 0 10px #000; */
  padding: 10px;
  font-family: ubuntu;
  font-size: 15px;
  display: none;
    border-radius: 20px;
  transition: top 0.25s;
}


    
    
    
    
    
    


#targeting-hud .static {
  font-family: raleway;
  font-weight: 500;
}
#targeting-mouse,
#targeting-players {
  display: none;
}
.spectate-mode-btn {
    color: #ffffff;
    margin-bottom: 4px;
    background: #14062b;
    padding: 4px;
    border: 3px solid #1a0d30;
    padding-top: 1px;
    border-radius: 20px;
    display: inline-block;
    width: 38px;
    font-size: 13px;
    height: 12px;
    cursor: pointer;
    text-align: center;
    transition: all .5s;
}
.spectate-mode-btn.active {
    border: 3px solid #1a0d30;

}
.spectate-mode-btn:hover {
    border: 3px solid #1a0d30;
    color: #ff006e;
}




#notifications {
  position: fixed;
  bottom: 35px;
  left: 5px;
  width: 250px;
  transition: all 1s;
  font-size: 14px;
}
#notifications img {
  width: 20px;
  vertical-align: middle;
}
#notifications .normal {
  margin-top: 5px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 5px 6px;
  font-family: raleway;
  font-weight: 500;
  display: inline-block;
  border-radius: 2px;
}
#notifications .command {
  margin-top: 5px;
  background: #fff;
  color: #222;
  padding: 5px 6px;
  font-family: raleway;
  font-weight: 500;
  display: inline-block;
  border-radius: 2px;
}
#notifications .alert {
  margin-top: 5px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 5px 6px;
  font-family: ubuntu;
  font-weight: 500;
  display: inline-block;
  border-radius: 2px;
}
#notifications .nick {
  margin-left: 5px;
  font-weight: 600;
}
#notifications .message {
  margin-left: 6px;
}
#chatroom {
  width: 250px;
  height: 280px;
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
  bottom: 34px;
  left: 5px;
  border-radius: 2px;
  /*outline: 2px solid #999*/
}
@keyframes msgFadeIn {
  0% {
    opacity: 0;
    margin-left: 0;
  }
  100% {
    opacity: 1;
    margin-left: 8px;
  }
}
.chatroom-row {
  color: #fff;
  margin: 6px 8px;
  animation: msgFadeIn 0.5s linear;
}
.chatroom-row i {
  font-size: 14px;
  color: #fff;
  margin-right: 5px;
}
.chatroom-row .nick {
  font-family: raleway;
  font-size: 14px;
  font-weight: 600;
  margin-right: 5px;
}
.chatroom-row .message {
  font-family: ubuntu;
  font-size: 14px;
  color: #e4e4e4;
  word-break: break-word;
}
.chatroom-row .chattime {
  font-size: 12px;
  font-family: ubuntu;
  color: #666;
  margin-right: 5px;
}
#message-hud {
  display: none;
  position: fixed;
  bottom: 30px;
  width: 100%;
}
#message {
  background: rgba(16, 16, 16, 0.4);
  border: none;
  height: 16px;
  width: 400px;
  outline: 0;
  padding: 10px;
  border-radius: 5px 5px 0 0;
  color: rgba(255, 255, 255, 0.4);
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  font-family: raleway;
  font-size: 13px;
  font-weight: 600;
  transition: all 0.5s;
  box-shadow: 0 0 0 #000;
}
#message:focus {
  background: #1f1f1f;
  color: rgba(255, 255, 255, 1);
  border-bottom: 3px solid #767676;
  box-shadow: 0 0 15px #000;
}
#emojiContainer {
  width: 400px;
  box-sizing: border-box;
  height: auto;
  position: relative;
  padding-left: 8px;
  padding-right: 8px;
  margin: auto;
  background: rgba(255, 255, 255, 0.12);
  margin-bottom: 5px;
  border-radius: 2px;
}
.emojiPreview {
  width: 20px;
  margin: 2px;
  cursor: pointer;
}
.message img {
  width: 20px;
  vertical-align: middle;
}


#commands .row {
    padding: 10px;
    background: #1a0d30;
    border-bottom: 1px solid #080d17;
    transition: all .5s
}

.command-input-box i {
    padding: 6px 10px;
    background: #201639;
    font-family: ubuntu;
    font-style: normal;
    height: 16px;
    vertical-align: middle;
    font-size: 16px;
    border-radius: 20px 0px 0px 20px;
}

.command-input-box input {
    background: #1a0d30;
    border: 2px solid #201639;
    height: 16px;
    color: #9c9c9c;
    font-family: ubuntu;
    font-weight: 500;
    width: 330px;
    border-radius: 0px 20px 20px 0px;
    padding: 5px 8px;
    vertical-align: middle
}

.command-input-box input:focus {
    outline: 0
}




#teamlist-hud {
    text-shadow: 0 0 5px #000;
    user-select: none;
    font-family: ubuntu;
    font-weight: 600;
    position: fixed;
    top: 45px;
    transition: top .25s;
    left: 5px;
    color: #fff
}

.team-info {
    display: inline;
    margin-left: 7px;
    font-size: 12px;
    color: #f7f7f7;
    font-weight: 600
}

#teamlist-head {
    margin-bottom: 4px;
    font-family: Raleway;
    font-size: 15px;
    margin-left: 6px;
    font-weight: 600;
    text-transform: uppercase;
    user-select: none;
    cursor: default;
    color: #ff006e;
}

.team-row {
    width: 200px;
    height: 40px;
    border-radius: 30px;
    margin-bottom: 2px;
    background: linear-gradient(to right,rgba(0,0,0,.3) 40%,rgba(0,0,0,0) 95%)
}

.team-row-left {
    float: left;
    width: 30px;
    margin-top: 5px;
    margin-left: 5px;
    background-color: #fff;
    height: 30px;
    background-size: cover;
    border-radius: 50%
}

.team-row-right {
    float: right;
    margin-top: 6px;
    width: 160px;
    height: 30px;
    font-weight: 500
}

.team-row-text {
    font-size: 12px;
    white-space: pre
}

.team-row-text .left {
    float: left;
    max-width: 100px;
    overflow: hidden
}

.team-row-text .right {
    float: right
}

.team-massbar {
    width: 160px;
    height: 5px;
    margin-top: 20px;
    border-radius: 6px;
    background: rgba(144,144,144,.5)
}

.team-massbarInner {
    width: 122px;
    height: 5px;
    border-radius: 5px;
    background: rgba(255,255,255,.5)
}

#teams-vs {
    background: rgba(0,0,0,.4);
    display: none;
    padding: 5px;
    border-radius: 5px;
    margin-bottom: 15px
}

.team-vs-bar {
    width: 250px;
    height: 8px;
    border-radius: 5px;
    margin-top: 5px;
    background: #d6d6d6
}

.team-vs-bar-inner {
    background: #949494;
    width: 50%;
    height: 100%;
    border-radius: 5px 0 0 5px
}

#team-vs-1 {
    display: inline-block
}

#team-vs-2 {
    display: inline-block;
    float: right;
    margin-right: 5px
}

.tl-player {
    margin-bottom: 4px;
    text-shadow: 0 0 5px #000;
    vertical-align: middle;
    background: rgba(26, 13, 48, 0.4);
    border-radius: 20px
}

.tl-player-mass {
    display: inline-block;
    font-size: 14px;
    padding: 2px 6px;
}

.tl-player-nick {
    font-size: 14px;
    font-weight: 500;
    display: inline-block;
    padding: 2px 6px
}

.tl-player-massbar {
    height: 2px;
    width: 86.7%;
    margin-left: 9px;
    background: #14062b;
}

.tl-player-massbar-inner {
    width: 50%;
    height: 100%;
    background: #ff006e
}





.menu-bar {
    width: 100%;
    height: 35px;
    position: fixed;
    background: rgba(26, 13, 48, 0.4);
    z-index: 1;
    color: #fff;
    font-size: 0;
}
.menu-bar-button {
    display: inline-block;
    width: 63px;
    height: 24px;
    background: #14062b;
    padding-top: 10px;
    text-align: center;
    cursor: pointer;
    transition: all .25s;
    font-size: 16px;
    text-shadow: none;
}


#login-facebook {

}
#login-google {

}
.menu-bar-button.active {
    border-bottom: 2px solid #ff006e;
    text-shadow: 0 0 6px #ffffff, 0 0 25px #ff006e, 0 0 25px #fff;
}
.menu-bar-button.last {
    border-radius: 0 36px 36px 0;
    width: 38px;
    border: none!important;
    color: #fff!important
}
.menu-bar-button:hover {
  border-bottom: 2px solid #fff;
  text-shadow: 0 0 6px #fff, 0 0 25px #fff, 0 0 25px #fff;
}
.menu-bar-button:active {
    border-bottom: 2px solid #999;
    text-shadow: 0 0 6px #999,0 0 25px #999,0 0 25px #999
}


#ip-box {
  display: inline-block;
    color: #ffffff;
  float: right;
  font-size: 16px;
  font-family: ubuntu;
  height: 19px;
  padding: 8px;
   background: #14062b;
  box-shadow: 0 -5px 20px #000;
    border-radius: 20px 0 0 20px;
}
#ip-box .btn-reconnect {
  background: #353535;
  border: none;
  color: #999;
  font-family: ubuntu;
  cursor: pointer;
  transition: all 0.5s;
  border-radius: 1px;
}
#ip-box .btn-reconnect.dced {
  background: #fff;
  color: #353535;
}
#ip-box .btn-reconnect:hover {
  background: #444;
  color: #aaa;
}
.hslo-skin-box {
  display: inline-block;
  float: right;
}
#hslo-skin-preview {
  width: 35px;
  height: 35px;
  display: inline-block;
  background-size: cover;
  box-shadow: 0 -5px 20px #000;
  background-color: #fff;
}
.hslo-login-btn {
  display: inline-block;
}
.hslo-skin-title {
  font-size: 15px;
  display: inline-block;
  vertical-align: top;
  height: 26px;
  padding: 8px;
  padding-bottom: 0;
  border-right: 3px solid #565656;
  background: #222;
  color: #bbb;
}
.hslo-skin-button {
  font-size: 15px;
  display: inline-block;
  vertical-align: top;
  height: 26px;
  padding: 8px;
  padding-bottom: 0;
  background: #222;
  color: #bbb;
  cursor: pointer;
}
.hslo-skin-button.clicked {
  display: none;
}
.hslo-skin-button:hover {
  color: #fff;
  border-bottom: 2px solid #fff;
  text-shadow: 0 0 5px #fff;
  height: 25px;
}
.hslo-skin-menu {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
}
.hslo-skin-menu .center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #252525;
  padding: 20px;
  box-shadow: 0 0 5px #171717;
}
.hslo-skin-input {
  margin-bottom: 8px;
}
.hslo-skin-input .title {
  color: #fff;
  font-family: raleway;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
}
.hslo-skin-input input {
  background: #333;
  border: none;
  padding: 6px 10px;
  margin-top: 2px;
  color: #fff;
}
#hslo-skin-submit {
  margin: 0;
  margin-top: 5px;
}
/* Customize the label (the container) */
.labelContainer {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.labelContainer input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.labelContainer:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.labelContainer input:checked ~ .checkmark {
  background-color: #ff0000;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.labelContainer input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.labelContainer .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}
 </style> 
  
<!--<script src="https://li1428-166.members.linode.com/HSLOinject.js"></script>-->
  
  
  
  
<div id="loading-screen">
      <div class="maou-circle-container">
        <div class="maou-circle p1"></div>
        <div class="maou-circle p2"></div>
        <div class="maou-circle p3"></div>
      </div>
      <div class="message">Loading...</div>
  </div>
  <div id="captchaWindow" style="display:none; position:absolute; top:0px; left:0px; width: 100%; height: 100%; background-color: rgba(0,0,0,0.8); z-index:500">
      <div id="verifyUser" style="position:absolute; top:50%; left:50%; margin-left:-152px; margin-top:-40px;"></div>
  </div>
  <div id="captchaWindowV3" style="display:none;"></div> 
  <div id="anouncement">
    HSLO V5 Special Edition (?)<br>
    Read #ext in discord for information..<br>
    <hr>
    Update: <br>
    1. ?<br>
  </div>
 


  <div id="huds">
    <div id="leaderboard-hud">
      <div id="leaderboard-head">NESTO PLUS</div>
      <div id="leaderboard-positions">
        <span class="lb-position"><span lbData="name"></span>  <span lbData="position">1</span></span>
        <span class="lb-position"><span lbData="name"></span>  <span lbData="position">2</span></span>
        <span class="lb-position"><span lbData="name"></span>  <span lbData="position">3</span></span>
        <span class="lb-position"><span lbData="name"></span>  <span lbData="position">4</span></span>
        <span class="lb-position"><span lbData="name"></span>  <span lbData="position">5</span></span>
        <span class="lb-position"><span lbData="name"></span>  <span lbData="position">6</span></span>
        <span class="lb-position"><span lbData="name"></span>  <span lbData="position">7</span></span>
        <span class="lb-position"><span lbData="name"></span>  <span lbData="position">8</span></span>
        <span class="lb-position"><span lbData="name"></span>  <span lbData="position">9</span></span>
        <span class="lb-position"><span lbData="name"></span>  <span lbData="position">10</span></span>
        <span class="lb-position"><span lbData="name"></span>  <span lbData="position">100</span></span>
		<br>
        <span class="lb-data"><span lbData="dataName">Players Amount:</span>  <span lbData="dataAmount">100</span></span>
      </div>
      <div id="leaderboard-chart">
        <div class="chart-bar red"></div>
        <div class="chart-bar green"></div>
        <div class="chart-bar blue"></div>
      </div>
    </div>

    <div id="message-hud">
      <div id="emojiContainer"></div>
      <input id="message" Hstr="placeholder.huds.enterChatMsg">
    </div>

    <div id="chatroom"></div>

    <div id="stats-hud"><i class="fas fa-lock"></i></div>

    <div id="targeting-hud">
      <div>
        <div class="spectate-mode-btn active" id="spectate-mode-top"><i class="fas fa-video"></i></div>
        <div class="spectate-mode-btn" id="spectate-mode-mouse"><i class="fas fa-mouse"></i></div>
        <div class="spectate-mode-btn" id="spectate-mode-target"><i class="fas fa-bullseye"></i></div>
      </div>
      <div id="targeting-no-1" class="static"><span Hstr="html.huds.targeting_bigCellVp">BIGGEST CELL VIEWPORT</span> <i class="fas fa-video"></i></div>
      <div id="targeting-mouse" class="static"><span Hstr="html.huds.targeting_followVp">VIEWPORT FOLLOWING MOUSE</span> <i class="fas fa-mouse"></i></div>
      <div id="targeting-players">
        <div class="static"><span Hstr="html.huds.targeting_players">TARGETING PLAYERS</span> <i class="fas fa-bullseye"></i></div>
        <div id="targeting-player1"><span class="nick">Target 1</span> [<span class="mass">NOT SELECTED</span>]</div>
        <div id="targeting-player2"><span class="nick">Target 2</span> [<span class="mass">NOT SELECTED</span>]</div>
        <div id="targeting-playersMass"><span Hstr="html.huds.targeting_totalMass">TOTAL MASS</span> [<span class="mass">0</span>]</div>
      </div>
    </div>

    <div id="teamlist-hud">
        <div id="teams-vs">
            <div class="team-vs-info">
              <div id="team-vs-1">
                <div id="teamlist-alive1" class="team-info"><i class="fa fa-play"></i> <span>0</span></div>
                <div id="teamlist-spectate1" class="team-info"><i class="fa fa-pause"></i> <span>0</span></div>
                <div id="teamlist-totalmass1" class="team-info"><i class="fa fa-eercast"></i> <span>0</span></div>
              </div>
              <div id="team-vs-2">
                <div id="teamlist-alive2" class="team-info"><i class="fa fa-play"></i> <span>0</span></div>
                <div id="teamlist-spectate2" class="team-info"><i class="fa fa-pause"></i> <span>0</span></div>
                <div id="teamlist-totalmass2" class="team-info"><i class="fa fa-eercast"></i> <span>0</span></div>
              </div>
            </div>
          <div class="team-vs-bar"><div class="team-vs-bar-inner"></div></div>
        </div>
      <div id="teamlist-head">
        <i class="fas fa-bars" aria-hidden="true"></i> <span Hstr="html.huds.teamlist_title">Team players</span>
      </div>
      <div id="teamlist-positions"></div>
      <div id="info-tp">
        <div id="teamlist-alive" class="team-info"><i class="fas fa-play"></i> <span>0</span></div>
		<div id="teamlist-spectate" class="team-info"><i class="fa fa-pause"></i> <span>0</span></div>
        <div id="teamlist-totalmass" class="team-info"><i class="fas fa-volleyball-ball"></i> <span>0</span></div>
      </div>
    </div>

	<div class="minimap-head">
      <button class="minimap-button" id="minimap-show-1">1</button>
      <button class="minimap-button" id="minimap-show-2">2</button>
      <button class="minimap-button active" id="minimap-show-0">All</button>
      <div id="time-hud"></div>
    </div>
	<div id="top10mass">
	  <span id="mass1"></span>
	  <span id="mass2"></span>
	  <span id="mass3"></span>
	  <span id="mass4"></span>
	  <span id="mass5"></span>
	  <span id="mass6"></span>
	  <span id="mass7"></span>
	  <span id="mass8"></span>
	  <span id="mass9"></span>
	  <span id="mass10"></span>
	</div>
    <div id="minimap-hud">
      <div class="minimap-grid">
        <div class="minimap-row">
          <div class="minimap-sector">A1</div>
          <div class="minimap-sector">A2</div>
          <div class="minimap-sector">A3</div>
          <div class="minimap-sector">A4</div>
          <div class="minimap-sector">A5</div>
        </div>
        <div class="minimap-row">
          <div class="minimap-sector">B1</div>
          <div class="minimap-sector">B2</div>
          <div class="minimap-sector">B3</div>
          <div class="minimap-sector">B4</div>
          <div class="minimap-sector">B5</div>
        </div>
        <div class="minimap-row">
          <div class="minimap-sector">C1</div>
          <div class="minimap-sector">C2</div>
          <div class="minimap-sector">C3</div>
          <div class="minimap-sector">C4</div>
          <div class="minimap-sector">C5</div>
        </div>
        <div class="minimap-row">
          <div class="minimap-sector">D1</div>
          <div class="minimap-sector">D2</div>
          <div class="minimap-sector">D3</div>
          <div class="minimap-sector">D4</div>
          <div class="minimap-sector">D5</div>
        </div>
        <div class="minimap-row">
          <div class="minimap-sector">E1</div>
          <div class="minimap-sector">E2</div>
          <div class="minimap-sector">E3</div>
          <div class="minimap-sector">E4</div>
          <div class="minimap-sector">E5</div>
        </div>
      </div>

      <canvas id="minimap-nodes"></canvas>
    </div>

    <div id="notifications"></div>
  </div>
	  
  <div id="menu-overlay">
    <div class="menu-bar">
      <div class="menu-bar-button" id="login-facebook">
        <i class="fab fa-facebook-f"></i>
      </div>
      <div class="menu-bar-button" id="login-google">
        <i class="fab fa-google"></i>
      </div>
      <div class="menu-bar-button" id="logout">
        <i class="fas fa-sign-out-alt"></i>
	  </div>
	  <div class="menu-bar-button" id="reconnect01" onclick="reconnectTabOne()">
        <i class="fas fa-sync"></i>
		1
      </div>
	  <div class="menu-bar-button" id="reconnect02" onclick="reconnectTabTwo()">
        <i class="fas fa-sync"></i>
		2
      </div>
	  <div class="menu-bar-button" id="reconnect03" onclick="reconnectTabThree()">
        <i class="fas fa-sync"></i>
		3
      </div>
	  <!--<div class="menu-bar-button" id="reconnectNESTO01" onclick="J.reconnect(1)">
        <i class="fas fa-spinner"></i>
		1
      </div>
	  <div class="menu-bar-button" id="reconnectNESTO02" onclick="J.reconnect(2)">
        <i class="fas fa-spinner"></i>
		2
      </div>-->

      <div class="menu-bar-button last" id="changelog" onclick="z.showChangelog()">
		<i class="fa fa-info-circle"></i>
	  </div>
      <div class="menu-bar-ip" id="ip-box"></div>
    </div>

    <div class="menu-blur"></div>
	
	<div id="musicPlayer">
      <iframe width="100%" height="60" src="" frameborder="0" ></iframe>
    </div>
	  
	<div class="control-bar-container">
      <div class="control-bar">
        <div class="bar-button-container">
          <div class="bar-button-bg left settings"></div>
          <div class="bar-button-bg center dummy"></div>
          <div class="bar-button-bg right play"></div>
          <div class="bar-button-bg right spectate"></div>
          <div class="bar-button-bg right inputs"></div>
          <div class="bar-button-bg right theme"></div>
        </div>
        <div class="bar-button-container">
          <div class="bar-button" id="button-settings">
            <i class="material-icons">tune</i>
            <div class="text">
              <span Hstr="html.mainMenu.btn_settings">Settings</span>
            </div>
          </div>
          <div class="bar-button dummy"></div>
          <div class="bar-button" id="button-play">
            <i class="material-icons">play_arrow</i>
            <div class="text">
              <span Hstr="html.mainMenu.btn_play">Play</span>
            </div>
          </div>
          <div class="bar-button" id="button-spectate">
            <i class="material-icons">remove_red_eye</i>
            <div class="text">
              <span Hstr="html.mainMenu.btn_spectate">Spectate</span>
            </div>
          </div>
          <div class="bar-button" id="button-inputs">
            <i class="material-icons">keyboard</i>
            <div class="text">
              <span Hstr="html.mainMenu.btn_inputs">Input</span>
            </div>
          </div>
          <div class="bar-button" id="button-theme">
            <i class="material-icons">color_lens</i>
            <div class="text">
              <span Hstr="html.mainMenu.btn_theme">Theme</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bar-circle-outer">
        <div class="bar-circle">
          <div class="skin-preview"></div>
        </div>
      </div>
      <div class="skin-wheel">
        <div class="skin-wheel-bg"></div>
        <div class="skin-selector one" value="1"></div>
        <div class="skin-selector two" value="2"></div>
        <div class="skin-selector three" value="3"></div>
        <div class="skin-selector four" value="4"></div>
        <div class="skin-selector five" value="5"></div>
        <div class="skin-selector six" value="6"></div>
        <div class="skin-selector seven" value="7"></div>
        <div class="skin-selector eight" value="8"></div>
      </div>
    </div>

    <div id="player-data">
      <button id="streamMode"><i class="fas fa-eye"></i></button>
      <div>
        <input class="menu-inputs" id="tag" placeholder="Tag" maxlength="10">
		<div class="double-tags" style="display: none;">
          <input class="menu-inputs" id="tag2" Hstr="placeholder.mainMenu.input_tag2" maxlength="10">
          <button class="menu-button tag-buttons active-tag" id="normal-tag"><i class="fa fa-tag"></i></button>
          <button class="menu-button tag-buttons" id="double-tag"><i class="fa fa-tags"></i></button>
        </div>
        <input class="menu-inputs" id="nick" placeholder="Nick 1" maxlength="15">
        <input class="menu-inputs" id="nick2" placeholder="Nick 2" maxlength="15">
      </div>
      <input class="menu-inputs" id="skin" placeholder="Skin URL (imgur)" maxlength="60">
	  <input class="menu-inputs" id="skin2" placeholder="Skin URL 2 (imgur)" maxlength="60">
      <div class="party-box">
        <button class="menu-button" id="join-party">
          <span Hstr="html.mainMenu.btn_join">Join</span>
        </button>
        <input class="menu-inputs" id="party-token" placeholder="Room code">
        <button class="menu-button" id="create-party">
          <span Hstr="html.mainMenu.btn_create">Create</span>
        </button>
      </div>
      <div>
        <select id="gamemode" class="menu-inputs">
          <option selected="selected" value="" Hstr="html.mainMenu.select_ffa" disabled>FFA</option>
          <option selected="selected" value=":teams" Hstr="html.mainMenu.select_teams" disabled>Teams</option>
		  <option selected="selected" value=":experimental" Hstr="html.mainMenu.select_experimental" disabled>Experimental</option>
          <option value=":party" Hstr="html.mainMenu.select_party">Party</option>
        </select>
        <select class="menu-inputs" id="regions"></select>
      </div>
      
	  <!--<center><div id="specTop">
		<button class="menu-button" id="specTopBtn" onclick="q.tabThree.close()" style="width: 140px; margin-top: 5px; background-color: red;">Tab 3 Disconnect</button>
	  </div></center>-->
      
      
	  <div id="miniclipStuff">

      
	  </div>
      <div class="decorator"></div>
    </div>


    <div id="settings" class="menu-panel">
      <div class="settings-close"><i class="fas fa-times" aria-hidden="true"></i></div>
      <div class="settings-container">
        <div class="row">
          <span class="title" Hstr="html.settingMenu.language">Language</span>
          <span class="settings-options" type="options" name="language">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <b value="EN" class="active">English</b>
			<b value="JA">Japanese</b>
			<b value="ZH">Chinese</b>
			<b value="KO">Korean</b>
			<b value="ES">Spanish</b>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </span>
        </div>
        <div class="row divider"></div>
        <div class="row">
          <span class="title" Hstr="html.settingMenu.CellAnimation">Animation delay</span>
          <span class="settings-options" type="range" name="CellAnimation">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <span value="120" step="10" min="50" max="250" class="outer"><span class="inner"></span></span>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
            <span class="range-value">[0]</span>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.settingMenu.eatAnimation">Cell eat [sucking] animation</span>
          <span class="settings-options" type="options" name="eatAnimation">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <b value="off" Hstr="html.settingMenu.opt_off">Off</b>
            <b value="on" class="active" Hstr="html.settingMenu.opt_on">On</b>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.settingMenu.cellTextAnimation">Cell text animation</span>
          <span class="settings-options" type="options" name="cellTextAnimation">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <b value="off" Hstr="html.settingMenu.opt_off">Off</b>
            <b value="stepped" Hstr="html.settingMenu.opt_stepped">Stepped</b>
            <b value="on" class="active" Hstr="html.settingMenu.opt_linear">On</b>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.settingMenu.massUpdateInterval">Mass Update Interval</span>
          <span class="settings-options" type="range" name="massUpdateInterval">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <span value="500" step="100" min="0" max="1000" class="outer"><span class="inner"></span></span>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
            <span class="range-value">[0]</span>
          </span>
        </div>
        <div class="row divider"></div>
        <div class="row">
          <span class="title" Hstr="html.settingMenu.zoomSpeed">Zoom speed</span>
          <span class="settings-options" type="range" name="zoomSpeed">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <span value="92" step="2" min="70" max="96" class="outer"><span class="inner"></span></span>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
            <span class="range-value">[0]</span>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.settingMenu.cameraSpeed">Camera speed [2 default]</span>
          <span class="settings-options" type="range" name="cameraSpeed">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <span value="2" step="1" min="1" max="30" class="outer"><span class="inner"></span></span>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
            <span class="range-value">[0]</span>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.settingMenu.autoZoom">Auto zoom</span>
          <span class="settings-options" type="options" name="autoZoom">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <b value="off" Hstr="html.settingMenu.opt_off">Off</b>
            <b value="on" class="active" Hstr="html.settingMenu.opt_on">On</b>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </span>
        </div>
        <div class="row divider"></div>
        <div class="row">
          <span class="title" Hstr="html.settingMenu.autoHideText">Auto hide text</span>
          <span class="settings-options" type="options" name="autoHideText">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <b value="off" Hstr="html.settingMenu.opt_off">Off</b>
            <b value="on" class="active" Hstr="html.settingMenu.opt_on">On</b>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.settingMenu.hideOwnNick">Hide own nick</span>
          <span class="settings-options" type="options" name="hideOwnNick">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <b value="off" Hstr="html.settingMenu.opt_off">Off</b>
            <b value="on" class="active" Hstr="html.settingMenu.opt_on">On</b>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.settingMenu.hideOwnMass">Hide own mass</span>
          <span class="settings-options" type="options" name="hideOwnMass">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <b value="off" class="active" Hstr="html.settingMenu.opt_off">Off</b>
            <b value="on" Hstr="html.settingMenu.opt_on">On</b>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.settingMenu.hideOwnSkin">Hide own skin</span>
          <span class="settings-options" type="options" name="hideOwnSkin">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <b value="off" class="active" Hstr="html.settingMenu.opt_off">Off</b>
            <b value="on" Hstr="html.settingMenu.opt_on">On</b>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </span>
        </div>
        <div class="row divider"></div>
        <div class="row">
          <span class="title" Hstr="html.settingMenu.cellNick">Cell Nick</span>
          <span class="settings-options" type="options" name="cellNick">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <b value="off" Hstr="html.settingMenu.opt_off">Off</b>
            <b value="on" class="active" Hstr="html.settingMenu.opt_on">On</b>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.settingMenu.nickShadow">Nick shadow</span>
          <span class="settings-options" type="options" name="nickShadow">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <b value="off" class="active" Hstr="html.settingMenu.opt_off">Off</b>
            <b value="performance" Hstr="html.settingMenu.opt_perf">Performance</b>
            <b value="normal" Hstr="html.settingMenu.opt_normal">Normal</b>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.settingMenu.cellMass">Cell Mass</span>
          <span class="settings-options" type="options" name="cellMass">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <b value="off" Hstr="html.settingMenu.opt_off">Off</b>
            <b value="shortened" class="active" Hstr="html.settingMenu.opt_shortened">Shortened</b>
            <b value="full" Hstr="html.settingMenu.opt_full">Full</b>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.settingMenu.massShadow">Mass shadow</span>
          <span class="settings-options" type="options" name="massShadow">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <b value="off" class="active" Hstr="html.settingMenu.opt_off">Off</b>
            <b value="performance" Hstr="html.settingMenu.opt_perf">Performance</b>
            <b value="normal" Hstr="html.settingMenu.opt_normal">Normal</b>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.settingMenu.virusMass">Virus Mass</span>
          <span class="settings-options" type="options" name="virusMass">
              <i class="fa fa-chevron-left" aria-hidden="true"></i>
              <b value="off" Hstr="html.settingMenu.opt_off">Off</b>
              <b value="text" class="active" Hstr="html.settingMenu.opt_text">Text</b>
              <b value="fill" Hstr="html.settingMenu.opt_fill">Fill</b>
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
          </span>
        </div>
        <div class="row divider"></div>
        <div class="row">
          <span class="title" Hstr="html.settingMenu.borderGlow">Border Glow</span>
          <span class="settings-options" type="options" name="borderGlow">
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
            <b value="off" class="active" Hstr="html.settingMenu.opt_off">Off</b>
            <b value="on" Hstr="html.settingMenu.opt_on">On</b>
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.settingMenu.virusGlow">Virus Glow</span>
          <span class="settings-options" type="options" name="virusGlow">
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
            <b value="off" class="active" Hstr="html.settingMenu.opt_off">Off</b>
            <b value="on" Hstr="html.settingMenu.opt_on">On</b>
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
          </span>
        </div>
        <div class="row divider"></div>
        <div class="row">
          <span class="title" Hstr="html.settingMenu.urlSkins">URL skins</span>
          <span class="settings-options" type="options" name="urlSkins">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <b value="off" Hstr="html.settingMenu.opt_off">Off</b>
            <b value="on" class="active" Hstr="html.settingMenu.opt_on">On</b>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </span>
        </div>
        <div class="row divider"></div>
        <div class="row">
          <span class="title" Hstr="html.settingMenu.bgSectors">Background sectors</span>
          <span class="settings-options" type="options" name="bgSectors">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <b value="off" Hstr="html.settingMenu.opt_off">Off</b>
            <b value="onlyLines" Hstr="html.settingMenu.opt_onlyLines">Only lines</b>
            <b value="snowflakes" class="active" Hstr="html.settingMenu.opt_snowflakes">Snowflakes</b>
            <b value="normal" Hstr="html.settingMenu.opt_normal">Normal</b>
			<b value="fantasy" Hstr="html.settingMenu.opt_fantasy">Fantasy</b>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </span>
        </div>
        <div class="row divider"></div>
        <div class="row">
          <span class="title" Hstr="html.settingMenu.food">Food</span>
          <span class="settings-options" type="options" name="food">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <b value="off" Hstr="html.settingMenu.opt_off">Off</b>
            <b value="monoColored" Hstr="html.settingMenu.opt_singleClr">Mono colored</b>
            <b value="rainbow" class="active" Hstr="html.settingMenu.opt_rainbow">rainbow</b>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </span>
        </div>
		<div class="row">
          <span class="title" Hstr="html.settingMenu.foodGlow">Food Glow</span>
          <span class="settings-options" type="options" name="foodGlow">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <b value="off" Hstr="html.settingMenu.opt_off">Off</b>
            <b value="on" Hstr="html.settingMenu.opt_on">On</b>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </span>
        </div>
        <div class="row divider"></div>
        <div class="row">
          <span class="title" Hstr="html.settingMenu.cursorLine">Cursor lines</span>
          <span class="settings-options" type="options" name="cursorLine">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <b value="off" class="active" Hstr="html.settingMenu.opt_off">Off</b>
            <b value="on" Hstr="html.settingMenu.opt_on">On</b>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.settingMenu.multiboxRing">Multibox Ring</span>
          <span class="settings-options" type="options" name="multiboxRing">
              <i class="fa fa-chevron-left" aria-hidden="true"></i>
              <b value="off" Hstr="html.settingMenu.opt_off">Off</b>
              <b value="on" class="active" Hstr="html.settingMenu.opt_on">On</b>
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.settingMenu.maouCircleSkin">Maou Circle Skin</span>
          <span class="settings-options" type="options" name="maouCircleSkin">
              <i class="fa fa-chevron-left" aria-hidden="true"></i>
              <b value="off" Hstr="html.settingMenu.opt_off">Off</b>
              <b value="on" class="active" Hstr="html.settingMenu.opt_on">On</b>
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
          </span>
        </div>
				<div class="row">
                    <span class="title" Hstr="html.settingMenu.opponentRings">Opponent rings</span>
                    <span class="settings-options" type="options" name="opponentRings">
                        <i class="fa fa-chevron-left" aria-hidden="true"></i>
                        <b value="off" Hstr="html.settingMenu.opt_off">Off</b>
                        <b value="on" class="active" Hstr="html.settingMenu.opt_on">On</b>
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                    </span>
                </div>
                <div class="row">
                    <span class="title" Hstr="html.settingMenu.splitRings">Split rings</span>
                    <span class="settings-options" type="options" name="splitRings">
                        <i class="fa fa-chevron-left" aria-hidden="true"></i>
                        <b value="off" Hstr="html.settingMenu.opt_off">Off</b>
                        <b value="on" class="active" Hstr="html.settingMenu.opt_on">On</b>
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                    </span>
                </div>
                <div class="row">
                    <span class="title" Hstr="html.settingMenu.virusRange">Viruses range</span>
                    <span class="settings-options" type="options" name="virusRange">
                        <i class="fa fa-chevron-left" aria-hidden="true"></i>
                        <b value="off" class="active" Hstr="html.settingMenu.opt_off">Off</b>
                        <b value="on" Hstr="html.settingMenu.opt_on">On</b>
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                    </span>
                </div>
        <div class="row">
          <span class="title" Hstr="html.settingMenu.teamIndicator">Teammate indicator</span>
          <span class="
		  -options" type="options" name="teamIndicator">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <b value="off" Hstr="html.settingMenu.opt_off">Off</b>
            <b value="on" class="active" Hstr="html.settingMenu.opt_on">On</b>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </span>
        </div>
		<div class="row">
          <span class="title" Hstr="html.settingMenu.commander">Commander</span>
          <span class="settings-options" type="options" name="commander">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <b value="off" Hstr="html.settingMenu.opt_off">Off</b>
            <b value="on" class="active" Hstr="html.settingMenu.opt_on">On</b>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </span>
        </div>
        <div class="row divider"></div>
        <div class="row">
          <span class="title" Hstr="html.settingMenu.chatType">Chat type</span>
          <span class="settings-options" type="options" name="chatType">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <b value="chatroom" Hstr="html.settingMenu.opt_chatroom">Chatroom</b>
            <b value="popup" class="active" Hstr="html.settingMenu.opt_popup">Pop up</b>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.settingMenu.multiboxMode">Multibox Mode</span>
          <span class="settings-options" type="options" name="multiboxMode">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <b value="on" Hstr="html.settingMenu.opt_on">On</b>
            <b value="off" class="active" Hstr="html.settingMenu.opt_off">Off</b>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.settingMenu.targeting">Cell Targeting [Spectate mode]</span>
          <span class="settings-options" type="options" name="targeting">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <b value="off" class="active" Hstr="html.settingMenu.opt_off">Off</b>
            <b value="on" Hstr="html.settingMenu.opt_on">On</b>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.settingMenu.sounds">Sounds</span>
          <span class="settings-options" type="options" name="sounds">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <b value="off" class="active" Hstr="html.settingMenu.opt_off">Off</b>
            <b value="on" Hstr="html.settingMenu.opt_on">On</b>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.settingMenu.topZoom">Show Top 1's Zoom</span>
          <span class="settings-options" type="options" name="topZoom">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <b value="off" class="active" Hstr="html.settingMenu.opt_off">Off</b>
            <b value="on" Hstr="html.settingMenu.opt_on">On</b>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.settingMenu.showViewportBoxes">Show Viewport Boxes</span>
          <span class="settings-options" type="options" name="showViewportBoxes">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <b value="off" class="active" Hstr="html.settingMenu.opt_off">Off</b>
            <b value="on" Hstr="html.settingMenu.opt_on">On</b>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </div>
    <div id="inputs" class="menu-panel">
      <div class="inputs-tab-bar">
        <span class="inputs-tab active" target="#hotkeys"><i class="fas fa-keyboard"></i> <span Hstr="html.hkMenu.title">Hotkeys</span></span>

        <span class="inputs-tab" target="#mouse"><i class="fas fa-mouse"></i> <span Hstr="html.mouseMenu.title">Mouse</span></span>

        <span class="inputs-tab" target="#commands"><i class="fas fa-comments"></i> <span Hstr="html.commandsMenu.title">Commands</span></span>

        <span class="inputs-tab close" target="#close"><i class="fas fa-times" aria-hidden="true"></i></span>
      </div>
      <div class="inputs-menu-container">
        <div id="hotkeys" class="inputs-menu active">
          <div class="row" name="toggleMenuKey">
            <span class="title" Hstr="html.hkMenu.toggleMenuKey">Show / hide menu</span>
            <input class="key" value="ESC">
          </div>
          <div class="row" name="feedKey">
            <span class="title" Hstr="html.hkMenu.feedKey">Feed</span>
            <input class="key" value="W">
          </div>
          <div class="row" name="macroFeedKey">
            <span class="title" Hstr="html.hkMenu.macroFeedKey">Macro feed</span>
            <input class="key" value="Q">
          </div>
          <div class="row" name="splitKey">
            <span class="title" Hstr="html.hkMenu.splitKey">Split</span>
            <input class="key" value="SPACE">
          </div>
          <div class="row" name="doubleSplitKey">
            <span class="title" Hstr="html.hkMenu.doubleSplitKey">Double split</span>
            <input class="key" value="E">
          </div>
          <div class="row" name="split16Key">
            <span class="title" Hstr="html.hkMenu.split16Key">Split 16</span>
            <input class="key" value="R">
          </div>
          <div class="row" name="multiboxTab">
            <span class="title">Multibox switch</span>
            <input class="key" value="TAB">
          </div>
          <div class="row" name="togglemaouCircleSkin">
            <span class="title">Toggle Maou Circle Skin</span>
            <input class="key" value="K">
          </div>
          <div class="row" name="togglemultiboxRing">
            <span class="title" Hstr="html.hkMenu.togglemultiboxRing">Toggle Multibox ring</span>
            <input class="key" value="L">
          </div>
          <div class="row" name="stopKey">
            <span class="title" Hstr="html.hkMenu.stopKey">Cell pause</span>
            <input class="key" value="S">
          </div>
          <div class="row" name="chatKey">
            <span class="title" Hstr="html.hkMenu.chatKey">Chat key</span>
            <input class="key" value="Enter">
          </div>
          <div class="row" name="freeSpectateKey">
            <span class="title" Hstr="html.hkMenu.freeSpectateKey">Toggle spectate mode</span>
            <input class="key" value="Y">
          </div>
		  <div class="row" name="toggleSplitRings">
			<span class="title" Hstr="html.hkMenu.toggleSplitRings">Toggle split rings</span>
			<input class="key" value="U">
		  </div>
          <div class="row" name="toggleOpponentRings">
			<span class="title" Hstr="html.hkMenu.toggleOpponentRings">Toggle opponent rings</span>
			<input class="key" value="I">
		  </div>
          <div class="row" name="toggleNick">
            <span class="title" Hstr="html.hkMenu.toggleNick">Toggle Cell nick</span>
            <input class="key" value="N">
          </div>
          <div class="row" name="toggleMass">
            <span class="title" Hstr="html.hkMenu.toggleMass">Toggle cell mass</span>
            <input class="key" value="M">
          </div>
          <div class="row" name="toggleSkin">
            <span class="title" Hstr="html.hkMenu.toggleSkin">Toggle Skin</span>
            <input class="key" value="A">
          </div>
          <div class="row" name="toggleFood">
            <span class="title" Hstr="html.hkMenu.toggleFood">Toggle food</span>
            <input class="key" value="F">
          </div>
          <div class="row" name="respawnKey">
            <span class="title" Hstr="html.hkMenu.respawnKey">Quick respawn</span>
            <input class="key" value="TILDE">
          </div>
          <div class="row" name="command0Key">
            <span class="title" Hstr="html.hkMenu.command0Key">Command 0</span>
            <input class="key" value="0">
          </div>
          <div class="row" name="command1Key">
            <span class="title" Hstr="html.hkMenu.command1Key">Command 1</span>
            <input class="key" value="1">
          </div>
          <div class="row" name="command2Key">
            <span class="title" Hstr="html.hkMenu.command2Key">Command 2</span>
            <input class="key" value="2">
          </div>
          <div class="row" name="command3Key">
            <span class="title" Hstr="html.hkMenu.command3Key">Command 3</span>
            <input class="key" value="3">
          </div>
          <div class="row" name="command4Key">
            <span class="title" Hstr="html.hkMenu.command4Key">Command 4</span>
            <input class="key" value="4">
          </div>
          <div class="row" name="command5Key">
            <span class="title" Hstr="html.hkMenu.command5Key">Command 5</span>
            <input class="key" value="5">
          </div>
          <div class="row" name="command6Key">
            <span class="title" Hstr="html.hkMenu.command6Key">Command 6</span>
            <input class="key" value="6">
          </div>
          <div class="row" name="command7Key">
            <span class="title" Hstr="html.hkMenu.command7Key">Command 7</span>
            <input class="key" value="7">
          </div>
          <div class="row" name="command8Key">
            <span class="title" Hstr="html.hkMenu.command8Key">Command 8</span>
            <input class="key" value="8">
          </div>
          <div class="row" name="command9Key">
            <span class="title" Hstr="html.hkMenu.command9Key">Command 9</span>
            <input class="key" value="9">
          </div>
          <div class="row" name="command11Key">
            <span class="title" Hstr="html.hkMenu.command11Key">Command Up</span>
            <input class="key" value="UP">
          </div>
          <div class="row" name="command12Key">
            <span class="title" Hstr="html.hkMenu.command12Key">Command Down</span>
            <input class="key" value="DOWN">
          </div>
          <div class="row" name="command13Key">
            <span class="title" Hstr="html.hkMenu.command13Key">Command Left</span>
            <input class="key" value="LEFT">
          </div>
          <div class="row" name="command14Key">
            <span class="title" Hstr="html.hkMenu.command14Key">Command Right</span>
            <input class="key" value="RIGHT">
          </div>
          <div class="row" name="zoom1key">
            <span class="title" Hstr="html.hkMenu.zoom1key">Zoom level 1</span>
            <input class="key" value="ALT+1">
          </div>
          <div class="row" name="zoom2key">
            <span class="title" Hstr="html.hkMenu.zoom2key">Zoom level 2</span>
            <input class="key" value="ALT+2">
          </div>
          <div class="row" name="zoom3key">
            <span class="title" Hstr="html.hkMenu.zoom3key">Zoom level 3</span>
            <input class="key" value="ALT+3">
          </div>
          <div class="row" name="zoom4key">
            <span class="title" Hstr="html.hkMenu.zoom4key">Zoom level 4</span>
            <input class="key" value="ALT+4">
          </div>
          <div class="row" name="zoom5key">
            <span class="title" Hstr="html.hkMenu.zoom5key">Zoom level 5</span>
            <input class="key" value="ALT+5">
          </div>
        </div>
        <div id="mouse" class="inputs-menu">
          <div class="row">
            <span class="title" Hstr="html.mouseMenu.lmb">Left click</span>
            <span class="mouse-options" type="options" name="leftClick">
              <i class="fas fa-chevron-left" aria-hidden="true"></i>
              <b value="off" class="active" Hstr="html.mouseMenu.off">Off</b>
              <b value="feed" Hstr="html.mouseMenu.feed">Feed</b>
              <b value="macroFeed" Hstr="html.mouseMenu.macroFeed">Macro feed</b>
              <b value="split" Hstr="html.mouseMenu.split">Split</b>
              <b value="doubleSplit" Hstr="html.mouseMenu.doubleSplit">Double split</b>
              <b value="split16" Hstr="html.mouseMenu.split16">Split 16</b>
			  <b value="commander" Hstr="html.mouseMenu.commander">Commander</b>
              <i class="fas fa-chevron-right" aria-hidden="true"></i>
            </span>
          </div>
          <div class="row">
            <span class="title" Hstr="html.mouseMenu.scroll">Middle click</span>
            <span class="mouse-options" type="options" name="middleClick">
              <i class="fas fa-chevron-left" aria-hidden="true"></i>
              <b value="off" class="active" Hstr="html.mouseMenu.off">Off</b>
              <b value="feed" Hstr="html.mouseMenu.feed">Feed</b>
              <b value="macroFeed" Hstr="html.mouseMenu.macroFeed">Macro feed</b>
              <b value="split" Hstr="html.mouseMenu.split">Split</b>
              <b value="doubleSplit" Hstr="html.mouseMenu.doubleSplit">Double split</b>
              <b value="split16" Hstr="html.mouseMenu.split16">Split 16</b>
			  <b value="commander" Hstr="html.mouseMenu.commander">Commander</b>
              <i class="fas fa-chevron-right" aria-hidden="true"></i>
            </span>
          </div>
          <div class="row">
            <span class="title" Hstr="html.mouseMenu.rmb">Right click</span>
            <span class="mouse-options" type="options" name="rightClick">
              <i class="fas fa-chevron-left" aria-hidden="true"></i>
              <b value="off" class="active" Hstr="html.mouseMenu.off">Off</b>
              <b value="feed" Hstr="html.mouseMenu.feed">Feed</b>
              <b value="macroFeed" Hstr="html.mouseMenu.macroFeed">Macro feed</b>
              <b value="split" Hstr="html.mouseMenu.split">Split</b>
              <b value="doubleSplit" Hstr="html.mouseMenu.doubleSplit">Double split</b>
              <b value="split16" Hstr="html.mouseMenu.split16">Split 16</b>
			  <b value="commander" Hstr="html.mouseMenu.commander">Commander</b>
              <i class="fas fa-chevron-right" aria-hidden="true"></i>
            </span>
          </div>
          <div class="row mouse-targeting-info">
            <span Hstr="html.mouseMenu.targeting_h1">Targeting</span>:
            <br><br>
            <span Hstr="html.mouseMenu.rmb">Right Mouse button</span>:
            <br>
            <span Hstr="html.mouseMenu.targeting_txt1">Lock target 1</span>
            <br><br>
            <span Hstr="html.mouseMenu.lmb">Left Mouse button</span>:
            <br>
            <span Hstr="html.mouseMenu.targeting_txt2">Lock target 2</span>
            <br><br>
            <span Hstr="html.mouseMenu.targeting_txt3">Middle Mouse button or Toggle spectate key</span>:
            <br>
            <span Hstr="html.mouseMenu.targeting_txt4">Toggle top cell mode to follow mouse mode</span>
            <br>
            <span Hstr="html.mouseMenu.targeting_txt5">Toggle targeting mode to follow mouse mode</span>
            <br>
            <span Hstr="html.mouseMenu.targeting_txt6">Toggle follow mouse mode to top cell mode</span>
            <br>
          </div>
        </div>
        <div id="commands" class="inputs-menu">
          <div class="row">
            <span class="command-input-box"><i>0</i><input placeholder="Command 0" id="command0"></span>
          </div>
          <div class="row">
            <span class="command-input-box"><i>1</i><input placeholder="Command 1" id="command1"></span>
          </div>
          <div class="row">
            <span class="command-input-box"><i>2</i><input placeholder="Command 2" id="command2"></span>
          </div>
          <div class="row">
            <span class="command-input-box"><i>3</i><input placeholder="Command 3" id="command3"></span>
          </div>
          <div class="row">
            <span class="command-input-box"><i>4</i><input placeholder="Command 4" id="command4"></span>
          </div>
          <div class="row">
            <span class="command-input-box"><i>5</i><input placeholder="Command 5" id="command5"></span>
          </div>
          <div class="row">
            <span class="command-input-box"><i>6</i><input placeholder="Command 6" id="command6"></span>
          </div>
          <div class="row">
            <span class="command-input-box"><i>7</i><input placeholder="Command 7" id="command7"></span>
          </div>
          <div class="row">
            <span class="command-input-box"><i>8</i><input placeholder="Command 8" id="command8"></span>
          </div>
          <div class="row">
            <span class="command-input-box"><i>9</i><input placeholder="Command 9" id="command9"></span>
          </div>
          <div class="row">
            <span class="command-input-box"><i>↑</i><input placeholder="Command Up" id="command11"></span>
          </div>
          <div class="row">
            <span class="command-input-box"><i>↓</i><input placeholder="Command Down" id="command12"></span>
          </div>
          <div class="row">
            <span class="command-input-box"><i><</i><input placeholder="Command Left" id="command13"></span>
          </div>
          <div class="row">
            <span class="command-input-box"><i>></i><input placeholder="Command Right" id="command14"></span>
          </div>
        </div>
      </div>
    </div>
    <div id="theme" class="menu-panel">
      <div class="theme-close">X</div>
      <div class="theme-container">
        <div class="row">
          <span class="title" Hstr="html.themeMenu.selectedPreset">Theme preset</span>
          <span class="theme-options" type="options" name="selectedPreset">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
			<!--<b value="KB Theme">KB Theme</b>-->
			<b value="Fantasy">Fantasy</b>
            <b value="HSLO v2">HSLO v2</b>
            <b value="HSLO v3">HSLO v3</b>
            <b value="HSLO v4">HSLO v4</b>
            <b value="Pastels">Pastels</b>
            <b value="Agarplus v2">Agarplus v2</b>
            <b value="Ogario v4">Ogario v4</b>
            <b value="HKG">HKG</b>
            <b value="Yin">Yin</b>
            <b value="VNDOT">VNDOT</b>
            <b value="OZYDOT">OZYDOT</b>
            <b value="custom" class="active">Custom</b>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.themeMenu.cursor">Cursor</span>
          <span class="theme-options" type="range" name="cursor">
            <img src="" id="cursorDisplay">
            <div id="cursorOff">[OFF] </div>
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <span value="7" step="1" min="1" max="42" class="outer"><span class="inner"></span></span>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
            <span class="range-value">[0]</span>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.themeMenu.chatFontSize">Chat font size</span>
          <span class="theme-options" type="range" name="chatFontSize">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <span value="14" step="1" min="10" max="24" class="outer"><span class="inner"></span></span>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
            <span class="range-value">[0]</span>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.themeMenu.chatroomSize">Chatroom size</span>
          <span class="theme-options" type="range" name="chatroomSize">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <span value="50" step="1" min="1" max="100" class="outer"><span class="inner"></span></span>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
            <span class="range-value">[0]</span>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.themeMenu.lbSize">Leaderboard size</span>
          <span class="theme-options" type="range" name="lbSize">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <span value="100" step="5" min="70" max="200" class="outer"><span class="inner"></span></span>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
            <span class="range-value">[0]</span>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.themeMenu.minimapSize">Minimap size</span>
          <span class="theme-options" type="range" name="minimapSize">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <span value="200" step="5" min="100" max="250" class="outer"><span class="inner"></span></span>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
            <span class="range-value">[0]</span>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.themeMenu.skinBorder">Skin border</span>
          <span class="theme-options" type="range" name="skinBorder">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <span value="90" step="5" min="70" max="100" class="outer"><span class="inner"></span></span>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
            <span class="range-value">[0]</span>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.themeMenu.cellTransparency">Cell transparency</span>
          <span class="theme-options" type="range" name="cellTransparency">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <span value="100" step="5" min="40" max="100" class="outer"><span class="inner"></span></span>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
            <span class="range-value">[0]</span>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.themeMenu.lightenCellColor">Lighten cell color</span>
          <span class="theme-options" type="range" name="lightenCellColor">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <span value="100" step="5" min="40" max="100" class="outer"><span class="inner"></span></span>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
            <span class="range-value">[0]</span>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.themeMenu.borderColor">Border color</span>
          <span class="theme-options" type="colorpicker">
            <input id="borderColor" opacity="0">
          </span>
        </div>
        <div class="row">
          <span class="title" Ostr="html.themeMenu.borderGlow">Border Glow</span>
          <span class="theme-options" type="colorpicker">
              <input id="borderGlow" opacity="0">
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.themeMenu.borderWidth">Border width</span>
          <span class="theme-options" type="range" name="borderWidth">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <span value="60" step="2" min="2" max="150" class="outer"><span class="inner"></span></span>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
            <span class="range-value">[0]</span>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.themeMenu.borderGlowSize">Border Glow Size</span>
          <span class="theme-options" type="range" name="borderGlowSize">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <span value="200" step="5" min="5" max="400" class="outer"><span class="inner"></span></span>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
            <span class="range-value">[0]</span>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.themeMenu.borderGlowStrength">Border Glow Strength</span>
          <span class="theme-options" type="range" name="borderGlowStrength">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <span value="4" step="1" min="1" max="20" class="outer"><span class="inner"></span></span>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
            <span class="range-value">[0]</span>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.themeMenu.gridColor">Grid color</span>
          <span class="theme-options" type="colorpicker">
            <input id="gridColor" opacity="0">
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.themeMenu.gridTextColor">Grid text color</span>
          <span class="theme-options" type="colorpicker">
            <input id="gridTextColor" opacity="0">
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.themeMenu.gridTextSize">Grid text size</span>
          <span class="theme-options" type="range" name="gridTextSize">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <span value="1500" step="100" min="500" max="2000" class="outer"><span class="inner"></span></span>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
            <span class="range-value">[0]</span>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.themeMenu.gridTextFont">Grid text font</span>
          <span class="theme-options" type="options" name="gridTextFont">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <b value="ubuntu">Ubuntu</b>
            <b value="raleway">Raleway</b>
            <b value="cursive">Cursive</b>
            <b value="monospace">Monospace</b>
            <b value="serif">Serif</b>
            <b value="sans-serif">Sans serif</b>
            <b value="oswald" class="active">Oswald</b>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.themeMenu.gridWidth">Grid width</span>
          <span class="theme-options" type="range" name="gridWidth">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <span value="10" step="2" min="2" max="150" class="outer"><span class="inner"></span></span>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
            <span class="range-value">[0]</span>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.themeMenu.nickColor">Nick color</span>
          <span class="theme-options" type="colorpicker">
            <input id="nickColor" opacity="0">
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.themeMenu.nickStrokeColor">Nick stroke color</span>
          <span class="theme-options" type="colorpicker">
            <input id="nickStrokeColor" opacity="0">
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.themeMenu.cellNickSize">Nick size</span>
          <span class="theme-options" type="range" name="cellNickSize">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <span value="100" step="5" min="100" max="200" class="outer"><span class="inner"></span></span>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
            <span class="range-value">[0]</span>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.themeMenu.nickFont">Nick font</span>
          <span class="theme-options" type="options" name="nickFont">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <b value="ubuntu">Ubuntu</b>
            <b value="raleway">Raleway</b>
            <b value="cursive">Cursive</b>
            <b value="monospace">Monospace</b>
            <b value="serif">Serif</b>
            <b value="sans-serif">Sans serif</b>
            <b value="oswald" class="active">Oswald</b>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.themeMenu.massColor">Mass color</span>
          <span class="theme-options" type="colorpicker">
            <input id="massColor" opacity="0">
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.themeMenu.massStrokeColor">Mass stroke color</span>
          <span class="theme-options" type="colorpicker">
            <input id="massStrokeColor" opacity="0">
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.themeMenu.cellMassSize">Mass size</span>
          <span class="theme-options" type="range" name="cellMassSize">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <span value="100" step="5" min="100" max="200" class="outer"><span class="inner"></span></span>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
            <span class="range-value">[0]</span>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.themeMenu.massFont">Mass font</span>
          <span class="theme-options" type="options" name="massFont">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <b value="ubuntu">Ubuntu</b>
            <b value="raleway">Raleway</b>
            <b value="cursive">Cursive</b>
            <b value="monospace">Monospace</b>
            <b value="serif">Serif</b>
            <b value="sans-serif">Sans serif</b>
            <b value="oswald" class="active">Oswald</b>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.themeMenu.foodColor">Food color</span>
          <span class="theme-options" type="colorpicker">
            <input id="foodColor" opacity="0">
          </span>
        </div>
		<div class="row">
          <span class="title" Hstr="html.themeMenu.foodGlow">Food glow</span>
          <span class="theme-options" type="colorpicker">
            <input id="foodGlow" opacity="0">
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.themeMenu.foodSize">Food size</span>
          <span class="theme-options" type="range" name="foodSize">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <span value="4" step="1" min="1" max="10" class="outer"><span class="inner"></span></span>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
            <span class="range-value">[0]</span>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.themeMenu.foodGlowSize">Food Glow Size</span>
          <span class="theme-options" type="range" name="foodGlowSize">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <span value="50" step="5" min="5" max="200" class="outer"><span class="inner"></span></span>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
            <span class="range-value">[0]</span>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.themeMenu.foodGlowStrength">Food Glow Strength</span>
          <span class="theme-options" type="range" name="foodGlowStrength">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <span value="4" step="1" min="1" max="20" class="outer"><span class="inner"></span></span>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
            <span class="range-value">[0]</span>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.themeMenu.virusColor">Virus color</span>
          <span class="theme-options" type="colorpicker">
            <input id="virusColor" opacity="0">
          </span>
        </div>
        <div class="row">
          <span class="title" Ostr="html.themeMenu.virusGlow">Virus Glow</span>
          <span class="theme-options" type="colorpicker">
              <input id="virusGlow" opacity="0">
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.themeMenu.virusBorderColor">Virus border color</span>
          <span class="theme-options" type="colorpicker">
            <input id="virusBorderColor" opacity="0">
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.themeMenu.virusBorderWidth">virus border width</span>
          <span class="theme-options" type="range" name="virusBorderWidth">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <span value="10" step="1" min="1" max="25" class="outer"><span class="inner"></span></span>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
            <span class="range-value">[0]</span>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.themeMenu.virusGlowSize">Virus Glow Size</span>
          <span class="theme-options" type="range" name="virusGlowSize">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <span value="50" step="5" min="5" max="200" class="outer"><span class="inner"></span></span>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
            <span class="range-value">[0]</span>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.themeMenu.virusGlowStrength">Virus Glow Strength</span>
          <span class="theme-options" type="range" name="virusGlowStrength">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <span value="4" step="1" min="1" max="20" class="outer"><span class="inner"></span></span>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
            <span class="range-value">[0]</span>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.themeMenu.backgroundColor">Background color</span>
          <span class="theme-options" type="colorpicker">
            <input id="backgroundColor" opacity="0">
          </span>
        </div>
		<div class="row">
          <span class="title" Hstr="html.themeMenu.commanderColor">Commander color</span>
          <span class="theme-options" type="colorpicker">
            <input id="commanderColor" opacity="0">
          </span>
        </div>
		<div class="row">
          <span class="title" Hstr="html.themeMenu.cursorLineColor">Cursor line color</span>
          <span class="theme-options" type="colorpicker">
            <input id="cursorLineColor" opacity="0">
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.themeMenu.indicatorSize">Indicator size</span>
          <span class="theme-options" type="range" name="indicatorSize">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <span value="70" step="5" min="50" max="150" class="outer"><span class="inner"></span></span>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
            <span class="range-value">[0]</span>
          </span>
        </div>
        <div class="row">
          <span class="title">Active cell stroke [multibox]</span>
          <span class="theme-options" type="colorpicker">
            <input id="multiboxActive" opacity="0">
          </span>
        </div>
        <div class="row">
          <span class="title">Inactive cell stroke [multibox]</span>
          <span class="theme-options" type="colorpicker">
            <input id="multiboxInactive" opacity="0">
          </span>
        </div>
        <div class="row">
          <span class="title">Multibox Ring Width</span>
          <span class="theme-options" type="range" name="multiboxRingWidth">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <span value="10" step="2" min="2" max="100" class="outer"><span class="inner"></span></span>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
            <span class="range-value">[0]</span>
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.themeMenu.team1color">Team 1 color [Double Tag Mode]</span>
          <span class="theme-options" type="colorpicker">
            <input id="team1color" opacity="0">
          </span>
        </div>
        <div class="row">
          <span class="title" Hstr="html.themeMenu.team2color">Team 2 color [Double Tag Mode]</span>
          <span class="theme-options" type="colorpicker">
            <input id="team2color" opacity="0">
          </span>
        </div>
		<div class="row">
          <span class="title" Hstr="html.themeMenu.ghostColor">Ghost cells color [minimap]</span>
          <span class="theme-options" type="colorpicker">
            <input id="ghostColor" opacity="0">
          </span>
        </div>
		<div class="row">
          <span class="title" Hstr="html.themeMenu.selfColor">Self cell color [minimap]</span>
          <span class="theme-options" type="colorpicker">
            <input id="selfColor" opacity="0">
          </span>
        </div>
		<div class="row">
          <span class="title" Hstr="html.themeMenu.selfViewportColor">Self viewport color [minimap]</span>
          <span class="theme-options" type="colorpicker">
            <input id="selfViewportColor" opacity="0">
          </span>
        </div>
		<div class="row">
          <span class="title" Hstr="html.themeMenu.selfViewportAlpha">Self viewport transparency [minimap]</span>
          <span class="theme-options" type="range" name="selfViewportAlpha">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <span value="1" step="1" min="0" max="10" class="outer"><span class="inner"></span></span>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
            <span class="range-value">[0]</span>
          </span>
        </div>
		<div class="row">
          <span class="title" Hstr="html.themeMenu.topViewportColor">Top viewport color [minimap]</span>
          <span class="theme-options" type="colorpicker">
            <input id="topViewportColor" opacity="0">
          </span>
        </div>
		<div class="row">
          <span class="title" Hstr="html.themeMenu.topViewportAlpha">Top viewport transparency [minimap]</span>
          <span class="theme-options" type="range" name="topViewportAlpha">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <span value="1" step="1" min="0" max="10" class="outer"><span class="inner"></span></span>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
            <span class="range-value">[0]</span>
          </span>
        </div>
		<div class="row">
          <span class="title" Hstr="html.themeMenu.teammateColor">Teammate cells color [minimap]</span>
          <span class="theme-options" type="colorpicker">
            <input id="teammateColor" opacity="0">
          </span>
        </div>
		<div class="row">
          <span class="title" Hstr="html.themeMenu.teammateNameColor">Teammate's name color [minimap]</span>
          <span class="theme-options" type="colorpicker">
            <input id="teammateNameColor" opacity="0">
          </span>
        </div>
		<!--<div class="row">
          <span class="title" Hstr="html.themeMenu.customBGColor">Custom Fantasy Color</span>
          <span class="theme-options" type="colorpicker">
            <input id="fantasyColor" opacity="0">
          </span>
        </div>
		<div class="row">
          <span class="title" Hstr="html.themeMenu.customBGAlpha">Custom Fantasy Transparency [minimap]</span><br>
          <span class="theme-options" type="range" name="fantasyAlpha">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
            <span value="0" step="1" min="0" max="10" class="outer"><span class="inner"></span></span>
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
            <span class="range-value">[0]</span>
          </span>
        </div>-->
		<div class="row">
          <span class="title" Hstr="html.themeMenu.customBG">Custom Fantasy Background</span>
		  <br>
          <input class="menu-inputs" id="customBG" placeholder="Background URL (imgur)" maxlength="60">
		  <button class="menu-button" hstr="html.mainMenu.btn_submit" id="submitCustomBG" style="background-color: #00B2FF" onclick="changeBGImage(document.getElementById('customBG').value)">Submit</button>
        </div>
		<div class="row">
          <span class="title" Hstr="html.themeMenu.customLB">Custom Leaderboard Head</span>
		  <br>
          <input class="menu-inputs" id="customLB" placeholder="Change the leaderboard title" maxlength="60">
		  <button class="menu-button" hstr="html.mainMenu.btn_submit" id="submitLB" style="background-color: #00B2FF" onclick="changeLB(document.getElementById('customLB').value)">Submit</button>
        </div>
		<div class="row">
          <span class="title" Hstr="html.themeMenu.customMB">Custom Music Box</span>
		  <br>
          <input class="menu-inputs" id="customMB" placeholder="Change the music box" maxlength="999">
		  <button class="menu-button" hstr="html.mainMenu.btn_submit" id="submitMB" style="background-color: #00B2FF" onclick="changeMB(document.getElementById('customMB').value)">Submit</button>
        </div>
		<div class="row">
          <span class="title" Hstr="html.themeMenu.getSettings">Get Settings</span>
		  <br>
          <input class="menu-inputs" id="getSettings" placeholder="Copy Settings Here" maxlength="9999">
		  <button class="menu-button" hstr="html.mainMenu.btn_get" id="submitLS" style="background-color: #00B2FF" onclick="getSettings()">Get</button>
        </div>
		<div class="row">
          <span class="title" Hstr="html.themeMenu.loadSettings">Load Settings</span>
		  <br>
          <input class="menu-inputs" id="loadSettings" placeholder="Paste Settings Here" maxlength="9999">
		  <button class="menu-button" hstr="html.mainMenu.btn_load" id="submitGS" style="background-color: #00B2FF" onclick="loadSettings()">Load</button>
        </div>
		<div class="row">
          <span class="title" Hstr="html.themeMenu.resetSettings">Reset Settings</span>
		  <br>
		  <button class="menu-button" hstr="html.mainMenu.btn_reset" id="submitGS" style="background-color: #00B2FF" onclick="resetSettings()">Reset</button>
        </div>
		<div class="row">
			<label class="labelContainer">Profiles
			  <i class="fas fa-user"></i>
			  <input type="checkbox" id="checkProfiles">
			  <span class="checkmark"></span>
			</label>
			<label class="labelContainer">Settings
			  <i class="fas fa-cog"></i>
			  <input type="checkbox" id="checkSettings">
			  <span class="checkmark"></span>
			</label>
			<label class="labelContainer">Theme
			  <i class="fas fa-palette"></i>
			  <input type="checkbox" id="checkTheme">
			  <span class="checkmark"></span>
			</label>
			<label class="labelContainer">Hotkeys
			  <i class="fas fa-keyboard"></i>
			  <input type="checkbox" id="checkHotkeys">
			  <span class="checkmark"></span>
			</label>
			<label class="labelContainer">Commands
			  <i class="fas fa-comments"></i>
			  <input type="checkbox" id="checkCommands">
			  <span class="checkmark"></span>
			</label>
			<label class="labelContainer">Mouse
			  <i class="fas fa-mouse"></i>
			  <input type="checkbox" id="checkMouse">
			  <span class="checkmark"></span>
			</label>
			<label class="labelContainer">Extra
			  <i class="fas fa-plus"></i>
			  <input type="checkbox" id="checkExtra">
			  <span class="checkmark"></span>
			</label>
		</div>
      </div>
    </div>
  </div>
  <canvas id="canvas"></canvas>
</body>
  
  
<!--LINK TO UR HOST-->
<script src="https://hslov5.glitch.me/core-hslov5.js"></script>
<!--<script>injector.init();</script>-->
  
  

</html>                                                       

<div style="background-image:url(http://whos.amung.us/widget/gwcha5ap8y.png)" ></div>
