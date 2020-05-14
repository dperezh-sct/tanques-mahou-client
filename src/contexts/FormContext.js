import React, { useState } from 'react';

export const FormContext = React.createContext(null);
export const FormProvider = ({ children }) => {
	/**LOCAL*/
	const [ nombreEstab, setNombreEstab ] = useState('');
	const [ fotoLocal, setFotoLocal ] = useState(null);
	const [ nombreEmpresa, setNombreEmpresa ] = useState('');
	const [ codigoCliente, setCodigoCliente ] = useState('');
	const [ nifCif, setNifCif ] = useState('');
	const [ empresaSTP, setEmpresaSTP ] = useState('');
	const [ direccion, setDireccion ] = useState('');
	const [ fechaVisita, setFechaVisita ] = useState(new Date('2014-08-18T21:11:54'));
	const [ fechaAlta, setFechaAlta ] = useState(new Date('2014-08-18T21:11:54'));
	const [ ciudad, setCiudad ] = useState('');
	const [ cp, setCP ] = useState('');
	const [ provincia, setProvincia ] = useState('');
	const [ telefono, setTelefono ] = useState('');
	const [ correo, setCorreo ] = useState('');

	/**ESTACIONAMIENTO*/
	const [ zonaCargaDescarga, setZonaCargaDescarga ] = useState('');
	const [ permisoCargaDescarga, setPermisoCargaDescarga ] = useState('');
	const [ photoCargaDescarga, setPhotoCargaDescarga ] = useState(null);
	const [ obs1Estacionamiento, setObs1Estacionamiento ] = useState('');
	const [ distancia, setDistancia ] = useState(0);
	const [ accesoManguera, setAccesoManguera ] = useState('');
	const [ photoAccesoManguera, setPhotoAccesoManguera ] = useState(null);
	const [ obs2Estacionamiento, setObs2Estacionamiento ] = useState('');
	const [ desnivelCamionTanque, setDesnivelCamionTanque ] = useState(0);
	const [ desnivelTanqueCamion, setDesnivelTanqueCamion ] = useState(0);
	/**TANQUES*/
	const [ tanques, setTanques ] = useState([]);
	/**Tanque = {numeroChasis:'',
     * modulo:'',
     * acabado:'',
     * chapa:'',
     * foto:null,
     * observaciones:''
     * } */
	const [ enfriadores, setEnfriadores ] = useState([]);
	/**Enfriador = {id:'',
     * modulo:'',
     * foto:null,
     * observaciones:''
     * } */
	const [ situacion, setSituacion ] = useState('');
	const [ fotoUbicacionTanques, setFotoUbicacionTanques ] = useState(null);
	const [ sistema, setSistema ] = useState('');
	const [ tipoSistemaTanques, setTipoSistemaTanques ] = useState('');
	const [ alarma, setAlarma ] = useState('');
	const [ temperatura, setTemperatura ] = useState('');
	const [ fotoSituacion, setFotoSituacion ] = useState(null);
	const [ estructuraTanque, setEstructuraTanque ] = useState('');
	const [ certificadoTanques, setCertificadoTanques ] = useState('');
	const [ observacionesTanques, setObservacionesTanques ] = useState('');
	const [ compresores, setCompresores ] = useState([]);
	/**Compresor = {modelo:'',
     * fotoUbicacion:null,
     * fotoRegistro:null,
     * noSerie:'',
     * fotoSerie:null,
     * noCalderin:'',
     * fotoCalderin:null,
     * certificado:'',
     * fotoPared:'null',
     * fotoNaumatico:'null',
     * observaciones:''
     * } */
	/**DESPACHO*/
	const [ modulos, setModulos ] = useState([
		{
			id: 0,
			productos: [],
			enfriadores: [],
			fotoEnfriadorAdentro: null,
			fotoFrontalExterior: null,
			fotoLaterialIzq: null,
			fotoLateralDer: null
		}
	]);
	/**modulo={
     * productos:[],
     * enfriadores:[],
     * fotoEnfriadorAdentro: null,
     * fotoFrontalExterior:null,
     * fotoLaterialIzq: null,
     * fotoLateralDer: null
     * }
     * producto={
     * categoria:'',
     * codigoProducto:'',
     * modelocolumna:'',
     * acabado:'',
     * observaciones:''
     * }
     * enfriador={
     * id='',
     * modelo:'',
     * observaciones:''
     * }*/

	return (
		<FormContext.Provider
			value={{
				/**LOCAL*/
				nombreEstab,
				setNombreEstab,
				fotoLocal,
				setFotoLocal,
				nombreEmpresa,
				setNombreEmpresa,
				codigoCliente,
				setCodigoCliente,
				nifCif,
				setNifCif,
				empresaSTP,
				setEmpresaSTP,
				direccion,
				setDireccion,
				fechaVisita,
				setFechaVisita,
				fechaAlta,
				setFechaAlta,
				ciudad,
				setCiudad,
				cp,
				setCP,
				provincia,
				setProvincia,
				telefono,
				setTelefono,
				correo,
				setCorreo,
				/**ESTACIONAMIENTO*/
				zonaCargaDescarga,
				setZonaCargaDescarga,
				permisoCargaDescarga,
				setPermisoCargaDescarga,
				photoCargaDescarga,
				setPhotoCargaDescarga,
				accesoManguera,
				setAccesoManguera,
				obs1Estacionamiento,
				setObs1Estacionamiento,
				distancia,
				setDistancia,
				photoAccesoManguera,
				setPhotoAccesoManguera,
				obs2Estacionamiento,
				setObs2Estacionamiento,
				desnivelCamionTanque,
				setDesnivelCamionTanque,
				desnivelTanqueCamion,
				setDesnivelTanqueCamion,
				/**TANQUES*/
				tanques,
				setTanques,
				enfriadores,
				setEnfriadores,
				situacion,
				setSituacion,
				fotoUbicacionTanques,
				setFotoUbicacionTanques,
				sistema,
				setSistema,
				tipoSistemaTanques,
				setTipoSistemaTanques,
				alarma,
				setAlarma,
				temperatura,
				setTemperatura,
				fotoSituacion,
				setFotoSituacion,
				estructuraTanque,
				setEstructuraTanque,
				certificadoTanques,
				setCertificadoTanques,
				observacionesTanques,
				setObservacionesTanques,
				compresores,
				setCompresores,
				/**DESPACHO */
				modulos,
				setModulos
			}}
		>
			{children}
		</FormContext.Provider>
	);
};
