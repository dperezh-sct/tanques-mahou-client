import React, { useState } from 'react';

export const UserContext = React.createContext(null);

export const UserProvider = ({ children }) => {
	const [ empresa, setEmpresa ] = useState([]);
	const [ state, setState ] = useState(false);
	const [ email, setEmail ] = useState('');
	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');
	const [ username, setUsername ] = useState('');

	return (
		<UserContext.Provider
			value={{
				empresa,
				setEmpresa,
				state,
				setState,
				email,
				setEmail,
				firstName,
				setFirstName,
				lastName,
				setLastName,
				username,
				setUsername
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
