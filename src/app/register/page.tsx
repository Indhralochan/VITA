import { Metadata } from "next"
import { AuthForm } from '@/app/register/components/AuthForm'
import Navbar  from '@/components/Navbar'
import { ScrollArea } from "@/components/ui/scroll-area";
export default function AuthenticationPage() {
  return (
    <>
     <ScrollArea>
    <div className="w-full flex flex-col car">
      <Navbar nav={false}/>
        <div className="py-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[500px] py-8">
            <AuthForm />
          </div>
        </div>
        </div>
        </ScrollArea>
    </>
  )
}