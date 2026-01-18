import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Pencil, Calculator, FlaskConical, Languages, Globe } from "lucide-react";

export default function Levels() {
  const levels = [
    { level: "المستوى الأول", icon: Pencil, color: "text-blue-500", desc: "تعلم الحروف والأرقام واكتساب المهارات الأساسية للقراءة والكتابة." },
    { level: "المستوى الثاني", icon: Book, color: "text-green-500", desc: "ترسيخ المكتسبات اللغوية وتطوير مهارات الحساب البسيط." },
    { level: "المستوى الثالث", icon: Globe, color: "text-orange-500", desc: "الانفتاح على المحيط وتعزيز القراءة باللغتين العربية والفرنسية." },
    { level: "المستوى الرابع", icon: Calculator, color: "text-purple-500", desc: "تعميق المفاهيم الرياضياتية وبداية الاكتشاف العلمي." },
    { level: "المستوى الخامس", icon: Languages, color: "text-red-500", desc: "تطوير مهارات التعبير الكتابي والشفوي واتقان القواعد." },
    { level: "المستوى السادس", icon: FlaskConical, color: "text-cyan-500", desc: "الاستعداد للمرحلة الإعدادية والتحضير للامتحان الإشهادي." },
  ];

  return (
    <div className="bg-background min-h-screen pb-20">
      <div className="bg-primary/5 py-16 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">المستويات الدراسية</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            نظامنا التعليمي يغطي سلك التعليم الابتدائي كاملاً، من السنة الأولى إلى السنة السادسة.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {levels.map((item, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow border-t-4 border-t-primary/20">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className={`p-3 rounded-full bg-background shadow-sm ring-1 ring-border ${item.color}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl text-primary">{item.level}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 bg-accent/10 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">تنظيم الأقسام</h2>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-lg">احترام الطاقة الاستيعابية للأقسام لضمان جودة التعلم.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-lg">تجهيزات حديثة ومقاعد مريحة للتلاميذ.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-lg">أركان للقراءة والأنشطة داخل كل فصل.</span>
                  </li>
                </ul>
             </div>
             <div>
               <img 
                 src="/attached_assets/WhatsApp_Image_2026-01-18_at_02.05.17_1768698393808.jpeg" 
                 alt="Classroom Organization" 
                 className="rounded-2xl shadow-xl w-full"
               />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
