import { NextPage } from 'next';

import SignIn from '../../components/pages/sign-in';
import AuthLayout from '../../components/template/auth-layout';

const SignInPage: NextPage = () => {
  return (
    <AuthLayout>
        <SignIn />
    </AuthLayout>
  )
}


export default SignInPage;