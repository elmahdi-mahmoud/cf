Custom checkbox and radio buttons v2.
===

*Custom checkbox and radio button that really works v2 - lightweight jquery plugin.*

---
> v1 demo can be found [*here*](http://codepen.io/ElmahdiMahmoud/details/JFejy)

## Demo

* [Full Demo](http://codepen.io/ElmahdiMahmoud/full/etvzG)
* [Details Demo](http://codepen.io/ElmahdiMahmoud/details/etvzG)

## Browser compatibility

* Chrome
* Safari
* Firefox
* Opera
* IE8+

> OS tested on: Windows 7 , OS X Lion , Ubuntu

### Plugin Structure

```
cf/
├── assets/
├──── css/
│     ├── cf.css
│     ├── cf.min.css
│     ├── custom-skin-cf.css
│     └── demo.css
├──── img/
│     └── ccbx.png
└──── js/
      ├── cf.js
      └── cf.min.js
```

## Getting Started

#### Include .css and .js files:

##### CSS: `assets/css/cf.min.css` OR `assets/css/cf.css`
```html
<!-- minified css version -->
<link rel="stylesheet" type="text/css" href="assets/css/cf.min.css">
<!-- Optional: customize css your own way -->
<link rel="stylesheet" type="text/css" href="assets/css/custom-skin-cf.css"> 
```
##### JS:  `assets/js/cf.min.js` OR `assets/js/cf.js`
```html
<!-- minified js version -->
<script src="assets/js/cf.min.js"></script> 
```

### Checkbox options:

##### Default:
```html
<form class="cf">
      <fieldset>
      <label for="def" class="ccbx">
            <input type="checkbox" name="def" />
            Checkbox 
      </label>
      </fieldset>
</form>
```
