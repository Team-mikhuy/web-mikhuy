import { Link } from 'react-router-dom'

export default function Navbar(): JSX.Element {
  return (
    <div className='bg-neutral-800 flex justify-between px-20 py-4'>
      <Link to='/' className='text-white font-bold'>
        <h1>Mikhuy</h1>
      </Link>
    </div>
  )
}
