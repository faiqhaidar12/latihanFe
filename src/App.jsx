import { useState } from "react";
import CardPost from "./components/CardPost";
import FeaturedPost from "./components/FeaturedPost";
import Navbar from "./components/Navbar";

function App() {
  const [posts, setPosts] = useState([
    {
      category: "Internet",
      date: "June 28, 2021",
      title: "How to design a product that can grow itself 10x in year",
      shortDesc:
        "Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.",
      authorName: "Jenny Wilson",
      authorJob: "Product Designer",
      authorAvatar: "/author2.png",
    },
  ]);
  return (
    <div className="bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto">
        <FeaturedPost />
        <div className="flex">
          <div className="w-4/12">
            <CardPost />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
