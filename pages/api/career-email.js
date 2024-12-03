// import nodemailer from 'nodemailer';
// require('dotenv').config({ path: '.env.local' });

// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//         const { name, email, mobile, resume, address, comments } = req.body;

//         const transporter = nodemailer.createTransport({
//             host: process.env.SMTP_HOST,
//             // port: process.env.SMTP_PORT,
//             port: parseInt(process.env.SMTP_PORT, 10),
//             secure: false, // true for 465 port (SSL), false for other ports (TLS)
//             auth: {
//                 user: process.env.SMTP_USER,
//                 pass: process.env.SMTP_PASS,
//             },
//         });

//         const mailOptions = {
//             from: email,
//             to: 'info@cnitsolution.com',
//             subject: subject,
//             // text: `Name: ${full_name}\nEmail: ${email}\nMessage: ${message}\nPhone: ${phone}`,
//             // html: `<p><strong>Name:</strong> ${full_name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
//             html: `
//                 <h3>New Career Application</h3>
//                 <p><strong>Name:</strong> ${name}</p>
//                 <p><strong>Email:</strong> ${email}</p>
//                 <p><strong>Mobile:</strong> ${mobile}</p>
//                 <p><strong>Address:</strong> ${address}</p>
//                 <p><strong>Comments:</strong> ${comments}</p>
//                 `,
//         };

//         try {
//             await transporter.sendMail(mailOptions);
//             res.status(200).json({ message: 'Email sent successfully!' });
//         } catch (error) {
//             console.error('Error sending email:', error);
//             res.status(500).json({ error: 'Failed to send email' });
//         }
//     } else {
//         res.status(405).json({ error: 'Method Not Allowed' });
//     }
// }


// import nodemailer from 'nodemailer';
// require('dotenv').config({ path: '.env.local' });

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { name, email, mobile, resume, address, comments } = req.body;

//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: parseInt(process.env.SMTP_PORT, 10),
//       secure: false, // true for 465 port (SSL), false for other ports (TLS)
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });

//     const mailOptions = {
//       from: email,
//       to: 'info@cnitsolution.com',
//       subject: 'New Job Application',
//       text: `
//         Name: ${name}
//         Email: ${email}
//         Mobile: ${mobile}
//         Address: ${address}
//         Comments: ${comments}
//       `,
//       html: `
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Mobile:</strong> ${mobile}</p>
//         <p><strong>Address:</strong> ${address}</p>
//         <p><strong>Comments:</strong> ${comments}</p>
//       `,
//     };

//     try {
//       // Send email
//       await transporter.sendMail(mailOptions);
//       res.status(200).json({ message: 'Email sent successfully!' });
//     } catch (error) {
//       console.error('Error sending email:', error);
//       res.status(500).json({ error: 'Failed to send email' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method Not Allowed' });
//   }
// }

// import nodemailer from 'nodemailer';
// import formidable from 'formidable';
// import fs from 'fs';
// require('dotenv').config({ path: '.env.local' });

// export const config = {
//   api: {
//     bodyParser: false, // Disable Next.js built-in body parser
//   },
// };

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const form = new formidable.IncomingForm();
    
//     form.parse(req, async (err, fields, files) => {
//       if (err) {
//         console.error('Formidable error:', err);
//         return res.status(500).json({ error: 'Error processing form' });
//       }

//       const { name, email, mobile, address, comments } = fields;
//       const resume = files.resume ? files.resume[0] : null; // Handle the uploaded file

//       // Create transporter
//       const transporter = nodemailer.createTransport({
//         host: process.env.SMTP_HOST,
//         port: parseInt(process.env.SMTP_PORT, 10),
//         secure: false, // true for 465 port (SSL), false for other ports (TLS)
//         auth: {
//           user: process.env.SMTP_USER,
//           pass: process.env.SMTP_PASS,
//         },
//       });

//       const mailOptions = {
//         from: email,
//         to: 'info@cnitsolution.com',
//         subject: 'New Job Application',
//         text: `
//           Name: ${name}
//           Email: ${email}
//           Mobile: ${mobile}
//           Address: ${address}
//           Comments: ${comments}
//         `,
//         html: `
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Mobile:</strong> ${mobile}</p>
//           <p><strong>Address:</strong> ${address}</p>
//           <p><strong>Comments:</strong> ${comments}</p>
//         `,
//         attachments: resume
//           ? [
//               {
//                 filename: resume.originalFilename,
//                 path: resume.filepath,
//                 contentType: resume.mimetype,
//               }
//             ]
//           : [],
//       };

//       try {
//         await transporter.sendMail(mailOptions);
//         res.status(200).json({ message: 'Email sent successfully!' });
//       } catch (error) {
//         console.error('Error sending email:', error);
//         res.status(500).json({ error: `Failed to send email: ${error.message}` });
//       }
//     });
//   } else {
//     res.status(405).json({ error: 'Method Not Allowed' });
//   }
// }

import nodemailer from 'nodemailer';
import { Formidable } from 'formidable';
import fs from 'fs';
require('dotenv').config({ path: '.env.local' });

export const config = {
  api: {
    bodyParser: false, // Disable Next.js built-in body parser
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = new Formidable({ multiples: true, keepExtensions: true }); // Ensure files are processed correctly

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error('Formidable error:', err);
        return res.status(500).json({ error: 'Error processing form' });
      }

      const { name, email, mobile, address, comments } = fields;
      const resume = files.resume; // Access uploaded resume file

      // Validate mandatory fields
      if (!name || !email || !mobile || !address || !comments) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      // Create nodemailer transporter
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT, 10),
        secure: false, // true for port 465 (SSL), false for other ports (TLS)
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: email,
        to: 'info@cnitsolution.com',
        subject: 'New Job Application',
        text: `
          Name: ${name}
          Email: ${email}
          Mobile: ${mobile}
          Address: ${address}
          Comments: ${comments}
        `,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mobile:</strong> ${mobile}</p>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>Comments:</strong> ${comments}</p>
        `,
        attachments: resume
          ? [
              {
                filename: resume.originalFilename,
                path: resume.filepath,
                contentType: resume.mimetype,
              },
            ]
          : [],
      };

      try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!' });
      } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: `Failed to send email: ${error.message}` });
      }
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

