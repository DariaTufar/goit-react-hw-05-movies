import { ThreeDots } from 'react-loader-spinner';
import { LoaderStyled } from './Loader.styled';


export const Loader = () => {
  return (
    <LoaderStyled>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#6096ba"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderStyled>
  );
};
