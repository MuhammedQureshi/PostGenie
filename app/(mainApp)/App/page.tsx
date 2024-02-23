import Tweet from '@/components/Tweet'
import StyledTweets from '@/components/styledTweets';

const App = () => {

  return (
    <div className='relative isolate mt-[12rem]'>
      <div className=''>
        {/* Tweet input comp */}
        <Tweet />
        {/* Generated tweets from the OpenAi api */}
        <StyledTweets />
      </div>
    </div>
  )
}

export default App