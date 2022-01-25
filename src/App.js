import React, { useState } from "react";
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

















// getting unique catorgies
/// and adding all and converting to array
const allcata=[...new Set(items.map(item=>item.category)),'all']


function App(){
    const [menuItems,setMenuItems]=useState(items);
    const [categories,setCategories]=useState(allcata);
    console.log(categories);
    
const  filterItems = (category)=>{
    if (category==='all'){
        setMenuItems(items);
        return;
    }
    const newItems=items.filter((item)=>item.category===category);
    setMenuItems(newItems);
}    

    
    return <main>
    <section className='menu section'>
      <div className='title'>
        <h2>Our Selects</h2>
        <div className='underline'></div>
      </div>
      <Categories filterItems={filterItems} categories={categories}/> 
            <Menu items={menuItems} />
    </section>
 
</main>;
}

export default App;
