import { Redirect } from 'expo-router';

export default function IndexRedirect() {
  // const {authenticated} = useAuth();

  // if (authenticated) {
  //   return <Redirect href="/tierSelection/tier-selection" />;
  // }
  // return <Redirect href="/auth/login" />;
  return <Redirect href={'/getStarted/getstarted'}/>
}
