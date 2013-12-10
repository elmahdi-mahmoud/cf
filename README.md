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

### HTML checkbox options:

##### Default:
```html
<form class="cf">
      <fieldset>
            <label for="default" class="ccbx">
                  <input type="checkbox" name="default" />
                  Checkbox 
            </label>
      </fieldset>
</form>
```

##### Checked:
```html
<form class="cf">
      <fieldset>
            <label for="chkd" class="ccbx">
                  <input type="checkbox" name="chkd" checked="checked" />
                  Checked 
            </label>
      </fieldset>
</form>

##### Disabled:
```html
<form class="cf">
      <fieldset>
            <label for="dsbld" class="ccbx">
                  <input type="checkbox" name="dsbld" disabled />
                  Disabled 
            </label>
      </fieldset>
</form>
```

##### Checked Disabled:
```html
<form class="cf">
      <fieldset>
            <label for="chkDsbld" class="ccbx">
                  <input type="checkbox" name="chkDsbld" checked="checked"  disabled />
                  Checked - Disabled 
            </label>
      </fieldset>
</form>
```

