var http = require("http");
var officegen = require('officegen');

http.createServer ( function ( request, response ) {
  // response.writeHead ( 200, {
  //   "Content-Type": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  //   'Content-disposition': 'attachment; filename=surprise.pptx'
  //   });

  // var pptx = officegen ( 'pptx' );

  // pptx.on ( 'finalize', function ( written ) {
  //     // ...
  //     });

  // pptx.on ( 'error', function ( err ) {
  //     // ...
  //     });

  // // ... (fill pptx with data)

  // pptx.generate ( response );
}).listen ( 3000 );