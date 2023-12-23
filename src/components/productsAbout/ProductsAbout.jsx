import './ProductsAbout.css'

function ProductsAbout(){
    return(
        <section className='page_mainContainer'>
            <div className='mainContainer--left_side'></div>
            <div className='mainContainer--right_side'>
                <div className='info_container'>
                    <div className='info--dateBox'>
                        <p>ARTICLE • OCTOBER 2022</p>
                    </div>
                    <div className='info--titleBox'>
                        <p>During the golden hour</p>
                    </div>  
                    <div className='info--textBox'>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Cras semper auctor neque vitae tempus quam pellentesque. Elementum sagittis vitae et leo duis.
                                <br></br> Elementum sagittis vitae et leo duis. Libero nunc consequat interdum varius. Habitant morbi tristique senectus et netus et malesuada fames ac.    
                        </p>
                    </div>
                    <div className='info--readButton'>
                        <button>read more</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductsAbout