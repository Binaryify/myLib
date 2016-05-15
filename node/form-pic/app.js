var express = require('express');
var hbs = require('hbs');
var formidable = require('formidable');
var app = express();
var fs = require('fs');
app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.set('port', process.env.PORT || 3001)
app.get('/contest', function(req, res) {
    var now = new Date();
    // res.type('text/plain');
    // res.send(now)
    res.render('index')
        // res.render('')
    console.log(now)
})
app.post('', function(req, res) {
	console.log('haaaaaaaaaaaaaaaaaaaa\n')
	console.log(req.body);
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        if (err) {
            return res.redirect(303, 'index')
        } else {
            console.log(fields);
            console.log('分界\n');
            console.log(files);
            console.log('分界2\n');
            console.log(files.photo.path, files.photo.name);
            res.redirect(303, 'contest');
            fs.rename(files.photo.path,__dirname+'/'+files.photo.name, function() {
                if (err) {

                    console.error(err);

                    return;

                }
                console.log(__dirname+'/'+files.photo.name);
                console.log('移动图片成功')
            });
        }

    })
})
app.listen(app.get('port'), function() {
    console.log('server start @3000')
})
