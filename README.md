## EditorJS Multiple Column Layout

This is a test for multiple columns without nested elements. Using Bootstrap like grid system and display float (rather than flex) for each block.

UPDATED: Please refer to this https://github.com/codex-team/editor.js/issues/836 there is a better solution now
CHECKOUT THIS https://github.com/hata6502/editorjs-layout#readme [Multi Column Layout]


[Test With Demo](https://oodeveloper.github.io/editorjs-multicolumn/)

* Please note that this is just a test and this is not for production
[Related Topic](https://github.com/codex-team/editor.js/issues/836)

### Installation
Use editor.js file
```HTML
<script type='text/javascript' src='editor.js?ver=multicolumn'></script>
```
Please add this css styles
```CSS
  /* Editor CSS */
  #editorjs{max-width: 650px;margin: 0 auto}
  /* .codex-editor__redactor{display: flex;flex-wrap: wrap;flex-direction: row;} */
  .codex-editor__redactor{}
  /* .ce-block{width: 100%;padding-left: 0;padding-right: 0;} */
  .ce-block{width: 100%;float: left;padding-left: 0;padding-right: 0;}

.es-col-1 {
  -ms-flex: 0 0 8.333333%;
  flex: 0 0 8.333333%;
  max-width: 8.333333%;
}

.es-col-2 {
  -ms-flex: 0 0 16.666667%;
  flex: 0 0 16.666667%;
  max-width: 16.666667%;
}

.es-col-3 {
  -ms-flex: 0 0 25%;
  flex: 0 0 25%;
  max-width: 25%;
}

.es-col-4 {
  -ms-flex: 0 0 33.333333%;
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
}

.es-col-5 {
  -ms-flex: 0 0 41.666667%;
  flex: 0 0 41.666667%;
  max-width: 41.666667%;
}

.es-col-6 {
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
}

.es-col-7 {
  -ms-flex: 0 0 58.333333%;
  flex: 0 0 58.333333%;
  max-width: 58.333333%;
}

.es-col-8 {
  -ms-flex: 0 0 66.666667%;
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
}

.es-col-9 {
  -ms-flex: 0 0 75%;
  flex: 0 0 75%;
  max-width: 75%;
}

.es-col-10 {
  -ms-flex: 0 0 83.333333%;
  flex: 0 0 83.333333%;
  max-width: 83.333333%;
}

.es-col-11 {
  -ms-flex: 0 0 91.666667%;
  flex: 0 0 91.666667%;
  max-width: 91.666667%;
}

.es-col-12 {
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
}

  .cdx-settings-input{border: 1px solid rgba(201,201,204,.48);-webkit-box-shadow: inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow: inset 0 1px 2px 0 rgba(35,44,72,.06);border-radius: 3px;padding: 3px 8px;outline: none;width: 100%;-webkit-box-sizing: border-box;box-sizing: border-box;}
  .cdx-small{font-size: .6rem}
  .ce-block__content{max-width: 100%}

  .cdx-settings-button.disabled,.ce-settings__button.disabled{pointer-events: none;opacity: .5}
  .cdx-settings-sidebar{position: absolute;left: 100%;bottom:0;background: #fff;width: 108px;height: 145px;box-shadow: 0 3px 15px -3px rgba(13,20,33,.13);border-radius: 0 4px 4px 0;z-index: 0;}
  /* Editor CSS - END */
```

