import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos, getFiveOverKg } from '../photos';

const Photos = () => {
  const data = useSelector(getFiveOverKg);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  if (!data) return null;
  return (
    <div>
      {data.map((photo) => (
        <li key={photo.id}>
          {photo.title} | {photo.peso} pounds
        </li>
      ))}
    </div>
  );
};

export default Photos;
