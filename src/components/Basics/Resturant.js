import React, { useState } from 'react'
import './style.css'
import Menu from './menuApi'
import Menucard from './Menucard'
import Navbar from './Navbar'

const UniqueList= [
    ...new Set(
        Menu.map((curElem)=>{
        return curElem.category;
    })
) 
];

const Resturant = () =>{

    const[menuData, setMenuData] =useState(Menu);
    const [menuList, setMenuList] = useState(UniqueList);

    const filterItem = 
    (category)=>{
        const updateList = Menu.filter((curElem)=>{
            return curElem.category === category
        });
        setMenuData(updateList);

    };

  return (
    <>

    
    <Navbar filterItem = {filterItem}/>
    <Menucard menuData={menuData}/>
   
    </>
  );
}

export default Resturant