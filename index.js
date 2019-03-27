

const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const pdf2html = require('pdf2html')


router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
  });

  
router.get('/pdf', function (req, res) {
    pdf2html.pages('./pdf/david_pruebas_ro.pdf', (err, htmlPages) => {
        if (err) {
            res.send('Conversion error: ' + err)
        } else {
            res.send(htmlPages)
        }
    }); 
})


app.use('/', router);
app.use('/pdf', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');


