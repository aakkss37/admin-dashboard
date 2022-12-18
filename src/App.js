import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customer, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
import './App.css';
import { useStateContext } from './contexts/ContextProvider';


function App () {

	const { activeMenu } = useStateContext()


	return (
		<div>
			<BrowserRouter>
				<div className='flex relative dark:bg-main-dark-bg'>


					{/* SETTING BUTTON */}
					<div className='fixed right-4 bottom-4 ' style={{ zIndex: '1000' }}>
						<TooltipComponent content='Settings' position='Top'>
							<button
								type='button'
								className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
								style={{
									background: 'blue',
									borderRadius: '50%'
								}}>
								<FiSettings />
							</button>
						</TooltipComponent>
					</div>



					{/* SIDE BAR ---> which will toggle in state of "activeMenu"  */}
					{
						activeMenu
							?
							(<div className='w-64 fixed sidebar dark:bg-secondary-dark-bg bg-white'> <Sidebar /></div>)
							:
							(<div className='dark:bg-secondary-dark-bg'> <Sidebar /></div>)
					}



					{/* NAVIGATION BAR */}
					<div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-64' : 'flex-2'}`}>
						<div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
							<Navbar />
						</div>





						{/* ROUTES */}
						<div>
							<Routes>
								{/* Dashboard */}
								<Route path='/' element={<Ecommerce />} />
								<Route path='/ecommerce' element={<Ecommerce />} />

								{/* Pages */}
								<Route path='orders' element={<Orders />} />
								<Route path='employeescustomers' element={<Employees />} />
								<Route path='customers' element={<Customer />} />

								{/* Apps */}
								<Route path='calender' element={<Calendar />} />
								<Route path='kanban' element={<Kanban />} />
								<Route path='editor' element={<Editor />} />
								<Route path='colorPicker' element={<ColorPicker />} />

								{/* Charts */}
								<Route path='line' element={<Line />} />
								<Route path='area' element={<Area />} />
								<Route path='bar' element={<Area />} />
								<Route path='bar' element={<Bar />} />
								<Route path='pie' element={<Pie />} />
								<Route path='financial' element={<Financial />} />
								<Route path='colormaping' element={<ColorMapping />} />
								<Route path='pyramid' element={<Pyramid />} />
								<Route path='pyramid' element={<Stacked />} />
							</Routes>
						</div>
					</div>



				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
