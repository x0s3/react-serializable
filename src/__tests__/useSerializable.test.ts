import { renderHook } from '@testing-library/react-hooks';
import { useSerializable } from '../useSerializable';

import { fakeData, TestEntity } from './__mocks__';

const render = (props = fakeData) =>
  renderHook(() => useSerializable(TestEntity, props));

describe('useSerializable', () => {
  describe('when all props are given', () => {
    it('returns serialized data with the expected output', () => {
      const EXPECTED_DATA = {
        name: `${fakeData.user.firstName} ${fakeData.user.lastName}`,
        neighborhood: `${fakeData.city.name} ${fakeData.city.location}`
      };
      const { result } = render();

      expect(result.current).toMatchObject(EXPECTED_DATA);
    });
  });

  describe('when a public method is given', () => {
    it('calls the method and returns serialized data with the expected output', () => {
      const EXPECTED_MOVIES_LENGTH = 4;
      const { result } = render();

      const movies = result.current.getMoviesByEvenYear(fakeData.movies);

      expect(movies).toHaveLength(EXPECTED_MOVIES_LENGTH);
    });
  });

  describe('when some props are missing', () => {
    it('returns serialized data with default values', () => {
      const unserializedData: typeof fakeData = {
        ...fakeData,
        city: {
          location: '',
          name: ''
        },
        user: {
          ...fakeData.user
        }
      };
      const EXPECTED_DATA = {
        name: `${fakeData.user.firstName} ${fakeData.user.lastName}`,
        neighborhood: ' '
      };
      const { result } = render(unserializedData);

      expect(result.current).toMatchObject(EXPECTED_DATA);
    });
  });
});
