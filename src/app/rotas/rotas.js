const LivroDao = require('../infra/livro-dao');
const db = require('../../config/database');

module.exports = (app) => {
    app.get('/', function(req, resp){
        resp.send(
            `
                <html>
                    <head>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1> Casado Código 1 </h1>
                    </body>
                </html>
            `    
        );
    });
    
    app.get('/livros', function(req, resp){
        const livroDao = new LivroDao(db);
        livroDao.lista()
            .then(livros => resp.marko(
                require('../views/livros/listagem/lista.marko'),
                {
                    livros
                }
            ))
            .catch(erro => console.log(erro));
    });
};

