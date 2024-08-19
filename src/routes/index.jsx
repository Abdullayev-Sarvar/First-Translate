import { useRoutes } from 'react-router-dom'
import { Suspense,lazy } from 'react'

const Home = lazy(() => import('./home/Home'))
const Design = lazy(() => import('./desig/design'))

const RoutesController = () => {
  return useRoutes([
    {
      path: '/',
      element: <Suspense fallback={<div className='w-full h-screen flex justify-center items-center'><div className="loader"></div></div>}>
        <Home />
      </Suspense>
    },
    {
      path: '/design',
      element: <Suspense fallback={<div className='w-full h-screen flex justify-center items-center'><div className="loader"></div></div>}>
        <Design />
      </Suspense>
    }
  ])
}

export default RoutesController