"use client";

import { useEffect, useState } from "react";

export function Analytics() {
	const [isClient, setIsClient] = useState(false);
	
	useEffect(() => {
		setIsClient(true);
	}, []);
	
	if (!isClient) {
		return null;
	}
	
	const token = process.env.NEXT_PUBLIC_BEAM_TOKEN;
	if (!token) {
		return null;
	}
	
	return (
		<script
			src="https://beamanalytics.b-cdn.net/beam.min.js"
			data-token={token}
			async
		/>
	);
}
