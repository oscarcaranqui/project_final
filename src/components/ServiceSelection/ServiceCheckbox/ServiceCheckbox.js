import React from 'react';
import { FormControlLabel, Checkbox, useTheme } from '@mui/material';

const ServiceCheckbox = ({ name, checked, onChange, children }) => {
  const muiTheme = useTheme();

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={onChange}
          name={name}
          color="success"
        />
      }
      label={children}
      style={{ color: muiTheme.palette.text.primary }}
    />
  );
};

export default ServiceCheckbox;
