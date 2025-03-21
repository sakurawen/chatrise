import type { MetaFunction } from 'react-router';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import { TitleBar } from '~/components/ui/title-bar';
import './global.css';

export const meta: MetaFunction = () => {
  return [
    {
      title: 'akumanoko',
      description: 'akumanoko',
    },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div className='app'>
      <TitleBar />
      <Outlet />
    </div>
  );
}
