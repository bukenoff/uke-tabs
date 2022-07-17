import React, { FC } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

export const DashboardContainer: FC = () => {
  return (
    <Container>
      <Table hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              id: 'id',
              title: 'Just the two of us',
              artist: 'Bill Withers',
              year: 1979,
            },
          ].map((song) => (
            <tr key={song.id}>
              <td>
                <Link to="/song/id">{song.title}</Link>
              </td>
              <td>{song.artist}</td>
              <td>{song.year}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
