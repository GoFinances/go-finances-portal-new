import React from 'react';
import { UserProvider } from './user';


const AppProvider: React.FC<any> = ({ children } : any) => {
    return (
        <UserProvider>
            {children}
        </UserProvider>
    )
};

export default AppProvider;