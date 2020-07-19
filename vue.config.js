module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/production-sub-path/" : "/",
  outputDir: "dist",
  assetsDir: "static",
  indexPath: "index.html",
  filenameHashing: true,
  lintOnSave: true,
  runtimeCompiler: false,
  transpileDependencies: [],
  productionSourceMap: true,
  crossorigin: "",
  integrity: false,
  configureWebpack: () => {},
  chainWebpack: () => {},
  devServer: {
    open: process.platform === "darwin",
    host: "0.0.0.0",
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      "/api": {
        target: "http://app.rmsdmedia.com",
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
    // before: app => {}
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/styles/main.scss";`
      }
    }
  }
};
