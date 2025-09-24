"use client";

import { Suspense } from "react";
import SearchPageContent from "./SearchPageContent";

export default function SearchPage() {
  return (
    <Suspense fallback={<p className="p-4">Loading search results...</p>}>
      <SearchPageContent />
    </Suspense>
  );
}
