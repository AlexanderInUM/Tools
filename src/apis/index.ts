import axios from 'axios';

export const getSongUrl = async (value: string) => {
  const res = await axios.get(
    `https://song-beryl.vercel.app/getSongUrl?url=${value}`
  );
  return res.data;
};
