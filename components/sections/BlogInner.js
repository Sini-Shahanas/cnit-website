import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BlogInner = ({ blogs }) => {
  return (
    <section className="news-section">
      <div className="auto-container">
        <div className="row">
          {blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <div key={blog.id} className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay={`${index * 300}ms`}>
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href={blog.slug}>
                        <Image 
                          src={`${process.env.NEXT_PUBLIC_API_URL.replace('/api', '')}${blog.image.url}`}
                          alt={blog.title || 'Blog Image'}
                          width={370}
                          height={334}
                        />
                      </Link>
                    </figure>
                    <span className="date">
                      <b>{new Date(blog.date).getDate()}</b> 
                      {new Date(blog.date).toLocaleString('en-US', { month: 'short' }).toUpperCase()}
                    </span>
                  </div>
                  <div className="content-box">
                    <ul className="post-info">
                      <li><i className="fa fa-user" /> by {blog.author}</li>
                      <li><i className="fa fa-tag" /> {blog.category}</li>
                    </ul>
                    <h4 className="title">
                      <Link href={blog.slug}>{blog.title}</Link>
                    </h4>
                  </div>
                  <div className="bottom-box">
                    <Link href={blog.readMoreLink} className="read-more">
                      Read More <i className="fa fa-long-arrow-alt-right" />
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No blogs available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogInner;

