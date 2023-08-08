import { ColorRing } from 'react-loader-spinner';
import { Box } from './Loader.styled';

const Loader = () => {
  return (
    <Box>
        <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#7986cb', '#9fa8da', '#303f9f', '#c5cae9', '#3f51b5']}
        />
    </Box>
  );
};

export default Loader;