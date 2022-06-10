"use strict";
let estaAtivo;
estaAtivo = true;
function mapearStatusDeUsuario(status) {
    if (status) {
        return `Uusário está ativo`;
    }
    else {
        return `Usuário NÃO está ativo`;
    }
}
mapearStatusDeUsuario(true);
