import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Grid } from '@mui/material';
import { updateList } from '../features/listSlice';
import axios from 'axios';
import Categories from './Categories';
import { RootState } from '../store/store';

const InteractiveList: React.FC = () => {
  const dispatch = useDispatch();
  const list = useSelector((state: RootState) => state.list);
  const categories2 = Object.keys(list);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://shopping-list-backend-a6vl.onrender.com/items');
        dispatch(updateList(response.data));
      } catch (error: any) {
        console.error(error.response?.data?.error);
      }
    }

    fetchData();
  }, [dispatch]);

  return (
    <Box sx={{ flexGrow: 1.5, maxWidth: 752 }}>
      <Grid container spacing={2}>
        {categories2.map(category => (
          <Categories key={category} data={{ category }} />
        ))}
      </Grid>
    </Box>
  );
};

export default InteractiveList;
