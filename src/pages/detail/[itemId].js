import { useRouter } from "next/router";

export default function Detail({ itemId }) {
  const router = useRouter();

  const itemId = router.query.itemId;

  return <div className="container">this is Detail!</div>;
}
