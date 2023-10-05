import {FC} from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = (props) => {
  return (
    <div className='bg-red-500 h-full'>
      {props.children}
    </div>
  );
};

export default Layout;