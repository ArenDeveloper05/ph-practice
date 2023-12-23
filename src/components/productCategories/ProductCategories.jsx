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
            <div className="products">
                <div className='product'>
                    <div className='product--image necklace'></div>
                    <div className='product--name'>
                        <p>NeckLaces</p>
                    </div>
                </div>
                <div className='product'>
                    <div className='product--image earrings'></div>
                    <div className='product--name'>
                        <p>Earrings</p>
                    </div>
                </div>
                <div className='product'>
                    <div className='product--image bracelets'></div>
                    <div className='product--name'>
                        <p>Braceletes</p>
                    </div>
                </div>
                <div className='product'>
                    <div className='product--image rings'></div>
                    <div className='product--name'>
                        <p>Rings</p>
                    </div>
                </div>
                <div className='product'>
                    <div className='product--image charms'></div>
                    <div className='product--name'>
                        <p>Charms</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductCategories