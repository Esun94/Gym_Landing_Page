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
        <div className='bg-gradient-to-r from-black to-transparent px-12 py-16'>
          <div className='max-w-xl grid gap-8 my-16'>
            <h1 className='text-3xl font-thin'>Become The Best Version of YOU</h1>
            <h2 className='text-5xl font-normal'>Stop being a fat bitch for $14.99/month</h2>
            <button className="bg-red-500 rounded-md h-10">
              Sign-Up Now
            </button>
          </div>
        </div>
      </div>
      {/* Double card section Mens/Womens */}
      <div className='border-2 border-red-600 grid-cols-2 grid text-center'>
        <div className='bg-gradient-to-r from-black'>
          <h3>Hello world</h3>
        </div>
        <div className='bg-gradient-to-r from-black' >
          <h3>Hello Again</h3>
        </div>
      </div>
      {/* About Section */}
    </div >
  );
}

export default App;
