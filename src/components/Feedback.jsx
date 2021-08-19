import { FaHeart } from 'react-icons/fa';
import { Icon } from '.';

const Feedback = ({ feedback }) => {
  return (
    <>
      <Icon icon={<FaHeart />} className="heart" />
      <strong>Thank You!</strong>
      <br />
      <strong>Feedback: {feedback}</strong>
      <br />
      <p>We'll use your feedback to improve our customer support.</p>
    </>
  );
};

export default Feedback;
