// import { NextApiRequest, NextApiResponse } from 'next';
// import fs from 'fs';
// import path from 'path';


// export default function handler(req:NextApiRequest, res:NextApiResponse) {
//   const pdfPath = path.join(process.cwd(), 'public', 'images', 'education', 'cv.pdf');

//   if (fs.existsSync(pdfPath)) {
//     res.setHeader('Content-Type', 'application/pdf');
//     res.send(fs.readFileSync(pdfPath));
//   } else {
//     res.status(404).json({ message: 'File not found' });
//   }
// }


import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const pdfPath = path.join(process.cwd(), 'public', 'images', 'education', 'cv.pdf');

  console.log('PDF path:', pdfPath); // Log the computed path
  console.log('Checking file existence:', fs.existsSync(pdfPath)); // Check if file exists

  if (fs.existsSync(pdfPath)) {
    res.setHeader('Content-Type', 'application/pdf');
    res.send(fs.readFileSync(pdfPath));
  } else {
    console.error('File not found');
    res.status(404).json({ message: 'File not found' });
  }
}
