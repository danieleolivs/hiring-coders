"use strict";
var Permissoes;
(function (Permissoes) {
    Permissoes[Permissoes["admin"] = 0] = "admin";
    Permissoes[Permissoes["editor"] = 1] = "editor";
    Permissoes[Permissoes["comum"] = 2] = "comum";
})(Permissoes || (Permissoes = {}));
const usuario = {
    nivel: Permissoes.admin
};
