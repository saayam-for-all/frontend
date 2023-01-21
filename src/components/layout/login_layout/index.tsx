import { Topbar } from '@components';
import { Box } from '@mui/material';

const LoginLayout = (props: any) => {
  const { children } = props;

  return (
    <>
      <Topbar />
      <Box sx={{ marginTop: '7rem' }}>{children}</Box>
    </>
  );
};

export default LoginLayout;
