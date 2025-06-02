import { Route, Routes } from 'react-router'
import Home from '../Pages/Home'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
    </Routes>
  )
}

export default AppRouter