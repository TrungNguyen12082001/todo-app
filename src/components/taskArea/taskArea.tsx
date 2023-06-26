import { Box, Grid } from '@mui/material';
import { FC, ReactElement } from 'react';
import { format } from 'date-fns';
import { TaskCounter } from '../taskCounter/taskCounter';

export const TaskArea: FC = (): ReactElement => {
  /**PPPP: today's day,  month, date and year */
  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>
          Status of Your Tasks As On{' '}
          {format(new Date(), 'PPPP')}
        </h2>
      </Box>
      <Grid
        container
        display="flex"
        justifyContent="center"
      >
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10} // responsive for medium device, it'll occupy 10 columns
          xs={12} // responsive for small device, it'll occupy 12 columns
          mb={8}
        >
          <TaskCounter />
          <TaskCounter />
          <TaskCounter />
        </Grid>
        <Grid
          item
          display="flex"
          flexDirection="column"
          xs={10}
          md={8}
        >
          <Box>Tasks Will Come Over Here</Box>
          <Box>Tasks Will Come Over Here</Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
