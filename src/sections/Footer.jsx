import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <>
      <div className="flex ml-5 mt-10 mr-5 max-md:flex-col max-md:mb-4">
        <h2 className="mr-10 text-blue-600 p-2 text-3xl font-bold whitespace-nowrap">Join Us</h2>
        <p className="border-l-2 rounded-sm p-4 text-lg">
          Ready to take control of your financial future? Join CoinEd today and start your journey towards financial literacy and empowerment. Sign up or contact us to learn more about how we can help you achieve your financial goals.
        </p>
      </div>
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