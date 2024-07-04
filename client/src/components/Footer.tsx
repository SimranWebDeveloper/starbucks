import { Divider, Stack } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { FaFacebook,FaSpotify,FaPinterest,FaInstagramSquare,FaYoutube,FaTwitter } from "react-icons/fa";
import Footer_accordion from './Footer_accordion';

export default function Footer() {
  return (
    <>
      
      <footer className='px-10  pt-10   '>
      <Footer_accordion/>
        {/* first section */}
        <section className='  hidden lg:block'>
        <div className='w-full  lg:flex  justify-between items-start space-x-4 '>
          <div className=''>
            <h3 className='text-xl mb-6'>About Us</h3>
            <Stack spacing={3} className='text-gray-500 '>
            <NavLink to={"/"}  className={'hover:text-black'}>Our Company</NavLink>
            <NavLink  to={'/'} className={'hover:text-black'}>Our Coffee</NavLink>
            <NavLink  to={'/'} className={'hover:text-black'}>Stories and News</NavLink> 
            <NavLink  to={'/'} className={'hover:text-black'}>Starbucks Archive</NavLink>
            <NavLink  to={'/'} className={'hover:text-black'}>Investor Relations</NavLink>
            <NavLink  to={'/'} className={'hover:text-black'}>Customer Service</NavLink>
            <NavLink  to={'/'} className={'hover:text-black'}>Contact Us</NavLink>
            </Stack>
          </div>
          <div>
            <h3 className='text-xl mb-6'>Careeers</h3>
            <Stack spacing={3} className='text-gray-500 '>
            <NavLink to={"/"}  className={'hover:text-black'}>Starbucks Archive Culture and Values</NavLink>
            <NavLink  to={'/'} className={'hover:text-black'}>Our Coffee</NavLink>
            <NavLink  to={'/'} className={'hover:text-black'}>Inclusion, Diversity, and Equity</NavLink>
            <NavLink  to={'/'} className={'hover:text-black'}>College Achievement Plan</NavLink>
            <NavLink  to={'/'} className={'hover:text-black'}>Alumni Community</NavLink>
            <NavLink  to={'/'} className={'hover:text-black'}>U.S. Careers</NavLink>
            <NavLink  to={'/'} className={'hover:text-black'}>International Careers</NavLink>
            </Stack>
          </div>
          <div>
            <h3 className='text-xl mb-6'>Social Impact</h3>
            <Stack spacing={3} className='text-gray-500 '>
            <NavLink to={"/"}  className={'hover:text-black'}>People</NavLink>
            <NavLink  to={'/'} className={'hover:text-black'}>Planet</NavLink>
            <NavLink  to={'/'} className={'hover:text-black'}>Environmental and Social Impact Reporting</NavLink> 
     
            </Stack>
          </div>
          <div>
            <h3 className='text-xl mb-6'>For Business Partners</h3>
            <Stack spacing={3} className='text-gray-500 '>
            <NavLink to={"/"}  className={'hover:text-black'}>Landlord Support Center</NavLink>
            <NavLink to={"/"}  className={'hover:text-black'}>Suppliers</NavLink>
            <NavLink  to={'/'} className={'hover:text-black'}>Corporate Gift Card Sales</NavLink>
            <NavLink  to={'/'} className={'hover:text-black'}>Office and Foodservice Coffee</NavLink> 
            </Stack>
          </div>
          <div>
            <h3 className='text-xl mb-6'>Order and Pick Ups</h3>
            <Stack spacing={3} className='text-gray-500 '>
            <NavLink to={"/"}  className={'hover:text-black'}>Order on the App</NavLink>
            <NavLink  to={'/'} className={'hover:text-black'}>Order on the Web</NavLink>
            <NavLink  to={'/'} className={'hover:text-black'}>Order and Pick Up Options</NavLink>
            <NavLink  to={'/'} className={'hover:text-black'}>Explore and Find Coffee for Home</NavLink>  
            </Stack>
          </div>
        </div>
        </section>
          <hr  className='my-10 border border-gray-300'/>
        {/* second section */}
        <section className=''>
          <div className='flex  pb-10 space-x-4 text-3xl'>
            <NavLink  target='_blank' to={'/https://open.spotify.com'}><FaSpotify/></NavLink>
            <NavLink  target='_blank' to={'/https://www.facebook.com/Starbucks/'}><FaFacebook /></NavLink>
            <NavLink  target='_blank' to={'/https://www.pinterest.com/'}><FaPinterest /></NavLink>
            <NavLink  target='_blank' to={'/https://www.instagram.com/starbucks/'}><FaInstagramSquare /></NavLink>
            <NavLink  target='_blank' to={'/https://www.youtube.com/'}><FaYoutube /></NavLink>
            <NavLink  target='_blank' to={'/https://www.tiktok.com/'}><FaTwitter /></NavLink>

          </div>
          <ul className='flex  flex-col   items-start leading-10  lg:leading-3 divide-black lg:divide-x-2 lg:flex-row '>
            <li><NavLink className={'text-center text-nowrap hover:underline mx-4 lg:mr-4  '} to={'/'}>Privacy Notice </NavLink></li>
            <li><NavLink className={'text-center text-nowrap hover:underline mx-4 '} to={'/'}>Terms of Use </NavLink></li>
            <li><NavLink className={'text-center text-nowrap hover:underline mx-4'} to={'/'}>Do Not Share My Personal Information</NavLink></li>
            <li><NavLink className={'text-center text-nowrap hover:underline mx-4'} to={'/'}>CA Supply Chain Act</NavLink></li>
            <li><NavLink className={'text-center text-nowrap hover:underline mx-4'} to={'/'}>Accessibility</NavLink></li>
            <li><NavLink className={'text-center text-nowrap hover:underline ml-4'} to={'/'}> Cookie Preferences</NavLink></li>
          </ul>
        </section>
        
        <p className='text-sm my-10 mx-4 text-gray-500'>© 2024 Starbucks Coffee Company. All rights reserved.</p>
      </footer>
    </>
  )
}
