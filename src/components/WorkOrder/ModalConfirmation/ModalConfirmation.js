import React from 'react';
import { Box, Button } from '@mui/material';
import CustomTypography from '../CustomTypography/CustomTypography';

const ModalConfirmation = ({ handleConfirm, handleClose }) => {
  return (
    <Box
      className="modal-content"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Box>
        <CustomTypography variant="h4">Da click en tu requerimiento</CustomTypography>
        <Box display="flex" justifyContent="space-between" marginTop="1em">
          <Button variant="contained" color="success" onClick={handleConfirm}>
            Confirmar
          </Button>
          <Box marginLeft="1em">
            <Button variant="contained" color="error" onClick={handleClose}>
              Cancelar
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ModalConfirmation;
