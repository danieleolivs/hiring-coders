type User = {
    name:string;
    lastName:string;
    birthday:string;
    age?:number;
    // ? - propriedade não obrigatória
}

const daniele: User = {
    name:'Daniele',
    lastName:'Oliveira',
    birthday:'11/04/2002',
    age:20
}

//union types
// | - valor tem que ser de um tipo ou de outro, como o or

type LogLevel = 'info' | 'error' | 'debug';

function logMessage(message:string, level: LogLevel){
    console.log(`[${level}] - ${message}`)
}

logMessage('Uma mensagem info', 'info')


//intersection types: & - agrupa tipos diferentes

type About = {
    bio:string;
    interests:string[]
}

type Profile = User & About;
const userWithProfile: Profile = {
    name:'Daniele',
    lastName:'Oliveira',
    birthday: '11/04/2002',
    bio:'Olá, meu nome é Daniele',
    interests: ['gatos', 'música', 'filmes']
}


