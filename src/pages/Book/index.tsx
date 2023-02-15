import { CSSProperties } from 'react';

const iframeStyle: CSSProperties = {
  width: '100%',
  height: '80vh',
  border: 'none',
  display: 'block'
};

export default function Book() {
  return (
    <iframe
      src='https://zlibsearch.1kbtool.com/'
      style={iframeStyle}
      title='zlib'
    ></iframe>
  );
}
