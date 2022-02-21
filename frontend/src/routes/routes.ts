export interface IRoute {
  id: number,
  path: string;
  name: string,
}

export const routes: IRoute[] = [
  {
    id: 1,
    path: '/',
    name: 'Home',
  },
  {
    id: 2,
    path: '/book',
    name: 'Book',
  },
  {
    id: 3,
    path: '/games',
    name: 'Games',
  },
  {
    id: 4,
    path: '/stat',
    name: 'Statistics',
  },
  {
    id: 5,
    path: '/about',
    name: 'About us',
  },
];
