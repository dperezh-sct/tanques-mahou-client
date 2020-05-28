const emptyAccesoManguera = () => {
    if (localStorage.getItem("accesoManguera").length == 0)
        return true
    else return false
}
const emptyModeloTanque = () => {
    if (localStorage.getItem("modeloTanque").length == 0)
        return true
    else return false
}
const emptyAcabadoTanque = () => {
    if (localStorage.getItem("acabadoTanque").length == 0)
        return true
    else return false
}
const emptyModeloEnfriadorTanques = () => {
    if (localStorage.getItem("modeloEnfriadorTanques").length == 0)
        return true
    else return false
}
const emptyTipoSistemaTanques = () => {
    if (localStorage.getItem("tipoSistemaTanques").length == 0)
        return true
    else return false
}
const emptyEstructuraTanque = () => {
    if (localStorage.getItem("estructuraTanque").length == 0)
        return true
    else return false
}
const emptyModeloCompresor = () => {
    if (localStorage.getItem("modeloCompresor").length == 0)
        return true
    else return false
}
const emptyCategoriasDespacho = () => {
    if (localStorage.getItem("categoriasDespacho").length == 0)
        return true
    else return false
}
const emptyCodigoProductoDespacho = () => {
    if (localStorage.getItem("codigoProductoDespacho").length == 0)
        return true
    else return false
}
const emptyModeloColumnaDespacho = () => {
    if (localStorage.getItem("modeloColumnaDespacho").length == 0)
        return true
    else return false
}
const emptyAcabadoDespacho = () => {
    if (localStorage.getItem("acabadoDespacho").length == 0)
        return true
    else return false
}
const emptyModeloEnfriadorDespacho = () => {
    if (localStorage.getItem("modeloEnfriadorDespacho").length == 0)
        return true
    else return false
}

export function isEmpty() {
    if (emptyAccesoManguera &&
        emptyModeloTanque &&
        emptyAcabadoTanque &&
        emptyModeloEnfriadorTanques &&
        emptyTipoSistemaTanques &&
        emptyEstructuraTanque &&
        emptyModeloCompresor &&
        emptyCategoriasDespacho &&
        emptyCodigoProductoDespacho &&
        emptyModeloColumnaDespacho &&
        emptyAcabadoDespacho &&
        emptyModeloEnfriadorDespacho) {
        return true
    } else {
        false
    }
};