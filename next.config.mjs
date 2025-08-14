import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		mdxRs: true,
		ppr: false, // Partial Prerendering - can be enabled when ready
	},
	// Enable modern bundling
	modularizeImports: {
		'lucide-react': {
			transform: 'lucide-react/dist/esm/icons/{{member}}',
		},
	},
};

export default withContentlayer(nextConfig);
