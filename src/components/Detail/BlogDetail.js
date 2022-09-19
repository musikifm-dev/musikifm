import axios from "axios"
import { useState,useEffect,useContext } from "react"
import { useParams } from "react-router-dom"
import { URL_BLOGS , API_URL} from "utils/config";
import { CommentsConfigContext, Comments, CommentForm, ErrorBox } from "strapi-comments-client"
import OtherPost from "./OtherPost";


function BlogDetail() {

    const { id } = useParams()
    const [results, setResult] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)


    
        const { setContentID } = useContext(CommentsConfigContext)
        const { contentID } = useParams()
        useEffect(() => {
          if (contentID) {
            setContentID(contentID)
          }
        }, [contentID])


    useEffect(()=>{
        async function fetchData(){
            setLoading(true)
            try{
                const res = await axios.get(URL_BLOGS + id + "?populate=*")
                setResult(res.data.data)
                setLoading(false)
            } catch(error){
                setError(error)
                setLoading(false)
            }
        }
        fetchData()
    }, [id])


    if(loading) return <p>Loading</p>
    if(error) return <p>Error...</p>

    var imgBlog = API_URL + results.attributes.image.data.attributes.url

    return(
            
    <div className="page">
        <div className="row">
        <div className="detail col-md-9" key={results.id} data-id={results.id}>
        <h1 class="detailTitle">{results.attributes.title}</h1>
        <div className="detailImage">
        <img src={imgBlog}></img>
        </div>
        
        <div className="detailContent">
        <p>{results.attributes.content}</p>
        </div>
        
        <CommentForm />
      <ErrorBox />
      <Comments />
        </div>
        <div className="col-md-3">
        <OtherPost />
        </div>
        </div>
      

        

      
    </div>

        
    )
}
export default BlogDetail