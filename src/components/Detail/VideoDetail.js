import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { APP } from 'utils/constants'

export default function VideoDetail() {
  const { id } = useParams()
  const [results, setResult] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        const res = await axios.get(APP.video + id + '?populate=*')
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

  // var imgVideo= API_URL + results.attributes.image.data.attributes.url

  var tag = document.createElement('script')
  tag.src = 'http://www.youtube.com/player_api'
  var firstScriptTag = document.getElementsByTagName('script')[0]
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

  return (
    <div className="page">
      <div className="detail col-md-9" key={results.id}>
        <h1 className="detailTitle">{results.attributes.title}</h1>
        <div className="detailImage">
          <iframe
            width="100%"
            height="400"
            src={'https://www.youtube.com/embed/' + results.attributes.url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="detailContent">
          <p>{results.attributes.content}</p>
        </div>
      </div>
    </div>
  )
}
