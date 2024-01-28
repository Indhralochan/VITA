"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from '@/components/ui/button'
import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence, signInWithPopup, GithubAuthProvider} from "firebase/auth";
import { google_provider } from "../../../../firebase"
import { useRouter } from 'next/navigation'
import '@/app/style.css';
interface AuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export function AuthForm({ className, ...props }: AuthFormProps) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const [email,setEmail] = React.useState<string>("")
    const [password,setPassword] = React.useState<string>("")
    const router = useRouter()
    const handleGoogleAuth = () => {
        const auth = getAuth();
        setPersistence(auth, browserSessionPersistence)
            .then(() => {
                return signInWithPopup(auth, google_provider)
                    .then((data) => {
                        const user = data.user;
                        const userUid = user.uid;
                        console.log(userUid);
                        const name = user.displayName;
                        const emailId = user.email;
                        const profileUrl = user.photoURL;
                        console.log(name, emailId, profileUrl);
                        router.push("/dashboard")
                    })
                    .catch((error) => {
                        console.error("Error in signInWithPopup:", error);
                        throw error; // Rethrow the error to propagate it further
                    });
            })
            .catch((error) => {
                console.error("Error in setPersistence:", error);
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode, errorMessage); // Log or handle the error appropriately
            });
    }
    const handleGithubAuth = () => {
        
        const auth = getAuth();
        const provider = new GithubAuthProvider();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log(user);
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(error);
  });
}
const handleSignIn = async (email:string,password:string) => {
    try {
        console.log("asdfasfd",email);
        console.log("asdfadf",password);
        const auth = getAuth();
        
      await signInWithEmailAndPassword(auth , email, password);
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  const handleInputChangeEmail = (value: string) => {
    setEmail(value);
  }
const handleInputChangePass = (value: string) => {
    setPassword(value); // Assign the value to setPassword
};


    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }
    const styles = {
        border: "1px solid rgba(255, 255, 255, 0.20)",
        backgroundColor: "rgba(255, 255, 255, 0.06)",
        backdropFilter: "blur(86px)",
        overflow: "hidden",
      };
    return (
        <>
            <div className="border border-lg p-10 rounded rounded-lg card" style={styles}>
                <div className={cn("grid gap-6", className)} {...props}>
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Login to your account
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Enter your details below to login to your account
                        </p>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className="grid gap-2">
                            <div className="grid gap-1">
                            <Label className="sr-only" htmlFor="email">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    placeholder="name@example.com"
                                    type="email"
                                    autoCapitalize="none"
                                    autoComplete="email"
                                    autoCorrect="off"
                                    disabled={isLoading}
                                    onChange={(e)=>handleInputChangeEmail(e.target.value)}
                                />
                            </div>
                            <div className="grid gap-1">
                                <Label className="sr-only" htmlFor="email">
                                    password
                                </Label>
                                <Input className="change"
                                    id="password"
                                    placeholder="*****"
                                    type="password"
                                    autoCapitalize="none"
                                    autoComplete=""
                                    autoCorrect="off"
                                    disabled={isLoading}
                                    onChange={(e)=>handleInputChangePass(e.target.value)}
                                />
                            </div>
                            <Button variant='secondary' disabled={isLoading} onClick={()=>{handleSignIn(email,password)}}> 
                                {isLoading && (
                                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin text-white" />
                                )}
                                Sign In with Email and Password
                            </Button>
                        </div>
                    </form>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">
                                Or continue with
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center pb-5">
                        <div className="px-3">
                            <Button className="px-5" variant="outline" type="button" disabled={isLoading} onClick={() => { handleGoogleAuth() }}>
                                {isLoading ? (
                                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                ) : (
                                    <Icons.google className="mr-2 h-4 w-4" />
                                )}{" "}
                                Google
                            </Button>
                        </div>

                        <Button className="px-5" variant="outline" type="button" disabled={isLoading} onClick={()=>{handleGithubAuth()}}>
                            {isLoading ? (
                                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                            ) : (
                                <Icons.gitHub className="mr-2 h-4 w-4" />
                            )}{" "}

                            GitHub
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col justify-center align-center mx-auto">
                    <div className="pb-3">
                    <p className="justify-center text-center bg-background px-2 text-muted-foreground uppercase text-xs">Not a user?</p></div>
                    <Button className="px-5" variant='secondary' type="button" disabled={isLoading} onClick={()=>{router.push('/register')}}>SignUp</Button>
                </div>
            </div>
        </>
    )
}