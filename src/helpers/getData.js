import {
    accesoManguera,
    modeloTanque,
    acabadoTanque,
    modeloEnfriadorTanques,
    tipoSistemaTanques,
    modeloCompresor,
    categoriasDespacho,
    codigoProductoDespacho,
    modeloColumnaDespacho,
    acabadoDespacho,
    modeloEnfriadorDespacho
} from '../services/api';

const getAccesoManguera = () => {
    accesoManguera()
        .then(response => {
            return response.json();
        })
        .then(json => {
            localStorage.setItem("accesoManguera", json);
            console.log("accesoManguera obtenido");
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
        })
        .catch(error => {
            console.log("Error(tipoSistemaTanques):" + error.message);
        });
};
const getEstructuraTanque = () => {
    console.log('hacefalta getEstructuraTanque');
};
const getModeloCompresor = () => {
    modeloCompresor()
        .then(response => {
            return response.json();
        })
        .then(json => {
            localStorage.setItem("modeloCompresor", json);
            console.log("modeloCompresor obtenido");
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
            localStorage.setItem("categoriasDespacho", json);
            console.log("categoriasDespacho obtenido");
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
            localStorage.setItem("codigoProductoDespacho", json);
            console.log("codigoProductoDespacho obtenido");
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
            localStorage.setItem("modeloColumnaDespacho", json);
            console.log("modeloColumnaDespacho obtenido");
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
            localStorage.setItem("acabadoDespacho", json);
            console.log("acabadoDespacho obtenido");
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
