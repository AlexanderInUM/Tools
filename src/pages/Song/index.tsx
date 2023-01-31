import { Button, Image, Input, Spin, message } from 'antd';
import stepImg from '../../assets/song-step.jpg';
import { useSongUrl } from 'hooks/useSongUrl';
import { useState } from 'react';
import { saveAs } from 'file-saver';

export const Song = () => {
  const [value, setValue] = useState('');
  const { refetch, isFetching } = useSongUrl(value);
  const handleClick = async () => {
    const { data } = await refetch();
    try {
      if (data?.url) {
        saveAs(data.url, `${data.singerName}-${data.songName}.mp3`);
      }
    } catch (error) {
      message.error('下载出错了😭，再重试一下~');
    }
  };
  return (
    <Spin spinning={isFetching}>
      <div>1. 打开全民 k 歌对应的歌曲页面</div>
      <div>2. 点击右上角的三个点</div>
      <div>3. 点击分享</div>
      <div>4. 选择「复制链接」</div>
      <div>5. 粘贴至下面的输入框中</div>
      <div>6. 点击下载</div>
      <br />
      <div>Example: </div>
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
      <br />
      <Button onClick={handleClick}>下载</Button>
    </Spin>
  );
};
