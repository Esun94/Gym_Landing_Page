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
          <div className='max-w-xl grid gap-8'>
            <h1 className='text-3xl font-light'>✨ Become The Best Version of YOU ✨</h1>
            <h2 className='text-5xl font-thin my-4'>Sign-up today and lock in our New Years Special for <b>$14.99/month</b></h2>
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
          <h2 className='m-4 '>Cardio & HIIT Classes</h2>
          <h3>Burn fat and improve heart health</h3>
        </div>
        <div className='p-8 bg-red-500 rounded-md bg-gradient-to-r from-black shadow-2xl shadow-red-500 duration-500 hover:scale-110'  >
          <FontAwesomeIcon icon={faDumbbell} size="2xl" />
          <h2 className='m-4 '>Certified Trainer led personal/group classes</h2>
          <h3>Building strength and volume</h3>
        </div>
        <div className='p-8 bg-red-500 rounded-md bg-gradient-to-r from-black shadow-2xl shadow-red-500 duration-500 hover:scale-110' >
          <FontAwesomeIcon icon={faSpa} size="2xl" />
          <h2 className='m-4 '>Spa & Juice Bar</h2>
          <p>Recover and focus on self-care</p>
        </div>
      </div>
      {/* About Section */}
      <div className='border-2 border-red-600 p-12 my-6 text-center'>
        <div className='grid grid-cols-2'>
          <h1 className='text-3xl'>ABOUT</h1>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>

        </div>

      </div>

    </div >
  );
}

export default App;
