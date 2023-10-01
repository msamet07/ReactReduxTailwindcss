import React, { useEffect, useState } from 'react'
import {BsLightbulb, BsBasketFill, BsFillLightbulbFill} from 'react-icons/bs';
import {useDispatch,useSelector} from 'react-redux'
import { searchAction } from '../redux/actions/search';



const Navbar = () => {
  const [color,setColor] = useState(false)
  const dispatch = useDispatch()
  const {cardItems}=useSelector(state => state.card)
  const [search,setSearch] = useState('')

  useEffect (() => {
    const root = document.getElementById('root');
    if(color){
        root.style.backgroundColor = "black";
        root.style.color = "gray";
      }else{
        root.style.backgroundColor = "white";
        root.style.color = "black";
      }
    },[color])

    const searchPost =(e)=>{
      if(e.key === 'Enter'){
        dispatch(searchAction(search)) 
      }

    }
  return (
    <div className='flex items-center justify-between px-3 h-28 '>
      <div className='text-2xl font-bold tracking-wider'>FİRMA LOGOSU</div>
      <div className='flex items-center space-x-4'> 
          <input value ={search} type="text"  onKeyDown ={searchPost} onChange={e=> setSearch(e.target.value)} className='border p-3 outline-none rounded-lg'  placeholder='search' />
          <div onClick={()=> setColor (!color)}>
            {
               color ?  <BsFillLightbulbFill size ={25} className='cursor-popnter'/> : <BsLightbulb size ={25} className='cursor-popnter'/>
            }
          
          </div>
          
          <div onClick ={() => dispatch ({type:'DRAWER' , payload :true })} className='relative'>
            <BsBasketFill  size ={25} className='cursor-pointer'/>
            <span className='absolute -top-2 -right-3 px-2 bg-red-600 text-white rounded-full text-sm'>{cardItems?.length}</span>
          </div>
      </div>
    </div>
  )
}

export default Navbar
