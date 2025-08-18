import { PostCard } from "./PostCard";
import { Stories } from "./Stories";

const samplePosts = [
  {
    author: {
      name: "Vinuth Kumar",
      username: "vinuth_kumar_18",
      avatar: "/logo.png",
      verified: true
    },
    content: {
      text: "Just completed my first marathon! The training was intense but totally worth it. Thanks to everyone who supported me along the way!",
      image: "/main-bg.avif",
      achievement: "Marathon Finisher"
    },
    engagement: {
      likes: 234,
      comments: 45,
      shares: 12
    },
    timestamp: "2h"
  },
  {
    author: {
      name: "Sarah Chen",
      username: "sarah.gaming",
      avatar: "/logo.png",
      verified: false
    },
    content: {
      text: "New collaboration project launching next week! Excited to work with such talented people. Stay tuned for updates!",
    },
    engagement: {
      likes: 89,
      comments: 23,
      shares: 8
    },
    timestamp: "4h"
  },
];

export const MainFeed = () => {
  return (
    <div className="flex-1 max-w-2xl mx-auto">
      <Stories />
      <div className="space-y-4">
        {samplePosts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};