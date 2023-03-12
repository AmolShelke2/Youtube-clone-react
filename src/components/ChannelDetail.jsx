import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Videos, ChannelCard } from './';

const ChannelDetail = () => {
  const [channelDetail, setchannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  console.log(id);

  // console.log(channelDetail);
  console.log(videos);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then(data =>
      setchannelDetail(data?.items[0]),
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(data =>
      setVideos(data?.items),
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              'linear-gradient(90deg, rgba(58,161,180,1) 4%, rgba(243,29,253,1) 100%, rgba(252,176,69,1) 100%)',
            zIndex: 10,
            height: '300px',
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
