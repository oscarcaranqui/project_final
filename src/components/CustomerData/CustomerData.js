import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import { DataContext } from '../../context/DataContext';
import { TextField, Button, Box, FormControl, InputLabel, Select, MenuItem, useTheme } from '@mui/material';
import './CustomerData.css';

const CustomerData = () => {
  const { theme } = useContext(ThemeContext);
  const { setCustomerData } = useContext(DataContext);
  const navigate  = useNavigate();
  const muiTheme = useTheme();

  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [taxId, setTaxId] = useState('');
  const [idType, setIdType] = useState('');

  const isFormComplete = customerName && email && contactNumber && taxId && idType;

  const handleNext = () => {
    if (isFormComplete) {
      setCustomerData({
        customerName,
        email,
        contactNumber,
        taxId,
        idType,
      });
      navigate('/vehicle-data');
    }
  };

  return (
    <Box className={`customer-data ${theme}`}>
      <h2 style={{ color: muiTheme.palette.text.primary, marginLeft: '1em' }}>Información del cliente</h2>
      <form style={{ marginTop: '1em', marginLeft: '1em' }}>
        <TextField required label="Nombres Completos" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
        <TextField required label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField required label="Número de contacto" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} inputProps={{ pattern: "[0-9]*" }} />
        <TextField required label="Identificación fiscal" value={taxId} onChange={(e) => setTaxId(e.target.value)} />
        <FormControl required style={{ minWidth: '200px' }}>
          <InputLabel>Tipo de identificación</InputLabel>
          <Select displayEmpty value={idType} onChange={(e) => setIdType(e.target.value)}>
            <MenuItem value="Cedula">Cédula</MenuItem>
            <MenuItem value="RUC">RUC</MenuItem>
            <MenuItem value="Pasaporte">Pasaporte</MenuItem>
          </Select>
        </FormControl>
        <Box className="button-container">
          <Button variant="contained" color="success" onClick={handleNext} disabled={!isFormComplete}>
            Siguiente
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default CustomerData;
