import { Theme } from '@mui/material';

export const root = (theme: Theme) => ({
  height: '80vh',
  width: '40vw',
  zIndex: 4000,
  display: 'block',
  position: 'fixed',
  backgroundColor: theme.palette.background.paper,
  left: '50%',
  transform: 'translateX(-50%)',
  borderRadius: '15px',
});
