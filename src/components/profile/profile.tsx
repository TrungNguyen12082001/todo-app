import { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material'; // Using Box instead of div is that it provides props for flexbox statically built into it, box is kind of a div which can encapsulate components. "Typography" is a component that can use to style fonts

/** Interfaces and PropTypes, which one should to use? */
// The major difference between prototypes and interfaces is that interfaces are type scriting and they are only available while developing application. TypeScript interfaces do not compile down to JavaScript and are only available while developing
// Whereas proptypes are available in JavaScript as well. It kicks happen when code is executed in the browser and any errors related to prop types are logged to the browser console whereas TypeScript only helps while developing application with IDE.

import PropTypes from 'prop-types';

interface IProfile {
  name: string;
}

export const Profile: FC<IProfile> = (
  props,
): ReactElement => {
  // FC<IProfile> means tell TypeScript that "props" will have a shape of IProfile interface
  const { name = 'Trung Nguyen' } = props;
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
          {`${name.substring(0, 1)}`}
        </Typography>
      </Avatar>

      <Typography variant="h6" color="text.primay">
        {`Welcome, ${name}`}
      </Typography>

      <Typography variant="body1" color="text.primary">
        This is your personal tasks manager
      </Typography>
    </Box>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
};
