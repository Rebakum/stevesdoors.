import Sidebar from "@/Components/Dashboard/Dashboard/Sidebar";
import Topbar from "@/Components/Dashboard/Dashboard/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-4 bg-gray-50 dark:bg-gray-900">{children}</main>
      </div>
    </div>
  );
}
