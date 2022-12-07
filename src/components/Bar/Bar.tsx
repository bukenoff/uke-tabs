import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { Note } from '../Note';

export const Bar: FC<any> = ({ notes, i: i2 }) => {
  const { register } = useFormContext(); // retrieve all hook methods

  return (
    <div className="bar">
      {notes.map((note: any, i: number) => (
        <Note key={i} barI={i2} i={i} note={note} register={register} />
      ))}
    </div>
  );
};
