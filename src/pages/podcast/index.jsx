import { useEffect, useState } from 'react';
import Card from 'components/Card';
// import PodcastItem from 'components/Items/PodcastItem';
import { URL_PODCAST } from '../../utils/URL';
import styles from './style.module.scss';

const Podcast = () => {
  const [podcastData, setPodcastData] = useState([{}]);

  useEffect(() => {
    fetch(URL_PODCAST)
      .then(response => response.json())
      .then(data => {
        setPodcastData(data);
        console.log(data);
      });
  }, []);
  console.log(podcastData);
  return (
    <div className="page">
      <div className={`row row-cols-5 ${styles.podcast}`}>
        {podcastData.map((item, i) => (
          <div className="col col-lg-3 col-md-4 col-xs-6" key={i}>
            {/* <PodcastItem item={item} key={item.id} /> */}
            <Card key={item.id} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Podcast;
