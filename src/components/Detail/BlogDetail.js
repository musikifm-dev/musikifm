import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { APP } from 'utils/constants'
import OtherPost from './OtherPost'

export default function BlogDetail() {
  const { id } = useParams()

  const [results, setResult] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        const res = await axios.get(`${APP.blogs}/${id}?populate=*`)
        setResult(res.data.data)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
    fetchData()
  }, [id])

  if (loading) return <p>Loading</p>
  if (error) return <p>Error...</p>

  var imgBlog = APP.base + results.attributes.image.data.attributes.url

  return (
    <div className="page">
      <div className="row">
        <div className="detail col-md-9" key={results.id} data-id={results.id}>
          <h1 className="detailTitle">{results.attributes.title}</h1>
          <div className="detailImage">
            <img src={imgBlog} alt="imgBlogImage"></img>
          </div>

          <div className="detailContent">
            <p>{results.attributes.content}</p>
          </div>
        </div>
        <div className="col-md-3">
          <OtherPost id={id} />
        </div>
      </div>
    </div>
  )
}
