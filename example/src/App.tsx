import React from 'react';
import { useSerializable } from 'react-serializable';

import { UserEntity } from './Entities/User.entity';
import { fakeData } from './fakeData';

const App = () => {
  const data = useSerializable(UserEntity, fakeData);

  return (
    <div className="flex center column">
      <h1>
        React Serializable{' '}
        <span aria-label="smile" role="img">
          🧞‍♂️
        </span>
      </h1>
      <ul className="column">
        <li>{data.name}</li>
        <li>{data.neighborhood}</li>
      </ul>
    </div>
  );
};

export { App };
