import CategoryTable from "./CategoryTable";
import ServiceProviderTable from "./ServiceProviderTable";
import UserTable from "./UserTable";

const DashboardAdmin = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <UserTable />
      <CategoryTable />
      <ServiceProviderTable />
    </div>
  );
};

export default DashboardAdmin;
