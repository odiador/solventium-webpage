import { cn } from "../lib/utils";
import { motion } from "framer-motion";

const links = [
	{ href: "/", name: "Inicio" },
	{ href: "/about", name: "Nosotros" },
	{ href: "/contact", name: "Contáctanos" },
];

interface NavBarProps {
	pathname: string;
}

// Cambia la importación de logo para usar la ruta pública de Astro
const logo = "/logo.png";

export default function NavBar({ pathname }: NavBarProps) {
	return (
		<nav className="flex fixed top-0 z-50 w-full justify-between md:justify-center p-5 items-center">
			<div className="flex w-full self-center h-12 justify-between items-center md:w-[40rem] lg:w-[45rem] xl:w-[64rem]">
				<a
					className="border-[1px] bg-white border-[#ceceea] font-bold px-4 h-full py-1 rounded-2xl transition-colors hover:bg-[#f1f1f9] hover:text-[#243842] flex items-center gap-2 text-xl"
					href="/"
				>
					<img
						src={logo}
						width={38}
						height={38}
						className="w-fit h-[38.4px]"
						alt="Logo"
					/>
					Solventium
				</a>
				<div className="relative h-full">
					<ul className="hidden md:flex items-center bg-white border-[1px] border-[#ceceea] rounded-full justify-center gap-x-4 w-fit h-full">
						{links.map((link, idx) => (
							<motion.li
								key={idx}
								animate={{ opacity: 1, scale: 1 }}
								transition={{
									type: "spring",
									bounce: 0.3,
									duration: 0.5,
									delay: 0.1 + idx * 0.1,
								}}
								className="text-sm h-full"
							>
								<a
									href={link.href}
									className={cn(
										"flex items-center relative rounded-full justify-center px-4 py-2 h-full transition hover:text-[#243842] z-[11]",
										pathname === link.href
											? "text-white hover:text-[#f1f4f7]"
											: ""
									)}
								>
									<label className="z-[11]">{link.name}</label>
									{pathname === link.href && (
										<motion.span
											layout
											layoutId="activeLink"
											transition={{ type: "spring", bounce: 0 }}
											className="absolute inset-0 rounded-full w-full border-neutral-800 bg-primary bg-[#324d5b] z-[10]"
										/>
									)}
								</a>
							</motion.li>
						))}
					</ul>
				</div>
			</div>
			{/* Menú móvil pendiente de migrar */}
		</nav>
	);
}
