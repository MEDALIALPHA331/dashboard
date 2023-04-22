import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "800"],
  subsets: ["latin"],
});

export const DashboardContent = ({}: // setSidebarOpen,
{
  // setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return <div className="text-white">Bonjours</div>;
};
