import React, { FC } from 'react';
import { useFieldArray } from 'react-hook-form';
import { Bar } from '../Bar';

const bar_template = {
  notes: [
    { string: 1, order: 1, fret: '+' },
    { string: 1, order: 2, fret: '+' },
    { string: 1, order: 3, fret: '+' },
    { string: 1, order: 4, fret: '+' },
    { string: 1, order: 5, fret: '+' },
    { string: 1, order: 6, fret: '+' },
    { string: 1, order: 7, fret: '+' },
    { string: 1, order: 8, fret: '+' },
    { string: 2, order: 1, fret: '+' },
    { string: 2, order: 2, fret: '+' },
    { string: 2, order: 3, fret: '+' },
    { string: 2, order: 4, fret: '+' },
    { string: 2, order: 5, fret: '+' },
    { string: 2, order: 6, fret: '+' },
    { string: 2, order: 7, fret: '+' },
    { string: 2, order: 8, fret: '+' },
    { string: 3, order: 1, fret: '+' },
    { string: 3, order: 2, fret: '+' },
    { string: 3, order: 3, fret: '+' },
    { string: 3, order: 4, fret: '+' },
    { string: 3, order: 5, fret: '+' },
    { string: 3, order: 6, fret: '+' },
    { string: 3, order: 7, fret: '+' },
    { string: 3, order: 8, fret: '+' },
    { string: 4, order: 1, fret: '+' },
    { string: 4, order: 2, fret: '+' },
    { string: 4, order: 3, fret: '+' },
    { string: 4, order: 4, fret: '+' },
    { string: 4, order: 5, fret: '+' },
    { string: 4, order: 6, fret: '+' },
    { string: 4, order: 7, fret: '+' },
    { string: 4, order: 8, fret: '+' },
  ],
};

export const Song: FC = () => {
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      name: 'bars', // unique name for your Field Array
    },
  );

  return (
    <>
      <div>
        <h1 style={{ textAlign: 'center' }}>Just the two of us</h1>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {fields.map((f: any, i: number) => (
            <Bar key={f.id} notes={f.notes} i={i} />
          ))}
        </div>
      </div>
      <button onClick={() => append(bar_template)}>append</button>
    </>
  );
};
