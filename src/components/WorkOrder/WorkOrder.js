import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { DataContext } from '../../context/DataContext';
import { Box, Button, Modal } from '@mui/material';
import CustomTypography from './CustomTypography/CustomTypography';
import ModalConfirmation from './ModalConfirmation/ModalConfirmation';
import './WorkOrder.css';

const WorkOrder = () => {
  const { theme } = useContext(ThemeContext);
  const { customerData = {}, vehicleData = {}, services = [] } = useContext(DataContext);

  const { customerName, email, contactNumber, taxId, idType } = customerData;
  const { brand, model, plate, fuelLevel, description } = vehicleData;

  const [open, setOpen] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleConfirm = () => {
    setConfirmed(true);
    setOpen(false);
  };

  const estimatedDeliveryDate = new Date();
  estimatedDeliveryDate.setDate(estimatedDeliveryDate.getDate() + 3); // add 3 days for delivery



  return (
    <Box className={`work-order ${theme}`} style={{ marginLeft: '1em' }}>
      <CustomTypography variant="h4">Orden de trabajo</CustomTypography>

      <CustomTypography variant="h5">Datos del cliente:</CustomTypography>
      <CustomTypography variant="body1">Nombre: {customerName}</CustomTypography>
      <CustomTypography variant="body1">Correo: {email}</CustomTypography>
      <CustomTypography variant="body1">Telefono: {contactNumber}</CustomTypography>
      <CustomTypography variant="body1">{idType}: {taxId}</CustomTypography>

      <CustomTypography variant="h5">Datos del vehículo:</CustomTypography>
      <CustomTypography variant="body1">Marca: {brand}</CustomTypography>
      <CustomTypography variant="body1">Modelo: {model}</CustomTypography>
      <CustomTypography variant="body1">Placa: {plate}</CustomTypography>
      <CustomTypography variant="body1">Nivel del tanque de gasolina: {fuelLevel}</CustomTypography>
      <CustomTypography variant="body1">Descripcion del estado: {description}</CustomTypography>

      <CustomTypography variant="h5">Servicios seleccionados:</CustomTypography>
      <ul>
      {services.length > 0 &&
        services.map((service) => (
          <li
            key={service.id}
            style={{
              color: theme === 'dark' ? '#fff' : '#333',
            }}
          >
            <CustomTypography variant="body1">{service.displayName}</CustomTypography>
          </li>
        ))}

      </ul>
      <CustomTypography variant="h5">Fecha y hora estimada de entrega:</CustomTypography>
      {confirmed && (
        <CustomTypography variant="h3">{estimatedDeliveryDate.toLocaleString()}</CustomTypography>
      )}
      {!confirmed && (
        <Button variant="contained" color="success" onClick={handleOpen}>
          Aceptar servicio
        </Button>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <ModalConfirmation handleConfirm={handleConfirm} handleClose={handleClose} />
      </Modal>
    </Box>
  );
};

export default WorkOrder;
