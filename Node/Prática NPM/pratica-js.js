//incluido a biblioteca http - funcionalidades do servidor
const http = require('http');
const url = require('url');
const queryString = require('query-string');
var fs = require('fs');

//definindo o ip e porta que o código vai rodar
const hostname = '127.0.0.1';
const port = 3000;

//implementação da regra de negócio
const server = http.createServer((req, res) => {
  let resposta;
  const urlparse = url.parse(req.url, true)

  //receber informações do usuario
  const params = queryString.parse(urlparse.search);
  
  //Criar um usuário

  if(urlparse.pathname == '/criar-usuario'){
    
    //salvar informações e atualizar usuario
      fs.writeFile('users/' + params.id + '.txt', JSON.stringify(params), function(err) {
        if(err) throw err;
        console.log('Salved!')
      })

      resposta = 'Usuario criado com sucesso!'

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(resposta);
  }

  //Selecionar usuario
  else if (urlparse.pathname == '/selecionar-usuario'){
    fs.readFile('users/' + params.id + '.txt', function(err, data) {
      resposta = data

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(resposta);
    });
  }

  //Remover um usuario
  else if (urlparse.pathname == '/remover-usuario'){
    fs.unlink('users/' + params.id + '.txt', function (err) {

      resposta = err ? 'Usuario não encontrado' :'Usuário removido com sucesso!'

      console.log('File deleted!');
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(resposta);
    });
  }

});

//execução
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});