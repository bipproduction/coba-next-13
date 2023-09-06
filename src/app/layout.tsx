import { unsealData } from 'iron-session';
import RootStyleRegistry from './emotion';
import { cookies } from 'next/headers'
import _ from 'lodash';
import { redirect } from 'next/navigation';
import { ViewLogin } from '@/app_modules/auth/login';

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en-US">
      <head />
      <body suppressHydrationWarning={true} >
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  );
}
