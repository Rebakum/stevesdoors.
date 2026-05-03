"use client";

import { useUser } from "@/context/UserContext";
import { logout } from "@/services/AuthService";
import { Building, LogOut, Settings, UserPen } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

type LinkItem = {
  title: string;
  icon: React.ElementType;
  url: string;
  items?: { title: string; url: string }[];
};

const links: LinkItem[] = [
  {
    title: "Profile",
    icon: UserPen,
    url: "/profile",
    items: [{ title: "Profile", url: "/profile" }],
  },
  {
    title: "Doors",
    icon: Building,
    url: "/doors",
    items: [{ title: "All Doors", url: "/doors/all_doors" }],
  },
  {
    title: "Settings",
    icon: Settings,
    url: "/settings",
    items: [
      { title: "Update Profile", url: "/settings/update-profile" },
      { title: "Change Password", url: "/settings/change-password" },
    ],
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [openMenus, setOpenMenus] = useState<string[]>([]);
  const { setIsLoading } = useUser();

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const handleLogout = async () => {
    await logout();
    setIsLoading(true);
    router.push("/");
  };

  return (
    <aside className="w-64 min-h-screen bg-gray-800 text-white p-4 space-y-4 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-8">
          <Link href="/">Akaba Doors</Link>
        </h2>

        <nav className="flex flex-col space-y-2">
          {links.map((link) => {
            const isActive =
              pathname === link.url ||
              link.items?.some((item) => pathname === item.url);

            return (
              <div key={link.title}>
                <button
                  onClick={() => toggleMenu(link.title)}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-700 transition cursor-pointer ${
                    isActive ? "bg-gray-700 text-orange-400 font-semibold" : ""
                  }`}
                >
                  <link.icon className="w-5 h-5" />
                  <span>{link.title}</span>
                </button>

                {link.items && openMenus.includes(link.title) && (
                  <div className="ml-6 mt-1 space-y-1">
                    {link.items.map((item) => {
                      const isSubActive = pathname === item.url;
                      return (
                        <Link
                          key={item.title}
                          href={item.url}
                          className={`block px-3 py-1 rounded text-sm hover:bg-gray-700 transition ${
                            isSubActive
                              ? "bg-gray-700 text-orange-400 font-semibold"
                              : ""
                          }`}
                        >
                          {item.title}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 px-3 py-2 rounded hover:bg-red-600 cursor-pointer  text-white transition"
      >
        <LogOut className="w-5 h-5" />
        <span className="flex items-center justify-center gap-2">
          Logout <LogOut />
        </span>
      </button>
    </aside>
  );
};

export default Sidebar;
