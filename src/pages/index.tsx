import { GetServerSideProps } from 'next';
import { Home, HomeProps } from '../templates/Home';
import { loadPages } from '../api/loadPages';

export default function Index({ data = null }: HomeProps) {
  return <Home data={data} />;
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
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
