import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Footer = () => {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    const fetchFooterData = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/footer?populate=*`);
      const data = await res.json();
      setFooterData(data.data.Footer.FooterData);
    };

    fetchFooterData();
  }, []);

  if (!footerData) {
    return <></>;
  }

  return (
    <>
      <footer className="main-footer">
        <div className="bg-image" style={{ backgroundImage: 'url(./images/background/background2.jpg)' }} />
        <div className="widgets-section">
          <div className="auto-container">
            <div className="row">
              {footerData.sections.map((section, index) => (
                <div key={index} className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="footer-widget">
                  {section.sectionName !== "About" &&
                    <h3 className="widget-title">{section.sectionName}</h3>}
                    {section.sectionName === 'About' && (
                      <div className="footer-widget asbout-widget">
                        <div className="logo">
                          <Link href="/">
                            <Image src={section.content.logo.url} alt={section.content.logo.alt} width={317} height={76} />
                          </Link>
                        </div>
                        <div className="text">{section.content.description}</div>
                        <ul className="social-icon-two">
                          {Array.isArray(section.content.socialLinks) && section.content.socialLinks.map((social, index) => (
                            <li key={social.id}>
                              <Link href={social.url}>
                                <i className={social.iconClass} />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {/* <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12"> */}
                    <div className="footer-widget">
                    {section.sectionName === 'Explore' && (
                      <ul className="user-links">
                        {section.menu.map((menuItem, index) => (
                          <li key={menuItem.id}>
                            <Link href={menuItem.url}>{menuItem.menuItem}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                    </div>
                    {/* </div> */}
                    <div className="footer-widget contact-widget">
                    {section.sectionName === 'Contact' && (
                      <div className="widget-content">
                        <div className="text">{section.details.address}</div>
                        <ul className="contact-info">
                          {section.details.contactMethods.map((method, index) => (
                            <li key={method.id}>
                              <i className={method.type === 'Email' ? 'fa fa-envelope' : 'fa fa-phone'} />
                              <Link href={method.url}>{method.value}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="inner-container">
              <div className="copyright-text">{footerData.footerBottom.content}</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
