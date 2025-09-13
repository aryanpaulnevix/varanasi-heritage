// frontend/src/pages/ReelsPage.jsx
import varanasiData from "../data/varanasi_culture.json";
import ReelsGrid from "../components/Reels/ReelsGrid";

export default function ReelsPage() {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">Heritage Shorts</h2>
      <ReelsGrid />
    </div>
  );
}
