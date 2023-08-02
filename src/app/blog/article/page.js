import ArticleCard from '../../../../components/article_card'
import Header from '../../../../components/header'

export default function ArticlePage(){
    return(
        <div>
            <Header/>
            <div className=' m-4'>
                <ArticleCard />
            </div>
        </div>
    )
}