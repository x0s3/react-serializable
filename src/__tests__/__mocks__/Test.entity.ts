import { Serializable } from '../../Serializable';
import { fakeData } from './data';

type FakeData = typeof fakeData;

export interface TestAttributes {
  name: string;
  neighborhood?: string;
}

class TestEntity extends Serializable implements TestAttributes {
  name: string = '';
  neighborhood?: string;

  serialize(data: FakeData): TestAttributes {
    const { user, city } = data;

    this.name = `${user.firstName} ${user.lastName}`;
    this.neighborhood = `${city.name} ${city.location}`;

    return super.transform();
  }

  public getMoviesByEvenYear(movies: FakeData['movies']): FakeData['movies'] {
    return movies.filter((movie) => movie.year % 2 === 0 && movie);
  }
}

export { TestEntity };
