import { GetServerSideProps } from 'next';
import { Home } from '../templates/Home';
import { loadPages } from '../api/loadPages';

export type IndexProps = {
  data: [];
};

export default function Index({ data = null }: IndexProps) {
  return <Home data={data} />;
}

export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
  let data = null;

  try {
    data = await loadPages('landing-page');
  } catch (e) {
    //
  }

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
