import { Heart, MessageCircle, Share, MoreHorizontal, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const PostCard = ({ author, content, engagement, timestamp }) => {
  return (
    <Card className="p-6 mb-4 hover:shadow-medium transition-smooth">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={author.avatar} />
            <AvatarFallback>{author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">{author.name}</h3>
              {author.verified && (
                <Badge variant="secondary" className="bg-playure-blue-light text-playure-blue-dark px-2 py-0.5">
                  <Trophy className="h-3 w-3 mr-1" />
                  Pro
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground">@{author.username} • {timestamp}</p>
          </div>
        </div>
        <Button variant="ghost" size="sm">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      {/* Achievement Banner */}
      {content.achievement && (
        <div className="mb-4 p-3 bg-playure-gradient-subtle rounded-lg border border-playure-blue-light">
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-playure-blue" />
            <span className="font-medium text-playure-blue-dark">Achievement Unlocked: {content.achievement}</span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="mb-4">
        <p className="text-foreground leading-relaxed">{content.text}</p>
        {content.image && (
          <div className="mt-3 rounded-lg overflow-hidden">
            <img 
              src={content.image} 
              alt="Post content" 
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
      </div>

      {/* Engagement */}
      <div className="flex items-center justify-between pt-3 border-t border-border">
        <div className="flex items-center gap-6">
          <Button variant="ghost" size="sm" className="gap-2 hover:text-red-500 transition-smooth">
            <Heart className="h-4 w-4" />
            <span>{engagement.likes}</span>
          </Button>
          <Button variant="ghost" size="sm" className="gap-2 hover:text-primary transition-smooth">
            <MessageCircle className="h-4 w-4" />
            <span>{engagement.comments}</span>
          </Button>
          <Button variant="ghost" size="sm" className="gap-2 hover:text-primary transition-smooth">
            <Share className="h-4 w-4" />
            <span>{engagement.shares}</span>
          </Button>
        </div>
      </div>
    </Card>
  );
};