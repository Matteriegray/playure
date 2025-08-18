"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAuth } from '@/app/context/AuthContext'; // Updated path to your AuthContext

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    const { user, loading } = useAuth();
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
      if (!loading) {
        if (!user) {
          router.push('/login');
        } else {
          setIsAuthorized(true);
        }
      }
    }, [user, loading, router]);

    if (!isAuthorized) {
      return <div>Loading...</div>; // You can replace this with a loading spinner
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;