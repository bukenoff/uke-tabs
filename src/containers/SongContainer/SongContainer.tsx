import React, { FC, useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Song } from '~/components/Song';

export const SongContainer: FC = () => {
  const methods = useForm({
    defaultValues: JSON.parse(localStorage.getItem('tabs') || ''),
  });

  const onSubmit = useCallback(
    (data: any) => {
      console.log('DATA: ', JSON.stringify(data));
      localStorage.setItem('tabs', JSON.stringify(data));
    },
    [methods],
  );

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Song />
          <button type="submit">submit</button>
        </form>
      </FormProvider>
    </div>
  );
};
