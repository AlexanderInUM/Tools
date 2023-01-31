import { useQuery } from 'react-query';
import { getSongUrl } from '../apis';
import { RQ_SONG } from '../apis/key';

export const useSongUrl = (value: string) => {
  const result = useQuery<{
    url: string;
    singerName: string;
    songName: string;
  }>([RQ_SONG], async () => getSongUrl(value), {
    enabled: false
  });

  return result;
};
