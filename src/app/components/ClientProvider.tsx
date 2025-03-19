"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

export default function ClientProvider({ children }: { children: ReactNode }) {
  // ⚡ QueryClient를 useState로 관리하여 새로 생성되지 않도록 설정
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
