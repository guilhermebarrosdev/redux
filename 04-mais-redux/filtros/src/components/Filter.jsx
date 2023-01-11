import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilters, selectUniqueColor } from '../store/products';

const Filter = () => {
  // const colors = ['azul', 'rosa', 'preta'];
  const colors = useSelector(selectUniqueColor);

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeFilters({ name: 'colors', value: selectedColors }));
  }, [selectedColors, dispatch]);

  useEffect(() => {
    dispatch(
      changeFilters({
        name: 'prices',
        value: { min: +minPrice, max: +maxPrice },
      })
    );
  }, [minPrice, maxPrice, dispatch]);

  function handleChange({ target }) {
    if (target.checked) setSelectedColors([...selectedColors, target.value]);
    else
      setSelectedColors(
        selectedColors.filter((color) => color !== target.value)
      );
  }

  function handleChecked(color) {
    return selectedColors.includes(color);
  }

  return (
    <>
      <input
        type='number'
        value={minPrice}
        onChange={({ target }) => setMinPrice(target.value)}
        placeholder='Min'
      />
      <input
        type='number'
        value={maxPrice}
        onChange={({ target }) => setMaxPrice(target.value)}
        placeholder='Max'
      />
      {colors.map((color) => (
        <label key={color}>
          <input
            type='checkbox'
            value={color}
            checked={handleChecked(color)}
            onChange={handleChange}
          />
          {color}
        </label>
      ))}
    </>
  );
};

export default Filter;
