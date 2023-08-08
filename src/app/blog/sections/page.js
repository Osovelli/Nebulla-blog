import ArticleCard from '../../../components/section_page'
import dynamic from 'next/dynamic'

const DynamicHeader = dynamic(() => import('../../../components/header'), {ssr: false})

export default function ArticlePage(){
    return(
        <div>
            <DynamicHeader/>
            <div className=' m-4'>
                <ArticleCard />
            </div>
        </div>
    )
}