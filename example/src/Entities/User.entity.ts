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
