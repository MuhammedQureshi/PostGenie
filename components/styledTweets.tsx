import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CardContent, Card} from "@/components/ui/card"
import { CopyIcon } from "lucide-react"


const StyledTweets = () => {
  return (
    <div>
      <Card className="sm:mx-20 mt-20 flex justify-center">
        <CardContent className="flex p-4 gap-6 w-full justify-between">
          <div className="flex flex-col">
            <p>I just saw a guy at the gym put a water bottle in the Pringles holder on the treadmill.</p>
            <div className="pt-2">
            <Badge variant="outline">😂 Funny</Badge>
            </div>
          </div>
          <Button className="flex items-center justify-end" variant="outline">
            <CopyIcon className="w-4 h-4" />
            <span className="sr-only">Copy</span>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default StyledTweets;