import Link from 'next/link';
import React, {useState} from 'react';

const NavLinks = ({ extraClassName }) => {
    // const [isSoftwareDropdownOpen, setIsSoftwareDropdownOpen] = useState(false);
    const [dropdowns, setDropdowns] = useState({
        softwareSolution: false,
        itInfrastructure: false,
        cyberSecurity: false,
        iot: false,
        serviceMaintenance: false,
    });

    const toggleDropdown = (dropdown) => {
        setDropdowns((prev) => ({
            ...prev,
            [dropdown]: !prev[dropdown],
        }));
    };

    return (
        <ul className="navigation ${extraClassName}">
            {/* <li className="current dropdown"><Link href="/">Home</Link>
                <ul> */}
                    <li><Link href="/">Home</Link></li>
                    {/* <li><Link href="/index-2">Home Layout 2</Link></li>
                    <li><Link href="/index-3">Home Layout 3</Link></li>
                    <li><Link href="/index-4">Home Layout 4</Link></li>
                    <li><Link href="/index-5">Home Layout 5</Link></li>
                    <li className="dropdown"><Link href="/">Header Styles</Link>
                    <ul>
                        <li><Link href="/">Header Style 1</Link></li>
                        <li><Link href="/index-2">Header Style 2</Link></li>
                        <li><Link href="/index-3">Header Style 3</Link></li>
                        <li><Link href="/index-4">Header Style 4</Link></li>
                        <li><Link href="/index-5">Header Style 5</Link></li>
                    </ul>
                    </li>
                </ul>
            </li> */}
            <li><Link href="/page-about">About</Link></li>            
            <li className="dropdown"><Link href="/page-services">Services</Link>
                <ul>
                    <li 
                        className="dropdown" 
                        onMouseEnter={() => toggleDropdown('softwareSolution')}
                        onMouseLeave={() => toggleDropdown('softwareSolution')}
                    >
                        <Link href="/page-service-details">Software Solution</Link>
                        {dropdowns.softwareSolution && (
                            <ul className="sub-dropdown">
                                <li><Link href="/page-sub-service-details">ERP</Link></li>
                                <li><Link href="/page-sub-service-details">CRM</Link></li>
                                <li><Link href="/page-sub-service-details">HRMS</Link></li>
                            </ul>
                        )}
                    </li>
                    <li 
                        className="dropdown"
                        onMouseEnter={() => toggleDropdown('itInfrastructure')}
                        onMouseLeave={() => toggleDropdown('itInfrastructure')}
                    >
                        <Link href="/page-service-details">IT Infrastructure Solution</Link>
                        {dropdowns.itInfrastructure && (
                            <ul className="sub-dropdown">
                                <li><Link href="/page-sub-service-details">NFVI</Link></li>
                                <li><Link href="/page-sub-service-details">Cloud Native Network Solution</Link></li>
                                <li><Link href="/page-sub-service-details">Network Monitoring Tool</Link></li>
                            </ul>
                        )}
                    </li>
                    <li
                        className="dropdown"
                        onMouseEnter={()=> toggleDropdown('cyberSecurity')}
                        onMouseLeave={()=> toggleDropdown('cyberSecurity')}
                    >
                    <Link href="/page-service-details">Cyber Security</Link>
                    {dropdowns.cyberSecurity && (
                            <ul className='sub-dropdown'>
                                <li><Link href="/page-sub-service-details">EDR</Link></li>
                                <li><Link href="/page-sub-service-details">NDR</Link></li>
                                <li><Link href="/page-sub-service-details">Full Stack Solution</Link></li>
                            </ul>
                        )}
                    </li>
                    <li 
                        className="dropdown"
                        onMouseEnter={() => toggleDropdown('iot')}
                        onMouseLeave={() => toggleDropdown('iot')}
                    >
                        <Link href="/page-service-details">Internet of Things(IOT)</Link>
                        {dropdowns.iot && (
                            <ul className='sub-dropdown'>
                                <li><Link href="/page-sub-service-details">Innovo</Link></li>
                            </ul>
                        )}
                    </li>
                    <li 
                        className="dropdown"
                        onMouseEnter={() => toggleDropdown('serviceMaintenance')}
                        onMouseLeave={() => toggleDropdown('serviceMaintenance')}
                    >
                        <Link href="/page-service-details">Service & Maintenance</Link>
                        {dropdowns.serviceMaintenance && (
                            <ul className='sub-dropdown'>
                                <li><Link href="/page-sub-service-details">Chip Level Service</Link></li>
                                <li><Link href="/page-sub-service-details">E-waste Management</Link></li>
                            </ul>
                        )}
                    </li>
                </ul>
            </li>
            <li className="dropdown"><Link href="/page-about">Pages</Link>
                <ul>
                    <li className="dropdown"><Link href="/page-projects">Projects</Link>
                        <ul>
                            <li><Link href="/page-projects">Projects Grid</Link></li>
                            <li><Link href="/page-project-details">Project Details</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown"><Link href="/page-team">Team</Link>
                        <ul>
                            <li><Link href="/page-team">Team Grid</Link></li>
                            <li><Link href="/page-team-details">Team Details</Link></li>
                        </ul>
                    </li>
                    <li><Link href="/page-testimonial">Testimonial</Link></li>
                    <li><Link href="/page-pricing">Pricing</Link></li>
                    <li><Link href="/page-faq">FAQ</Link></li>
                    <li><Link href="/page-404">Page 404</Link></li>
                </ul>
            </li>
            <li className="dropdown"><Link href="/news-grid">News</Link>
                <ul>
                    <li><Link href="/news-grid">News Grid</Link></li>
                    <li><Link href="/news-details">News Details</Link></li>
                </ul>
            </li>
            <li><Link href="/page-contact">Contact</Link></li>
        </ul>
    );
};

export default NavLinks;