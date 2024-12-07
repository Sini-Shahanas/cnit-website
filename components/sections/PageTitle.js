// import Link from 'next/link';
// import React from 'react';


// const PageTitle = (props) => {
//   return (
//             <section className="page-title" style={{ backgroundImage: 'url(images/resource/contactBanner1.png)' }}>
//                 <div className="auto-container">
//                     <div className="title-outer">
//                         <h1 className="title">{props.pageName}</h1>
//                         <ul className="page-breadcrumb">
//                             <li><Link href="/">Home</Link></li>
//                             {/* <li><Link href="/">Pages</Link></li> */}
//                             <li>{props.pageName}</li>
//                         </ul>
//                     </div>
//                 </div>
//             </section>
//   );
// };

// export default PageTitle;

import Link from 'next/link';
import React from 'react';

const PageTitle = ({ pageName, service }) => {
  const title = service?.title || pageName;  // Fallback to pageName if service.title is not available

  return (
    <section className="page-title" style={{ backgroundImage: 'url(images/resource/contactBanner1.png)' }}>
      <div className="auto-container">
        <div className="title-outer">
          <h1 className="title">{title}</h1>  {/* Use dynamic title */}
          <ul className="page-breadcrumb">
            <li><Link href="/">Home</Link></li>
            <li>{title}</li>  {/* Use dynamic title */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
