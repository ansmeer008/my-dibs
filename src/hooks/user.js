import useSWR from "swr";
import fetcher from "../lib/fetch";

//"/api/user"경로로 data를 받으면 그 값을 리턴해주는 커스텀 훅
//mutate 함수는 user 값을 수정하는 용도
export function useCurrentUser() {
  const { data, mutate } = useSWR("/api/user", fetcher);
  const user = data?.user;
  return [user, { mutate }];
}
