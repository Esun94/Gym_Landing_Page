import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faSpa } from '@fortawesome/free-solid-svg-icons';
import workoutImage from './workout.png';


function App() {
  const backgroundImageStyle = {
    backgroundImage: `url("${workoutImage}")`,
    backgroundSize: 'cover',
  };

  return (
    <div className="App">
      {/* section for Navigation Bar */}
      <div className='text-white' style={backgroundImageStyle} >
        <div className='bg-gradient-to-r from-black px-12 py-16'>
          <div className='max-w-xl grid gap-8 my-16'>
            <h1 className='text-3xl font-thin'>✨ Become The Best Version of YOU ✨</h1>
            <h2 className='text-5xl font-normal'>Sign-up today and lock in our New Years Special for <b>$14.99/month</b></h2>
            <button className="bg-red-500 rounded-md h-10">
              Sign-Up Now
            </button>
          </div>
        </div>
      </div>
      {/* Card section for services */}
      <div className='grid-cols-3 grid gap-x-7 text-center p-6 text-white '>
        <div className='p-8 bg-red-500 rounded-md bg-gradient-to-r from-black shadow-2xl shadow-red-500 duration-500 hover:scale-110'>
        <FontAwesomeIcon icon={faHeartPulse} size="2xl" />
          <h2 className='m-4 '>Cardio</h2>
          <h3>Burn fat and improve heart health</h3>
        </div>
        <div className='p-8 bg-red-500 rounded-md bg-gradient-to-r from-black shadow-2xl shadow-red-500 duration-500 hover:scale-110'  >
          <FontAwesomeIcon icon={faDumbbell} size="2xl" />
          <h2 className='m-4 '>Weight Lifting</h2>
          <h3>Building strength and volume</h3>
        </div>
        <div className='p-8 bg-red-500 rounded-md bg-gradient-to-r from-black shadow-2xl shadow-red-500 duration-500 hover:scale-110' >
        <FontAwesomeIcon icon={faSpa} size="2xl" />
          <h2 className='m-4 '>Spa</h2>
          <p>Recover and focus on self-care</p>
        </div>
      </div>
      {/* About Section */}
    </div >
  );
}

export default App;
