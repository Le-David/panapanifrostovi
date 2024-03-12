import {
	GoogleMap,
	InfoWindowF,
	MarkerF,
	MarkerProps,
	useJsApiLoader,
} from "@react-google-maps/api"
import { useCallback, useState, type FunctionComponent } from "react"
import styles from "./Map.module.css"

export const Map: FunctionComponent = () => {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: "AIzaSyCAexjPHhCWK6Bf0CFJL_yq_5IQ83djMP4",
	})
	const center = {
		lat: 48.91423797607422,
		lng: 13.798125267028809,
	}

	const mapStyles = [
		{
			featureType: "landscape.natural",
			elementType: "geometry.fill",
			stylers: [
				{
					visibility: "on",
				},
				{
					color: "#f2f2f2",
				},
			],
		},
		{
			featureType: "road",
			elementType: "geometry",
			stylers: [
				{
					lightness: 100,
				},
				{
					visibility: "simplified",
				},
			],
		},
		{
			featureType: "road",
			elementType: "labels",
			stylers: [
				{
					visibility: "off",
				},
			],
		},
		{
			featureType: "transit.line",
			elementType: "geometry",
			stylers: [
				{
					visibility: "on",
				},
				{
					lightness: 700,
				},
			],
		},
		{
			featureType: "water",
			elementType: "all",
			stylers: [
				{
					color: "#7dcdcd",
				},
			],
		},
	]
	return (
		<div className={styles.wrapper}>
			{isLoaded ? (
				<GoogleMap
					mapContainerStyle={{
						width: "100%",
						height: "600px",
						overflow: "hidden",
					}}
					center={center}
					zoom={15}
					options={{ styles: mapStyles }}
				>
					<MarkerWindowInfo
						position={{
							lat: 48.91423797607422,
							lng: 13.798125267028809,
						}}
						title="Hajnýho stodola"
					/>
				</GoogleMap>
			) : null}
		</div>
	)
}

type MarkerWindowInfoProps = Pick<MarkerProps, "position"> & {
	title: string
}

const MarkerWindowInfo: FunctionComponent<MarkerWindowInfoProps> = ({
	position,
	title,
}) => {
	const [isInfoWindowVisible, setIsInfoWindowVisible] = useState(true)
	const handleClick = useCallback(() => {
		setIsInfoWindowVisible((old) => !old)
	}, [])
	return (
		<MarkerF
			position={position}
			title={title}
			onClick={handleClick}
			icon={"/pin.png"}
		>
			{isInfoWindowVisible && (
				<InfoWindowF position={position} onCloseClick={handleClick}>
					<div className={styles.markerInfo}>
						<h4 className={styles.markerTitle}>{title}</h4>
						<address>
							České Žleby 52, <br />
							384 42 Lenora-Volary
						</address>
						<br />
						<a
							target="_blank"
							href="https://www.google.com/maps/dir/?api=1&origin=your+location&destination=Hajn%C3%BDho+stodola,+%C4%8Cesk%C3%A9+%C5%BDleby+52,+384+42+Lenora-Volary&travelmode=driving"
						>
							Navigace
						</a>
					</div>
				</InfoWindowF>
			)}
		</MarkerF>
	)
}
