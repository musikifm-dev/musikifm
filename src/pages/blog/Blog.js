import BlogItem from 'components/Items/BlogItem';
import { useEffect, useState } from 'react';
import { URL_BLOG } from '../../utils/URL';

const Blog = () => {
  const [blogData, setBlogData] = useState([{}]);

  useEffect(() => {
    fetch(URL_BLOG)
      .then((response) => response.json())
      .then((data) => {
        setBlogData(data);
      });
  }, []);

  const items = blogData;

  // function allow(clicked_name) {
  //   var blogbox = document.getElementsByClassName('blogBox');
  //   console.log(clicked_name);
  // }

  return (
    <div>
      <div className="tagFilter">
        <div className="backBtn">
          <div className="#">Back</div>
        </div>
        <div className="tag">
          <ul>
            <li>
              <a href="#javascript" className="active">
                Tümü
              </a>
            </li>
            {items.map((item, i) => (
              <li key={i}>
                <a href="#javascript">{item.tag}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="page">
        <div className="row row-cols-5 blog">
          {items.map((item, i) => (
            <div className="col col-lg-3 col-md-4 col-xs-6" key={i}>
              <BlogItem item={item} key={item.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
