/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "avatar.iran.liara.run",
			},
		],
	},
	async redirects() {
		return [
			{
				source: "/",
				destination: "/auth",
				permanent: true,
			},
			{
				source: "/owner",
				destination: "/owner/dashboard",
				permanent: true,
			},
			{
				source: "/freelancer",
				destination: "/freelancer/dashboard",
				permanent: true,
			},
			{
				source: "/admin",
				destination: "/admin/dashboard",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
