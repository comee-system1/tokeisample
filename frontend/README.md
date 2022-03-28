# frontend

# vue-routerのインストール
- 参考URL
`https://mizukazu.com/add-vue-router/`

npm install vue-routerだけだとエラーがでたので、バージョンを指定してインストールしたら成功
`npm install vue-router@3 --save`

# sass-loaderのインストール
```
npm install sass-loader node-sass --save-dev
npm install --save-dev sass@1.26.5
```
### 共通のsassを読み込み
```
参考URL
https://stackoverflow.com/questions/58184549/sass-loader-error-invalid-options-object-that-does-not-match-the-api-schema


"node-sass": "^7.0.1",
"sass": "^1.26.5",
"sass-loader": "^12.6.0",
最新のときは、
vue.config.jsで

  css: {
    loaderOptions: {
      sass:{
        additionalData: '@import "@/assets/scss/common.scss";'
      }
    }
  }
  で読み込み

additionalDataがdataやprependDataだとエラーになる

```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
