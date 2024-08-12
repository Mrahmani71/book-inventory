'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
  let router = useRouter();

  const handleBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back();
    } else {
      router.replace('/');
    }
  };

  return (
    <button
      onClick={() => handleBack()}
      className="p-3 mb-8 mr-auto rounded hover:bg-gray-100"
    >
      ← Back to all books
    </button>
  );
}
