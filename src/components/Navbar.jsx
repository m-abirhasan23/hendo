import React from 'react';
import navData from '../data/nav';

export const Navbar = () => {

  return (
    <header>
        <div className="logo"><span>HON</span>DO</div>
        <nav className='nav-primary' aria-label='Navigation Primary'>
            <ul>
                {
                    navData[0].map((link)=><li key={link.name}><a href="">{link.name}</a></li>)
                }
            </ul>
        </nav>
        <nav className="secondary" aria-label='Navigation secondary'>
        {
                    navData[1].map((link,index)=><img key={index} src={link.src} alt="icons" width={20} height={20}/>)
             }
        </nav>

        {/* mobile menu icon  */}

        <div style={{display:"none"}}>
            {
             navData[2].map((link,index)=><img key={index} src={link.src} alt="icons" width={20} height={20}/>)
            }
        </div>

    </header>
  )
}
