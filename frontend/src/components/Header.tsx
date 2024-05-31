import { Link } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import SignOutButton from './SignOutButton';

const Header = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <div className='bg-blue-800 py-6'>
      <div className='container mx-auto flex justify-between'>
        <span className='text-xl sm:text-3xl text-white font-bold tracking-tight flex justify-center items-center'>
          <Link to='/'>Vagabond.in</Link>
        </span>
        <span className='flex space-x-2'>
          {isLoggedIn ? (
            <>
              <Link
                to='my-bookings'
                className='flex items-center text-sm sm:text-lg rounded text-white px-2 font-bold hover:bg-blue-600'
              >
                My Bookings
              </Link>
              <Link
                to='my-hotels'
                className='flex items-center text-sm sm:text-lg rounded text-white px-2 font-bold hover:bg-blue-600'
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to='/sign-in'
              className='text-blue-800 bg-white rounded-md px-3 py-2 shadow-md font-bold hover:bg-gray-100'
            >
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
