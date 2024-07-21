import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <>
      <footer className="w-full text-white py-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center space-x-2">
            <FontAwesomeIcon icon={faEnvelope} size="2x" className="text-blue-400" />
            <FontAwesomeIcon icon={faInstagram} size="2x" className="text-blue-400" />
            <FontAwesomeIcon icon={faGithub} size="2x" className="text-blue-400" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;