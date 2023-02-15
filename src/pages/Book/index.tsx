import { Spin } from 'antd';
import { useState } from 'react';

export default function Book() {
  const [loading, setLoading] = useState(true);
  return (
    <Spin spinning={loading}>
      <iframe
        src='https://zlibsearch.1kbtool.com/'
        className='block h-[80vh] w-full border-none'
        title='zlib'
        onLoad={() => setLoading(false)}
      ></iframe>
    </Spin>
  );
}
