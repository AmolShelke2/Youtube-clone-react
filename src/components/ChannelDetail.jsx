import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Videos, ChannelCard } from './';

const ChannelDetail = () => {
  const [channelDetail, setchannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  console.log(channelDetail, videos);

  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`).then(data =>
      setchannelDetail(data?.items[0]),
    );

    fetchFromAPI(`search?part="channelId=${id}&part=snippet&order-data`).then(
      data => setVideos(data?.items),
    );
  }, [id]);

  return <div>{id}</div>;
};

export default ChannelDetail;
