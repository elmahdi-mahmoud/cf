Custom checkbox and radio buttons v2.
===

*Custom checkbox and radio button that really works v2 - lightweight jquery plugin.*

---
> v1 demo can be found [*here*](http://codepen.io/ElmahdiMahmoud/details/JFejy)


----------



## Table of contents

* [Demo](#demo)
* [Browser compatibility](#browser-compatibility)
* [Plugin Structure](#plugin-structure)
* [Getting Started](#getting-started)
  * [Include required files `.css` and `.js`](#include-css-and-js-files)
  * [HTML](#html)
    * [Checkbox options:](#checkbox-options)
      * [Default](#default)
      * [Checked](#checked)
      * [Disabled](#disabled)
      * [Checked Disabled](#checked-disabled)
      * [All in one block](#all-in-one-block)
    * [Radio buttons options:](#radio-buttons-options)
      * [Default](#default-1)
      * [Checked](#checked-1)
      * [Disabled](#disabled-1)
      * [Checked Disabled](#checked-disabled-1)
      * [All in one block](#all-in-one-block-1)
  * [Javascript](#javascript)
* [Re-customize css your own way](#customize-css-your-own-way)  

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

CSS: `assets/css/cf.min.css` OR `assets/css/cf.css`
```html
<!-- minified css version -->
<link rel="stylesheet" type="text/css" href="assets/css/cf.min.css">
<!-- Optional: customize css your own way -->
<link rel="stylesheet" type="text/css" href="assets/css/custom-skin-cf.css"> 
```
JS:  `assets/js/cf.min.js` OR `assets/js/cf.js`
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
```

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

##### All in one block:
```html
<form class="cf">
      <fieldset>
            <ul>
                  <li>
                  <label for="def" class="ccbx">
                        <input type="checkbox" name="def" />
                        Checkbox 
                  </label>
                  </li>
                  
                  <li>
                  <label for="chkd" class="ccbx">
                        <input type="checkbox" name="chkd" checked="checked" />
                        Checked 
                  </label>
                  </li>
                  
                  <li>
                  <label for="dsbld" class="ccbx">
                        <input type="checkbox" name="dsbld" disabled />
                        Disabled 
                  </label>
                  </li>
                  
                  <li>
                  <label for="chkDsbld" class="ccbx">
                        <input type="checkbox" name="chkDsbld" checked="checked"  disabled />
                        Checked - Disabled 
                  </label>
                  </li>
            </ul>
      </fieldset>
</form>
```

### HTML radio buttons options:

##### Default:
```html
<form class="cf">
      <fieldset>
            <label for="def" class="crbtn">
                  <input type="radio" name="def" />
                  Radiobutton 
            </label>
      </fieldset>
</form>
```

##### Checked:
```html
<form class="cf">
      <fieldset>
            <label for="chkd" class="crbtn">
                  <input type="radio" name="chkd" checked="checked"/>
                  Checked 
            </label>
      </fieldset>
</form>
```

##### Disabled:
```html
<form class="cf">
      <fieldset>
            <label for="dsbld" class="crbtn">
                  <input type="radio" name="dsbld" disabled/>
                  Disabled 
            </label>
      </fieldset>
</form>
```

##### Checked Disabled:
```html
<form class="cf">
      <fieldset>
            <label for="chkDsbld" class="crbtn">
                  <input type="radio" name="chkDsbld" disabled  checked="checked" />
                  Checked - Disabled 
            </label>
      </fieldset>
</form>
```

##### All in one block:
```html
<form class="cf">
      <fieldset>
            <ul>
            <li>
            <label for="adef" class="crbtn">
                  <input type="radio" name="adef" />
                  Radiobutton 
            </label>
            </li>
            
            <li>
            <label for="achkd" class="crbtn">
                  <input type="radio" name="achkd" checked="checked"/>
                  Checked 
            </label>
            </li>
            
            <li>
            <label for="adsbld" class="crbtn">
                  <input type="radio" name="adsbld" disabled/>
                  Disabled 
            </label>
            </li>
            
            <li>
            <label for="adsbldachkd" class="crbtn">
                  <input type="radio" name="adsbldachkd" disabled checked="checked"/>
                  Checked - Disabled 
            </label>
            </li>
            
            </ul>
      </fieldset>
</form>
```

### Javascript:
```javascript
(function($) {
    $(document).ready(function() {
        $('.cf').cf();
    });
})(jQuery);
```

## Re-customize css your own way
