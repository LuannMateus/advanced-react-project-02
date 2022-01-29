import { Home } from '../templates/Home';
import { mapData } from '../api/mapData';
import P from 'prop-types';
import { loadPages } from '../api/loadPages';

export default function Index({ data = null }) {
  return <Home data={data} />;
}

export const getStaticProps = async () => {
  let data = null;

  try {
    data = await loadPages('landing-page');
  } catch (e) {}

  if (!data || !data.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};

Index.propTypes = {
  data: P.array,
};
