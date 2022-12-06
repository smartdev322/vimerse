import { useRouter } from 'next/router';
import useAuth from 'src/hooks/useAuth';

const withAuth =
  (WrappedComponent) =>
  // const { userData, login, logoutUser } = useAuth();
  (props) => {
    const { user } = useAuth();
    // checks whether we are on client / browser or server.
    if (typeof window !== 'undefined') {
      const router = useRouter();

      if (localStorage.getItem('accessToken')) {
        if (user.usertype == 'client') router.replace('/dashboard');
        else router.replace('/admin');
        return null;
      }

      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return null;
  };
export default withAuth;
