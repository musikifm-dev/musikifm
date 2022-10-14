import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { URL_PODCASTS, API_URL } from 'utils/URL';
import { CommentsConfigContext } from 'strapi-comments-client';

function PodcastDetail() {
  const { id } = useParams();
  const [results, setResult] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const { setContentID } = useContext(CommentsConfigContext);
  const { contentID } = useParams();
  useEffect(() => {
    if (contentID) {
      setContentID(contentID);
    }
  }, [contentID]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await axios.get(URL_PODCASTS + id + '?populate=*');
        setResult(res.data.data);
        console.log(results);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error...</p>;

  var imgPodcast = API_URL + results.attributes.image.data.attributes.url;

  return (
    <div className="page">
      <div className="row">
        <div className="detail col-md-9">
          <div className="row podcastSection">
            <div className="col-md-2">
              <div className="podcastSection__play">
                <div className="play__image">
                  <img src={imgPodcast}></img>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="podcastSection__title">
                <h2>{results.attributes.songname}</h2>
              </div>
              <div className="podcastSection__artist">
                <h5>{results.attributes.artist}</h5>
              </div>

              <div className="podcastSection__tags"></div>
            </div>
            <div className="col-md-5"></div>
          </div>
          <div className="row mt-5 podcastContent">
            <p>{results.attributes.description}</p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}
export default PodcastDetail;
