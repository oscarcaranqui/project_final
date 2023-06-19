import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { DataContext } from '../../context/DataContext';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, useTheme } from '@mui/material';
import './VehicleData.css';

const VehicleData = () => {
  const { theme } = useContext(ThemeContext);
  const { setVehicleData } = useContext(DataContext);
  const muiTheme = useTheme();
  const navigate = useNavigate();

  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [plate, setPlate] = useState('');
  const [fuelLevel, setFuelLevel] = useState('');
  const [description, setDescription] = useState('');

  const isFormComplete = brand && model && plate && fuelLevel && description;

  const handleNext = () => {
    setVehicleData({
        brand,
        model,
        plate,
        fuelLevel,
        description,
      });
    navigate('/service-selection');
  };

  return (
    <Box className={`vehicle-data ${theme}`}>
        <h2 style={{ color: muiTheme.palette.text.primary, marginLeft: '1em' }}>Datos del vehiculo</h2>
        <form style={{ marginTop: '1em', marginLeft: '1em' }}>
            <TextField required label="Marca" value={brand} onChange={(e) => setBrand(e.target.value)} />
            <TextField required label="Modelo" value={model} onChange={(e) => setModel(e.target.value)} />
            <TextField required label="Placa" value={plate} onChange={(e) => setPlate(e.target.value)} />
            <TextField required label="Nivel del tanque de gasolina" value={fuelLevel} onChange={(e) => setFuelLevel(e.target.value)} />
            <TextField required label="Descripción del estado exterior" value={description} onChange={(e) => setDescription(e.target.value)} />
            <Box className="button-container">
            <Button variant="contained" color="success" disabled={!isFormComplete} onClick={handleNext}>
                Siguiente
            </Button>
            </Box>
        </form>
    </Box>
  );
};

export default VehicleData;
