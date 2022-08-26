import React from 'react';
import { AuthenticationProvider } from './authentication';
import { CategoryProvider } from './category';
import { UserProvider } from './user';


const AppProvider: React.FC<any> = ({ children } : any) => {
    return (
        <AuthenticationProvider>
            <UserProvider>
                <CategoryProvider>
                    {children}
                </CategoryProvider>
            </UserProvider>
        </AuthenticationProvider>
    )
};

export default AppProvider;