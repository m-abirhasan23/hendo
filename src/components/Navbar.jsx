import { useState } from 'react'
import close from '../../public/close.svg'
import openMenu from '../../public/menu.svg'
import { iconData, navData } from "../data/nav"

export const Navbar = () => {
const [menu,setMenu]=useState(true)
  return (
    <header className="flex-center">
        <div className="container flex-between">
            <div className="logo"><span>HON</span>DO</div>
            <nav className='nav-primary ' aria-label='Navigation Primary'>
                <ul className={menu?`flex-center`:`flex-center active`}>
                    {
                        navData.map((link)=><li key={link.name}>
                            <a href="" className="nav-link">{link.name}
                            </a>
                            </li>)
                    }
                </ul>
            </nav>
            <nav className="nav-secondary flex-center" aria-label='Navigation secondary'>
            {
                       iconData.map((link,index)=><img key={index} src={link.src} alt="icons" width={20} height={20} className="nav-icon"/>)
                 }
            </nav>
            {/* mobile menu icon  */}
          
          <div className='mobile-menu'>
            {
                menu?
                <img src={openMenu} alt="" width={25} onClick={()=>setMenu(!menu)}/>:
           <img src={close} alt="" width={25}  onClick={()=>setMenu(!menu)}/>
            }
          </div>
        </div>

    </header>
  )
}
