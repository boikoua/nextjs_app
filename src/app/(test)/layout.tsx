import type { PropsWithChildren } from 'react';

const DashboardLayout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <div>
      <h1>Dashboard</h1>
      {children}
    </div>
  );
};

export default DashboardLayout;
