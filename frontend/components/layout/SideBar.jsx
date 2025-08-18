import { 
  Trophy, 
  Users, 
  UserPlus, 
  Settings, 
  ShoppingBag,
  Home,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sidebarItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Search, label: "Search" },
  { icon: Trophy, label: "Achievements" },
  { icon: Users, label: "Collaboration" },
  { icon: UserPlus, label: "Team Up" },
  { icon: ShoppingBag, label: "Shopping" },
  { icon: Settings, label: "Settings" },
];

export const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-card border-r border-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <h1 className="text-2xl font-bold bg-playure-gradient bg-clip-text text-transparent">
          Playure
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {sidebarItems.map((item) => (
          <Button
            key={item.label}
            variant={item.active ? "default" : "ghost"}
            className={cn(
              "w-full justify-start gap-3 h-12 text-left font-medium transition-smooth",
              item.active 
                ? "bg-playure-gradient text-primary-foreground shadow-soft hover:shadow-medium" 
                : "hover:bg-secondary hover:shadow-soft"
            )}
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </Button>
        ))}
      </nav>
    </div>
  );
};