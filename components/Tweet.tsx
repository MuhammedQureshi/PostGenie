import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Avatar } from "@nextui-org/react"
  

const Tweet = () => {
  return (
    <div>
        <div className='flex items-center justify-center'>
            <Card className="flex flex-col p-10 w-full sm:mx-20 items-center justify-center">
                <CardTitle>Tweet transformation Ai</CardTitle>
                <CardDescription>Deesc</CardDescription>
                <CardContent className="mt-5">
                <div className="flex border border-gray-300 w-screen sm:w-[35rem] lg:w-[50rem] xl:w-[70rem] 2xl:w-[90rem] rounded p-3 mb-4">
                  <div className="mr-4">
                    <Avatar size="lg" />
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <span className=" font-s mr-2">username</span>
                      <span className="text-gray-500">@handle</span>
                    </div>
                    
                  </div>
                </div>
                </CardContent>
            </Card> 
        </div>
    </div>
  )
}

export default Tweet