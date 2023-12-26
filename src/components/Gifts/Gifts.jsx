import "./Gifts.css"

function Gifts(){
    return(
        <section className="gifts-main-container">
                <div className="main-container--titleBox">
                    <div className="titleBox--heading">
                        <p>Gifts</p>
                    </div>
                    <div className="titleBox--description">
                        <p>Lorem ipsum dolor set amet</p>
                    </div>
                </div>
                <div className="main-container--productCategoriesBox">
                        <div className="productCategoriesBox--firstRow">
                            <div className="giftBox">
                                <div className="giftBox--ImgCont giftCard1"></div>
                                <div className="giftBox--DescCont">
                                    <p>GIFTS $100 AND UNDER</p>
                                </div>
                            </div>
                            <div className="giftBox">
                                <div className="giftBox--ImgCont giftCard2"></div>
                                <div className="giftBox--DescCont">
                                    <p>GIFTS $200  -  $300</p>
                                </div>
                            </div>
                            <div className="giftBox">
                                <div className="giftBox--ImgCont giftCard3"></div>
                                <div className="giftBox--DescCont">
                                    <p>GIFTS $300 AND MORE</p>
                                </div>
                            </div>
                        </div>
                        <div className="productCategoriesBox--secondRow">
                            <div className="giftBox">
                                <div className="giftBox--ImgCont giftCard4"></div>
                                <div className="giftBox--DescCont">
                                    <p>GIFTS FOR HIM</p>
                                </div>
                            </div>
                            <div className="giftBox">
                                <div className="giftBox--ImgCont giftCard5"></div>
                                <div className="giftBox--DescCont">
                                    <p>GIFTS FOR HER</p>
                                </div>
                            </div>
                            <div className="giftBox">
                                <div className="giftBox--ImgCont giftCard6"></div>
                                <div className="giftBox--DescCont">
                                    <p>GIFTS FOR THEM</p>
                                </div>
                            </div>
                        </div>
                </div>
        </section>
    )
}

export default Gifts