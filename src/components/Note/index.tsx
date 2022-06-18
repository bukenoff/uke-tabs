import React, { FC } from 'react';

export const Note: FC<any> = ({ note, i, barI, register }: any) => {
  return (
    <span
      className="note"
      key={i}
      style={{ gridArea: `${note.string} / ${note.order}` }}
    >
      <input
        placeholder="."
        type="number"
        {...register(`bars[${barI}].notes[${i}].fret`)}
      />
    </span>
  );
};
