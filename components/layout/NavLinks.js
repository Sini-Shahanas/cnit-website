import Link from 'next/link';
import React from 'react';

const NavLinks = ({ extraClassName }) => {
    return (
        <ul className="navigation ${extraClassName}">
            <li className="current dropdown"><Link href="/">Home</Link>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/index-2">Home Layout 2</Link></li>
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
            </li>
            <li><Link href="/page-about">About</Link></li>
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
            <li className="dropdown"><Link href="/page-services">Services</Link>
                <ul>
                    <li><Link href="/page-services">Services Grid</Link></li>
                    <li><Link href="/page-service-details">Service Details</Link></li>
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