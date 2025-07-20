import { SlSocialGithub } from "react-icons/sl";
import { SlSocialGoogle } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";

export default function SocialIcons() {
    return(
        <>
        <div className="flex space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/mahmud-nagi-1b1a4b1a4/" target="_blank" rel="noopener noreferrer" className=" text-orange-600 bg-white  p-2 rounded-full dark:text-gray-300 hover:text-orange-800 transition">           
                <SlSocialLinkedin size={24} />
            </a>
            <a href="https://www.facebook.com/mahmud.nagi.5" target="_blank" rel="noopener noreferrer" className=" text-orange-600 bg-white  p-2 rounded-full dark:text-gray-300 hover:text-orange-800 transition">
                <SlSocialFacebook size={24} />
            </a>
            <a href="https://github.com/MahmudAlzhrawy" target="_blank" rel="noopener noreferrer" className=" text-orange-600 bg-white  p-2 rounded-full dark:text-gray-300 hover:text-orange-800 transition">
                <SlSocialGithub size={24} />
            </a>
            <a href="https://www.instagram.com/mahmudnagi/" target="_blank" rel="noopener noreferrer" className=" text-orange-600 bg-white  p-2 rounded-full dark:text-gray-300 hover:text-orange-800 transition">
                <SlSocialInstagram size={24} />
            </a>
            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer" className=" text-orange-600 bg-white  p-2 rounded-full dark:text-gray-300 hover:text-orange-800 transition">
                <SlSocialGoogle size={24} />
            </a>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mt-4">
            Connect with me on social media!
        </p>
        </>)
}