import React from 'react'
import ArticleCard from './ArticleCard'
import img1 from '../assets/17.png'
import img2 from '../assets/18.png'
import img3 from '../assets/19.png'

const ArticleSection = () => {

    const articles = [
        {
            id: 1,
            image: {img1},
            title: "Excepteur sint occaecat cupidatat non proident",
            desc1: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
            desc2: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli.",
        },
        {
            id: 2,
            image: {img2},
            title: "Quis nostrum exercitationem ullam corporis suscipit laboriosam",
            desc1: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
            desc2: "Nisi ut aliquid ex ea commodi consequatur autem vel eum iure reprehenderit.",
        },
        {
            id: 3,
            image: {img3},
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            desc1: "Coluptatem accusantium doloremque laudantium, totam rem aperiam.",
            desc2: "Aaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        },
    ];

    return (
        <div className="w-full bg-[#E0F7FA] py-20 px-4">

            {/* Grid Layout Container */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {articles.map((item) => (
                    <ArticleCard
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        desc1={item.desc1}
                        desc2={item.desc2}
                        buttonText="Read more"
                    />
                ))}

            </div>
        </div>
    )
}

export default ArticleSection