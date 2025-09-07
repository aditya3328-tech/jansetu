import React, { useState } from "react";

const samplePosts = [
  {
    id: 1,
    user: "Ananya Sharma",
    profile: "https://i.pravatar.cc/100?img=1",
    time: "2025-09-01",
    type: "article",
    title: "Clean City Initiative Launched 🚮🌳",
    image: "https://images.unsplash.com/photo-1677943356981-bc48941c5ba9?w=500&auto=format&fit=crop&q=60",
    content:
      "We organized a massive cleanliness drive in Sector 22. Over 50 citizens participated to clear plastic waste and plant 20 trees. Together we can build a healthier city for the next generation.",
    hashtags: ["#CleanCity", "#SwachhBharat", "#CommunityPower"],
    likes: Math.floor(60000 + Math.random() * 500),
    comments: [
      { id: 1, user: "Ravi Kumar", text: "Amazing initiative 👏" },
      { id: 2, user: "Sneha Patel", text: "We need more drives like this 🌱" },
    ],
  },
  {
    id: 2,
    user: "Rahul Mehta",
    profile: "https://i.pravatar.cc/100?img=2",
    time: "2025-09-02",
    type: "photo",
    title: "New Recycling Bins Installed ♻️",
    image: "https://plus.unsplash.com/premium_photo-1737180621224-bdddbe8df9a2?w=500&auto=format&fit=crop&q=60",
    content:
      "Our local authority has installed new recycling bins at the central park. Let's ensure we segregate waste responsibly.",
    hashtags: ["#Recycle", "#GreenLiving", "#CivicSense"],
    likes: Math.floor(60000 + Math.random() * 500),
    comments: [
      { id: 1, user: "Arjun Singh", text: "This is a great step forward! 👍" },
      { id: 2, user: "Meera Nair", text: "Hope everyone uses them properly 🙌" },
    ],
  },
];

