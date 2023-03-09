import { Spin } from 'antd';
import { useState } from 'react';

export default function ChatPDF() {
  const [loading, setLoading] = useState(true);
  return (
    <Spin spinning={loading}>
      <iframe
        src='https://www.chatpdf.com/'
        className='block h-[80vh] w-full border-none'
        title='pdf'
        onLoad={() => setLoading(false)}
      ></iframe>
    </Spin>
  );
}
