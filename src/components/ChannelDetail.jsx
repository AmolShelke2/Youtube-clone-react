import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Videos, ChannelCard } from './';

const ChannelDetail = () => {
  const [channelDetail, setchannelDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`).then(data =>
      setchannelDetail(data?.items[0]),
    );
  }, [id]);

  return <div>{id}</div>;
};

export default ChannelDetail;
