import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
  const code = 'KOR';
  const router = useRouter();
  const onClickButton = () => {
    router.push('/search');
  };
  return (
    <div>
      HomePage
      <div>
        <button onClick={onClickButton}>search page 이동</button>
      </div>
      <div>
        <Link href={'/search'}>search page 이동</Link>
      </div>
      <div>
        <Link href={{ pathname: '/country/[code]', query: { code: code } }}>
          {code} page 이동
        </Link>
      </div>
    </div>
  );
}
