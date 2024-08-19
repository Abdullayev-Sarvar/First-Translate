import { useRoutes } from 'react-router-dom'
import { Suspense,lazy } from 'react'

const Home = lazy(() => import('./home/Home'))
const Design = lazy(() => import('./desig/design'))

const RoutesController = () => {
  return useRoutes([
    {
      path: '/',
      element: <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    },
    {
      path: '/design',
      element: <Suspense fallback={<div>Loading...</div>}>
        <Design />
      </Suspense>
    }
  ])
}

export default RoutesController