import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";

const storyUsers = [
  {
    id: 1,
    name: "Your Story",
    avatar: "/logo.png",
    isOwn: true,
  },
  {
    id: 2,
    name: "Alex Gaming",
    avatar: "/lovable-uploads/3e98e700-9514-487c-812b-c4571f27bd43.png",
  },
  {
    id: 3,
    name: "Sarah Dev",
    avatar: "/lovable-uploads/3e98e700-9514-487c-812b-c4571f27bd43.png",
  },
  {
    id: 4,
    name: "Mike Streams",
    avatar: "/lovable-uploads/3e98e700-9514-487c-812b-c4571f27bd43.png",
  },
  {
    id: 5,
    name: "Emma Creative",
    avatar: "/lovable-uploads/3e98e700-9514-487c-812b-c4571f27bd43.png",
  },
];

export const Stories = () => {
  return (
    <Card className="p-4 mb-6 shadow-soft">
      <div className="flex items-center gap-4 overflow-x-auto pb-2">
        {storyUsers.map((user) => (
          <div key={user.id} className="flex flex-col items-center gap-2 min-w-fit cursor-pointer group">
            <div className={`relative ${user.isOwn ? '' : 'p-1 bg-playure-gradient rounded-full'}`}>
              <div className="relative">
                <Avatar className="h-16 w-16 border-2 border-background">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                {user.isOwn && (
                  <Button 
                    size="sm" 
                    className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full p-0 bg-playure-gradient hover:shadow-medium transition-smooth"
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                )}
              </div>
            </div>
            <span className="text-xs text-center max-w-[70px] truncate group-hover:text-primary transition-smooth">
              {user.isOwn ? "Your Story" : user.name.split(' ')[0]}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};