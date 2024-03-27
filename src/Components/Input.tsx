import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function Input() {
  return (
    <div className='w-1/3 flex h-60 justify-center items-center bg-[#212121] absolute bottom-0'>
        <textarea 
          name="content" 
          placeholder='Type a message...'
          className='w-5/6 h-20 max-h-full min-h-18 p-5 rounded-s-xl text-neutral-600 focus:text-white focus:outline-none text-base border border-gray-400 border-r-0 bg-transparent resize-none'
        ></textarea>
        <button className='w-1/6 h-20 bg-green-700 rounded-e-xl border border-gray-400'>
          <div>
            <FontAwesomeIcon icon={faPaperPlane} />
          </div>
        </button>
    </div>
  )
}

export default Input