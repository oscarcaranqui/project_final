import React, { useContext, useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { ThemeContext } from './context/ThemeContext';
import Header from './components/Configuration/Header/Header';
import CustomerData from './components/CustomerData/CustomerData';
import VehicleData from './components/VehicleData/VehicleData';
import ServiceSelection from './components/ServiceSelection/ServiceSelection';
import WorkOrder from './components/WorkOrder/WorkOrder';
import { DataContext } from './context/DataContext';

const App = () => {
  const { theme } = useContext(ThemeContext);

  const [customerData, setCustomerData] = useState({});
  const [vehicleData, setVehicleData] = useState({});
  const [services, setServices] = useState({});

  const themeConfig = createTheme({
    palette: {
      mode: theme,
      ...(theme === 'dark' && {
        background: {
          default: '#333',
        },
      }),
    },
  });

  return (
    <ThemeProvider theme={themeConfig}>
      <DataContext.Provider value={{ customerData, setCustomerData, vehicleData, setVehicleData, services, setServices }}>
      <Box style={{ backgroundColor: themeConfig.palette.background.default, minHeight: '100vh' }}>
      <Router>
          <Header />
          <Routes>
            <Route path="/" element={<CustomerData />} />
            <Route path="/vehicle-data" element={<VehicleData />} />
            <Route path="/service-selection" element={<ServiceSelection />} />
            <Route path="/work-order" element={<WorkOrder />} />
          </Routes>
        </Router>
      </Box>
      </DataContext.Provider>
    </ThemeProvider>
    
    
  
    
  );
};

export default App;
