import React from 'react';
import { Typography, useTheme } from '@mui/material';

const CustomTypography = ({ variant, children }) => {
  const muiTheme = useTheme();

  const getTypographyStyle = () => {
    if (variant === 'body1') {
      return {
        color: muiTheme.palette.text.primary,
        marginLeft: '1em',
      };
    }
    return {
      color: muiTheme.palette.text.primary,
    };
  };

  return (
    <Typography variant={variant} style={getTypographyStyle()}>
      {children}
    </Typography>
  );
};

export default CustomTypography;
