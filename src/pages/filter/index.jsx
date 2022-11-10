import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Filter = ({ cards, tags, setFilter, activeFilter, setActiveFilter }) => {
  useEffect(() => {
    if (activeFilter === 'All') {
      setFilter(cards);
      return;
    }
    const filteredCards = cards.filter((card) => card.tags.includes(activeFilter));
    setFilter(filteredCards);
  }, [activeFilter]);

  return (
    <div className="filter-container">
      <button className={activeFilter === 'All' ? 'active' : ''} onClick={() => setActiveFilter('All')}>
        All
      </button>
      {tags.map((tag) => {
        return (
          <button
            key={tag.indexOf(tag)}
            className={activeFilter === tag ? 'active' : ''}
            onClick={() => setActiveFilter(tag)}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
};

Filter.propTypes = {
  cards: PropTypes.shape({
    filter: PropTypes.string,
  }),
  activeFilter: PropTypes.any,
  setActiveFilter: PropTypes.any,
  setFilter: PropTypes.any,
  filter: PropTypes.number,
  tags: PropTypes.string,
};

export default Filter;
