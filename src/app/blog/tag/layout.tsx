import Sidebar from '../../../components/blog/blogSide/Sidebar'

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='grid grid-rows-[10rem_auto] grid-cols-[20rem_auto] w-full '>
      <div className=' col-start-2 row-start-1 text-3xl font-bold mt-5'>Blog</div>
      <Sidebar />
      <div className=' col-start-2 row-start-2 flex flex-col space-y-3 mr-20'>
        {children}
      </div>
    </div>
  )
}
