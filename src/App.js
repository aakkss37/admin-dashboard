import React,{useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings }  from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import './App.css';

function App() {

  const activeMenue = true


  return (
    <div>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>


          <div className='fixed right-4 bottom-4 '  style={{zIndex: '1000'}}>
            <TooltipComponent content='Settings' position='Top'>
              <button 
                type='button' 
                className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' 
                style={{
                  background: 'blue', 
                  borderRadius: '50%'
                  }}>

                <FiSettings/>
                
              </button>
            </TooltipComponent>
          </div>

          

          {activeMenue 
          ?
          (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>sidebar</div>
          )
          :
          <div className='dark:bg-secondary-dark-bg'>sidebar w-0</div>
          }



          <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenue ? 'md:ml-72' : 'flex-2'}`}>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              navbar
            </div>
          </div>



          <div>
            <Routes> 

              {/* Dashboard */}
              <Route path='/' element="ECommerse"/>

              {/* Pages */}
              <Route path='orders' element="orders" />
              <Route path='employeescustomers' element="employeescustomers" />
              <Route path='customers' element="customers" />

              {/* Apps */}
              <Route path='calender' element="calender" />
              <Route path='kanban' element="kanban" />
              <Route path='editor' element="editor" />
              <Route path='colorPicker' element="colorPicker" />

              {/* Charts */}
              <Route path='line' element="line" />
              <Route path='area' element="area" />
              <Route path='bar' element="bar" />
              <Route path='pie' element="pie" />
              <Route path='financial' element="financial" />
              <Route path='colormaping' element="colormaping" />
              <Route path='pyramid' element="pyramid" />

            </Routes>
          </div>



        </div>
      </BrowserRouter>        
    </div>
  );
}

export default App;
