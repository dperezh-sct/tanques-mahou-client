import {
    getAccesoManguera,
    getModeloTanque,
    getAcabadoTanque,
    getModeloEnfriadorTanques,
    getTipoSistemaTanques,
    getEstructuraTanque,
    getModeloCompresor,
    getCategoriasDespacho,
    getCodigoProductoDespacho,
    getModeloColumnaDespacho,
    getAcabadoDespacho,
    getModeloEnfriadorDespacho,
    getEmpresas
} from '../../services/api';

const GetAccesoManguera = () => {
    getAccesoManguera()
        .then(response => {
            return response.json();
        })
        .then(json => {
            localStorage.setItem("accesoManguera", json);
            console.log("accesoManguera obtenido");
            console.log(json);
        })
        .catch(error => {
            console.log("Error(accesoManguera):" + error.message);
        });
};
const GetModeloTanque = () => {
    getModeloTanque()
        .then(response => {
            return response.json();
        })
        .then(json => {
            localStorage.setItem("modeloTanque", json);
            console.log("modeloTanque obtenido");
            console.log(json);
        })
        .catch(error => {
            console.log("Error(modeloTanque):" + error.message);
        });
};
const GetAcabadoTanque = () => {
    getAcabadoTanque()
        .then(response => {
            return response.json();
        })
        .then(json => {
            localStorage.setItem("acabadoTanque", json);
            console.log("acabadoTanque obtenido");
            console.log(json);
        })
        .catch(error => {
            console.log("Error(acabadoTanque):" + error.message);
        });
};
const GetModeloEnfriadorTanques = () => {
    getModeloEnfriadorTanques()
        .then(response => {
            return response.json();
        })
        .then(json => {
            localStorage.setItem("modeloEnfriadorTanques", json);
            console.log("modeloEnfriadorTanques obtenido");
            console.log(json);
        })
        .catch(error => {
            console.log("Error(modeloEnfriadorTanques):" + error.message);
        });
};
const GetTipoSistemaTanques = () => {
    getTipoSistemaTanques()
        .then(response => {
            return response.json();
        })
        .then(json => {
            localStorage.setItem("tipoSistemaTanques", json);
            console.log("tipoSistemaTanques obtenido");
            console.log(json);
        })
        .catch(error => {
            console.log("Error(tipoSistemaTanques):" + error.message);
        });
};
const GetEstructuraTanque = () => {
    getEstructuraTanque()
        .then(response => {
            return response.json();
        })
        .then(json => {
            localStorage.setItem("estructuraTanque", json);
            console.log("estructuraTanque obtenido");
            console.log(json);
        })
        .catch(error => {
            console.log("Error(estructuraTanque):" + error.message);
        });
};
const GetModeloCompresor = () => {
    getModeloCompresor()
        .then(response => {
            return response.json();
        })
        .then(json => {
            localStorage.setItem("modeloCompresor", json);
            console.log("modeloCompresor obtenido");
            console.log(json);
        })
        .catch(error => {
            console.log("Error(modeloCompresor):" + error.message);
        });
};
const GetCategoriasDespacho = () => {
    getCategoriasDespacho()
        .then(response => {
            return response.json();
        })
        .then(json => {
            localStorage.setItem("categoriasDespacho", json['results']);
            console.log("categoriasDespacho obtenido");
            console.log(json);
        })
        .catch(error => {
            console.log("Error(categoriasDespacho):" + error.message);
        });
};
const GetCodigoProductoDespacho = () => {
    getCodigoProductoDespacho()
        .then(response => {
            return response.json();
        })
        .then(json => {
            localStorage.setItem("codigoProductoDespacho", json['results']);
            console.log("codigoProductoDespacho obtenido");
            console.log(json);
        })
        .catch(error => {
            console.log("Error(codigoProductoDespacho):" + error.message);
        });
};
const GetModeloColumnaDespacho = () => {
    getModeloColumnaDespacho()
        .then(response => {
            return response.json();
        })
        .then(json => {
            localStorage.setItem("modeloColumnaDespacho", json['results']);
            console.log("modeloColumnaDespacho obtenido");
            console.log(json);
        })
        .catch(error => {
            console.log("Error(modeloColumnaDespacho):" + error.message);
        });
};
const GetAcabadoDespacho = () => {
    getAcabadoDespacho()
        .then(response => {
            return response.json();
        })
        .then(json => {
            localStorage.setItem("acabadoDespacho", json['results']);
            console.log("acabadoDespacho obtenido");
            console.log(json);
        })
        .catch(error => {
            console.log("Error(acabadoDespacho):" + error.message);
        });
};
const GetModeloEnfriadorDespacho = () => {
    getModeloEnfriadorDespacho()
        .then(response => {
            return response.json();
        })
        .then(json => {
            localStorage.setItem("modeloEnfriadorDespacho", json);
            console.log("modeloEnfriadorDespacho obtenido");
            console.log(json);
        })
        .catch(error => {
            console.log("Error(modeloEnfriadorDespacho):" + error.message);
        });
};
const GetEmpresas = () => {
    getEmpresas()
        .then(response => {
            return response.json();
        })
        .then(json => {
            localStorage.setItem("empresas", json);
            console.log("empresas obtenido");
            console.log(json);
        })
        .catch(error => {
            console.log("Error(empresas):" + error.message);
        });
};
export function refresh() {
    GetAccesoManguera();
    GetModeloTanque();
    GetAcabadoTanque();
    GetModeloEnfriadorTanques();
    GetTipoSistemaTanques();
    GetEstructuraTanque();
    GetModeloCompresor();
    GetCategoriasDespacho();
    GetCodigoProductoDespacho();
    GetModeloColumnaDespacho();
    GetAcabadoDespacho();
    GetModeloEnfriadorDespacho();
    GetEmpresas();
};
