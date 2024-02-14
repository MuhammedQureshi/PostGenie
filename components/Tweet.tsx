'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Avatar} from "@nextui-org/react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 
  

const Tweet = () => {
  return (
    <div>
        <div className='flex items-center justify-center'>
            <Card className="flex flex-col p-10 w-full sm:mx-20 items-center justify-center">
              <CardHeader>
                <CardTitle>Tweet transformation AI</CardTitle>
                <CardDescription>Description</CardDescription>
              </CardHeader>
                <CardContent className="mt-5">
                <div className="flex w-screen sm:w-[35rem] lg:w-[50rem] xl:w-[70rem] 2xl:w-[90rem] rounded p-3">
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
                <CardFooter className="flex gap-5 justify-center w-full">
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Styles</SelectLabel>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Blueberry</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <Button className="text-sm p-5" variant={'default'}>Transform</Button>
                </CardFooter>
            </Card> 
        </div>
    </div>
  )
}

export default Tweet