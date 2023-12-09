import { ReactNode } from 'react';
import './Alert.scss'
import {   X } from 'lucide-react';
interface Iprops{
        type:string
        icon_head:ReactNode,
        title:string ,
        desc:string
}
// eslint-disable-next-line no-empty-pattern
const Alert = ({type , icon_head , title , desc}:Iprops) => {
  return (
    <div>
     <div className={type}>
       <div className='header-wrap'>
       <div className='title-head'>
        <span>
       {icon_head}
        </span>
      
        <h3>{title}</h3>
        </div>
        <span>

        <X size={25} className='close'/>
        </span>
       </div>
        <p>{desc}</p>
      
     </div>
    </div>
  )
}

export default Alert;