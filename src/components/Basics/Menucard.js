import React from 'react'

const Menucard = ({ menuData }) => {
    // console.log(menuData);
  return (
    <>
    <section className='main-card--cointainer'>

    {menuData.map((curElem)=>{

        const {id, name, catagory, image, description} = curElem;

        return (<>
        <div className='card-container' key={id}>
        <div className='card'>
            <div className='card-body '>
                <span className='card-number card-circle subtle'> {id} </span>
                <span className='card-author subtle'> {catagory}  </span>
                <h2 className='card-title' > {name} </h2>
                <span className='card-description subtle'>  {description}    </span>
                <div className='card-read'>Read</div>
            </div>
            <img src={image} alt='images' className='card-media'/>
            <span className='card-tag'>Order Now</span>
        </div>
    </div>


        </>
        )
        ;

    })}
    
    </section>

    </>
  );
}

export default Menucard