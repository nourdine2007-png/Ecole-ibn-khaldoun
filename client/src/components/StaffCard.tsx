import { User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Staff } from "@shared/schema";

export function StaffCard({ member }: { member: Staff }) {
  return (
    <Card className="text-center hover:shadow-md transition-all duration-300 border-none bg-secondary/30">
      <CardContent className="pt-8 pb-6 px-4">
        <div className="w-24 h-24 mx-auto mb-4 rounded-full p-1 bg-white shadow-sm ring-2 ring-primary/10">
          <Avatar className="w-full h-full">
            <AvatarImage src={member.imageUrl || undefined} alt={member.name} />
            <AvatarFallback className="bg-primary/5 text-primary">
              <User className="w-10 h-10" />
            </AvatarFallback>
          </Avatar>
        </div>
        <h3 className="text-lg font-bold text-primary mb-1">{member.name}</h3>
        <p className="text-sm font-medium text-accent-foreground/80 mb-3">{member.role}</p>
        {member.bio && (
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
            {member.bio}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
