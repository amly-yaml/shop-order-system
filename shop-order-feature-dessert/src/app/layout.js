'use client'; 

import './globals.css';
import Sidebar from './components/Sidebar';
import { Box } from '@mui/material';
import { usePathname } from 'next/navigation';



export default function RootLayout({ children }) {
  const pathname = usePathname();

  const shouldShowSidebar = () => {
    if (pathname === '/') {
      return false;
    }
    if (pathname === '/desserts') {
      return true;
    }
    return true;
  };

  return (
    <html lang="en">
      <body>
        <Box sx={{ display: 'flex' }}>
          {shouldShowSidebar() && <Sidebar />}
          <Box sx={{ flexGrow: 1, p: 3 }}>
            {children}
          </Box>
        </Box>
      </body>
    </html>
  );
}