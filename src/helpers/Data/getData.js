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
            localStorage.setItem("accesoManguera", JSON.stringify(json));
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
            localStorage.setItem("modeloTanque", JSON.stringify(json));
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
            localStorage.setItem("acabadoTanque", JSON.stringify(json));
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
            localStorage.setItem("modeloEnfriadorTanques", JSON.stringify(json));
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
            localStorage.setItem("tipoSistemaTanques", JSON.stringify(json));
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
            localStorage.setItem("estructuraTanque", JSON.stringify(json));
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
            localStorage.setItem("modeloCompresor", JSON.stringify(json));
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
            localStorage.setItem("categoriasDespacho", JSON.stringify(json['results']));
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
            localStorage.setItem("codigoProductoDespacho", JSON.stringify(json['results']));
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
            localStorage.setItem("modeloColumnaDespacho", JSON.stringify(json['results']));
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
            localStorage.setItem("acabadoDespacho", JSON.stringify(json['results']));
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
            localStorage.setItem("modeloEnfriadorDespacho", JSON.stringify(json));
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
            localStorage.setItem("empresa", JSON.stringify(json['results']));
            console.log("empresa obtenido");
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
    localStorage.setItem("dataState", true);
};
