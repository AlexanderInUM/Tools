import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import { LayoutApp } from './components/Layout';
import Book from './pages/Book';
import { Song } from './pages/Song';
import ChatPDF from './pages/ChatPDF';
import {
  BookOutlined,
  CustomerServiceOutlined,
  MessageOutlined
} from '@ant-design/icons';
import { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

type RouteNode = {
  label: string;
  path: string;
  element: JSX.Element;
  children?: RouteNode[];
  icon?: JSX.Element;
  sideMenu?: boolean;
};

const routes: RouteNode[] = [
  {
    label: '全民 K歌',
    path: '/song',
    element: <Song />,
    icon: <CustomerServiceOutlined />,
    sideMenu: true
  },
  {
    label: '电子书',
    path: '/book',
    element: <Book />,
    icon: <BookOutlined />,
    sideMenu: true
  },
  {
    label: 'chatPDF',
    path: '/pdf',
    icon: <MessageOutlined />,
    element: <ChatPDF />,
    sideMenu: true
  }
];

const genMenuList = (routes: RouteNode[]) => {
  const menus: MenuItem[] = [];
  routes.forEach((r) => {
    if (r.sideMenu) {
      const copy: any = {
        label: r.label,
        key: r.path,
        icon: r.icon
      };
      if (r.children?.length) {
        copy.children = r.children.map((m) => ({
          label: r.label,
          key: r.path,
          icon: r.icon
        }));
      }
      menus.push(copy);
    }
  });
  return menus;
};

export const menuList = genMenuList(routes);
console.log(menuList);

export const App = () => {
  return useRoutes([
    {
      path: '/',
      element: <LayoutApp />,
      children: [
        {
          path: '/',
          element: <Navigate replace to='/song' />
        },
        ...routes
      ]
    }
  ]);
};
