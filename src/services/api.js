/**
 * FUNCIONES PARA LA SESION
 * **/
export function logIn(username, password) {
    return fetch(process.env.API_URL + `/auth/login/`, {
        method: 'POST',
        body: JSON.stringify({
            username,
            password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
export function logOut() {
    return fetch(process.env.API_URL + `/auth/logout/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'token ' + localStorage.getItem('key')
        }
    })
}
export let validateAuth = new Promise((resolve) => {
    if (localStorage.getItem('key'))
        resolve(localStorage.getItem('key'))
})
/**
 * FUNCIONES PARA DESPLEGABLES
 * **/
export function getAccesoManguera() {
    return fetch(process.env.API_URL + `/api/v1/estacionamientos/get_accesos_manguera/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'token ' + localStorage.getItem('key')
        }
    })
    /**response: [
    		"puerta principal",
    		"puerta en almacén",
    		"registro",
    		"otro"]*/
}
export function getModeloTanque() {
    return fetch(process.env.API_URL + `/api/v1/tanques/get_modelos/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'token ' + localStorage.getItem('key')
        }
    })
    /**response: [
    "HORIZONTAL 250Lx630",
    "HORIZONTAL 500Lx830",
    "HORIZONTAL 500Lx700",
    "HORIZONTAL 500Lx700",
    "VERTICAL 500Lx830",
    "VERTICAL 500Lx860"]*/
}
export function getAcabadoTanque() {
    return fetch(process.env.API_URL + `/api/v1/tanques/get_acabados/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'token ' + localStorage.getItem('key')
        }
    })
    /**response: [
    "INOX",
    "COBRE REAL",
    "COBRE PINTADO",
    "GRIS",
    "OTRO"]*/
}
export function getModeloEnfriadorTanques() {
    return fetch(process.env.API_URL + `/api/v1/tanques/enfriadores_tanques/get_modelos_enfriadores/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'token ' + localStorage.getItem('key')
        }
    })
    /**response: [
    "V100",
    "V200",
    "V400",
    "H100",
    "H200"]*/
}
export function getTipoSistemaTanques() {
    return fetch(process.env.API_URL + `/api/v1/tanques/get_tipos/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'token ' + localStorage.getItem('key')
        }
    })
    /**response: [
    "Neumático",
    "Electrónico"]*/
}
export function getEstructuraTanque() {
    return fetch(process.env.API_URL + `/api/v1/tanques/get_estructuras/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'token ' + localStorage.getItem('key')
        }
    })
    /**response: [
    "Especial",
    "Estándar horizontal",
    "Estándar vertical",
    "Estándar \"L\"",
    "Estándar pirámide",
    "Estándar contrapeado",
    "Tanques verticales en suelo",
    "Tanques verticales sobre estructura",
    "Estándar avanzado",
    "OTRO"]*/
}
export function getModeloCompresor() {
    return fetch(process.env.API_URL + `/api/v1/tanques/get_modelos_compresores/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'token ' + localStorage.getItem('key')
        }
    })
    /**response: [
    "20 L",
    "50 L",
    "120 L",
    "272 L",
    "OTRO"]*/
}
export function getCategoriasDespacho() {
    return fetch(process.env.API_URL + `/api/v1/despachos/categorias/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'token ' + localStorage.getItem('key')
        }
    })
    /**response: [
        {
            "id": 20,
            "nombre": "PRODUCTOS TANQUE"
        },
        ...
    ]*/
}
export function getCodigoProductoDespacho() {
    return fetch(process.env.API_URL + `/api/v1/despachos/productos_base/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'token ' + localStorage.getItem('key')
        }
    })
    /**response: [
        {
            "id": 174,
            "categoria_instalacion_read": "PRODUCTOS TANQUE",
            "codigo": "13",
            "nombre": "13 TANQUE SAN MIGUEL",
            "categoria_instalacion": 20
        },
        ...
    ]*/
}
export function getModeloColumnaDespacho() {
    return fetch(process.env.API_URL + `/api/v1/despachos/productos_despacho/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'token ' + localStorage.getItem('key')
        }
    })
    /**response: [
        {
            "id": 1268,
            "columnas": [
                {
                    "id": 82,
                    "nombre":"Flauta INOX"
                },
                {
                    "id": 81,
                    "nombre": "Princesa INOX"
                },
                {
                    "id": 80,
                   "nombre":"Exclusiva de marca"
                }
            ],
            "producto_base_read":"R1 BUDWEISER",
            "observaciones": null,
            "producto_base": 88
        },
        ...
    ]*/
}
export function getAcabadoDespacho() {
    return fetch(process.env.API_URL + `/api/v1/despachos/acabados/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'token ' + localStorage.getItem('key')
        }
    })
    /**response: [
        {
            "id": 16,
            "nombre": "ROJO"
        },
        ...
    ]*/
}
export function getModeloEnfriadorDespacho() {
    return fetch(process.env.API_URL + `/api/v1/despachos/enfriadores_despacho/get_modelos_enfriadores_despacho/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'token ' + localStorage.getItem('key')
        }
    })
    /**response: [
    "V50",
    "V75",
    "V100",
    "V200",
    "V400",
    "H100",
    "H200"]*/
}
/**LISTADDOS DE AUTOCOMPLETADO */
export function getEmpresas() {
    return fetch(process.env.API_URL + `/api/v1/locales/empresas_stp/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'token ' + localStorage.getItem('key')
        }
    })
    /**response: [
       {
            "id": 96,
            "nombre": "NAVAR5STPTECNIC, S.L.",
            "bo": 262
        },
    ]*/
}