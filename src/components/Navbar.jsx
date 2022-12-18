import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.png';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

// REUSABLE TEMPLET FOR NEVBAR BUTTONS(icons)
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <TooltipComponent content={title} position="BottomCenter">
        <button
            type="button"
            onClick={() => customFunc()}
            style={{ color }}
            className="relative text-xl rounded-full p-3 hover:bg-light-gray"
        >
            <span style={{ background: dotColor }} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2">
                {icon}
            </span>
        </button>
    </TooltipComponent>
);



const Navbar = () => {

	const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick } = useStateContext()



    return (
        <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">

			{/* HAMBURGER MENUE ---> toggle sidebar menu */}
            <NavButton
                title="Menu"
                customFunc={() => { setActiveMenu((prevState) => (!prevState)) }}
                color="blue"
                icon={<AiOutlineMenu />}
            />

			{/* RHS NAVBAR BUTTONS(icons) */}
			<div className='flex'>
				<NavButton
					title="Cart"
					customFunc={() => { handleClick('cart') }} //calling "handleClick" function in contextProvider
					color="blue"
					icon={<FiShoppingCart />}
				/>
				<NavButton
					title="Chat"
					dotColor="#03C9D7"
					customFunc={() => { handleClick('chat') }} //calling "handleClick" function in contextProvider 
					color="blue"
					icon={<BsChatLeft />}
				/>
				<NavButton
					title="Notification"
					dotColor="#03C9D7"
					customFunc={() => { handleClick('notification') }} //calling "handleClick" function in contextProvider
					color="blue"
					icon={<RiNotification3Line />}
				/>

				{/* USER PROFILE */}
				<TooltipComponent content="Profile" position='BottomCenter'>
					<div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' onClick={()=>{handleClick('userProfile')}}>
						<img className='rounded-full w-8 h-8' src={avatar} />
						<p>
							<span className=' text-gray-400 text-14'>Hi, </span>
							{' '}
							<span className=' text-gray-400 font-bold ml-1 text-14'>Amar</span>
						</p>
						<MdKeyboardArrowDown className='text-gray-400 text-14'/>
					</div>
				</TooltipComponent>

				{/* onClick on respective navButton ---> these component will appear */}
				{isClicked.cart && <Cart/>}
				{isClicked.chat && <Chat/>}
				{isClicked.notification && <Notification/>}
				{isClicked.userPrrofile && <UserProfile/>}

			</div>


        </div>
    )
}

export default Navbar
