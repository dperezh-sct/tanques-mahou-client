import React, { useState } from 'react'

export const FormContext = React.createContext(null);

export const FormProvider = ({ children }) => {

    const [currentPhoto, setCurrentPhoto] = useState(File)


    return (
        <FormContext.Provider value={{ currentPhoto, setCurrentPhoto }}>
            {children}
        </FormContext.Provider>
    );

};
