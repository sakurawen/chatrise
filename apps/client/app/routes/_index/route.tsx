import { Content } from './content';
import { Sidebar, SidebarResizable } from './sidebar';

export default function Index() {
  return (
    <div className='flex h-full'>
      <SidebarResizable>
        <Sidebar />
      </SidebarResizable>
      <Content className='flex-1' />
    </div>
  );
}
