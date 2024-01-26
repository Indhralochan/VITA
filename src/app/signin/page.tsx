import { AuthForm } from './components/AuthForm'
import Navbar  from '@/components/Navbar'
import { ScrollArea } from "@/components/ui/scroll-area";
export default function AuthenticationPage() {
  return (
    <>
    
    <div className="w-full flex flex-col car">
      <Navbar/>
        <div className="py-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[500px] py-8">
            <AuthForm />
          </div>
        </div>
        </div>
        
    </>
  )
}