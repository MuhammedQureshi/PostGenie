import Tweet from '@/components/Tweet'

const App = () => {

  return (
    <div className='relative isolate mt-[12rem]'>
      <div className=''>
        {/* Tweet input comp */}
        <Tweet />
        {/* Generated tweets from the OpenAi api */}
      </div>
    </div>
  )
}

export default App