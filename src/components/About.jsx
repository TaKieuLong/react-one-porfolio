import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b
    from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 max-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4
                border-gray-500'>About</p>
            </div>
                <p className='text-xl mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, provident nesciunt quae quis praesentium, facere veniam quod dolorem quidem dolores quam ab omnis itaque inventore commodi dolor fugit. Illo, reprehenderit!</p>
            <br />
            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quaerat dolorum in, debitis repellendus, numquam tenetur, saepe atque consequuntur expedita possimus sunt rerum minus quas commodi. Unde quisquam perferendis eius officia illum, voluptate dolorum minus? Voluptates explicabo fugit iste fugiat et veritatis accusantium ipsa odit, consectetur quasi nostrum atque eaque?
            </p>
        </div>
    </div>
  )
}

export default About