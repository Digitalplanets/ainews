import React from 'react'
import { motion } from 'framer-motion'
import '../Transitions/PageTransition.Style.css'

const PageTransition = () => {
  return (
    <>
        <motion.div
        initial={{opacity: 1}} 
        animate={{opacity: 0}}
        transition={{ duration: 1}} 
        className='page-transition-wrapper'>
            <div className='hueman-wrapper'>
                <h1 className='hueman'>H</h1>
            </div>
        </motion.div>
    </>
  )
}

export default PageTransition