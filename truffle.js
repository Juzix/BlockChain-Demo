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
    // host: "10.10.8.14" ,
    // host: "10.10.8.42" ,
    // host: "192.168.9.10" ,
    host: "192.168.9.19" ,
    // port: 7910,
    port: 6789,
    gas: 9999999999999,
    // from: '0x5fd205613e71810387265e7505997c69c27f9ae9'
    // from: '0x6d39c4bb7c854a8ff2b27225fa119a9503563e39'
    // from:"0xcc2f049cc8c58cffcbc26e4302f752ee0ee41161"
    // from:"0x005a3d3f35445e5597448c37c975bcf5774960c9"
    from:"0xa5efb0582443bc5b77f707cea850ef099e3068cc"

  }
};
