import LayoutMain from '@/layouts/LayoutMain'
import HomePage from '@/pages/HomePage'
import { Route, Routes } from 'react-router-dom'

const AppRoute = () => {
  return (
    <Routes>
      <Route element={<LayoutMain />}>
        <Route path='/' element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default AppRoute
