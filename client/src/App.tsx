import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import Rewards from './pages/rewards/Rewards';
import Gifts from './pages/gifts/Gifts';
import AppLayout from './router/AppLayout';
import Find from './pages/find/Find';
import Join from './components/Join';
import SignIn from './components/SignIn';
import DetailsProduct from './components/DetailsProduct';
import CardModal from './components/CardModal';
import Dashboard from './admin/Dashboard';
import MainLayout from './router/MainLayout';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { 
        path: '/',
        element: <Home />
      },
      {
        path: '/menu',
        element: <Menu />,
      },
      {
        path: '/menu/:categoryName',
        element: <Menu />,

      },
      // detail page
      {
        path:'/details/:id',
        element: <DetailsProduct />,
      },
      {
        path: '/rewards',
        element: <Rewards />
      },
      {
        path: '/gift',
        element: <Gifts/>
      },
      // {
      //   path: '/gift',
      //   element: <Gifts/>
      // },
      {
        path: '/store-locator',
        element: <Find />
      },
      {
        path: '/account/create',
        element: <Join />
      },
      {
        path: '/account/signin',
        element: <SignIn />
      },
      // cards page
      {
        path: '/cards',
        element:<CardModal openCard={false}/>
      },
      // admin panel
      {
        path: '/admin',
        element:<MainLayout><Dashboard/></MainLayout>
      }

    ]
  }
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
