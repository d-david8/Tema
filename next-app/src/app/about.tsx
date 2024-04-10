import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
  import  aboutData  from "./aboutData"
  import { SlSocialGithub, SlSocialLinkedin, SlSocialInstagram} from "react-icons/sl";

export default function About() {
    return(
    <main>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap- p-4" >
            {aboutData.map((data)=> (
            <div key={data.name}>
                <Card>
                    <CardHeader>
                        <div className="flex justify-between">    
                            <CardTitle className="pt-10">
                                    {data.name}
                            </CardTitle>
                            <div className=" mt-4 me-4">
                                <Avatar>
                                    <AvatarImage src={data.profilePic} />
                                    <AvatarFallback>AR</AvatarFallback>
                                </Avatar>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            {data.description}
                        </CardDescription>
                    </CardContent>
                    <CardFooter>
                        <CardDescription>
                            <div className="grid grid-flow-col gap-8 auto-cols-max">
                                <a href={data.gitHubLink} className= "text-2xl" target="_blank" rel="noreferrer">
                                    <SlSocialGithub />
                                </a>
                                <a href={data.linkedInLink} className= "text-2xl" target="_blank" rel="noreferrer">
                                    <SlSocialLinkedin />
                                </a>
                                <a href={data.instagramLink} className= "text-2xl" target="_blank" rel="noreferrer">
                                    <SlSocialInstagram />
                                </a>
                            </div>
                        </CardDescription>
                    </CardFooter>
                </Card>
            </div>
            ))}
        </div>
    </main>)
}