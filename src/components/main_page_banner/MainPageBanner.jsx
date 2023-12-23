import './MainPageBanner.css'

function MainPageBanner(){
    return(
        <section className='page_MainBanner'>
            <div className="banner_description">
                <div className="description--title">
                    <p>the autumn equinox</p>
                </div>
                <div className="description--info">
                    <p>Fall has arrived.
                    Shop for our new releases starting today.</p>
                </div>
                <div className="description--shopButton">
                    <button className='shopNow'>shop now</button>
                </div>
            </div>
        </section>
    )
}

export default MainPageBanner