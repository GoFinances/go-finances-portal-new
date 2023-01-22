import { NextPage } from "next";

import Dashboard from "../../components/pages/dashboard";
import AuthenticatedLayout from "../../components/template/autenticated";
import { TransactionProvider } from "../../context/transaction";
import { CategoryProvider } from "../../context/category";

const DashboardPage: NextPage = () => {
  return (
    <CategoryProvider>
      <TransactionProvider>
        <AuthenticatedLayout>
          <Dashboard />
        </AuthenticatedLayout>
      </TransactionProvider>
    </CategoryProvider>
  );
};

export default DashboardPage;
