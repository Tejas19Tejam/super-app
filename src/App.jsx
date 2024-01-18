import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Homepage from './pages/Homepage';
import RegisterPage from './pages/RegisterPage/';
import CategoryPage from './pages/CategoryPage';
import PageNotFound from './pages/PageNotFound';

// Action function
import { action as formDataAction } from './component/Register/Register';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RegisterPage />,
		action: formDataAction,
	},
	{
		path: '/category',
		element: <CategoryPage />,
	},
	{
		path: '/homepage',
		element: <Homepage />,
	},
	{
		path: '*',
		element: <PageNotFound />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
