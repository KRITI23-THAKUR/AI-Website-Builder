import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
	
	const {theme,toggleTheme}=useTheme();
	console.log()
	return (
		<header className="flex items-center justify-between px-6 py-4 bg-[var(--card)] shadow-md">
			{/* Logo */}
			<div className="flex items-center gap-2">
				{/* <img src="/logo192.png" alt="Logo" className="h-10 w-10" /> */}
				<span className="text-xl font-bold text-[var(--primary)]">AI Website Builder</span>
			</div>

			{/* Theme Button */}
			<button
				onClick={()=>toggleTheme()}
				className="px-4 py-2 rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--accent)] transition"
				aria-label="Toggle theme"
			>
				{theme==="dark"? '🌙' : '☀️'}
			</button>

			{/* User Profile */}
			<div className="flex items-center gap-3">
				<img
					src="https://randomuser.me/api/portraits/men/32.jpg"
					alt="User"
					className="h-9 w-9 rounded-full border border-[var(--border)]"
				/>
				<span className="font-medium text-[var(--foreground)]">Kriti</span>
			</div>
		</header>
	);
};

export default Header;
