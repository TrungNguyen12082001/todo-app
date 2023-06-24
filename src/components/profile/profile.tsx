import { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material'; // Using Box instead of div is that it provides props for flexbox statically built into it, box is kind of a div which can encapsulate components. "Typography" is a component that can use to style fonts

export const Profile: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar
        sx={{
          width: '96px',
          height: '96px',
          backgroundColor: 'primary.main',
          marginBottom: '16px',
        }}
      >
        <Typography variant="h4" color="text.primary">
          T
        </Typography>
      </Avatar>

      <Typography variant="h6" color="text.primay">
        Welcome, Trung Nguyen
      </Typography>

      <Typography variant="body1" color="text.primary">
        This is your personal tasks manager
      </Typography>
    </Box>
  );
};
