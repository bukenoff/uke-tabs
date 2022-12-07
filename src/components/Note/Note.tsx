import React, { FC } from 'react';

interface NoteProps {
  note: { string: string; order: number };
  i: number;
  barI: number;
  register: (arg: string) => Record<string, unknown>;
}

export const Note: FC<NoteProps> = ({ note, i, barI, register }) => {
  return (
    <span
      className="note"
      key={i}
      style={{ gridArea: `${note.string} / ${note.order}` }}
    >
      <input
        placeholder="."
        type="number"
        min="0"
        {...register(`bars[${barI}].notes[${i}].fret`)}
      />
    </span>
  );
};
