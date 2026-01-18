import { useActivities } from "@/hooks/use-school-data";
import { ActivityCard } from "@/components/ActivityCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Activities() {
  const { data: activities, isLoading } = useActivities();
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "الكل" },
    { id: "cultural", label: "ثقافي" },
    { id: "sports", label: "رياضي" },
    { id: "educational", label: "تربوي" },
  ];

  const filteredActivities = filter === "all" 
    ? activities 
    : activities?.filter(a => a.category === filter);

  return (
    <div className="bg-background min-h-screen pb-20">
      <div className="bg-primary/5 py-16 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">أنشطة المؤسسة</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            متابعة حية ودورية لجميع الأنشطة الموازية والفعاليات التي تنظمها المدرسة.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={filter === cat.id ? "default" : "outline"}
              onClick={() => setFilter(cat.id)}
              className="rounded-full px-6"
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[1,2,3,4,5,6].map(i => (
               <div key={i} className="flex flex-col space-y-3">
                 <Skeleton className="h-48 w-full rounded-xl" />
                 <div className="space-y-2">
                   <Skeleton className="h-4 w-[250px]" />
                   <Skeleton className="h-4 w-[200px]" />
                 </div>
               </div>
             ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities?.length ? (
              filteredActivities.map((activity) => (
                <ActivityCard key={activity.id} activity={activity} />
              ))
            ) : (
              <div className="col-span-full text-center py-20 bg-muted/20 rounded-2xl">
                <p className="text-xl text-muted-foreground">لا توجد أنشطة في هذا التصنيف حالياً.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
