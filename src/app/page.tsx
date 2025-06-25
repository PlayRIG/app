"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <p>Hello World</p>

      <button onClick={() => router.push(`/chat/zzdsaehi213213hjkeqw`)}>
        Go to chat detail
      </button>
    </div>
  );
}
