import React from 'react'

const MenuCard = ({menuData}) => {
    // console.log(menuData)
  return (
    <>
    <section className="main-card--container">
    {

        menuData.map((curElem)=>{
            return(
                <>
                <div className='card-container'>
        <div className='card'>
          <div className='card-body'>
            <span className="card-number card-circle subtle">1</span>
            <span className="card-author subtle">Breakfast</span>
            <h2 className="card-title">Maggie</h2>
                    <span className="card-description subtle">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, illum expedita? Aliquam aliquid ducimus illum laborum officiis commodi necessitatibus iusto repudiandae accusantium, velit asperiores, nemo minima obcaecati inventore atque tenetur a aspernatur!
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  {/* <img src={image} alt="images" className="card-media" /> */}

                  <span className="card-tag  subtle">Order Now</span>
          </div>

        </div>
        </>
            )
        })
    }
    </section>
    </>
  )
}

export default MenuCard