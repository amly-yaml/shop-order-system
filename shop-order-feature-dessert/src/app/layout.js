'use client'; 

import './globals.css';
import Sidebar from './components/Sidebar';
import { Box } from '@mui/material';
import { usePathname } from 'next/navigation';
import StartOrder from './components/StartOrder';
import { Provider } from 'react-redux'; 
import store from '../../redux/store'; 

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const shouldShowSidebar = () => {
    if (pathname === '/' || pathname === '/eat-option') { 
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
      <Provider store={store}>
        {pathname === '/' ? (
          <StartOrder />
        ) : pathname === '/eat-option' ? ( 
          children
        ) : (
          <Box sx={{ display: 'flex' }}>
            {shouldShowSidebar() && <Sidebar />}
            <Box sx={{ flexGrow: 1, p: 3 }}>
              {children}
            </Box>
          </Box>
        )}
         </Provider>
      </body>
    </html>
  );
}