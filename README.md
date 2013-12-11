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
  * [Include required files`](#include-required-files)
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
  * [Javascript usage](#javascript)
* [Re-customize css your own way](#re-customize-css-your-own-way) 
* [Translations](#translations)
* [License](#license)

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

You can clone with:

1. HTTPS: `https://github.com/elmahdi-mahmoud/cf.git`
2. SSH  : `git@github.com:elmahdi-mahmoud/cf.git`
3. [Download Zip](https://github.com/elmahdi-mahmoud/cf/archive/master.zip)

#### Include required files:
```html
<!-- CSS: `assets/css/cf.min.css` OR `assets/css/cf.css` -->
<link rel="stylesheet" type="text/css" href="assets/css/cf.min.css">

<!-- JS:  `assets/js/cf.min.js` OR `assets/js/cf.js` -->
<script src="assets/js/cf.min.js"></script> 
```
> `disabled` and `checked` works just like html standards! NO *classes* or custom *attributes* required for both of checkboxs and radio buttons.

### HTML checkbox options:

> TODO: add class `ccbx` to `label` tag for custom checkbox.

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

> TODO: add class `crbtn` to `label` tag for custom checkbox.

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

### Javascript usage:
```javascript
(function($) {
    $(document).ready(function() {
        $('.cf').cf();
    });
})(jQuery);
```

## Re-customize css your own way

Required to implement `css` style your way. You have to include the following [stylesheet](assets/css/custom-skin-cf.css) file:

```html
<link rel="stylesheet" type="text/css" href="assets/css/custom-skin-cf.css"> 
```
> Recommend to include right after `cf.css`

The `custom-skin-cf.css` contains an empty css rules to modify `width` , `height` , `colors` , `margin` and `checkmark-icon`.


```css
/*
 * The default values declared within a comment side to each property.
 *
 * TODO: Do not use 'important!'
 */

/* ==========================================================================
   Checkbox rules
   ========================================================================== */

/* case: default */
label.ccbx span { 
    width: ;        /* 16px */
    height: ;       /* 16px */
    margin-right: ; /* 5px */
    border-color: ; /* #ccc */
}

/* case: default:hover */
label.ccbx:hover span { border-color: ; } /* #25303c */

/* case: disabled */
label.ccbx.disabled              { color: ; }            /* #ddd */
label.ccbx.disabled span         { border-color: ; }     /* #ddd */
label.ccbx.checked.disabled span { background-color: ; } /* #ddd */

/* case: disabled:hover */
label.ccbx.disabled:hover span   { border-color: ; } /* #ddd */

/* case: active */
label.ccbx.checked span { 
    background-color: ; /* #25303c */
    border-color: ;     /* #25303c */
}

/* checkmark-icon (✔) */
label.ccbx i {
    background: ; /* url('') */
    width: ;      /* 16px */
    height: ;     /* 16px */
}

/* ==========================================================================
   Radio buttons rules
   ========================================================================== */

/* case: default */
label.crbtn span {
    width: ;  /* 17px */
    height: ; /* 17px */
    margin-right: ; /* 5px */
    border-color: ; /* #ccc */
}
label.crbtn span i {
    background-color: ; /* transparent */
    width: ; /* 11px */
    height: ; /* 11px */
}

/* case: disabled */
label.crbtn.disabled               { color: ; } /* #ddd */
label.crbtn.disabled span          { border-color: ; } /* #ddd */
label.crbtn.pushed.disabled span i { box-shadow:; } /* inset 0 0 9px #ddd */

/* case: active */
label.crbtn.pushed span i { box-shadow: ; } /* inset 0 0 9px #25303c */
```

## Translations
* [العربية](doc/lang/ar.md)
* [Русский](doc/lang/ru.md)


### License
under MIT License - [http://www.opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php)
