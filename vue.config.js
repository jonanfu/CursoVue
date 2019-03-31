const webpack = require("webpack");

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "$jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery",
        Tether: "tether",
        "windows.Tether": "tether",
        Popper: ["popper.js", "default"],
        Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
        Button: "exports-loader?Button!boostrap/js/dist/button",
        Carousel: "exports-loader?Carousel!boostrap/js/dist/carousel",
        Collapse: "exports-loader?Collapse!boostrap/js/dist/collapse",
        Dropdown: "exports-loader?Dropdown!boostrap/js/dist/dropdown",
        Modal: "exports-loader?Modal!boostrap/js/dist/modal",
        Popover: "exports-loader?Popover!boostrap/js/dist/popover",
        Scropllspy: "exports-loader?Scropllspy!boostrap/js/dist/scrollspy",
        Tab: "exports-loader?Tab!boostrap/js/dist/tab",
        Tooltip: "exports-loader?Tooltip!boostrap/js/dist/tooltip",
        Util: "exports-loader?Util!boostrap/js/dist/util"
      })
    ],
    entry: {
      "bootstrap-loader": "bootstrap-loader"
    }
  }
};
