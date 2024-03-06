import React from 'react'
import '../FunctionalComponent/style.css'
import style from '../FunctionalComponent/custom.module.css'
 function StyleDemo(){
    return (
        <div className='app'>
          <h1 className='primary'>Style Type 1 in React js //style.css</h1>
          <h1 style={{color:'white',backgroundColor:'grey'}} >Style Type 2 in React js //style property of css</h1>
          <h1 className={style.success}>Style Type 3 in React js //custom.module.css</h1>
        </div>
      )
  
}

export default StyleDemo
