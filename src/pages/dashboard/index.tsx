import { NextPage } from 'next';
import Header from '../../components/molecules/header';

import Dashboard from '../../components/pages/dashboard';
import AuthenticatedLayout from '../../components/template/autenticated';
import { TransactionProvider } from '../../context/transaction';

const DashboardPage: NextPage = () => {
  return (
    <TransactionProvider>
      <AuthenticatedLayout>
          <Header />
          <Dashboard />
      </AuthenticatedLayout>
    </TransactionProvider>
  )
}


export default DashboardPage;