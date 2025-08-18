"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useUser } from '@/app/context/UserContext'; // Correct hook

export default function FeedLayout({ children }) {
  const router = useRouter();
  const { userData, loading } = useUser();

  useEffect(() => {
    // Wait until loading is finished before checking for user
    if (!loading && !userData) {
      router.push('/login');
    }
  }, [userData, loading, router]);

  // Show a loading indicator while checking auth state
  if (loading || !userData) {
    return <div>Loading...</div>;
  }

  // If user is logged in, show the page
  return <>{children}</>;
}