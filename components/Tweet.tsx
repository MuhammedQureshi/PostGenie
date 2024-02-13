import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Avatar } from "@nextui-org/react"
import { Textarea } from "@/components/ui/textarea"
  

const Tweet = () => {
  return (
    <div>
        <div className='flex items-center justify-center'>
            <Card className="flex flex-col p-10 w-full sm:mx-20 items-center justify-center">
                <CardTitle>Tweet transformation AI</CardTitle>
                <CardDescription>Deesc</CardDescription>
                <CardContent className="mt-5">
                <div className="flex w-screen sm:w-[35rem] lg:w-[50rem] xl:w-[70rem] 2xl:w-[90rem] rounded p-3 mb-4">
                  <div className="mr-4">
                    <Avatar size="lg" />
                  </div>
                  <div className="w-full mx-2">
                    <div className="flex items-center mb-2">
                      <span className=" font-s mr-2">username</span>
                      <span className="text-gray-500">@handle</span>
                    </div>
                    <Textarea 
                      className=" text-base"
                      placeholder="Paste in the tweet you want to transform" 
                    />
                  </div>
                </div>
                </CardContent>
            </Card> 
        </div>
    </div>
  )
}

export default Tweet