const cleanAccesoManguera = () => { localStorage.setItem("accesoManguera", []); }
const cleanModeloTanque = () => { localStorage.setItem("modeloTanque", []); }
const cleanAcabadoTanque = () => { localStorage.setItem("acabadoTanque", []); }
const cleanModeloEnfriadorTanques = () => { localStorage.setItem("modeloEnfriadorTanques", []); }
const cleanTipoSistemaTanques = () => { localStorage.setItem("tipoSistemaTanques", []); }
const cleanEstructuraTanque = () => { localStorage.setItem("estructuraTanque", []); }
const cleanModeloCompresor = () => { localStorage.setItem("modeloCompresor", []); }
const cleanCategoriasDespacho = () => { localStorage.setItem("categoriasDespacho", []); }
const cleanCodigoProductoDespacho = () => { localStorage.setItem("codigoProductoDespacho", []); }
const cleanModeloColumnaDespacho = () => { localStorage.setItem("modeloColumnaDespacho", []); }
const cleanAcabadoDespacho = () => { localStorage.setItem("acabadoDespacho", []); }
const cleanModeloEnfriadorDespacho = () => { localStorage.setItem("modeloEnfriadorDespacho", []); }

export function clean() {
    cleanAccesoManguera();
    cleanModeloTanque();
    cleanAcabadoTanque();
    cleanModeloEnfriadorTanques();
    cleanTipoSistemaTanques();
    cleanEstructuraTanque();
    cleanModeloCompresor();
    cleanCategoriasDespacho();
    cleanCodigoProductoDespacho();
    cleanModeloColumnaDespacho();
    cleanAcabadoDespacho();
    cleanModeloEnfriadorDespacho();
};