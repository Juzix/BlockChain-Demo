 module.exports = {
  build: {
    "index.html": "index.html",
    "app.js": [
      "javascripts/app.js"
    ],
    "app.css": [
      "stylesheets/app.css"
    ],
    "images/": "images/"
  },
  rpc: {
    host: "10.10.8.14",
    gas : 999999999999,
    port: 6789,
    //from:"0xa5efb0582443bc5b77f707cea850ef099e3068cc" 9.19
    from: "0xebdd1cf871ebd72b108d3384feec3652203d8351"
  }
};
