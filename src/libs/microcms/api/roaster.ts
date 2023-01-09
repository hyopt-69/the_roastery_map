import { Roaster } from '@/domains/roaster/types';

import { readClient } from '../client';

const END_POINT = 'roaster';
export const fetchRoasterList = async () => {
  const { contents } = await readClient.getList({
    endpoint: END_POINT,
  });

  // FIXME: RoasterのAPI繋ぎ込みをする。
  const roasterList: Roaster[] = contents;

  return roasterList;
};
