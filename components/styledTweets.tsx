import { Button } from "@/components/ui/button"
import { CardContent, Card, CardTitle } from "@/components/ui/card"
import { CardHeader } from "@nextui-org/react"
import { CopyIcon } from "lucide-react"


const StyledTweets = () => {
  return (
    <Card className="sm:mx-20 mt-20 flex justify-center items-center">
    <CardContent className="flex p-4 gap-6 items-center w-full justify-between">
      <div className="flex flex-col">
        <p>I just saw a guy at the gym put a water bottle in the Pringles holder on the treadmill.</p>
        <div>funny</div>
      </div>
      <Button className="flex items-center justify-end" variant="outline">
        <CopyIcon className="w-4 h-4" />
        <span className="sr-only">Copy</span>
      </Button>
    </CardContent>
  </Card>
  )
}

export default StyledTweets;