import {FC} from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = (props) => {
  return (
    <div className='h-full flex items-center justify-center'>
      {props.children}
    </div>
  );
};

export default Layout;