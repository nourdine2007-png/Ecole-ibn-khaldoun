import { Calendar, Tag } from "lucide-react";
import { format } from "date-fns";
import { arMA } from "date-fns/locale";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Activity } from "@shared/schema";

export function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group border-border/50 h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        {/* Descriptive alt text for Unsplash images if used */}
        <img 
          src={activity.imageUrl || "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"} 
          alt={activity.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-white/90 text-primary hover:bg-white font-bold backdrop-blur-sm shadow-sm">
            {activity.category === 'sports' && 'رياضي'}
            {activity.category === 'cultural' && 'ثقافي'}
            {activity.category === 'educational' && 'تربوي'}
            {activity.category === 'general' && 'عام'}
            {/* Fallback for non-matching categories */}
            {!['sports', 'cultural', 'educational', 'general'].includes(activity.category) && activity.category}
          </Badge>
        </div>
      </div>
      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3">
          <Calendar className="w-3.5 h-3.5" />
          <span>{format(new Date(activity.date), 'PPP', { locale: arMA })}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {activity.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed mb-4 flex-1">
          {activity.content}
        </p>
      </CardContent>
    </Card>
  );
}
