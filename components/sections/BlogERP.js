import Link from 'next/link';
import React from 'react';

const BlogOne = ({ alternate }) => {
    return (
        <>
            <section className="blog-details">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7">
                            <div className="blog-details__left">
                                <div className="blog-details__img">
                                    <img src="/images/resource/news-details.jpg" title='Oitech' />
                                    <div className="blog-details__date">
                                        <span className="day">28</span>
                                        <span className="month">Aug</span>
                                    </div>
                                </div>
                                <div className="blog-details__content">
                                    <ul className="list-unstyled blog-details__meta">
                                        <li><Link href="/news-details"><i className="fas fa-user-circle"></i> Admin</Link> </li>
                                        {/* <li><Link href="/news-details"><i className="fas fa-comments"></i> 02
                                            Comments</Link>
                                        </li> */}
                                    </ul>
                                    <h3 className="blog-details__title font-weight-600">We’re Leader In Tecnology Market</h3>
                                    <p className="blog-details__text-2">Mauris non dignissim purus, ac commodo diam. Donec sit
                                        amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus
                                        nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus
                                        interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet
                                        pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.
                                    </p>
                                    <p className="blog-details__text-2">Mauris non dignissim purus, ac commodo diam. Donec sit
                                        amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus
                                        nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus
                                        interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet
                                        pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.
                                    </p>
                                    <p className="blog-details__text-2">Mauris non dignissim purus, ac commodo diam. Donec sit
                                        amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus
                                        nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus
                                        interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet
                                        pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.
                                    </p>
                                </div>
                                <div className="blog-details__bottom">
                                    <div className="blog-details__social-list"> <Link href="/news-details"><i className="fab fa-twitter"></i></Link> <Link href="/news-details"><i className="fab fa-facebook"></i></Link> <Link href="/news-details"><i className="fab fa-pinterest-p"></i></Link> <Link href="/news-details"><i className="fab fa-instagram"></i></Link> </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="sidebar">
                                <div className="sidebar__single sidebar__post">
                                    <h3 className="sidebar__title">Latest Posts</h3>
                                    <ul className="sidebar__post-list list-unstyled">
                                        <li>
                                            <div className="sidebar__post-image"> <img src="/images/resource/blog1.jpg" title='Oitech' /> </div>
                                            <div className="sidebar__post-content">
                                                <h3> <span className="sidebar__post-content-meta"><i
                                                    className="fas fa-user-circle"></i>Admin</span> <Link href="/news-details">Top crypto exchange influencers</Link>
                                                </h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sidebar__post-image"> <img src="/images/resource/blog2.png" title='Oitech' /> </div>
                                            <div className="sidebar__post-content">
                                                <h3> <span className="sidebar__post-content-meta"><i
                                                    className="fas fa-user-circle"></i>Admin</span> <Link href="/blog-erp">Necessity may give us best virtual court</Link> </h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sidebar__post-image"> <img src="/images/resource/blog3.jpg" title='Oitech' /> </div>
                                            <div className="sidebar__post-content">
                                                <h3> <span className="sidebar__post-content-meta"><i
                                                    className="fas fa-user-circle"></i>Admin</span> <Link href="/news-details">You should know about business plan</Link> </h3>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogOne;