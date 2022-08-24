import React from 'react';
import { AuthenticationProvider } from './authentication';
import { UserProvider } from './user';


const AppProvider: React.FC<any> = ({ children } : any) => {
    return (
        <AuthenticationProvider>
            <UserProvider>
                {children}
            </UserProvider>
        </AuthenticationProvider>
    )
};

export default AppProvider;