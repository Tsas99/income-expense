"use client";

import { useAncestor } from "@/provider/AncestorProvider";

export const Comp3 = () => {
  const { ancestor } = useAncestor();
  return <>{ancestor}</>;
};
