// import images
import Hero_person from "./assets/images/Hero/my.png"

import figma from "./assets/images/Skills/figma.png"
import ps from "./assets/images/Skills/ps.png"
import reactjs from "./assets/images/Skills/react.png"
import nodejs from "./assets/images/Skills/node.png"
import js from "./assets/images/Skills/js.png"
import php from "./assets/images/Skills/php.png"
import expressjs from "./assets/images/Skills/expressjs.jpeg"
import ci from "./assets/images/Skills/ci.png"

import services_logo1 from "./assets/images/Services/logo1.png"
import services_logo2 from "./assets/images/Services/logo2.png"
import services_logo3 from "./assets/images/Services/logo3.png"

import project1 from "./assets/images/projects/project5.jpeg"
import project2 from "./assets/images/projects/project1.jpeg"
import project3 from "./assets/images/projects/project3.jpeg"
import person_project from "./assets/images/projects/project4.png"

// import icons from react-icons
import {GrMail} from "react-icons/gr"
import {MdArrowForward, MdCall} from "react-icons/md"
import {BsInstagram} from "react-icons/bs"
import {TbSmartHome} from "react-icons/tb"
import {BiUser} from "react-icons/bi"
import {RiServiceLine, RiProjectorLine} from "react-icons/ri"
import {MdOutlinePermContactCalendar} from "react-icons/md"

export const content = {
	nav: [
		{
			link: "#home",
			icon: TbSmartHome,
		},
		{
			link: "#skills",
			icon: BiUser,
		},
		{
			link: "#services",
			icon: RiServiceLine,
		},
		{
			link: "#projects",
			icon: RiProjectorLine,
		},
		{
			link: "#contact",
			icon: MdOutlinePermContactCalendar,
		},
	],
	hero: {
		title: "Web Developer",
		firstName: "ALDO",
		LastName: "WIRANATA",
		btnText: "My Github",
		githubLink: "https://github.com/alwiranata",
		image: Hero_person,
		hero_content: [
			{
				count: "3+",
				text: "Web development experience",
			},
			{
				count: "5+",
				text: "Projects Worked in my career",
			},
		],
	},
	skills: {
		title: "Skills",
		subtitle: "MY TOP SKILLS",
		skills_content: [
			{
				name: "Figma",
				para: "UI/UX design",
				logo: figma,
			},
			{
				name: "NodeJS",
				para: "Scalable JavaScript runtime.",
				logo: nodejs,
			},
			{
				name: "Adobe Photoshop",
				para: "Editing and manipulating images",
				logo: ps,
			},
			{
				name: "ReactJS",
				para: "Frontend UI library",
				logo: reactjs,
			},
			{
				name: "Javascript",
				para: "Dynamic, versatile web language",
				logo: js,
			},
			{
				name: "ExpressJS",
				para: "Dynamic, versatile web language",
				logo: expressjs,
			},
			{
				name: "PHP",
				para: "Dynamic, versatile web language",
				logo: php,
			},
			{
				name: "Codeigniter",
				para: "Dynamic, versatile web language",
				logo: ci,
			},
		],
		icon: MdArrowForward,
	},
	services: {
		title: "Experience",
		subtitle: "What I Have Done",
		service_content: [
			{
				title: "Web Development",
				para: "I specialize in creating responsive and visually appealing websites that enhance user experience. My web development skills ensure seamless functionality and performance across all devices.",
				logo: services_logo1,
			},
			{
				title: "ui / ux DESIGNING",
				para: "I design intuitive and aesthetically pleasing user interfaces (UI) and experiences (UX) that prioritize user needs and enhance interaction. My approach ensures a seamless and engaging digital experience.",
				logo: services_logo2,
			},
			{
				title: "PhotoShop Editing",
				para: "I specialize in advanced Photoshop editing, transforming images with precision and creativity. My skills ensure high-quality visuals that align with your vision and project needs.",
				logo: services_logo3,
			},
		],
	},
	Projects: {
		title: "Projects",
		subtitle: "MY CREATION",
		image: person_project,
		project_content: [
			{
				title: "Portfolio Website",
				image: project1,
			},
			{
				title: "HTT Website",
				image: project2,
			},
			{
				title: "AI Website",
				image: project3,
			},
		],
	},

	Contact: {
		title: "Contect Me",
		subtitle: "GET IN TOUCH",
		social_media: [
			{
				text: "aldowiranata16@gmail.com",
				icon: GrMail,
				link: "mailto:aldowiranata16@gmail.com",
			},
			{
				text: "+62895634889510",
				icon: MdCall,
				link: "https://wa.me/62895634889510",
			},
			{
				text: "aldo_wiranata17",
				icon: BsInstagram,
				link: "https://www.instagram.com/aldo_wiranata17/",
			},
		],
	},
	Footer: {
		text: "All © Copy Right Reserved 2024",
	},
}
