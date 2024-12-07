import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function SearchBar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 p-2 bg-[#F1F5FF] rounded-xl shadow-sm",
        className
      )}
    >
      <div className="flex items-center flex-1 gap-2 px-2">
        <SearchIcon className="w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="I'm Looking For ...."
          className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-lg placeholder:text-muted-foreground/60"
        />
      </div>
      <Button
        size="lg"
        className="bg-[#002B5B] text-white hover:bg-[#002B5B]/90 rounded-lg px-8 text-base font-medium"
      >
        Search
      </Button>
    </div>
  );
}
