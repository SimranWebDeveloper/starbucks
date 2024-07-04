import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


export default function Footer_accordion() {
    let a="";
    const AccordionData = [
        {
          id: 1,
          name: "About Us",
          responsiveHeight: "h-[290px]",
          text:[
            {
                subName:"Our Company",
                path:"/"
                },
                {
                    subName:"Our Coffee",
                    path:"/"
                    },
            {
            subName:"Stories and News",
            path:"/"
            },
            {
            subName:"Starbucks Archive",
            path:"/"
            },
            {
            subName:"Investor Relations",
            path:"/"
            },
            {
            subName:"Customer Service",
            path:"/"
            },
            {
            subName:"Contact Us",
            path:"/"
            }
          ],
        },
        {
            id: 2,
            name: "Careeers",
            responsiveHeight: "h-[290px]",
            text:[
                {
                subName:"Starbucks Archive Culture and Values",
                path:"/"
                },
                {
                subName:"Our Coffee",
                path:"/" 
                },
                {
                   subName:"Inclusion, Diversity, and Equity" ,
                   path:"/"
                },
                {
                    subName:"College Achievement Plan",
                    path:"/"
                },
                {
                    subName:"Alumni Community",
                    path:"/" 
                    },
                    {
                        subName:"U.S. Careers",
                        path:"/" 
                        },
                        {
                            subName:"International Careers",
                            path:"/" 
                            },
            ],
          },
          {
            id: 3,
            name: "Social Impact",
            responsiveHeight: "h-[140px]",
            text:[
                {
                subName:"People",
                path:"/"
                },
                {
                subName:"Planet",
                path:"/"
                },
                {
                subName:"Environmental and Social Impact Reporting",
                path:"/"
                },
              ],
          },
          {
            id: 4,
            name: "For Business Partners",
            responsiveHeight: "h-[170px]",
            text:[
                {
                subName:"Landlord Support Center",
                path:"/"
                },
                {
                subName:"Suppliers",
                path:"/"
                },
                {
                subName:"Corporate Gift Card Sales",
                path:"/"
                },
                {
                subName:"Office and Foodservice Coffee",
                path:"/"
                },
              ],
          },
          {
            id: 5,
            name: "Order and Pick Ups",
            responsiveHeight: "h-[150px]",
            text:[
                {
                subName:"Order on the App",
                path:"/"
                },
                {
                subName:"Order on the Web",
                path:"/" 
                },
                {
                   subName:"Order and Pick Up Options" ,
                   path:"/"
                },
                {
                    subName:"Explore and Find Coffee for Home",
                    path:"/"
                }
            ],
          },
      ];

    const[activeAcc,setActiveAcc] = useState(0);
  return (
    <div className="accordion block lg:hidden">
        {
           AccordionData.map((item)=>{
            
            
            return(
                <div className="accordion-item" key={item.id}>
                    <div className="accordion-header " >
                        <button className="accordion-button my-5 flex justify-between w-full" onClick={()=>setActiveAcc(item.id===activeAcc ? 0 : item.id)}>
                            {item.name}
                            {activeAcc=== item.id ? <IoIosArrowUp /> : <IoIosArrowDown/>}
                            </button>
                        
                    </div>
                    
                    <div className={`accordion-body flex flex-col
                    ${activeAcc=== item.id ? `${item.responsiveHeight} duration-700  `: "h-0 duration-700 invisible opacity-0 "}`}>
                        
                        {
                            (item.text).map((sub)=>{
                                return(
                                    <NavLink to={sub.path} target="_blank" className={"text-gray-500 leading-10 text-sm"}>{sub.subName}</NavLink>
                                )
                            })
                        }
                    </div>
                </div>
            )
           }) 
        }


    </div>
  )
}
