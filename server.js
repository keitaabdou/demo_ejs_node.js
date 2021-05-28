// on charge les chose que nous avons besoin
var express = require('express');
var app = express();

// On définie le moteur de vue sur ejs
app.set('view engine', 'ejs' );

//On définit la route de index
app.get('/', function(req, res){ 
    var mascots = [
        {name: 'Keita', organisation: "DigitalOcean", birth_years: 2021},
        {name: 'Smith', organisation: "Digital", birth_years: 2021},
        {name: 'Abdoul', organisation: "Ocean", birth_years: 2021},
    ];
    var tagline = "Aucun concept de programmation n'est complet sans une mascotte animale mignonne.";

    res.render('pages/index', {
        mascots: mascots,
        tagline: tagline
    });
});

app.get('/about', function(req, res){
    res.render('pages/about.ejs');
    
});

app.listen(8080);
