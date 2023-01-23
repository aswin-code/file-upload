import Folder from "./pages/folder/Folder";
import Home from "./pages/home/Home";
import { QueryClientProvider, QueryClient } from 'react-query'
import { Toaster } from 'react-hot-toast'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const queryClient = new QueryClient()
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    }, {
      path: '/folder',
      element: <Folder />
    }
  ])
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <RouterProvider router={router}>
        </RouterProvider>
        <Toaster position="top-center"
          reverseOrder={false} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
