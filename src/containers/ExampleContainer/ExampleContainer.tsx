import React, { FC, useCallback } from 'react';
import { connect } from 'react-redux';
import { useTranslation, Trans } from 'react-i18next';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';

import { State } from '~/types';
import * as actions from '~/redux/things/things.actions';

import ExampleComponent from '~/components/ExampleComponent';
import { Song } from '~/components/Song';

const mapStateToProps = ({ things }: State) => ({
  things_list: things.things_list,
});

const mapDispatchToProps = {
  addThing: actions.addThing,
};

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {};

const ExampleContainer: FC<Props> = ({ things_list, addThing }) => {
  const { t } = useTranslation();

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

export const ExampleContainerConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExampleContainer);
