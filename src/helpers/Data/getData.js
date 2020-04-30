import {
    accesoManguera,
    modeloTanque,
    acabadoTanque,
    modeloEnfriadorTanques,
    tipoSistemaTanques,
    estructuraTanque,
    modeloCompresor,
    categoriasDespacho,
    codigoProductoDespacho,
    modeloColumnaDespacho,
    acabadoDespacho,
    modeloEnfriadorDespacho
} from '../../services/api';

const getAccesoManguera = () => {
    accesoManguera()
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
const getModeloTanque = () => {
    modeloTanque()
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
const getAcabadoTanque = () => {
    acabadoTanque()
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
const getModeloEnfriadorTanques = () => {
    modeloEnfriadorTanques()
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
const getTipoSistemaTanques = () => {
    tipoSistemaTanques()
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
const getEstructuraTanque = () => {
    estructuraTanque()
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
const getModeloCompresor = () => {
    modeloCompresor()
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
const getCategoriasDespacho = () => {
    categoriasDespacho()
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
const getCodigoProductoDespacho = () => {
    codigoProductoDespacho()
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
const getModeloColumnaDespacho = () => {
    modeloColumnaDespacho()
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
const getAcabadoDespacho = () => {
    acabadoDespacho()
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
const getModeloEnfriadorDespacho = () => {
    modeloEnfriadorDespacho()
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
export function refresh() {
    getAccesoManguera();
    getModeloTanque();
    getAcabadoTanque();
    getModeloEnfriadorTanques();
    getTipoSistemaTanques();
    getEstructuraTanque();
    getModeloCompresor();
    getCategoriasDespacho();
    getCodigoProductoDespacho();
    getModeloColumnaDespacho();
    getAcabadoDespacho();
    getModeloEnfriadorDespacho();
};
