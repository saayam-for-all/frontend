import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { heroStyles } from '@styles';
import Image from 'next/image';
const HeroSection = () => {
  return (
    <>
      <Grid spacing={3} container sx={{ height: '70vh' }}>
        <Grid item md={6} sm={12}>
          <Stack
            sx={{ marginTop: '5rem' }}
            direction={'column'}
            alignItems="center"
          >
            <Typography color={'secondary'} variant="h2" fontWeight={700}>
              SAAYAM
            </Typography>
            <Typography variant="h6" fontWeight={700}>
              Always there
            </Typography>
            <Box
              sx={{
                padding: '8rem',
                paddingTop: '1rem',
                paddingBottom: '2rem',
              }}
            >
              <Typography textAlign="center" variant="body1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </Typography>
            </Box>
            <Button variant="contained">Donate Now</Button>
          </Stack>
        </Grid>
        <Grid item md={6} sm={12}>
          {/* <Box sx={heroStyles.heroImage}></Box> */}
          <Image
            alt=""
            style={{ borderRadius: '15px' }}
            src={'/images/hero.png'}
            height={580}
            width={850}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default HeroSection;
