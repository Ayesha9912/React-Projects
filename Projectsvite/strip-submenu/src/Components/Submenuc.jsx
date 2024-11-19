import React, { useContext, useEffect, useRef } from 'react'
import { AppContext } from './Contextc';

export default function Submenuc(){
    const {isMenu, page:{page, links}, location , closeMenu} = useContext(AppContext)
    const handlecloseMenu = (e)=>{
      closeMenu()
      // console.log(isMenu);
    }
    const container = useRef(null)
    useEffect(()=>{
        const menu = container.current
        const {center, bottom} = location
        menu.style.left = `${center}px`
        menu.style.top = `${bottom}px`
    } ,[location, page, links])
    // useEffect(() =>{
    //     console.log('isMenu changed:', isMenu);
    // }, [isMenu]);
    return(
    <>
        <aside  onMouseLeave={handlecloseMenu}
        className={`${isMenu ? 'flex':'hidden'} bg-white absolute shadow-lg`}
        ref={container}>
        <section className='w-max p-4 transform duration-300 rounded-md'>
        <h4 className='font-medium text-[22px]'>{page}</h4>
        <div className='submenu-center mt-5 items-center flex justify-center'>
          {/* {links.map((ele) => {
            const { url, icon, label } = ele
            return(
              <a href={url}>
                <p className='text-[rgb(97,125,152)]'>{icon}</p>
                <p className='ml-4'>{label}</p>
              </a>
            )
          })} */}
        </div>
      </section>
        </aside>
    </>
  )
}
