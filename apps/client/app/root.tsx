import type { MetaFunction } from 'react-router';
import { icons } from '@iconify-json/f7';
import { addCollection } from '@iconify/react';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import '~/db';
import './app.css';

addCollection(icons);

export const meta: MetaFunction = () => {
  return [
    {
      title: 'chatrise',
      description: 'chatrise',
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
        {import.meta.env.VITE_REACT_DEVTOOLS === 'enable' && import.meta.env.DEV
          ? (
              <script src='http://localhost:8097'></script>
            )
          : null}
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
      <Outlet />
    </div>
  );
}
