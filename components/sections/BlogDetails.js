import Link from 'next/link';
import Head from 'next/head';

const BlogDetails = ({ blogData }) => {
    if (!blogData) return <></>;

    const { blogDetails, Posts, SocialLinks } = blogData;

    const title = blogDetails[2]?.title || "Default Blog Title";
    const description = blogDetails[2]?.description || "Default description of the blog.";
    const image = blogDetails[2]?.image?.url ? `${process.env.NEXT_PUBLIC_API_URL.replace('/api', '')}${blogDetails[2].image.url}` : "https://example.com/default-image.jpg";
    // const url = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${blogData.id}`; // Assuming you have a dynamic URL for each blog

    return (
        <>
        <Head>
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                {/* <meta property="og:url" content={url} /> */}
                <meta property="og:type" content="article" />
                {/* Optional: Add Twitter card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />
            </Head>

            <section className="blog-details">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7">
                            <div className="blog-details__left">
                                <div className="blog-details__img">
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_API_URL.replace('/api', '')}${blogDetails[2].image.url}`}
                                        alt={blogDetails[2].image.name}
                                    />
                                    <div className="blog-details__date">
                                        <span className="day">{new Date(blogDetails[2].date).getDate()}</span>
                                        <span className="month">{new Date(blogDetails[2].date).toLocaleString('default', { month: 'short' })}</span>
                                    </div>
                                </div>
                                <div className="blog-details__content">
                                    <ul className="list-unstyled blog-details__meta">
                                        <li>
                                            <Link href="">
                                                <i className="fas fa-user-circle"></i> {blogDetails[2].postedBy}
                                            </Link>
                                        </li>
                                    </ul>
                                    <h3 className="blog-details__title font-weight-600">{blogDetails[2].title}</h3>
                                    <p className="blog-details__text-2">
                                        {blogDetails[2].description}
                                    </p>
                                    <h4>{blogDetails[2].subtitle1}</h4>
                                    <p className="blog-details__text-2">
                                        {blogDetails[2].description1[0].children[0].text}
                                    </p>
                                    <h4>{blogDetails[2].subtitle2}</h4>
                                    <p className="blog-details__text-2">
                                        {blogDetails[2].description2[0].children[0].text}
                                    </p>
                                    <h4>{blogDetails[2].subtitle3}</h4>
                                    <p className="blog-details__text-2">
                                        {blogDetails[2].description3[0].children[0].text}
                                    </p>
                                    <h4>{blogDetails[2].subtitle4}</h4>
                                    <p className="blog-details__text-2">
                                        {blogDetails[2].description4[0].children[0].text}
                                    </p>
                                </div>
                                <div className="blog-details__bottom">
                                    <div className="blog-details__social-list">
                                        {SocialLinks.map((link) => (
                                            <Link href={link.social_link} key={link.id}>
                                                <i className={link.IconClass}></i>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-5">
                          <div className="sidebar">
                            <div className="sidebar__single sidebar__post">
                              <h3 className="sidebar__title">{blogData.latestPost}</h3>
                              <ul className="sidebar__post-list list-unstyled">
                                {Posts.map((post) => (
                                  <li key={post.id}>
                                    <div className="sidebar__post-image">
                                      <img
                                        src={`${process.env.NEXT_PUBLIC_API_URL.replace('/api', '')}${post.postImage.url}`}
                                        alt={post.postTitle}
                                        className="img-fluid"
                                      />
                                    </div>
                                    <div className="sidebar__post-content">
                                      <h3>
                                        <span className="sidebar__post-content-meta">
                                          <i className="fas fa-user-circle"></i> {post.category}
                                        </span>
                                        <Link href={post.link}>{post.postTitle}</Link>
                                      </h3>
                                    </div>
                                  </li>
                                ))}
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

export default BlogDetails;
