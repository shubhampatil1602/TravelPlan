import { useFormContext } from 'react-hook-form';
import { HotelFormData } from './ManageHotelForm';

const GuestsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();
  return (
    <div className=''>
      <h2 className='text-2xl font-bold mb-3'>Guests</h2>
      <div className='grid grid-cols-2 p-6 gap-5 bg-gray-300 rounded'>
        <label className='text-gray-700 text-sm font-bold flex-1'>
          Adults
          <input
            type='number'
            min={1}
            className='p-2 px-3 outline-none border rounded w-full font-normal'
            {...register('adultCount', { required: 'This field is required' })}
            placeholder='Adults'
          />
          {errors.adultCount?.message && (
            <span className='text-red-500 text-sm font-bold'>
              {errors.adultCount?.message}
            </span>
          )}
        </label>

        <label className='text-gray-700 text-sm font-bold flex-1'>
          Childrens
          <input
            type='number'
            min={0}
            className='p-2 px-3 outline-none border rounded w-full font-normal'
            {...register('childCount', { required: 'This field is required' })}
            placeholder='Childrens'
          />
          {errors.childCount?.message && (
            <span className='text-red-500 text-sm font-bold'>
              {errors.childCount?.message}
            </span>
          )}
        </label>
      </div>
    </div>
  );
};

export default GuestsSection;
