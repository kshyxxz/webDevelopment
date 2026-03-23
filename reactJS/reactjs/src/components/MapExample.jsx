import { Map, MapControls } from "@/components/ui/map";

export default function MapExample() {
	const mapHeight = "75vh";

	return (
		<div className="w-full" style={{ height: mapHeight }}>
			<Map className="h-full w-full" center={[2.3522, 48.8566]} zoom={11}>
				<MapControls
					position="bottom-right"
					showZoom
					showCompass
					showLocate
					showFullscreen
				/>
			</Map>
		</div>
	);
}
