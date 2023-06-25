import { TextField } from '@mui/material';
import { FC, ReactElement } from 'react';

export const TaskDescriptionField: FC =
  (): ReactElement => {
    return (
      <TextField
        id="description"
        name="description"
        label="Description"
        placeholder="Description"
        variant="outlined"
        size="small"
        multiline
        rows={4}
        fullWidth
      />
    );
  };
