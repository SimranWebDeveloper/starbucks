import { Box, Button, Grid, Stack, Typography,ListItem } from '@mui/material'
import img1 from '../../assets/images/home_img1.jpg'
import img2 from '../../assets/images/home_img2.jpg'
import img3 from '../../assets/images/home_img3.jpg'
import img4 from '../../assets/images/home_img4.jpg'
import img5 from '../../assets/images/home_img5.webp'
import img6 from '../../assets/images/home_img6.webp'
import img7 from '../../assets/images/home_img7.webp'
import img8 from '../../assets/images/home_img8.jpg'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className='mt-16 lg:mt-32  lg:px-10 shadow-md'>
      <Grid container  spacing={4} >
        {/*first Row */}
        <Grid item xs={12}  >
        <Grid container className='bg-[#D9CCEE] flex justify-center items-center '>

          <Grid  item xs={12} md={6} className='bg-blue-300 h-full w-full '>
            <img src={img1} alt='sturbuck' className='h-full object-cover '/>
          </Grid>
          <Grid  item xs={12} md={6} className='bg-[#D9CCEE] text-[#1B3B33] py-10'>
            <Stack  spacing={2} direction="column"  justifyContent="center"  alignItems="center"  className=' h-full px-10 md:px-16 lg:px-24'>
              <h3 className='text-xl lg:text-3xl xl:text-5xl md:mt-3 lg:mt-6 font-bold text-center'>{t("home.lavender")}</h3>
              <h6 className='text-lg md:text-xl lg:text-2xl text-center'>{t("home.lavenderdetail")}</h6>
              <button className='border-2 font-semibold rounded-3xl  border-[#1b3b33] hover:bg-[#0000001a] duration-300 px-3 py-1 '>{t("home.order")}</button>
            </Stack>
          </Grid>
          </Grid>
        </Grid>
        {/* second Row */}
        <Grid  item xs={12}  >
        <Grid container  className='bg-[#F1F1EA] flex justify-center items-center '>

          <Grid  item xs={12} md={6} className=' h-full w-full bg-[#F1F1EA] lg:order-1 '>
            <img src={img2} alt='sturbuck' className='h-full object-cover  '/>
          </Grid>
          <Grid  item xs={12} md={6} className='bg-[#F1F1EA] text-[#1B3B33] py-10'>
            <Stack  spacing={2} direction="column"  justifyContent="center"  alignItems="center"  className=' h-full px-10 md:px-16 lg:px-24'>
            <h3 className='text-lg lg:text-xl xl:text-2xl font-bold text-center'>{t("home.earn")}</h3>
              <h6 className='text-lg lg:text-lg xl:text-xl text-center'>{t("home.earndetail")}</h6>
              <button className='border-2 font-semibold rounded-3xl bg-[#1b3b33] text-white border-[#1b3b33] hover:bg-[rgba(27,59,51,0.8)] duration-300 px-3 py-1 '>{t("home.get")}</button>
            </Stack>
          </Grid>
          </Grid>
        </Grid>
                {/* thirty Row */}
                <Grid  item xs={12}  >
        <Grid container  className='bg-[#C8EDC6] flex justify-center items-center ' >

          <Grid  item xs={12} md={6} className='h-full w-full bg-white'>
            <img src={img3} alt='sturbuck' className='h-full object-cover  '/>
          </Grid>
          <Grid  item xs={12} md={6} className='bg-[#C8EDC6] text-[#1B3B33] py-10 tracking-widest'>
            <Stack  spacing={2} direction="column"  justifyContent="center"  alignItems="center"  className=' h-full px-10 md:px-16 lg:px-24'>
            <h3 className='text-xl lg:text-3xl xl:text-5xl md:mt-3 lg:mt-6 font-bold text-center'>{t("home.positively")}</h3>
              <h6 className='text-lg md:text-xl lg:text-2xl text-center'>{t("home.positivelydetail")}</h6>
              <button className='border-2 font-semibold rounded-3xl  border-[#1b3b33] hover:bg-[#0000001a] duration-300 px-3 py-1 '>Get started</button>

            </Stack>
          </Grid>
          </Grid>
        </Grid>
                {/* fourty Row */}
                <Grid  item xs={12}  >
        <Grid container className='bg-[#F5C9BC] flex justify-center items-center ' >

          <Grid  item xs={12} md={6} className=' h-full w-full bg-white md:-order-1'>
            <img src={img4} alt='sturbuck' className='h-full object-cover '/>
          </Grid>
          <Grid  item xs={12} md={6} className='bg-[#F5C9BC] text-[#1B3B33] py-10 '>
            <Stack  spacing={2} direction="column"  justifyContent="center"  alignItems="center"  className=' h-full px-10 md:px-16 lg:px-24'>
              <h3 className='text-lg lg:text-xl xl:text-2xl font-bold text-center'>{t("home.multiply")}</h3>
              <h6 className='text-lg lg:text-lg xl:text-xl text-center '>{t("home.multiplydetail")}</h6>
              <button className='border-2 font-semibold rounded-3xl  border-[#1b3b33] hover:bg-[#0000001a] duration-300 px-3 py-1 '>{t("home.send")}</button>
            </Stack>
          </Grid>
          </Grid>
        </Grid>
                {/*5-th Row */}
                <Grid item xs={12}  >
        <Grid container className='bg-[#DCE5F6] flex justify-center items-center '>

          <Grid  item xs={12} md={6} className='bg-blue-300 h-full w-full'>
            <img src={img5} alt='sturbuck' className='h-full object-cover '/>
          </Grid>
          <Grid  item xs={12} md={6} className='bg-[#DCE5F6] text-[#1B3B33] py-10'>
            <Stack  spacing={2} direction="column"  justifyContent="center"  alignItems="center"  className=' h-full px-10 md:px-16 lg:px-24'>
            <h3 className='text-xl lg:text-3xl xl:text-5xl md:mt-3 lg:mt-6 font-bold text-center'>{t("home.protein")}</h3>
              <h6 className='text-lg md:text-xl lg:text-2xl text-center'>{t("home.proteindetail")}</h6>
              <button className='border-2 font-semibold rounded-3xl  border-[#1b3b33] hover:bg-[#0000001a] duration-300 px-3 py-1 '>{t("home.order")}</button>
            </Stack>
          </Grid>
          </Grid>
        </Grid>
        {/* 6-yh Row */}
        <Grid  item xs={12}  >
        <Grid container className='bg-[#D9CCEE] flex justify-center items-center '>

          <Grid  item xs={12} md={6} className=' h-full w-full bg-white  md:-order-1'>
            <img src={img6} alt='sturbuck' className='h-full object-cover '/>
          </Grid>
          <Grid  item xs={12} md={6} className='bg-[#D9CCEE] text-[#1B3B33] py-10'>
            <Stack  spacing={2} direction="column"  justifyContent="center"  alignItems="center"  className=' h-full px-10 md:px-16 lg:px-24'>
            <h3 className='text-lg lg:text-xl xl:text-2xl font-bold text-center'>{t("home.our")}</h3>
              <h6 className='text-lg lg:text-lg xl:text-xl text-center '>{t("home.ourdetail")}</h6>
              <button className='border-2 font-semibold rounded-3xl  border-[#1b3b33] hover:bg-[#0000001a] duration-300 px-3 py-1 '>{t("home.meet")}</button>
            </Stack>
          </Grid>
          </Grid>
        </Grid>
                {/* 7-yh Row */}
                <Grid  item xs={12}  >
        <Grid container className='bg-[#E89131] flex justify-center items-center ' >

          <Grid  item xs={12} md={6} className=' h-full w-full bg-white'>
            <img src={img7} alt='sturbuck' className='h-full object-cover  '/>
          </Grid>
          <Grid  item xs={12} md={6} className='bg-[#E89131] text-[#1B3B33] py-10'>
            <Stack  spacing={2} direction="column"  justifyContent="center"  alignItems="center"  className=' h-full px-10 md:px-16 lg:px-24'>
            <h3 className='text-xl lg:text-3xl xl:text-5xl md:mt-3 lg:mt-6  font-bold text-center'>{t("home.let")}</h3>
              <h6 className='text-lg md:text-xl lg:text-2xl text-center'>{t("home.letdetail")}</h6>
              <button className='border-2 font-semibold rounded-3xl  border-[#1b3b33] hover:bg-[#0000001a] duration-300 px-3 py-1 '>{t("home.order")}</button>
            </Stack>
          </Grid>
          </Grid>
        </Grid>
                {/* 8-th Row */}
                <Grid  item xs={12}  >
        <Grid container className='bg-[#006842] flex justify-center items-center '>

          <Grid  item xs={12} md={6} className=' h-full w-full bg-white md:-order-1'>
            <img src={img8} alt='sturbuck' className='h-full object-cover  '/>
          </Grid>
          <Grid  item xs={12} md={6} className='bg-[#006842] text-white py-10'>
            <Stack  spacing={2} direction="column"  justifyContent="center"  alignItems="center"  className=' h-full px-10 md:px-16 lg:px-24'>
            <h3 className='text-lg lg:text-xl xl:text-2xl font font-bold text-center'>{t("home.asimle")}</h3>
              <h6 className='text-lg md:text-xl text-center '>- Brenda, Starbucks Partner (Employee)</h6>
              <h6 className='text-lg lg:text-lg xl:text-xl text-center px-4'>Our partners uplift each other and their communities every day.</h6>
              <button className='border-2 font-semibold rounded-3xl  border-white hover:bg-[#0000001a] duration-300 px-3 py-1 '>Learn More</button>
            </Stack>
          </Grid>
          </Grid>
        </Grid>
        {/* Text */}
        <Grid >
          <p className='text-sm leading-6 p-16 lg:px-56 xl:px-96 text-center'>*At participating stores only. Some restrictions apply. Linked Card members will earn 2% Cash Back on the full purchase price of every Qualifying Purchase. Bonus Star offer excludes taxes and tips. Stars may not be earned on purchases of alcohol or on reloads of Starbucks Cards that are not registered. For full details, visit <NavLink className={'text-blue-500 hover:underline'} to={'https://promotions.bankofamerica.com/starbucks'}>www.starbucks.com/bofa</NavLink>  Bank of America, N.A. Member FDIC.</p>
        </Grid>
      </Grid>

      
    </div>
  )
}
















{/* <Grid item xs={12} md={6} style={{ height: '50vh', overflow: 'hidden' }}>
<Stack  sx={{  alignItems: 'center', padding: '68px' ,backgroundColor: '#00754a',color: 'white', height: '50vh' ,textAlign: 'center'}}>
  <Typography variant='h6' sx={{fontWeight: 'bold',fontSize: '24px',marginBottom: '24px'}}>Get rewarded with Bank of America</Typography>
  <Typography variant='h6' sx={{fontSize: '19px',fontWeight: '550',  fontFamily: "SoDo Sans Bold"}}>
      Now Starbucks® Rewards members can link their eligible Bank of America card and enjoy special perks, like 2% Cash Back and Bonus Stars on qualifying Starbucks in-app purchases.*
  </Typography>
</Stack>
</Grid> */}