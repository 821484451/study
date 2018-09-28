var  officegen  = require('officegen');
var fs = require('fs');
var docx = officegen({'type': 'docx'});
var pptx = officegen({'type': 'pptx'});
var xlsx = officegen({'type': 'xlsx'});
var http = require("http");
var path = require('path');

docx.on('finalize', function (written) {
  console.log(written);
});
docx.on('error', function (error) {
  console.log(error);
});
var pObj = docx.createP ();
pObj.options.align = 'center';
pObj.addText ( 'Simple' );

pObj.addText ( ' with color', { color: '000088' } );

pObj.addText ( ' and back color.', { color: '00ffff', back: '000088' } );

pObj.addText ( 'Bold + underline', { bold: true, underline: true } );

pObj.addText ( 'Fonts face only.', { font_face: 'Arial' } );

pObj.addText ( ' Fonts face and size. ', { font_face: 'Arial', font_size: 40 } );

pObj.addText ( 'External link', { link: 'https://github.com' } );


pObj.addText ( 'Internal link', { hyperlink: 'myBookmark' } );
// 添加图片
console.log(__dirname)
console.log(path.resolve(__dirname, './myFile.png'));
pObj.addImage (path.resolve(__dirname, './myFile.png'),{ cx: 300, cy: 200 });
pObj.startBookmark ( 'myBookmark' );
pObj.endBookmark ();


var out = fs.createWriteStream ( 'out.docx' );

docx.generate ( out );
out.on ( 'close', function () {
  console.log ( 'Finished to create the PPTX file!' );
});

// http.createServer ( function ( request, response ) {
//   response.writeHead ( 200, {
//     "Content-Type": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
//     'Content-disposition': 'attachment; filename=surprise.pptx'
//     });

//   var pptx = officegen ( 'pptx' );

//   pptx.on ( 'finalize', function ( written ) {
//       // ...
//       });

//   pptx.on ( 'error', function ( err ) {
//       // ...
//       });

//   // ... (fill pptx with data)

//   pptx.generate ( response );
// }).listen ( 3000 );