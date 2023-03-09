import logoImg from '@/assets/love.png';
import { menuList } from '@/route';
import { BookOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

export const LayoutApp = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const jump2Page = (keyPath: string[]) => {
    navigate(keyPath.join());
  };
  return (
    <Layout className='min-h-screen'>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className='h-16 flex justify-center items-center'>
          <img src={logoImg} alt='logo' className='w-12'></img>
        </div>
        <Menu
          theme='dark'
          defaultSelectedKeys={['1']}
          mode='inline'
          items={menuList}
          onClick={({ keyPath }) => jump2Page(keyPath)}
        />
      </Sider>
      <Layout>
        <Header className='p-0' />
        <Content className='my-4'>
          <div className='p-6 min-h-90'>
            <Outlet />
          </div>
        </Content>
        {/* <Footer className='text-center'>
          A tools collection for girlfriend😊
        </Footer> */}
      </Layout>
    </Layout>
  );
};
