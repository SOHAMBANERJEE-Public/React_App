import React from 'react'

const Navbar = ({filterItem, menuList}) => {
  return (
    <>
    <nav>
        <div className='navbar'>
          {menuList.map((curElem)=>{
            return(
              <button className='btn-group__item'onClick={()=> filterItem(curElem)}>{curElem}</button>
            );
          })}
            
        
        </div>
    </nav>
    
    </>
  )
}

export default Navbar