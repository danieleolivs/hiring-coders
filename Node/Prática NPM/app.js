//incluido a biblioteca http - funcionalidades do servidor
const http = require('http');
const url = require('url');
const queryString = require('query-string');

//definindo o ip e porta que o código vai rodar
const hostname = '127.0.0.1';
const port = 3000;

//implementação da regra de negócio
const server = http.createServer((req, res) => {
  
  //pegar a pergunta na url
  
  const params = queryString.parse(url.parse(req.url, true).search);

  //console.log(params);

  //verificar a pergunta e escolher a resposta
  let resposta;

  if(params.pergunta =='melhor-filme') {
      resposta = 'Star Wars'
  }
  else if(params.pergunta == 'melhor-tecnologia-backend'){
      resposta = 'nodejs'
  }
  else{
      resposta = 'Não sei, desculpe :('
  }

  //mostrar ao usuario

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(resposta);
});

//execução
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});