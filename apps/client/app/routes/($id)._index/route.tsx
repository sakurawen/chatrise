import { Content } from './content';
import { Sidebar } from './sidebar';
import { TitleBarAction } from './title-bar-action';

export default function Index() {
  return (
    <div className='flex h-full'>
      <TitleBarAction />
      <Sidebar />
      <Content />
    </div>
  );
}
