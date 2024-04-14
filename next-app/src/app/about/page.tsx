"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import aboutData from "./aboutData";
import {
  SlSocialGithub,
  SlSocialLinkedin,
  SlSocialInstagram,
} from "react-icons/sl";

export default function About() {
  return (
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
      {aboutData.map((data) => (
        <Card key={data.id} aria-disabled="true">
          <CardHeader className="grid grid-cols-2 gap-">
            <Avatar className=" mt-4 me-4">
              <AvatarImage src={data.profilePic} />
              <AvatarFallback>
                {data.name.split(" ")[0].charAt(0)}
              </AvatarFallback>
            </Avatar>
            <CardTitle className="pt-10">{data.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{data.description}</CardDescription>
          </CardContent>
          <CardFooter>
            <CardDescription className="grid grid-flow-col gap-8 auto-cols-max">
              <a
                href={data.gitHubLink}
                className="text-2xl"
                target="_blank"
                rel="noreferrer"
              >
                <SlSocialGithub />
              </a>
              <a
                href={data.linkedInLink}
                className="text-2xl"
                target="_blank"
                rel="noreferrer"
              >
                <SlSocialLinkedin />
              </a>
              <a
                href={data.instagramLink}
                className="text-2xl"
                target="_blank"
                rel="noreferrer"
              >
                <SlSocialInstagram />
              </a>
            </CardDescription>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
