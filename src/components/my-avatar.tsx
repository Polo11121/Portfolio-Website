import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type MyAvatarProps = {
  className: string;
};

export const MyAvatar = ({ className }: MyAvatarProps) => (
  <Avatar className={cn("order-1 md:order-2 border", className)}>
    <AvatarImage src="/profile-image.jpg" className="object-fit" />
  </Avatar>
);
