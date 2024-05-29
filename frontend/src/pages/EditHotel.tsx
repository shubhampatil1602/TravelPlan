import { useMutation, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import * as apiClient from '../api-client';
import ManageHotelForm from '../forms/ManageHotelForm/ManageHotelForm';
import { useToast } from '../contexts/ToastContext';

const EditHotel = () => {
  const { hotelId } = useParams();
  const { addToast } = useToast();

  const { data: hotel } = useQuery(
    'fetchMyHotelById',
    () => apiClient.fetchMyHotelById(hotelId || ''),
    {
      enabled: !!hotelId, // only run if we have hotelId
    }
  );

  const { mutate, isLoading } = useMutation(apiClient.updateMyHotelById, {
    onSuccess: () => {
      addToast('success', 'Hotel Saved!');
    },
    onError: () => {
      addToast('error', 'Error Saving Hotel');
    },
  });

  const handleSave = (hotelFormData: FormData) => {
    mutate(hotelFormData);
  };

  return (
    <ManageHotelForm hotel={hotel} onSave={handleSave} isLoading={isLoading} />
  );
};

export default EditHotel;
