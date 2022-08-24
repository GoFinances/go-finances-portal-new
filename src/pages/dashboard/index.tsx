import { NextPage } from 'next';
import Header from '../../components/molecules/header';

import Dashboard from '../../components/pages/dashboard';
import AuthenticatedLayout from '../../components/template/autenticated';

const DashboardPage: NextPage = () => {
  return (
    <AuthenticatedLayout>
        <Header />
        <Dashboard />
    </AuthenticatedLayout>
  )
}


export default DashboardPage;