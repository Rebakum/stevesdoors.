"use client";

import { Building, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  {
    title: " Doors",
    icon: Building,
    url: "/doors",
    items: [{ title: "All Doors", url: "/dashboard/doors/all_doors" }],
  },
  {
    title: "Settings",
    icon: Settings,
    url: "/settings",
    items: [
      { title: "Admin Preferences", url: "/dashboard/settings/preferences" },
      { title: "Change Password", url: "/dashboard/settings/change-password" },
    ],
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  return (
    <aside className="w-64 min-h-screen bg-gray-800 text-white p-4 space-y-4">
      <h2 className="text-2xl font-bold mb-8">
        <Link href="/">Akaba Doors</Link>
      </h2>

      <nav className="flex flex-col space-y-2">
        {links.map((link) => {
          const isActive = pathname === link.url;

          return (
            <div key={link.title}>
              <button
                onClick={() => toggleMenu(link.title)}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-700 ${
                  isActive ? "bg-gray-700 font-semibold text-orange-400" : ""
                }`}
              >
                {link.icon && <link.icon className="w-5 h-5" />}
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
                        className={`block px-3 py-1 rounded text-sm hover:bg-gray-700 ${
                          isSubActive
                            ? "bg-gray-700 font-semibold text-orange-400"
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
    </aside>
  );
};

export default Sidebar;
