let estaAtivo : boolean;

estaAtivo = true;

function mapearStatusDeUsuario(status:boolean){
    if(status){
        return `Uusário está ativo`
    }else{
        return `Usuário NÃO está ativo`
    }
}

mapearStatusDeUsuario(true)