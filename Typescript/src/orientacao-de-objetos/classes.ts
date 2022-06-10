//class User {
//    constructor(name, age){
//        this.name = name;
//        this.age = age;
//    }
//}

//class Player extends User{
//    constructor(name, age, game){
//        pega as informações da classe anterior  
//        super(name, age);
//        this.game = game
//    }
//}

//const jogador = new Player()

//classes e funções

class Usuario {
    public nome;
    public idade;

    constructor(nome:string, idade:number){
        this.nome = nome;
        this.idade = idade;
    }
}

class Player extends Usuario {
    public jogo;

    constructor(nome:string, idade:number, jogo:string){
        super(nome, idade);

        this.jogo = jogo
    }

    dizerOJogoAtual(){
        return `Estou jogando no momento: ${this.jogo}`
    }

    static queHorasSao(){
        return Date();
    }
}

const jogador = new Player('Ana', 25, 'Red Dead Redemptiom 2')
jogador.dizerOJogoAtual()

//não criou um objeto
console.log(Player.queHorasSao())

//static - não precisa acessar a partir de um objeto, acessa diretamente da classe

//private, protected, public - forma como pode acessar um valor de uma classe
//public - acessível enquanto está configurando, dentro e fora da classe
//private - acessível apenas dentro da classe
//protected - acessível apenas dentro da classe e subclasses onde o campo foi criado

class Jogo{
    public nome;
    constructor(nome:string){
        this.nome = nome
    }

    dizerNome(){
        return `O nome do jogo é ${this.nome}`
    }
}

interface IJogoComDescricao{
    //nome:string
    descricao:string
    dizerNomeComDescricao():string
}

class JogoComDescricao extends Jogo implements IJogoComDescricao{
    public descricao;

    constructor(nome:string, descricao:string){
        super(nome)

        this.descricao = descricao
    }

    dizerNomeComDescricao(){
        return `O nome do jogo é ${this.nome}`
    }
}

const ghost = new Jogo('Ghost of Tsushima')

//interfaces - garantir campos/metodos das classes


//type assertions

type JogoAssertion = {
    nome:string
    descricao:string
}

let jogo = {} as JogoAssertion
//jogo.nome
//jogo.descricao