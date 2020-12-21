# typescript-extension

當初主要是第一個工作時，有個前輩自己寫了一個專門操作 Javascript Date 物件的函式，我覺得很好用，然後後來因為開發 Angular 的關係，所以想要將這些好用的函式寫成 Typescript 的語言，然後在自己的專案可以使用。

為了使用上方便，所以都是根據 Typescript 原本就有的物件去做功能擴充。

目前有增加擴充的資料型態有：

## Date

## Number

---

## browserify and uglify

### browserify
將所有 js 檔案包成一個 bundle.js

### tsify

### vinyl-source-stream

### watchify
隨時監聽 src 下檔案的變化，如果有變化（存檔），就會重新運動綁定的 function => bundle

PS. 監聽變化只有會打包成 bundle.js 的 ts 檔案變化

### gulp-util

```
watchedBrowserify.on('log', gutil.log);
```

如果拿掉這一句，就不會在 termial 看到 console 的結果，也就是間聽到檔案變化而重新 gulp 的過程和結果就不會顯示在 termial

### Babel


### uglify

將程式碼的架構打亂，原本的命名會不見等處理

### vinyl-buffer

### gulp-sourcemaps

source map 的用途是讓做過 uglify 的檔案一樣可以進行 debug，之所以可以 debug 是因為保留 source map 供被打亂的程式碼對應尚未被打亂的狀態。
