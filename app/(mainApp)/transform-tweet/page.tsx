import Tweet from '@/components/Tweet'
import React from 'react'

const TransformTweet = () => {
  return (
    <div className='relative isolate mt-[12rem]'>
      <div className=''>
        {/* Tweet input comp */}
        <Tweet />
        {/* Generated tweets comp */}
      </div>
    </div>
  )
}

export default TransformTweet