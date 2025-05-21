import React, { useEffect } from "react";
import trpc from "~/server/trpc-client";

const Main = () => {
	const [data, setData] = React.useState<string | null>(null);
	useEffect(() => {
		const fetchData = async () => {
			const data = await trpc.hello.query("wahyu agus arifin");
			setData(data.resp || "no data");
		};
		fetchData();
	}, []);
	return <div>{data}</div>;
};

export default Main;
