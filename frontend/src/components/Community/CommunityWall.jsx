import { useState } from "react";

export default function CommunityWall({ search, category }) {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "What is the story behind Kashi Vishwanath Temple?",
      author: "Aditi",
      category: "Temples",
      content:
        "I’ve always heard about its spiritual importance but don’t know the exact history.",
      replies: [
        {
          id: 1,
          author: "Rahul",
          text: "It is one of the Jyotirlingas dedicated to Lord Shiva.",
        },
      ],
    },
    {
      id: 2,
      title: "Has anyone visited Kamakhya Shakti Peetha?",
      author: "Ankit",
      category: "Temples",
      content: "I’d love to know about the rituals and the experience there.",
      replies: [],
    },
    {
      id: 3,
      title: "Traditional Banarasi Weaving",
      author: "Meera",
      category: "Crafts",
      content: "Can someone share how Banarasi sarees are handwoven?",
      replies: [],
    },
  ]);

  // Filtering logic
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.content.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || post.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-2xl p-5 border border-gray-200 hover:shadow-xl transition"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-yellow-800">
                {post.title}
              </h2>
              <span className="text-xs bg-yellow-100 px-2 py-1 rounded">
                {post.category}
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-1">by {post.author}</p>
            <p className="text-gray-700 mb-4">{post.content}</p>

            {/* Replies */}
            <div className="pl-4 border-l-2 border-yellow-300 space-y-2">
              {post.replies.length > 0 ? (
                post.replies.map((reply) => (
                  <p key={reply.id} className="text-sm">
                    <span className="font-semibold">{reply.author}: </span>
                    {reply.text}
                  </p>
                ))
              ) : (
                <p className="text-sm text-gray-400">No replies yet.</p>
              )}
            </div>

            {/* Fake Reply Button */}
            <button className="mt-4 text-sm bg-yellow-600 text-white px-3 py-1 rounded-full hover:bg-yellow-700">
              Reply
            </button>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">
          No posts found for this filter.
        </p>
      )}
    </div>
  );
}
