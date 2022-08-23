import { NextPage } from 'next';

import SignUp from '../../components/pages/sign-up';
import AuthLayout from '../../components/template/auth-layout';

const SignUpPage: NextPage = () => {
  return (
    <AuthLayout>
        <SignUp />
    </AuthLayout>
  )
}


export default SignUpPage;