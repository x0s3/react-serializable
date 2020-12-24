import { useMemo, useRef } from 'react';
import { Serializable } from './Serializable';

type SerializableConstructor = {
  new (): Serializable;
  readonly prototype: Object;
};

type EntityAttributes<E extends SerializableConstructor> = Omit<
  E['prototype'],
  'serialize'
>;

function useSerializable<E extends SerializableConstructor, D>(
  Entity: E,
  data: D
) {
  const { current: entity } = useRef<Serializable>(new Entity());

  const serialized = useMemo<EntityAttributes<E>>(() => {
    if (!data || Object.keys(data).length === 0) {
      return data;
    }

    return entity.serialize(data);
  }, [data]);

  return serialized;
}

export { useSerializable };
