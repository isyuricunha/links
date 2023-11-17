// Packages
import Image from "next/image";

// Components
import Memoji from "@/components/Memoji";
import VisualGrid from "@/components/VisualGrid";
import Icon from "@/components/Icon";

const links = [
	{
		name: "Blog",
		link: "links.yuricunha.com/blog",
		url: "https://yuricunha.com/blog",
	},
	{
		name: "GitHub",
		link: "links.yuricunha.com/github",
		url: "https://github.com/isyuricunha",
	},
	{
		name: "LinkedIn",
		link: "links.yuricunha.com/linkedin",
		url: "https://www.linkedin.com/in/isyuricunha/",
	},
	{
		name: "Meeting",
		link: "links.yuricunha.com/meeting",
		url: "https://cal.com/isyuricunha",
	},
	{
		name: "ReadCV",
		link: "links.yuricunha.com/readcv",
		url: "https://read.cv/isyuricunha",
	},
	{
		name: "Telegram",
		link: "links.yuricunha.com/telegram",
		url: "https://t.me/isyuricunha",
	},
	{
		name: "Website",
		link: "links.yuricunha.com/website",
		url: "https://yuricunha.com/",
	},
	{
		name: "X/Twitter",
		link: "links.yuricunha.com/x",
		link: "links.yuricunha.com/twitter",
		url: "https://twitter.com/isyuricunha",
	},
];

const Index = () => (
	<div className="container">
		<main className="grid">
			<div className="card shadow card-avatar">
				<Memoji />
				<div className="wrap-vertical">
					<h1 className="heading-sm">Yuri Cunha</h1>
					<p className="body-md">Senior Database Administrator</p>
				</div>
			</div>
			<div className="card shadow card-quote">
				<p className="body-md">
					Just another guy trying to speed up the supermarket line with the
					power of the mind. Definitely born on Earth, not in gamma-7 quadrant.
				</p>
			</div>
			<div className="card shadow card-find-me-online">
				<h2 className="heading-sm">Find me online</h2>
				<p className="body-md">Places you can find me online.</p>
				<div className="list">
					{links.map(({ name, link, url }) => (
						<a
							key={name}
							href={url}
							target="_blank"
							rel="noreferrer"
							className="list-item magnify"
						>
							<p className="bold">{name}</p>
							<div>
								<p className="link body-sm">{link}</p>
								<Icon name="arrow" />
							</div>
						</a>
					))}
				</div>
			</div>
			<div className="card shadow card-mail">
				<div>
					<Image
						alt="Envelope"
						src="/images/envelope.png"
						width={24}
						height={24}
					/>
					<p className="body-md">Get in contact</p>
				</div>
				<a
					href="mailto:me@yuricunha.com"
					target="_blank"
					rel="noreferrer"
					className="button magnify"
				>
					Send email
				</a>
			</div>
			<VisualGrid />
		</main>
	</div>
);

export default Index;
