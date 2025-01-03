'use client'
export default function Index() {

    const bankList = [
        {
            heading: 'STATE BANK OF INDIA',
            desc: 'Explore how SBI has transformed the way we respond to customer requests',
            date: 'April 2,2024',
            img_url: 'https://1000logos.net/wp-content/uploads/2018/01/SBI-symbol-color.jpg'
        },
        {
            heading: 'PUNJAB NATIONAL BANK',
            desc: 'Explore how PNB has transformed the way we respond to customer requests',
            date: 'May 2,2019',
            img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXpVlLMIs0xrixuWNeXXpH9YgdeRLGbOqLTQ&s'
        },
        {
            heading: 'HDFC BANK',
            desc: 'Explore how HDFC has transformed the way we respond to customer requests',
            date: 'May 11,2015',
            img_url: 'https://static.vecteezy.com/system/resources/previews/020/190/428/non_2x/hdfc-logo-hdfc-icon-free-free-vector.jpg'
        },
        {
            heading: 'ICICI BANK',
            desc: 'Explore how ICICI has transformed the way we respond to customer requests',
            date: 'Jan 2,2010',
            img_url: 'https://static.vecteezy.com/system/resources/previews/020/336/263/non_2x/icici-logo-icici-icon-free-free-vector.jpg'
        },

    ]

    return (
        <div className="section background-image _2 hero">
            <div className="container-default flex-row w-container">
                <div className="inner-container _645px center">
                    <div data-w-id="6dcdccf9-802a-6d7a-1dc8-40b8bfaf9080" id="transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-id: preserve-3d; opacity: 1;" className="text-center mg-bottom-40px">
                        <div className="subtitle-wrapper">
                            <div className="text-block">banks</div>
                        </div>
                        <h1 className="display-1 text-white">Our Clients</h1>
                    </div>
                </div>
                {bankList?.map((d,i) =>
                    <div key={i+1} className="w-dyn-list">
                        <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                                <a data-w-id="c573333b-f8ae-fffa-6052-0f772f730731" id="opacity: 1;" href="/blog/sales-responses-in-the-chatgpt-era" className="blog-card-featured-wrapper w-inline-block">
                                    <div className="grid-2-columns blog-card-featured">
                                        <div id="w-node-_1130fdb8-7bbc-df99-a9b1-06cf6fcee3e0-ef43b9b6" className="inner-container _535px">
                                            <div id="w-node-_5ca42774-2f2c-6849-c4e4-cc5287b6c523-ef43b9b6" className="blog-card-image-wrapper">
                                                <img
                                                    src={d?.img_url}
                                                    loading="eager"
                                                    alt="Sales responses in the ChatGPT era"
                                                     className="blog-card-image" id="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-id: preserve-3d;" /></div>
                                        </div>
                                        <div id="w-node-ce085908-9cfc-5f6a-c9eb-f09ec6e58b91-ef43b9b6" className="inner-container _545px">
                                            {/* <div className="blog-tag-wrapper">
                                        <div className="blog-card-tag">
                                            <div>Sol</div>
                                        </div>
                                    </div> */}
                                            <h2 className="display-4">{d?.heading}</h2>
                                            <p className="blog-card-description mb-1rem">
                                                {d?.desc}
                                            </p>
                                            <div className="blog-card-details-wrapper">
                                                <div className="blog-date">{d?.date}</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}