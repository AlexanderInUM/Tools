import { Button, Image, Input, Spin, message } from 'antd';
import stepImg from '../../assets/song-step.jpg';
import { useSongUrl } from 'hooks/useSongUrl';
import { useState } from 'react';
import { saveAs } from 'file-saver';

export const Song = () => {
  const [value, setValue] = useState('');
  const { refetch, data, isFetching } = useSongUrl(value);
  const handleClick = async () => {
    await refetch();
    try {
      saveAs(data.url, '这是你下载的歌.mp3');
    } catch (error) {
      message.error('下载出错了😭');
    }
  };
  return (
    <Spin spinning={isFetching}>
      <div className='w-40'>
        <Image src={stepImg} alt='step' />
      </div>
      <div className='my-8'>从这里复制出来链接，然后粘贴到下面的框框去</div>
      <div>
        <Input
          placeholder='这里粘贴你的全民 k 歌链接'
          value={value}
          onInput={(e) => setValue(e.currentTarget.value)}
        />
      </div>
      <Button onClick={handleClick}>下载</Button>
    </Spin>
  );
};
