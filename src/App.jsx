import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Category from './pages/Category';
import PageNotFound from './pages/PageNotFound';

// Action function
import { action as formDataAction } from './pages/Register';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Homepage />,
	},
	{
		path: '/register',
		element: <Register />,
		action: formDataAction,
	},
	{
		path: '/category',
		element: <Category />,
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
