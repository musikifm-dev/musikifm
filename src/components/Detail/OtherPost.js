import { useEffect, useState } from 'react';
import BlogItem from 'components/Items/BlogItem';

const OtherPost = () => {
  const [blogData, setblogData] = useState([{}]);

  useEffect(() => {
    fetch('http://localhost:1337/api/blog-report')
      .then((response) => response.json())
      .then((data) => {
        setblogData(data);
      });
  }, []);

  const itemm = blogData;
  const detailTitle = document.getElementsByClassName('detail');

  console.log(detailTitle);

  return (
    <div className="blog mt-5">
      <div className="titleDiv">
        <h3>OTHER POSTS</h3>
      </div>

      {itemm.map((item, i) => {
        if (item.homepage == true && i < 7 && detailTitle[0].dataset.id != item.id) {
          return (
            <div className="other" key={i}>
              <BlogItem item={item} key={4} />
            </div>
          );
        }

        return;
      })}
    </div>
  );
};

export default OtherPost;
