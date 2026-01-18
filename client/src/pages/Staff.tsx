import { SectionHeader } from "@/components/SectionHeader";
import { StaffCard } from "@/components/StaffCard";
import { useStaff } from "@/hooks/use-school-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserCheck, Users } from "lucide-react";

export default function Staff() {
  const { data: staff, isLoading } = useStaff();

  const adminStaff = staff?.filter(s => s.category === "admin") || [];
  const teacherStaff = staff?.filter(s => s.category === "teacher") || [];

  return (
    <div className="bg-background min-h-screen pb-20">
       <div className="bg-primary/5 py-16 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">الطاقم الإداري والتربوي</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            نخبة من الأطر التربوية والإدارية المتميزة تسهر على راحة التلاميذ وجودة تعلمهم.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {isLoading ? (
           <div className="flex justify-center py-20">
             <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
           </div>
        ) : (
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-muted p-1 h-auto rounded-full">
                <TabsTrigger value="all" className="rounded-full px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-white">الكل</TabsTrigger>
                <TabsTrigger value="admin" className="rounded-full px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-white gap-2 flex items-center">
                  <UserCheck className="w-4 h-4" /> الإدارة
                </TabsTrigger>
                <TabsTrigger value="teachers" className="rounded-full px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-white gap-2 flex items-center">
                  <Users className="w-4 h-4" /> الأساتذة
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
               <div className="mb-12">
                 <SectionHeader title="الإدارة التربوية" align="start" className="mb-8 border-b pb-4" />
                 {adminStaff.length > 0 ? (
                   <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                     {adminStaff.map(member => <StaffCard key={member.id} member={member} />)}
                   </div>
                 ) : (
                   <p className="text-muted-foreground text-center py-8 bg-muted/20 rounded-lg">لا توجد بيانات حالياً</p>
                 )}
               </div>

               <div>
                 <SectionHeader title="هيئة التدريس" align="start" className="mb-8 border-b pb-4" />
                 {teacherStaff.length > 0 ? (
                   <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                     {teacherStaff.map(member => <StaffCard key={member.id} member={member} />)}
                   </div>
                 ) : (
                   <p className="text-muted-foreground text-center py-8 bg-muted/20 rounded-lg">لا توجد بيانات حالياً</p>
                 )}
               </div>
            </TabsContent>

            <TabsContent value="admin" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {adminStaff.map(member => <StaffCard key={member.id} member={member} />)}
              </div>
            </TabsContent>

            <TabsContent value="teachers" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {teacherStaff.map(member => <StaffCard key={member.id} member={member} />)}
              </div>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  );
}
