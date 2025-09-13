// frontend/src/pages/CommunityPage.jsx
import varanasiData from "../data/varanasi_culture.json";
import CommunityWall from "../components/Community/CommunityWall";

export default function CommunityPage() {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">Community Contributions</h2>
      <CommunityWall />
    </div>
  );
}
