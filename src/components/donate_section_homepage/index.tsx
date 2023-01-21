import { Box, Button, Grid, Stack, Theme, Typography } from '@mui/material';
import { donateSectionStyle } from '@styles';
import { ArrowForward } from '@mui/icons-material';
import Image from 'next/image';

const DonateSectionHomepage = () => {
  return (
    <Box sx={donateSectionStyle.donateSectionRoot}>
      <Grid
        pt={8}
        pb={8}
        pr={5}
        spacing={3}
        direction="row"
        justifyContent={'center'}
        container
      >
        <Grid item sm={12} md={6}>
          <Image
            alt=""
            style={{
              borderRadius: '15px',
              margin: 'auto',
              display: 'block',
            }}
            src={'/images/poverty.jpg'}
            height={580}
            width={850}
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <Stack direction="column" spacing={3}>
            <Typography
              sx={(theme: Theme) => ({
                color: theme.palette.common.white,
                fontWeight: 400,
              })}
              variant="h2"
            >
              Who are we?
            </Typography>
            <Typography
              sx={(theme: Theme) => ({
                color: theme.palette.common.white,
                fontWeight: 400,
              })}
              variant="body1"
              align="justify"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
          </Stack>
          <Button
            endIcon={<ArrowForward />}
            sx={(theme: Theme) => ({
              mt: '5rem',
              color: '#f1f1f2',
              borderColor: '#f1f1f2',
              '&:hover': {
                backgroundColor: '#f1f1f2',
                color: theme.palette.secondary.main,
              },
            })}
            variant="outlined"
          >
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DonateSectionHomepage;
