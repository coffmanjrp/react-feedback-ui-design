import { IconContext } from 'react-icons';

const Icon = ({ icon, className }) => {
  return (
    <IconContext.Provider value={{ className }}>{icon}</IconContext.Provider>
  );
};

export default Icon;
