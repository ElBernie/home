import {
	FaSuitcase,
	FaLocationDot,
	FaLinkedin,
	FaGithub,
	FaPaperPlane,
	FaDownload,
} from 'react-icons/fa6';
import Image from 'next/image';
import style from './home.module.scss';
export default function Home() {
	return (
		<main className={style.main}>
			<Image
				src='/bernard-arroues.png'
				width={200}
				height={200}
				alt='Photo de profil de Bernard "Bernie" Arroues'
			/>
			<div className={style.basicInformations}>
				<h1>
					Bernard <span> ‟Bernie‟ </span> Arroues
				</h1>
				<div className={style.workInformations}>
					<div>
						<FaSuitcase />
						Développeur fullstack Javascript/Typescript
					</div>
					<div>
						<FaLocationDot />
						Quimper / Remote
					</div>
				</div>
			</div>

			<ul>
				<li>
					<a href='https://www.linkedin.com/in/bernard-arroues/'>
						<FaLinkedin />
						LinkedIn
					</a>
				</li>
				<li>
					<a href='https://www.github.com/elbernie'>
						<FaGithub />
						Github
					</a>
				</li>
				{/* <li>
					<a href='https://www.x.com/ElBernieCode'>𝕏 X</a>
				</li> */}
				{/* <li>
					<a href='./Bernard_ARROUES_CV.pdf'>
						<FaDownload />
						Mon CV
					</a>
				</li> */}
				<li>
					<a href='mailto:arroues.bernard@gmail.com'>
						<FaPaperPlane />
						Me contacter
					</a>
				</li>
			</ul>
		</main>
	);
}