function CommunityPage() {
  const [posts, setPosts] = useState(samplePosts);
  const [filter, setFilter] = useState("newest");
  const [showCreate, setShowCreate] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    image: "",
    content: "",
    hashtags: "",
  });

  // Handle like toggle
  const handleLike = (postId) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  // Handle new comment
  const handleComment = (postId, text) => {
    if (!text.trim()) return;
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                { id: post.comments.length + 1, user: "You", text },
              ],
            }
          : post
      )
    );
  };

  // Handle create post
  const handleCreatePost = () => {
    if (!newPost.title || !newPost.content) return;

    const post = {
      id: Date.now(),
      user: "You",
      profile: "https://i.pravatar.cc/100?u=new",
      time: new Date().toISOString().split("T")[0],
      type: "article",
      title: newPost.title,
      image: newPost.image,
      content: newPost.content,
      hashtags: newPost.hashtags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag),
      likes: 0,
      comments: [],
    };

    setPosts([post, ...posts]);
    setShowCreate(false);
    setNewPost({ title: "", image: "", content: "", hashtags: "" });
  };

  // Apply filter
  const sortedPosts = [...posts].sort((a, b) => {
    if (filter === "newest") return new Date(b.time) - new Date(a.time);
    if (filter === "oldest") return new Date(a.time) - new Date(b.time);
    if (filter === "mostLiked") return b.likes - a.likes;
    return 0;
  });

  return (
    <div className="min-h-screen w-full bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          {/* Top Controls */}
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://i.pravatar.cc/100?u=currentuser"
                alt="You"
                className="w-12 h-12 rounded-full"
              />
              <button
                onClick={() => setShowCreate(true)}
                className="flex-1 text-left px-4 py-2 border rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100"
              >
                What's on your mind?
              </button>
            </div>

            <div className="flex justify-between text-sm text-gray-600">
              <button
                onClick={() => setShowCreate(true)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                <img className="h-5" src="https://svgsilh.com/svg_v2/2027073.svg" alt="" /> Photo
              </button>
              <button
                onClick={() => setShowCreate(true)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100"
              >
               <img className="h-5" src="https://www.iconpacks.net/icons/1/free-video-icon-818-thumb.png" alt="" /> Video
              </button>
              <button
                onClick={() => setShowCreate(true)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                <img className="h-5" src="https://uxwing.com/wp-content/themes/uxwing/download/seo-marketing/articles-icon.png" alt="" /> Article
              </button>
              <button
                onClick={() => setShowCreate(true)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                <img className="h-5" src="https://www.svgrepo.com/show/334410/bar-chart-alt-2.svg" alt="" /> Poll
              </button>
            </div>
          </div>

          {/* Filter Dropdown */}
          <div className="flex justify-end">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border rounded-lg p-2 bg-white"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="mostLiked">Most Liked</option>
            </select>
          </div>

          {/* Create Post Modal */}
          {showCreate && (
            <div className="fixed inset-0 bg-black/30 flex justify-center items-start pt-20 z-50">
              <div className="bg-white rounded-xl w-full max-w-lg shadow-lg p-6">
                {/* Header */}
                <h2 className="text-xl font-bold mb-4">Create New Post</h2>

                {/* Input */}
                <input
                  type="text"
                  placeholder="Add a short title (optional)"
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg p-2 mb-3"
                />
                <textarea
                  placeholder="What's on your mind?"
                  value={newPost.content}
                  onChange={(e) =>
                    setNewPost({ ...newPost, content: e.target.value })
                  }
                  className="w-full border border-blue-400 focus:ring-2 focus:ring-blue-400 focus:outline-none rounded-lg p-3 mb-4 h-32 resize-none"
                ></textarea>

                {/* Hashtags input */}
                <input
                  type="text"
                  placeholder="Add hashtags (comma separated)"
                  value={newPost.hashtags}
                  onChange={(e) => setNewPost({ ...newPost, hashtags: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg p-2 mb-4"
                />

                {/* Options */}
                <div className="flex justify-around text-gray-600 text-sm mb-4">
                  <button
                    onClick={() => document.getElementById("photoInput").click()}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100"
                  >
                    <img className="h-5" src="https://svgsilh.com/svg_v2/2027073.svg" alt="" /> Photo
                  </button>
                  <button
                    onClick={() => document.getElementById("videoInput").click()}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100"
                  >
                   <img className="h-5" src="https://www.iconpacks.net/icons/1/free-video-icon-818-thumb.png" alt="" /> Video
                  </button>
                  <button
                    onClick={() => alert("Poll feature coming soon!")}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100"
                  >
                    <img className="h-5" src="https://www.svgrepo.com/show/334410/bar-chart-alt-2.svg" alt="" /> Poll
                  </button>
                  <button
                    onClick={() => {
                      const url = prompt("Enter link URL:");
                      if (url) setNewPost({ ...newPost, image: url });
                    }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100"
                  >
                    <img className="h-5" src="https://www.svgrepo.com/show/116705/link-interface-symbol-rotated-to-right.svg" alt="" /> Link
                  </button>
                </div>

                {/* Hidden File Inputs */}
                <input
                  type="file"
                  id="photoInput"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files && e.target.files[0];
                    if (f) setNewPost({ ...newPost, image: URL.createObjectURL(f) });
                  }}
                />
                {/* Media Preview */}
                {(newPost.image || newPost.video) && (
                  <div className="mb-4">
                    <div className="relative">
                      {newPost.image && (
                        <img src={newPost.image} alt="preview" className="w-full max-h-64 object-contain rounded-lg" />
                      )}
                      {newPost.video && (
                        <video controls src={newPost.video} className="w-full max-h-64 rounded-lg" />
                      )}
                      <button
                        onClick={() => setNewPost({ ...newPost, image: "", video: "" })}
                        className="absolute top-2 right-2 bg-white p-1 rounded-full shadow"
                        aria-label="Remove media"
                      >
                        ✖
                      </button>
                    </div>
                  </div>
                )}
                <input
                  type="file"
                  id="videoInput"
                  accept="video/*"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files && e.target.files[0];
                    if (f) setNewPost({ ...newPost, video: URL.createObjectURL(f) });
                  }}
                />

                {/* Actions */}
                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => setShowCreate(false)}
                    className="px-4 py-2 border rounded-lg hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleCreatePost}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Posts Feed */}
          {sortedPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex flex-col hover:shadow-xl transition"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={post.profile}
                  alt={post.user}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-lg">{post.user}</h3>
                  <p className="text-sm text-gray-500">{post.time}</p>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {post.title}
              </h2>

              {/* Image */}
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="rounded-lg mb-4 w-full h-56 md:h-80 object-cover"
                />
              )}

              {/* Content */}
              <p className="text-gray-800 mb-4 text-sm md:text-base">
                {post.content}
              </p>

              {/* Hashtags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {post.hashtags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-blue-600 text-sm font-medium bg-blue-100 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-6 text-gray-600 text-sm mt-auto border-t pt-4">
                <button
                  onClick={() => handleLike(post.id)}
                  className={`flex items-center gap-1 ${
                    post.liked ? "text-red-500" : ""
                  }`}
                >
                  <img className="h-5" src="https://staging.svgrepo.com/show/147377/like.svg" alt="" /> {post.likes.toLocaleString()}
                </button>
                <button className="flex items-center gap-1"><img className="h-5" src="https://icons.veryicon.com/png/o/miscellaneous/blackcat/comment-44.png" alt="" /> Comment</button>
                <button className="flex items-center gap-1"><img className="h-5" src="https://static.thenounproject.com/png/1570728-200.png" alt="" /> Share</button>
                <button className="flex items-center gap-1"><img className="h-5" src="https://www.svgrepo.com/show/379958/bookmark-save.svg" alt="" /> Save</button>
              </div>

              {/* Comments */}
              <div className="mt-4 space-y-3">
                <h4 className="font-semibold text-gray-800">Comments</h4>
                {post.comments.map((c) => (
                  <div
                    key={c.id}
                    className="p-3 border rounded-lg bg-gray-50 shadow-sm"
                  >
                    <p className="font-medium text-gray-900">{c.user}</p>
                    <p className="text-gray-700 text-sm">{c.text}</p>
                  </div>
                ))}

                {/* Add Comment */}
                <div className="flex items-center gap-2 mt-2">
                  <input
                    type="text"
                    placeholder="Write a comment..."
                    className="flex-1 border p-2 rounded-lg"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleComment(post.id, e.target.value);
                        e.target.value = "";
                      }
                    }}
                  />
                  <button
                    onClick={(e) => {
                      const input = e.target.previousSibling;
                      handleComment(post.id, input.value);
                      input.value = "";
                    }}
                    className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="hidden md:block md:col-span-1 space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <h3 className="font-bold text-lg mb-2">About Community</h3>
            <p className="text-gray-600 text-sm">Share updates, media and collaborate with neighbors to improve your city. Be kind and factual.</p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">
            <h4 className="font-semibold mb-3">Trending Tags</h4>
            <div className="flex flex-wrap gap-2">
              {['#CleanCity','#Recycle','#CivicSense','#UrbanGardens','#ReportIt'].map((t)=> (
                <button key={t} className="text-sm px-3 py-1 bg-blue-50 text-blue-700 rounded-full">{t}</button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">
            <h4 className="font-semibold mb-3">Quick Actions</h4>
            <div className="flex flex-col gap-2">
              <button onClick={() => setShowCreate(true)} className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg">Create Post</button>
              <a href="/community" className="w-full px-4 py-3 border rounded-lg text-center text-blue-600">View All</a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default CommunityPage;
