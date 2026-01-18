import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileText, CalendarCheck, HelpCircle, School } from "lucide-react";

export default function StudentSpace() {
  return (
    <div className="bg-background min-h-screen pb-20">
      <div className="bg-primary/5 py-16 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">فضاء التلميذ وولي الأمر</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            بوابة التواصل والمعلومات الخاصة بالتسجيل والمتابعة الدراسية.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
        {/* Registration Info */}
        <div>
          <SectionHeader title="معلومات التسجيل" align="start" className="mb-6" />
          <Card className="border-t-4 border-t-accent shadow-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                 <div className="p-2 bg-accent/20 rounded-lg text-accent-foreground">
                   <FileText className="w-6 h-6" />
                 </div>
                 <CardTitle>الوثائق المطلوبة للتسجيل الجديد</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>نسخة من عقد الازدياد (الأصلية).</li>
                <li>نسخة من بطاقة التعريف الوطنية للأب أو الولي.</li>
                <li>دفتر التلقيح (الصفحات الأولى).</li>
                <li>صورتان شمسيتان للتلميذ.</li>
                <li>شهادة المغادرة (بالنسبة للمنتقلين من مدرسة أخرى).</li>
              </ul>
              <div className="bg-muted/30 p-4 rounded-lg text-sm text-primary font-medium mt-4 border border-primary/10">
                ملاحظة: التسجيل يبدأ عادة في شهر أبريل ويستمر حسب المقاعد المتوفرة.
              </div>
            </CardContent>
          </Card>

          <Card className="mt-8 border-t-4 border-t-primary shadow-sm">
             <CardHeader>
              <div className="flex items-center gap-3">
                 <div className="p-2 bg-primary/20 rounded-lg text-primary">
                   <School className="w-6 h-6" />
                 </div>
                 <CardTitle>إعادة التسجيل</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
               <p className="text-muted-foreground mb-4">
                 يتم إعادة تسجيل التلاميذ القدامى تلقائياً، المرجو فقط التأكد من تحيين المعلومات لدى الإدارة في حال تغيير العنوان أو رقم الهاتف.
               </p>
            </CardContent>
          </Card>
        </div>

        {/* FAQ & Tips */}
        <div>
           <SectionHeader title="أسئلة شائعة ونصائح" align="start" className="mb-6" />
           <Accordion type="single" collapsible className="w-full bg-white rounded-xl border p-2 shadow-sm">
             <AccordionItem value="item-1" className="border-b-0 mb-2">
               <AccordionTrigger className="hover:bg-muted/50 px-4 rounded-lg font-bold text-lg">
                 كيف يمكنني تتبع غياب ابني؟
               </AccordionTrigger>
               <AccordionContent className="px-4 pb-4 text-muted-foreground pt-2">
                 يمكنك التواصل مباشرة مع الحارس العام أو الإدارة عبر الهاتف، أو زيارة المؤسسة خلال ساعات الاستقبال المخصصة للأولياء.
               </AccordionContent>
             </AccordionItem>
             
             <AccordionItem value="item-2" className="border-b-0 mb-2">
               <AccordionTrigger className="hover:bg-muted/50 px-4 rounded-lg font-bold text-lg">
                 ما هو توقيت الدارسة؟
               </AccordionTrigger>
               <AccordionContent className="px-4 pb-4 text-muted-foreground pt-2">
                 الفترة الصباحية: 8:30 - 12:30 <br/>
                 الفترة المسائية: 14:30 - 18:30 <br/>
                 (قد يختلف التوقيت حسب المستويات والتفويج).
               </AccordionContent>
             </AccordionItem>

             <AccordionItem value="item-3" className="border-b-0 mb-2">
               <AccordionTrigger className="hover:bg-muted/50 px-4 rounded-lg font-bold text-lg">
                 نصائح للمراجعة المنزلية
               </AccordionTrigger>
               <AccordionContent className="px-4 pb-4 text-muted-foreground pt-2">
                 - تخصيص مكان هادئ للمذاكرة.<br/>
                 - تنظيم وقت الطفل بين اللعب والدراسة.<br/>
                 - مراجعة الدروس يومياً وعدم تراكمها.<br/>
                 - التواصل المستمر مع الأساتذة.
               </AccordionContent>
             </AccordionItem>
           </Accordion>

           <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-6">
              <div className="flex items-start gap-4">
                 <HelpCircle className="w-8 h-8 text-primary shrink-0 mt-1" />
                 <div>
                    <h3 className="font-bold text-lg text-primary mb-2">تحتاج مساعدة إضافية؟</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      نحن هنا للإجابة على جميع استفساراتكم. يمكنكم التواصل معنا عبر صفحة "اتصل بنا".
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
