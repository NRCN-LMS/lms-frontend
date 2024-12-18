import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from "react"

const Login = () => {
    const [signUpInput, setSignUpInput] = useState({ name: "", email: "", password: "" });
    const [loginInput, setLoginInput] = useState({ email: "", password: "" });

    const changeInputHandle = (e, type) => {
        const { name, value } = e.target;
        if (type === "signup") {
            setSignUpInput({ ...signUpInput, [name]: value })
        } else {
            setLoginInput({ ...loginInput, [name]: value })
        }
    }
    return (
        <div className="flex items-center w-full justify-center">
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="signup">SignUp</TabsTrigger>
                    <TabsTrigger value="login">Login</TabsTrigger>
                </TabsList>
                <TabsContent value="signup">
                    <Card>
                        <CardHeader>
                            <CardTitle>SignUp</CardTitle>
                            <CardDescription>
                                Create a new account and click register when you're done.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="name">Name</Label>
                                <Input type="text" name="name" value={signUpInput.name} onChange={changeInputHandle} placeholder="eg. Arun" required="true" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="username">Email</Label>
                                <Input type="email" name="email" value={signUpInput.email} onChange={changeInputHandle} placeholder="Your Email @" required="true" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="username">Password</Label>
                                <Input type="password" name="password" value={signUpInput.password} onChange={changeInputHandle} placeholder="******" required="true" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Register</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="login">
                    <Card>
                        <CardHeader>
                            <CardTitle>Login</CardTitle>
                            <CardDescription>
                                Login your password here. After signup , you'll be logged in.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="current">Register Email</Label>
                                <Input text="email" name="email" value={loginInput.email} onChange={changeInputHandle} placeholder="please Enter the Email" required="true" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="new">Password</Label>
                                <Input text="password" name="password" value={loginInput.email} onChange={changeInputHandle} placeholder="******" required="true" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Login</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>

    )
}


export default Login;