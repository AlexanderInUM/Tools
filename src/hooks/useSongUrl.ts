import { useQuery } from 'react-query';
import { getSongUrl } from '../apis';
import { RQ_SONG } from '../apis/key';

export const useSongUrl = (value: string) => {
  const result = useQuery(
    [RQ_SONG, value],
    async () => {
      return getSongUrl(value);
    },
    {
      enabled: false
    }
  );

  return result;
};
