const RatingContainer = ({ ratings, setRatings, setSelectedRating }) => {
  const handleClick = (data) => {
    const newRatings = ratings.map((obj) =>
      obj.id === data.id
        ? { ...data, active: !data.active }
        : { ...obj, active: false }
    );

    setRatings(newRatings);
    setSelectedRating(data.text);
  };

  return (
    <div className="ratings-container">
      {ratings.length > 0 &&
        ratings.map((rating) => (
          <div
            key={rating.id}
            className={`rating${rating.active ? ' active' : ''}`}
            onClick={() => handleClick(rating)}
          >
            <img src={rating.image} alt={rating.text} />
            <small>{rating.text}</small>
          </div>
        ))}
    </div>
  );
};

export default RatingContainer;
