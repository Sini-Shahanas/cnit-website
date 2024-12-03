import Link from "next/link";
import React, { useState, useEffect } from "react";

const NavLinks = ({ extraClassName }) => {
  const [navbarData, setNavbarData] = useState(null);
  const [dropdowns, setDropdowns] = useState({});

  const toggleDropdown = (id) => {
    setDropdowns((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    const fetchNavbar = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/header-navbar?populate=*`
        );
        const data = await res.json();
        setNavbarData(data?.data?.HeaderData?.menu);
      } catch (error) {
        console.error("Error fetching navbar data:", error);
      }
    };

    fetchNavbar();
  }, []);

  if (!navbarData) return <></>;

  return (
    <ul className={`navigation ${extraClassName}`}>
      {navbarData.map((menuItem) => (
        <li
          key={menuItem.id}
          className={menuItem.subMenu.length > 0 ? "dropdown" : ""}
        >
          <Link
            href={
              menuItem.menuItem === "Home"
                ? "/"
                : menuItem.menuItem === "Blog"
                ? "/news-grid"
                : `/page-${menuItem.menuItem
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`
            }
          >
            {menuItem.menuItem}
          </Link>

          {menuItem.subMenu.length > 0 && (
            <ul>
              {menuItem.subMenu.map((subMenuItem) => (
                <li
                  key={subMenuItem.id}
                  className="dropdown"
                  onMouseEnter={() => toggleDropdown(subMenuItem.id)}
                  onMouseLeave={() => toggleDropdown(subMenuItem.id)}
                >
                  <Link
                    href={
                      subMenuItem.subServices === "Internet of Things (IoT)"
                        ? "/internet-of-things"
                        : subMenuItem.subServices === "Service & Sustainability"
                        ? "/service-details"
                        : subMenuItem.subServices === "IT Infrastructure Solutions"
                        ? "/service-infrastructure-solution"
                        : `/service-${subMenuItem.subServices
                            .toLowerCase()
                            .replace(/\s+/g, "-")
                            .replace(/[()]/g, "")}`
                    }
                  >
                    {subMenuItem.subServices}
                  </Link>

                  {subMenuItem.subChild && (
                    <ul className="sub-dropdown">
                      {subMenuItem.subChild.map((childItem) => {
                        const customRoutes = {
                          "Endpoint Detection & Response": "edr",
                          "Network Detection & Response": "ndr",
                          "Security Orchestration, Automation & Response": "soar",
                          "Security Information & Event Management": "siem",
                          "Innova":"innovo",
                          "Micro Infra-Cn²S":"cloud-native-network-solution",
                        };

                        const route = customRoutes[childItem.childList]
                          ? `/service-${customRoutes[childItem.childList]}`
                          : `/service-${childItem.childList
                              .toLowerCase()
                              .replace(/\s+/g, "-")
                              .replace(/[&]/g, "and")}`;

                        return (
                          <li key={childItem.id}>
                            <Link href={route}>{childItem.childList}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
