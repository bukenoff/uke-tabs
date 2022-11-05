import React, { FC, useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Container from 'react-bootstrap/Container';

import { Song } from '~/components/Song';

export const SongContainer: FC = () => {
  const methods = useForm({
    defaultValues: {},
  });

  const onSubmit = useCallback(
    (data: any) => {
      console.log('DATA: ', JSON.stringify(data));
      localStorage.setItem('tabs', JSON.stringify(data));
    },
    [methods],
  );

  return (
    <Container>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Song />
          <button type="submit">submit</button>
        </form>
      </FormProvider>
    </Container>
  );
};
