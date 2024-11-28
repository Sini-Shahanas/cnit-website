import { useState, useEffect } from "react";
import Link from "next/link";

const MobileMenu = () => {

  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });
  const [hoverKey, setHoverKey] = useState("");
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/header-navbar?populate=*`);
        const data = await response.json();
        setMenuData(data.data.HeaderData.menu);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchMenuData();
  }, []);

  const handleClick = (key) => {
    setIsActive({
      status: isActive.key === key ? false : true,
      key: isActive.key === key ? "" : key,
    });
  };

  const handleSubClick = (key) => {
    setHoverKey(key);
  };

  if (!menuData) return <></>;

  return (
    <>
      <ul className="navigation clearfix">
        {menuData.map((menuItem) => (
          <li
            key={menuItem.id}
            className={menuItem.menuItem === "Services" ? "dropdown" : ""}
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
              <ul
                className={isActive.key === menuItem.id ? "d-block" : "d-none"}
              >
                {menuItem.subMenu.map((subItem) => (
                  <li
                    key={subItem.id}
                    className="dropdown"
                    onMouseEnter={() => handleSubClick(subItem.subServices)}
                    onMouseLeave={() => setHoverKey("")}
                  >
                    <Link
                      href={
                        subItem.subServices === "Internet of Things (IoT)"
                          ? "/internet-of-things"
                          : subItem.subServices === "Service & Sustainability"
                          ? "/service-details"
                          : `/service-${subItem.subServices
                              .toLowerCase()
                              .replace(/\s+/g, "-")
                              .replace(/[()]/g, "")}`
                      }
                    >
                      {subItem.subServices}
                    </Link>
                    {subItem.subChild && (
                      <ul
                        className={
                          hoverKey === subItem.subServices
                            ? "d-block"
                            : "d-none"
                        }
                      >
                        {subItem.subChild.map((child) => {
                          const customRoutes = {
                            "Endpoint Detection & Response": "edr",
                            "Network Detection & Response": "ndr",
                            "Security Orchestration, Automation & Response": "soar",
                            "Security Information & Event Management": "siem",
                          };

                          const route = customRoutes[child.childList]
                            ? `/service-${customRoutes[child.childList]}`
                            : `/service-${child.childList
                                .toLowerCase()
                                .replace(/\s+/g, "-")
                                .replace(/[&]/g, "and")}`;

                          return (
                            <li key={child.id}>
                              <Link href={route}>{child.childList}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}

            {menuItem.menuItem === "Services" && (
              <div
                className={
                  isActive.key === menuItem.id
                    ? "dropdown-btn active"
                    : "dropdown-btn"
                }
                // onClick={() => handleClick(menuItem.id)}
              >
                <i className="fa fa-angle-down"></i>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MobileMenu;
