import './ProductCategories.css'

function ProductCategories(){
    return(
        <section className='categories_container'>
            <div className="container--textBox">
                <div className='textBox--title'>
                    <p>Shop by category</p>
                </div>
                <div className='textBox--description'>
                    <p>Indulge in what we offer.</p>
                </div>
            </div>
            <div className="products_container">
                <div className='products_container--product'>
                    <div className='product--image product--necklace'></div>
                    <div className='product--name'>
                        <p>NeckLaces</p>
                    </div>
                </div>
                <div className='products_container--product'>
                    <div className='product--image product--earrings'></div>
                    <div className='product--name'>
                        <p>Earrings</p>
                    </div>
                </div>
                <div className='products_container--product'>
                    <div className='product--image product--bracelets'></div>
                    <div className='product--name'>
                        <p>Braceletes</p>
                    </div>
                </div>
                <div className='products_container--product'>
                    <div className='product--image product--rings'></div>
                    <div className='product--name'>
                        <p>Rings</p>
                    </div>
                </div>
                <div className='products_container--product'>
                    <div className='product--image product--charms'></div>
                    <div className='product--name'>
                        <p>Charms</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductCategories