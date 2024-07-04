import React, { useContext, useState } from "react";
import imgStarFull from "../../assets/images/reward_fullStar.png";
import { NavLink } from "react-router-dom";
import one from "../../assets/images/rewards_one.webp";
import two from "../../assets/images/rewards_two.webp";
import three from "../../assets/images/rewards_three.webp";
import r_25 from "../../assets/images/rewards_25.webp";
import r_100 from "../../assets/images/rewards_100.webp";
import r_200 from "../../assets/images/rewards_200.webp";
import r_300 from "../../assets/images/rewards_300.webp";
import r_400 from "../../assets/images/rewards_400.webp";
import endles_1 from "../../assets/images/reward_endles_1.webp";
import endles_2 from "../../assets/images/reward_endles_2.webp";
import endles_3 from "../../assets/images/reward_endles_3.webp";
import tel1A from "../../assets/images/rewards_tel1A.png";
import tel1B from "../../assets/images/rewards_tel1B.png";
import tel2A from "../../assets/images/rewards_tel2A.png";
import tel2B from "../../assets/images/rewards_tel2B.png";
import start_left from "../../assets/images/rewards_star.svg";
import start_right from "../../assets/images/reward_start_right.svg";
import start_left_mobile from "../../assets/images/reward_start_left_mobile.svg";
import start_right_mobile from "../../assets/images/reward_start_right_mobile.svg";
import delta from "../../assets/images/rewards_delta.webp";
import america from "../../assets/images/rewards_bank.webp";
import { FaExternalLinkAlt } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";
import { GlobalContext } from "../../context/GlobalState";


interface type_item {
  id: number;
  name: number;
  img: string;
  text_h1: string;
  text_p: string;
}
const dataBtn: type_item[] = [
  {
    id: 0,
    name: 25,
    img: r_25,
    text_h1: "Customize your drink",
    text_p:
      "Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup.",
  },
  {
    id: 1,
    name: 100,
    img: r_100,
    text_h1:
      "Brewed hot or iced coffee or tea, bakery item, packaged snack and more",
    text_p:
      "Treat yourself to an iced coffee, buttery croissant, bag of chips and more.",
  },
  {
    id: 2,
    name: 200,
    img: r_200,
    text_h1: "Handcrafted drink (Cold Brew, lattes and more) or hot breakfast",
    text_p:
      "Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.",
  },
  {
    id: 3,
    name: 300,
    img: r_300,
    text_h1: "Sandwich, protein box or at-home coffee",
    text_p:
      "Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.",
  },
  {
    id: 4,
    name: 400,
    img: r_400,
    text_h1: "Select Starbucks® merchandise",
    text_p:
      "Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.",
  },
];
export default function Rewards() {
  const [activeStar, setActiveStar] = useState(0);
  const {mode, setMode}=useContext(GlobalContext)

  return (
    <div className="mt-16 md:mt-20 lg:mt-24 ">
      {/* background image */}
      <div className="w-full h-[50px] flex items-center px-10  bg-[#1B3B33]">
        <h2 className="text-white ">STARBUCKS® REWARDS</h2>
      </div>
      <div
        className="rewardsBg  bg-gray-50"
        style={{
          backgroundSize: "auto 100%",
          background: `#D2EBE3 url(${imgStarFull}) center/cover`,
        }}
      >
        <div className="overflow-hidden pt-6 pb-[46rem]  md:py-14    lg:py-36  xl:py-64 px-10  leading-10 text-center md:text-start  md:w-1/3  md:flex justify-between items-center     ">
          <div className="">
            <h3 className="uppercase  text-2xl lg:text-[40px] lg:leading-10 font-semibold ">
              free coffee is a take away
            </h3>
            <p className="text-sm lg:text-xl my-4">
              Join now to start earning Rewards.
            </p>
            <NavLink
              to={"/acount/create"}
              className="rounded-full   px-3 py-1 bg-[#0E5A3C] hover:bg-[#15885A]  text-sm lg:text-lg duration-300  text-white"
            >
              join in the app
            </NavLink>
            <p className=" text-sm lg:text-xl">
              Or{" "}
              <NavLink
                to={"/mobile-apps"}
                className={"underline hover:no-underline"}
              >
                join in the app
              </NavLink>{" "}
              for the best experience
            </p>
          </div>
        </div>
      </div>
      {/* easy */}
      <div className="w-full px-10 py-16">
        <div className="text-center">
          <h3 className="text-2xl font-bold">Getting started is easy</h3>
          <small className="text-sm semibold leading-10">
            Earn Stars and get rewarded in a few easy steps.
          </small>
        </div>
        <div className="flex justify-between items-start flex-col md:flex-row  ">
          <div className="flex justify-between items-start md:items-center md:flex-col  py-4 pe-6 ">
            <img src={one} alt="" className="w-14 h-14 mr-4 mb-4" />
            <div className="text-start md:text-center">
              {/* mobile */}
              <h4 className="font-semibold pb-4 block md:hidden">
                Download the Starbucks® app
              </h4>
              <p className="block md:hidden">
                <NavLink
                  to={"/"}
                  className={"underline hover:no-underline text-[#006842]"}
                >
                  {" "}
                  Join in the app{" "}
                </NavLink>
                to get access to the full range of Starbucks® Rewards benefits.
                You can also join online.
              </p>
              {/* desktop */}
              <h4 className="font-semibold pb-4 hidden md:block">
                Create an account
              </h4>
              <p className="hidden md:block">
                To get started,
                <NavLink
                  to={"/"}
                  className={"underline hover:no-underline text-[#006842]"}
                >
                  join now.
                </NavLink>
                You can also
                <NavLink
                  to={"/"}
                  className={"underline hover:no-underline text-[#006842]"}
                >
                  {" "}
                  join in the app{" "}
                </NavLink>
                to get access to the full range of Starbucks® Rewards benefits.
              </p>
            </div>
          </div>

          <div className="flex justify-between items-start md:items-center md:flex-col  py-4 pe-6">
            <img src={two} alt="" className="w-14 h-14 mr-4 mb-4" />
            <div className="text-start md:text-center">
              {/* mobile */}
              <h4 className="font-semibold pb-4 ">
                Order and pay how you’d like
              </h4>
              <p className=" ">
                Use cash, credit/debit card or save some time and pay right
                through the app. You’ll collect Stars all ways.
                <NavLink
                  to={"/"}
                  className={"underline hover:no-underline text-[#006842]"}
                >
                  {" "}
                  Learn how{" "}
                </NavLink>
              </p>
            </div>
          </div>

          <div className="flex justify-between items-start md:items-center md:flex-col py-4 pe-6">
            <img src={three} alt="" className="w-14 h-14 mr-4 mb-4" />
            <div className="text-start md:text-center">
              <h4 className="font-semibold pb-4">Earn Stars, get Rewards</h4>
              <p className="block md:hidden">
                to get access to the full range of Starbucks® Rewards benefits.
                You can also join online.
              </p>
              <p className="hiddden md:block">
                As you earn Stars, you can redeem them for Rewards—like free
                food, drinks, and more. Start redeeming with as little as 25
                Stars!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* favorites */}
      <div className={`flex flex-col justify-between items-center w-full  ${mode  ? 'bg-gray-800 text-slate-50' :'bg-[#F0F8F6]  text-black' } h-44`}>
        <h3 className="text-3xl font-semibold pt-9">
          Get your favorites for free
        </h3>
        <div className=" ">
          {dataBtn.map((item, index) => {
            return (
              <button
                onClick={() => setActiveStar(item.id)}
                className={`text-2xl px-4 `}
              >
                {item.name}
                <span aria-hidden="true" className="text-amber-500 text-lg">
                  ★
                </span>
                <div
                  className={`w-full h-1 mt-2  duration-700  ${
                    activeStar === item.id && " bg-[#006842]"
                  }`}
                ></div>
              </button>
            );
          })}
        </div>
      </div>
      {/* favorites image */}
      <div className="w-full flex justify-center  flex-col md:flex-row items-center  shadow-inner bg-[#D2EBE3] h-[38rem] md:h-72 ">
        <div className=" w-full md:w-1/4 ">
          <img src={dataBtn[activeStar].img} alt="" className="w-full  " />
        </div>
        <div className="w-full px-10 md:w-1/2 lg:w-1/4">
          <h4 className="text-2xl font-semibold py-6 text-center md:text-start">
            {dataBtn[activeStar].text_h1}
          </h4>
          <p className="text-xs md:text-sm tracking-widest  text-center md:text-start">
            {dataBtn[activeStar].text_p}
          </p>
        </div>
      </div>
      {/* Endless Extras */}
      <div className="w-full px-10 py-32">
        <div className="text-center">
          <h3 className="text-2xl font-bold">Endless Extras</h3>
          <small className="text-[.9rem]  leading-10">
            Joining Starbucks® Rewards means unlocking access to exclusive
            benefits. Say hello to easy ordering, tasty Rewards and—yes, free
            coffee.
          </small>
        </div>
        <div className="flex justify-between items-start flex-col md:flex-row  ">
          <div className="flex justify-between items-start md:items-center md:flex-col  py-4 pe-6">
            <img src={endles_1} alt="" className="w-28 h-28 mr-4 mb-4" />
            <div className="text-start md:text-center">
              {/* mobile */}
              <h4 className="font-semibold pb-4 ">Fun freebies</h4>
              <p className="text-[.9rem] py-2">
                Not only can you earn free coffee, look forward to a birthday
                treat plus coffee and tea refills.
              </p>
              <NavLink
                to={"/"}
                className={"block underline hover:no-underline text-[#006842]"}
              >
                {" "}
                Learn more{" "}
              </NavLink>
            </div>
          </div>

          <div className="flex justify-between items-start md:items-center md:flex-col py-4 pe-6">
            <img src={endles_2} alt="" className="w-28 h-28 mr-4 mb-4" />
            <div className="text-start md:text-center">
              <h4 className="font-semibold pb-4">Order & pay ahead</h4>
              <p className="text-[.9rem] py-2">
                Enjoy the convenience of in-store, curbside or drive-thru pickup
                at select stores.
              </p>
              <NavLink
                to={"/"}
                className={"block underline hover:no-underline text-[#006842]"}
              >
                {" "}
                Learn more{" "}
              </NavLink>
            </div>
          </div>

          <div className="flex justify-between items-start md:items-center md:flex-col py-4 pe-6">
            <img src={endles_3} alt="" className="w-28 h-28 mr-4 mb-4" />
            <div className="text-start md:text-center">
              <h4 className="font-semibold pb-4">Get to free faster</h4>
              <p className="text-[.9rem] py-2">
                Earn Stars even quicker with Bonus Star challenges, Double Star
                Days and exciting games.
              </p>
              <NavLink
                to={"/"}
                className={"block underline hover:no-underline text-[#006842]"}
              >
                {" "}
                Learn more{" "}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* Cash or card */}
      {/* 1 Per */}
      <div className={` ${mode  ? 'bg-gray-800 text-slate-50' :'bg-[#F1F1EA] text-black' } px-10`}>
        <div className="text-center w-full py-20 ">
          <h3 className="text-2xl font-semibold ">
            Cash or card, you earn Stars
          </h3>
          <p className="text-[.9rem] py-2">
            No matter how you pay, you can earn Stars with your morning coffee.
            Those Stars add up to (really delicious) Rewards.{" "}
          </p>
        </div>
        <div className="flex justify-start items-start flex-col lg:flex-row ">
          <div className="w-full lg:w-1/4 py-4 ">
            <h4 className=" text-xl font-semibold pb-4 ">1★ per dollar</h4>
            <p className="text-sm">Pay as you go</p>
          </div>
          <div className="w-full lg:w-1/3 flex justify-start items-start    py-4  ">
            <img src={tel1A} alt="" className="w-32  mr-4" />
            <div className="text-start text ">
              <h4 className=" font-semibold pb-4 ">Scan and pay separately</h4>
              <p className="text-sm">
                Use cash or credit/debit card at the register.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex justify-start items-start    py-4  ">
            <img src={tel1B} alt="" className="w-32  mr-4" />
            <div className="text-start text ">
              <h4 className=" font-semibold pb-4 ">Save payment in the app</h4>
              <p className="text-sm">
                Check-out faster by saving a credit/debit card or PayPal to your
                account. You’ll be able to order ahead or scan and pay at the
                register in one step.
              </p>
            </div>
          </div>
        </div>
        <hr />
        {/* 2 Per */}

        <div className="flex justify-start items-start py-8 flex-col lg:flex-row ">
          <div className="w-full lg:w-1/4 py-4 ">
            <h4 className=" text-xl font-semibold pb-4 ">2★ per dollar</h4>
            <p className="text-sm">Add funds in the app</p>
          </div>
          <div className="w-full lg:w-1/3 flex justify-start items-start    py-4  ">
            <img src={tel2A} alt="" className="w-32  mr-4" />
            <div className="text-start text ">
              <h4 className=" font-semibold pb-4 ">Preload</h4>
              <p className="text-sm">
                To save time and earn Stars twice as fast, add money to your
                digital Starbucks Card using any payment option. Scan and pay in
                one step or order ahead in the app..
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex justify-start items-start    py-4  ">
            <img src={tel2B} alt="" className="w-32  mr-4" />
            <div className="text-start text ">
              <h4 className=" font-semibold pb-4 ">Register your gift card</h4>
              <p className="text-sm">
                Then use it to pay through the app. You can even consolidate
                balances from multiple cards in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Reward bg green */}
      <div
        className={`bg-cover bg-[url(https://www.starbucks.com/app-assets/844262945b2a8b8cfb293156e2583872.png)] sm:p-10    `}
      >
        <div className={`w-full sm:flex justify-center items-center   bg-[#D2EBE3]  px-10`}>
          {/* image left */}
          <div className=" hidden sm:block sm:w-1/3   ">
            <img src={start_left} alt="" className="" />
          </div>

          <div className="flex w-full  flex-col ">
            {/* image  */}
            <div className="block sm:hidden  ">
              <img src={start_left_mobile} alt="" className="" />
            </div>
            {/* keep */}
            <div className=" w-full block   text-center  py-4 md:py-20   ">
              <h3 className="text-2xl font-semibold py-4">
                Keep the Rewards Coming
              </h3>
              <p className="text-[.9rem] py-2">
                The Rewards don't stop at your morning coffee. Join Starbucks®
                Rewards and unlock perks from our partners, all while earning
                more Stars.
              </p>
            </div>

            <div className="block sm:flex">
              {/* delta */}
              <div className="   flex sm:block sm:justify-start justify-center sm:items-start items-center    p-4  ">
                <img src={delta} alt="" className="w-32   mr-4 " />
                <div className="text-start sm:text-center ">
                  <p className="text-sm leading-6">
                    <NavLink
                      to={
                        "/https://www.deltastarbucks.com/content/starbucks/en/overview.html?mkcpgn=dipd-sbux7042"
                      }
                      className={"underline hover:no-underline text-[#006842]"}
                    >
                      Link your Delta SkyMiles®{" "}
                    </NavLink>
                    Then use it to pay through the app. You can even consolidate
                    balances from multiple cards in one place.
                  </p>
                </div>
              </div>
              {/* bank */}
              <div className="   flex sm:block sm:justify-start justify-center sm:items-start items-center    p-4  ">
                <img src={america} alt="" className="w-32  mr-4" />
                <div className="text-start sm:text-center  ">
                  <p className="text-sm leading-6">
                    <NavLink
                      to={
                        "https://promotions.bankofamerica.com/starbucks?cm_mmc=ESZ-EnterpriseSales-_-Cobrand_Site-_-ES35LT0004_StarbucksRewardsModuleBofA_SRModuleBofA-_-StarbucksPartnerMktg"
                      }
                      className={"underline hover:no-underline text-[#006842]"}
                    >
                      Link your Bank of America{" "}
                    </NavLink>
                    eligible card and Starbucks® Rewards account to earn 2% Cash
                    Back and Bonus Stars on qualifying Starbucks in-app
                    purchases.2
                  </p>
                </div>
              </div>
            </div>
            {/* btn */}
            <div className=' text-center py-8'><NavLink to={'/mobile-apps'} className='rounded-full tracking-wider   px-4 py-2  bg-[#0E5A3C] hover:bg-[#15885A]   lg:text-lg duration-300  text-white'>Join starbucks® Rewards  </NavLink></div>
         
            
           

          </div>

             {/* image right */}
          <div className=' flex sm:w-1/3 justify-end items-end  '>
            <img src={start_right} alt="" className='hidden  sm:block  ' />
            <img src={start_right_mobile} alt="" className=' block sm:hidden  ' />
            </div>



             </div>
        </div>
        {/* Question */}
        <div className="py-16 px-10 text-start sm:px-56 ">
        <h3 className="text-2xl font-semibold py-4">
        Questions?
              </h3>
              <p className="text-sm leading-6">
                    We want to help in any way we can. You can ask your barista anytime or we’ve answered the most commonly asked questions 
                    <NavLink to={  "https://promotions.bankofamerica.com/starbucks?cm_mmc=ESZ-EnterpriseSales-_-Cobrand_Site-_-ES35LT0004_StarbucksRewardsModuleBofA_SRModuleBofA-_-StarbucksPartnerMktg" }
                      className={"underline hover:no-underline ml-2 text-[#006842]"}
                    > right over here<TbExternalLink className=" inline"/>

                    </NavLink>
                  </p>
        </div>

        {/* Text */}
        <div className={`flex  w-full flex-wrap    p-10 leading-6 ${mode  ? 'bg-gray-800 text-slate-50' :'bg-[#F9F9F9]  text-black' }`}>
          <div className="w-full grow  pl-4 py-4">
              <p className="text-[.9rem] py-2 w-full">At participating stores. Restrictions apply.</p>
              <p className="text-[.9rem] py-2">1Excludes taxes and gratuities. At participating stores. Some restrictions apply. Flights purchased close to departure may not earn double Stars. Stars and miles may not be earned on purchases of alcohol, Starbucks Cards and Starbucks Card reloads. For details, visit 
                <NavLink to={  "https://promotions.bankofamerica.com/starbucks?cm_mmc=ESZ-EnterpriseSales-_-Cobrand_Site-_-ES35LT0004_StarbucksRewardsModuleBofA_SRModuleBofA-_-StarbucksPartnerMktg" }
                  className={"underline hover:no-underline ml-2 text-[#006842]"}
                  > deltastarbucks.com/terms<TbExternalLink className=" inline"/>
              </NavLink>
              </p>
          </div>

          <div className="w-full sm:w-1/2 grow pl-4 py-4 ">
            <h4 className="font-semibold text-sm text-gray-600">EARNING STARS</h4>
              <p className="text-[.9rem] py-2">Stars cannot be earned on purchases of alcohol, Starbucks Cards or Starbucks Card reloads.</p>
              <p className="text-[.9rem] py-2">Earn 1 Star per $1 spent when you scan your member barcode in the app, then pay with cash, credit/debit cards or mobile wallets at participating stores. You can also earn 1 Star per $1 spent when you link a payment method and pay directly through the app.
</p>
              <p className="text-[.9rem] py-2">Earn 2 Stars per $1 spent when you load funds and pay with your digital Starbucks Card in the app. You can also earn 2 Stars per $1 spent when you pay in-person at a participating store with your registered physical Starbucks Card or scan your member barcode in the app, and then use any physical Starbucks Card (regardless of whether it is registered) to complete the purchase.</p>
          </div>

          <div className="w-full sm:w-1/2 grow pl-4 py-4">
          <h4 className="font-semibold text-sm text-gray-600">TERMS OF USE</h4>

              <p className="text-[.9rem] py-2">Starbucks® Rewards benefits are available at participating Starbucks stores. Not all stores have the ability to honor Rewards at this time. Visit the 
    <NavLink to={  "https://promotions.bankofamerica.com/starbucks?cm_mmc=ESZ-EnterpriseSales-_-Cobrand_Site-_-ES35LT0004_StarbucksRewardsModuleBofA_SRModuleBofA-_-StarbucksPartnerMktg" }
                  className={"underline hover:no-underline ml-2 text-[#006842]"}
                  > Starbucks Store Locator <TbExternalLink className=" inline"/>
              </NavLink>
 and search for locations honoring “Redeem Rewards”.</p>
              <p className="text-[.9rem] py-2">TERMS OF USE
    <NavLink to={  "https://promotions.bankofamerica.com/starbucks?cm_mmc=ESZ-EnterpriseSales-_-Cobrand_Site-_-ES35LT0004_StarbucksRewardsModuleBofA_SRModuleBofA-_-StarbucksPartnerMktg" }
                  className={"underline hover:no-underline ml-2 text-[#006842]"}
                  > starbucks.com/rewards/terms<TbExternalLink className=" inline"/>
              </NavLink>
                  For full program details visit 
              </p>
          </div>

          <div className="w-full sm:w-1/2 grow pl-4 py-4">
          <h4 className="font-semibold text-sm text-gray-600">BENEFITS</h4>
              <p className="text-[.9rem] py-2">Free refills available during same in-store visit only. To qualify for the Birthday Reward, you must have made at least one Star-earning transaction.</p>
          </div>

          <div className="w-full sm:w-1/2 grow pl-4 py-4">
          <h4 className="font-semibold text-sm text-gray-600">REDEEMING REWARDS</h4>
              <p className="text-[.9rem] py-2">Rewards cannot be redeemed for alcoholic beverages or multi-serve items. You pay the difference for any beverage customization over $1 and/or merchandise item over $20. Not all stores honor tiered Rewards. Select stores redeem 200 Stars for free food or drink items only.</p>
          </div>
        </div>
     
    </div>
  );
}
