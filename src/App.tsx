import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import NotFound from './components/NotFound'

export default function App(): JSX.Element {
  return (
    <div className='bg-zinc-900 h-screen'>
      <Navbar />
      <div className='container mx-auto py-4 px-20'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}
