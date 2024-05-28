import ManageHotelForm from '../forms/ManageHotelForm/ManageHotelForm';
import * as apiClient from '../api-client';
import { useMutation } from 'react-query';
import { useToast } from '../contexts/ToastContext';

const AddHotel = () => {
  const { addToast } = useToast();
  const { mutate, isLoading } = useMutation(apiClient.addMyHotel, {
    onSuccess: () => {
      addToast('success', 'Hotel added successfully');
    },
    onError: () => {
      addToast('error', 'Error saving Hotel');
    },
  });

  const handleSave = (hotelFormData: FormData) => {
    mutate(hotelFormData);
  };
  return <ManageHotelForm onSave={handleSave} isLoading={isLoading} />;
};

export default AddHotel;
