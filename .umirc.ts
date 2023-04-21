import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {
    theme: {
      token: {
        colorPrimary: 'pink',
      },
    },
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '超早睡超晚起',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      icon: 'HeartFilled',
      name: '首页',
      path: '/home',
      component: './Home',
    },
  ],
  npmClient: 'pnpm',
});
