import { useEffect } from 'react';

export default function Home({ name }) {
  console.log('HOME');
  useEffect(() => {
    console.log('home effect');
  }, []);

  return <div>{name}</div>;
}

export const getServerSideProps = async () => {
  console.log('getServerSideProps called');
  return {
    props: {
      name: 'KOREA',
    },
  };
};
