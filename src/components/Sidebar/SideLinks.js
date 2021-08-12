import { Link } from 'react-router-dom';
import './SideLinks.css'
import { CgNotes } from 'react-icons/cg';
import { GoPerson } from 'react-icons/go';
import { ImLab } from 'react-icons/im';
import { FaFolderOpen, FaWpforms, FaHistory } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';

const SideLinks = () => {
  return (
    <div className="sidelinks"> 
      <Link to="/" className="links">
        <span className="link-icons"> <FaHistory/> </span>
        <h3> Rx History </h3>
      </Link>

      <Link to="/notes" className="links">
        <span className="link-icons"><CgNotes/> </span>
        <h3> Notes </h3>
      </Link>

      <Link to="/profile" className="links">
        <span className="link-icons"> <GoPerson/> </span>
        <h3> Profile </h3>
      </Link>

      <Link to="/labrecords" className="links">
        <span className="link-icons"> <ImLab /> </span>
        <h3> Lab Records </h3>
      </Link>

      <Link to="/documents" className="links">
        <span className="link-icons"> <FaFolderOpen/> </span>
        <h3> Documents </h3>
      </Link>

      <Link to="/forms" className="links">
        <span className="link-icons"> <FaWpforms/> </span>
        <h3> Forms </h3>
      </Link>

      <Link to="/messages" className="links">
        <span className="link-icons"> <BsChatDotsFill/> </span>
        <h3> Messages </h3>
      </Link>
    </div>
  )
};

export default SideLinks;