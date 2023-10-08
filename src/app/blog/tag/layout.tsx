import Sidebar from '@/components/blog/blogSide/Sidebar'

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className='
        md:grid 
        md:grid-rows-[10rem_auto] 
        md:grid-cols-[20%_auto] 
        w-full '
    >
      <div
        className='
          hidden 
          md:block 
          col-start-2 
          row-start-1 
          text-3xl 
          font-bold 
          mt-5'
      >
        Blog
      </div>
      <Sidebar />
      <div
        className='
          md:col-start-2 
          md:row-start-2 
          md:mr-20
          flex 
          flex-col 
          space-y-3 '
      >
        {children}
      </div>
    </div>
  )
}
