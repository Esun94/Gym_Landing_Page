import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faSpa } from '@fortawesome/free-solid-svg-icons';
import workoutImage from './assets/img/workout.png';
import cardioImage from './assets/img/cardio.jpg'


function App() {
  const heroImageStyle = {
    backgroundImage: `url("${workoutImage}")`,
    backgroundSize: 'cover',
  };

  const cardioImageStyle = {
    backgroundImage: `url("${cardioImage}")`,
    backgroundSize: 'cover',

  }

  return (
    <div className="App">
      {/* section for Navigation Bar */}
      <div className='text-white' style={heroImageStyle} >
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
      <div className='text-white' style={cardioImageStyle}>
        <div className='bg-gradient-to-r from-black '>
          <div className='grid-cols-3 grid gap-x-7 text-center p-24'>
          <div className='p-3 bg-transparent rounded-md duration-500 hover:scale-110 hover:bg-red-500'>
            <FontAwesomeIcon icon={faHeartPulse} size="2xl" />
            <h2 className='m-4 text-xl'>Cardio & HIIT Classes</h2>
            <p>Our professional staff of personal trainers will create a plan that's tailored to your goals—and together, you'll work to unlock the results you want. At every step of the way, you'll be driven by a passionate trainer using the latest science during in-club sessions.
              MAKE REAL RESULTS HAPPEN
              It all starts here. For over 25 years, we've paired hundreds of thousands of members with expert trainers that know how to design a program to support your unique goals, passions, and personality.</p>
          </div>
          <div className='p-3 bg-transparent rounded-md duration-500 hover:scale-110 hover:bg-red-500'  >
            <FontAwesomeIcon icon={faDumbbell} size="2xl" />
            <h2 className='m-4 text-xl '>Certified Trainer personal/group classes</h2>
            <p>Our professional staff of personal trainers will create a plan that's tailored to your goals—and together, you'll work to unlock the results you want. At every step of the way, you'll be driven by a passionate trainer using the latest science during in-club sessions.
              MAKE REAL RESULTS HAPPEN
              It all starts here. For over 25 years, we've paired hundreds of thousands of members with expert trainers that know how to design a program to support your unique goals, passions, and personality.
            </p>
          </div>
          <div className='p-3 bg-transparent rounded-md duration-500 hover:scale-110 hover:bg-red-500' >
            <FontAwesomeIcon icon={faSpa} size="2xl" />
            <h2 className='m-4 '>Spa & Juice Bar</h2>
            <p>Our professional staff of personal trainers will create a plan that's tailored to your goals—and together, you'll work to unlock the results you want. At every step of the way, you'll be driven by a passionate trainer using the latest science during in-club sessions.
              MAKE REAL RESULTS HAPPEN
              It all starts here. For over 25 years, we've paired hundreds of thousands of members with expert trainers that know how to design a program to support your unique goals, passions, and personality.</p>
          </div>

          </div>

        </div>
      </div>
      {/* About Section */}
      <div className='border-2 border-red-600 p-12 text-center'>
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
