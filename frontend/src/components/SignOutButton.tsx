import { useNavigate } from 'react-router-dom';
import { useToast } from '../contexts/ToastContext';
import { useMutation, useQueryClient } from 'react-query';
import * as apiClient from '../api-client';

const SignOutButton = () => {
  const navigate = useNavigate();
  const { addToast } = useToast();
  const queryClient = useQueryClient();

  const mutation = useMutation(apiClient.signOut, {
    onSuccess: async () => {
      await queryClient.invalidateQueries('validateToken');
      addToast('success', 'Signed out!');
      navigate('/');
    },
    onError: (error: Error) => {
      addToast('error', error.message);
    },
  });

  const handleClick = () => {
    mutation.mutate();
  };
  return (
    <button
      onClick={handleClick}
      className='text-blue-800 bg-white rounded-md px-3 py-2 shadow-md font-bold hover:bg-gray-100'
    >
      Sign out
    </button>
  );
};

export default SignOutButton;
