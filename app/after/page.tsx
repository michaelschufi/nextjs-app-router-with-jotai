import Link from "next/link";
import { List } from "./list";

type Props = {};

export const dynamic = "force-dynamic";

const Page = async ({}: Props) => {
  const listPromise: Promise<number[]> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([0, 1, 2, 3, 4, 5, 6]);
    }, 300);
  });

  const myList = await listPromise;

  return (
    <>
      <Link href="/">back</Link>
      <List initialList={myList} />
    </>
  );
};

export default Page;
