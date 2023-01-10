import createAsyncSlice from './helper/createAsyncSlice';

const slice = createAsyncSlice({
  name: 'photos',
  initialState: {
    cache: 5000,
  },
  fetchConfig: () => ({
    url: 'https://dogsapi.origamid.dev/json/api/photo/?_page=1&_total=10&_user=0',
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  }),
});

export const getFiveOverKg = (state) => {
  const { data } = state.photos;
  const overFiveKg = data?.filter(({ peso }) => peso >= 5);
  const transformPounds = overFiveKg?.map((photo) => ({
    ...photo,
    peso: Math.floor(photo.peso * 2.2),
  }));
  return transformPounds;
};

export const fetchPhotos = slice.asyncAction;

export default slice.reducer;
