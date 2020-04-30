import React, { useState } from 'react'

export const FormContext = React.createContext(null);

export const FormProvider = ({ children }) => {

    const [currentPhoto, setCurrentPhoto] = useState(File)
    const [accesoManguera, setAccesoManguera] = useState([]);
    const [modeloTanque, setModeloTanque] = useState([]);
    const [acabadoTanque, setAcabadoTanque] = useState([]);
    const [modeloEnfriadorTanques, setModeloEnfriadorTanques] = useState([]);
    const [tipoSistemaTanques, setTipoSistemaTanques] = useState([]);
    const [estructuraTanque, setEstructuraTanque] = useState([]);
    const [modeloCompresor, setModeloCompresor] = useState([]);
    const [categoriasDespacho, setCategoriasDespacho] = useState([]);
    const [codigoProductoDespacho, setCodigoProductoDespacho] = useState([]);
    const [modeloColumnaDespacho, setModeloColumnaDespacho] = useState([]);
    const [acabadoDespacho, setAcabadoDespacho] = useState([]);
    const [modeloEnfriadorDespacho, setModeloEnfriadorDespacho] = useState([]);
    const [empresas, setEmpresas] = useState([]);


    return (
        <FormContext.Provider value={{
            currentPhoto, setCurrentPhoto, accesoManguera, setAccesoManguera,
            modeloTanque, setModeloTanque, acabadoTanque, setAcabadoTanque, modeloEnfriadorTanques,
            setModeloEnfriadorTanques, tipoSistemaTanques, setTipoSistemaTanques, estructuraTanque,
            setEstructuraTanque, modeloCompresor, setModeloCompresor, categoriasDespacho, setCategoriasDespacho,
            codigoProductoDespacho, setCodigoProductoDespacho, modeloColumnaDespacho, setModeloColumnaDespacho,
            acabadoDespacho, setAcabadoDespacho, modeloEnfriadorDespacho, setModeloEnfriadorDespacho,
            empresas, setEmpresas
        }}>
            {children}
        </FormContext.Provider>
    );

};

