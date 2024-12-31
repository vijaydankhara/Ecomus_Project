const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(request, file, cb){
        cb(null, 'public/images');
        // cb(null, path.join(__dirname, 'public', 'images'));
        
    },
    filename: function(request, file, cb) {
        cb(null, `${Date.now()}_${file.originalname.replace(/\s+/g, "/")}`)
    }
});

exports.upload = multer({storage: storage});

