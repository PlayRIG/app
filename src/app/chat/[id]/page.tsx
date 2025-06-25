"use client";

import { useRouter, useParams } from "next/navigation";

export default function ChatDetail() {
  const { id } = useParams();
  const router = useRouter();

  return (
    <div>
      <p>Chat: {id}</p>
      <button onClick={() => router.back()}>Back</button>
    </div>
  );
}
