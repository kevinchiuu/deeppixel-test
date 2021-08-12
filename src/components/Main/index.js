import { GiSoundWaves } from 'react-icons/gi';
import { FaMicrophone } from 'react-icons/fa';
import './index.css'

const Main = () => {
  return(
    <div>
      <div className="heading">
        <span className="heading-icon"> <GiSoundWaves/> </span>
        <h1> Kennedy </h1>
      </div>

      <div className="patient">
        <h3> Patient </h3>
      </div>
 
      <form className="form">
        <input 
          className="form-input" 
          type="text" 
          placeholder="Enter or say patient name">
        </input>
      </form>

      <div className="voice-box">
        <h5> Tap the mic to begin </h5>
        <button className="voice-button"> <FaMicrophone/> </button>
      </div>

    </div>
  )
}

export default Main;