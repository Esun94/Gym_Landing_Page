import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faSpa } from '@fortawesome/free-solid-svg-icons';
import workoutImage from './assets/img/workout.png';
import cardioImage from './assets/img/cardio.jpg'
import pushups from './assets/video/pushups.mp4'


function App() {
  const heroImageStyle = {
    backgroundImage: `url("${workoutImage}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const cardioImageStyle = {
    backgroundImage: `url("${cardioImage}")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }

  return (
    <div className="App">
      {/* section for Navigation Bar */}
      <div className='text-white  bg-gradient-to-r from-black'>
        <div className='flex justify-start items-center'>
          <video className='relative' src={pushups} loop autoPlay muted></video>
          <div className='max-w-4xl grid gap-8 absolute left-28 border-2 border-white p-12'>
            <h1 className='text-5xl font-light'>✨ Become The Best Version of YOU ✨</h1>
            <h2 className='text-4xl font-thin'>Sign-up today and lock in our New Years Special for <b>$14.99/month</b></h2>
            <button className="bg-red-500 rounded-md h-12 w-40">
              Sign-Up Now
            </button>
          </div>
        </div>
      </div>
      {/* Card section for services */}
      <div className='text-white max-h-fit-content' style={cardioImageStyle}>
        <div className='bg-gradient-to-b from-black'>
          <h1 className='text-3xl font-light flex justify-center top-6 relative'>Included in Membership</h1>
          <div className='grid-cols-3 grid gap-x-9 text-center px-7 pt-28 pb-32 top-24 relative'>
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
      <div className='text-white' style={heroImageStyle} >
        <div className='bg-gradient-to-r from-black px-12 py-36'>

        </div>
      </div>

    </div >
  );
}

export default App;