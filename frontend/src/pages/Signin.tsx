import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import * as apiClient from '../api-client';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useToast } from '../contexts/ToastContext';

export type SigninFormData = {
  email: string;
  password: string;
};

const Signin = () => {
  const navigate = useNavigate();
  const { addToast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>();
  const queryClient = useQueryClient();

  const location = useLocation();

  const mutation = useMutation(apiClient.signin, {
    onSuccess: async () => {
      await queryClient.invalidateQueries('validateToken');
      addToast('success', 'Welcome back!');
      navigate(location.state?.from?.pathname || '/');
    },
    onError: (error: Error) => {
      addToast('error', error.message);
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <form className='flex flex-col gap-5' onSubmit={onSubmit}>
      <h2 className='text-3xl font-bold'>Sign In</h2>
      <label htmlFor='' className='text-gray-700 text-sm font-bold flex-1'>
        Email
        <input
          type='email'
          className='border rounded w-full py-2 px-2 font-normal outline-none'
          placeholder='Email'
          {...register('email', { required: 'This field is required.' })}
        />
        {errors.email && (
          <span className='text-red-500'>{errors.email.message}</span>
        )}
      </label>
      <label htmlFor='' className='text-gray-700 text-sm font-bold flex-1'>
        Password
        <input
          type='password'
          className='border rounded w-full py-2 px-2 font-normal outline-none'
          placeholder='Password'
          {...register('password', {
            required: 'This field is required.',
            minLength: {
              value: 6,
              message: 'Password must be atleast 6 characters',
            },
          })}
        />
        {errors.password && (
          <span className='text-red-500'>{errors.password.message}</span>
        )}
      </label>
      <span className='flex items-center justify-between'>
        <span className='text-sm'>
          Not Registered?{' '}
          <Link to='/register' className='underline'>
            Create an account!
          </Link>
        </span>
        <button
          type='submit'
          className='bg-blue-800 text-white rounded-md px-3 py-2 shadow-md font-bold hover:bg-blue-600'
        >
          Login
        </button>
      </span>
    </form>
  );
};

export default Signin;
