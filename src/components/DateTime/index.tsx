import React, { useEffect, useState } from "react";
import style from "./style.module.scss";

const DateHour: React.FC = () => {
	const [dateTime, setDateTime] = useState(new Date());
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
		const timer = setInterval(() => {
			setDateTime(new Date());
		}, 60000);

		return () => clearInterval(timer);
	}, []);

	const formatDate = (date: Date) => {
		const options = {
			weekday: "long",
			year: "numeric",
			month: "numeric",
			day: "numeric",
		} as const;
		const dateString = date.toLocaleDateString("fr-FR", options).replace(/\//g, ".");
		const [weekday, ...rest] = dateString.split(", ");

		return `${weekday.toUpperCase()}/ ${rest.join(", ").replace(/\//g, ".")}`;
	};

	const formatTime = (date: Date) => {
		return date.toLocaleTimeString("fr-FR", {
			hour: "2-digit",
			minute: "2-digit",
		});
	};

	if (!isMounted) {
		return null;
	}

	return (
		<div className={style.datetime__wrapper}>
			<div>{formatDate(dateTime)}</div>
			<div>.{formatTime(dateTime)}</div>
			<span>Paris</span>
		</div>
	);
};

export default DateHour;
