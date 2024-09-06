import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eum ducimus animi natus perferendis
            itaque ipsa amet libero, ex quam excepturi tempora magnam voluptatum pariatur, illum molestiae placeat. Ducimus, iusto?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsum eveniet, praesentium quis ducimus
            eaque illo, ab unde ad aspernatur, voluptatibus cum rerum libero suscipit omnis excepturi commodi! Optio, quod?
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati optio fugiat facere necessitatibus nam! Minima harum, magnam, facilis reiciendis aspernatur
            officia incidunt eaque molestiae impedit cumque totam qui, voluptates ut!
          </p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, excepturi sequi ut iste libero eius,
            dolorum enim quibusdam soluta fugit laboriosam earum similique aut veritatis doloremque quae dolor. Aperiam, minima?
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, amet distinctio, quas temporibus maiores eos natus tenetur error,
            hic perspiciatis animi. Exercitationem, amet! Doloremque libero, facilis ex soluta explicabo mollitia?
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum reprehenderit temporibus nobis doloribus atque fugiat
            consequatur commodi, magni facilis voluptatibus nesciunt quaerat nisi laudantium, sed fugit non labore? Reprehenderit, odio?
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
