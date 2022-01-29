import { Home } from '../templates/Home';
import { mapData } from '../api/mapData';
import config from '../config';
import P from 'prop-types';

export default function Index({ data = null }) {
  return <Home data={data} />;
}

export const getStaticProps = async () => {
  const raw = await fetch(config.url + config.defaultSlug);
  const json = await raw.json();
  const data = mapData(json);

  return {
    props: {
      data,
    },
  };
};

Index.propTypes = {
  data: P.array,
};
