import React from 'react';
import Link from 'antd/es/typography/Link';


const App = () => {
  return (
    <>
      <header className='flex justify-between items-center shadow-xl py-3 px-9'>
        <div className="logo">
          <img src="/vite.svg" alt="" />
        </div>

        <nav className="flex items-center">
          <ul className="flex space-x-4 mr-8">
            <li><a href="/" className="text-blue-400">Home</a></li>
            <li><a href="/jobs" className="text-blue-400">Jobs</a></li>
            <li><a href="/companies" className="text-blue-400">Companies</a></li>
            <li><a href="/about" className="text-blue-400">About Us</a></li>
          </ul>
          <div className="flex items-center">
            <button className="bg-white text-blue-400 px-4 py-2 rounded">Sign Up</button>
            <button className="bg-blue-400 text-white px-4 py-2 rounded ml-4">Post a Job</button>
          </div>
        </nav>
      </header>

      <main className="flex">
 
  <div className="flex flex-col justify-center items-center" style={{flex: 1}}>
    {/* Content for the second div */}
    <h6>Your Trusted Career Partner</h6>
    <p style={{fontSize: '52px'}}>Unlock Your Dream <span className='text-blue-400'>Career</span></p>
    <p>Our platform is dedicated to empowering individuals, connecting <br/>talent with the right opportunities, and fostering professional growth.</p>

    <div className="flex items-center " style={{ marginTop: '40px' }}>
  <div className="relative flex-grow">
    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
      {/* Search icon */}
      <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    </span>
    <input type="text" placeholder="Job titles, Keyword" className="pl-10 flex-grow px-3 py-1 border rounded-l-md focus:outline-none focus:border-blue-400" />
  </div>
  <div className="relative flex-grow">
    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
      {/* Location icon */}
      <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    </span>
    <input type="text" placeholder="Enter Location" className="pl-10 flex-grow px-3 py-1 border focus:outline-none focus:border-blue-400" />
  </div>
  <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md">Search Jobs</button>
</div>
<p className='text-[16px]'style={{ marginTop: '20px' }}><span className='font-bold'>Popular Searches:</span>Designer,Developers,Programmers,Architect</p>

  </div>
  <div className="content-container" style={{backgroundImage: "url('./images/bgimage.png')", backgroundSize: 'cover', backgroundPosition: 'right', minHeight: 'calc(100vh - 64px)', flex: 1}}>
    {/* Content for the first div */}
  </div>
  
  


</main>
<div className='flex flex-row'>
<h1 className='font-bold px-12'>Popular categories</h1>
<h1 className=' font-bold px-96 '>See all</h1>



</div>

<footer className='bg-gray-700 text-white flex justify-between p-10 gap-10'>
    <div className="flex flex-col ">
    <div className="logo">
          <img src="/footerlogo.svg" alt="" />
          <p className='' style={{ marginTop: '20px', fontSize:'20px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Nobis, possimus molestiae! Atque quas sit .<br/> perspiciatis magnam pariatur suscipit modi tempore eaque .<br/>similique explicabo distinctio quidem autem ad,.<br/> architecto ex dolorum?</p>
        </div>
    </div>
    
    
    <div className="flex flex-col gap-3 my-10"> 
        <div className="Jobseekers">
          <p className='font-bold'style={{ fontSize: '30px' }}>Job Seekers</p>

          {/* here <p></p> tags will be replaces with <Link></Link> */}

            <p className='' style={{ fontSize: '18px' }}>Search Jobs</p>
            <p className='' style={{ fontSize: '18px' }}>Explore Jobs</p>
            <p className='' style={{ fontSize: '18px' }}>Saved Jobs</p>
            <p className='' style={{ fontSize: '18px' }}>Applied Jobs</p>
        
        </div>
    </div>
    <div className="flex flex-col gap-3 my-10">
        <div className="Employers">
          <p className='font-bold'style={{ fontSize: '30px' }}>Employers</p>

          {/* here <p></p> tags will be replaces with <Link></Link> */}

            <p className='' style={{ fontSize: '18px' }}>Register</p>
            <p className='' style={{ fontSize: '18px' }}>Post Jobs</p>
            <p className='' style={{ fontSize: '18px' }}>Applications</p>
            <p className='' style={{ fontSize: '18px' }}>My Jobs Postings</p>
        
        </div>
    </div>
    <div className="flex flex-col gap-3 my-10">
        <div className="Legal">
          <p className='font-bold'style={{ fontSize: '30px' }}>Legal</p>
          
          {/* here <p></p> tags will be replaces with <Link></Link> */}

            <p className='' style={{ fontSize: '18px' }}>Cookies Policy</p>
            <p className='' style={{ fontSize: '18px' }}>Privacy Policy</p>
            <p className='' style={{ fontSize: '18px' }}>Terms of Service</p>
        
        </div>
    </div>
    </footer>
    </>
  
  );
};

export default App;
