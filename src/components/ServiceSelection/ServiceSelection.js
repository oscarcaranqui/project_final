import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import { DataContext } from '../../context/DataContext';
import { Button, Box, useTheme } from '@mui/material';
import './ServiceSelection.css';
import ServiceCheckbox from './ServiceCheckbox/ServiceCheckbox';

const ServiceSelection = () => {
  const { theme } = useContext(ThemeContext);
  const { setServices } = useContext(DataContext);
  const navigate = useNavigate();
  const muiTheme = useTheme();

  const serviceList = [
    { id: 1, name: 'oilChange', displayName: 'Cambio de aceite' },
    { id: 2, name: 'brakeChange', displayName: 'Cambio de frenos' },
    { id: 3, name: 'alignmentAndBalancing', displayName: 'Alineación y balanceo' },
    { id: 4, name: 'generalDiagnosis', displayName: 'Diagnóstico general' },
    { id: 5, name: 'electricalSystemCheck', displayName: 'Revisión del sistema eléctrico' },
    { id: 6, name: 'suspensionCheck', displayName: 'Revisión de la suspensión' },
  ];

  const initialServiceState = serviceList.map((service) => ({
    id: service.id,
    name: service.name,
    displayName: service.displayName,
    selected: false,
  }));

  const [services, setServices_init] = useState(initialServiceState);

  const handleServiceChange = (event) => {
    const { name, checked } = event.target;
    setServices_init((prevServices) =>
      prevServices.map((service) =>
        service.name === name ? { ...service, selected: checked } : service
      )
    );
  };

  const handleNext = () => {
    const selectedServices = services.filter((service) => service.selected);
    setServices(selectedServices);
    navigate('/work-order');
  };

  const isAnyServiceSelected = services.some((service) => service.selected);

  return (
    <Box className={`service-selection ${theme}`} style={{ marginLeft: '1em' }}>
      <h2 style={{ color: muiTheme.palette.text.primary}}>Menú de servicios</h2>
      <form style={{ marginTop: '1em', marginLeft: '1em' }}>
        {serviceList.map((service) => (
          <ServiceCheckbox
            key={service.id}
            name={service.name}
            checked={services.findIndex((s) => s.name === service.name && s.selected) !== -1}
            onChange={handleServiceChange}
          >
            {service.displayName}
          </ServiceCheckbox>
        ))}
        <Box className="button-container">
          <Button variant="contained" color="success" onClick={handleNext} disabled={!isAnyServiceSelected}>
            Siguiente
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ServiceSelection;
