# react-serializable

> Serialize your data easily in an efficient and scalable way!

[![NPM](https://img.shields.io/npm/v/react-serializable.svg)](https://www.npmjs.com/package/react-serializable) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-serializable
```

```bash
yarn add react-serializable
```

## Usage

### Your entity class

> It is not necessary to implement an interface with the attributes, but it's a good practice and we can import it to use it in another component :)

```ts
import { Serializable } from 'react-serializable';
import { fakeData } from '../fakeData';

type FakeData = typeof fakeData;

export interface UserAttributes {
  name: string;
  neighborhood?: string;
}

class UserEntity extends Serializable implements UserAttributes {
  name: string = '';
  neighborhood?: string;

  serialize(data: FakeData): UserAttributes {
    const { user, city } = data;

    this.name = `${user.firstName} ${user.lastName}`;
    this.neighborhood = `${city.name} ${city.location}`;

    return super.transform();
  }
}

export { UserEntity };
```

### Container component

> Imagine we get an object from an endpoint but we need to serialize it to make it more component friendly, no worries `useSerializable` to the rescue!

```tsx
import React from 'react';
import { useSerializable } from 'react-serializable';
import { UserEntity } from './Entities/User.entity';
import { fakeData } from './fakeData';

const App = () => {
  const data = useSerializable(UserEntity, fakeData);

  return (
    <div className="flex center column">
      <h1>
        React Serializable
        <span aria-label="serie" role="img">
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
```

## TODO

- [ ] Add documentation (complex scenarios, tests)
- [ ] Return some methods of the class (to allow play around that entity)
- [ ] Publish
- [ ] ¿Support for class-based components?

## License

MIT © [x0s3](https://github.com/x0s3)
