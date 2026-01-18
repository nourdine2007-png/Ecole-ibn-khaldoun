import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, History, Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-primary/5 py-16 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">من نحن</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            تعرف على تاريخ مدرسة ابن خلدون، رؤيتنا للمستقبل، والرسالة التربوية التي نحملها.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* History Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-24"
        >
          <div>
            {/* Unsplash Old Building/History Image */}
            <img 
              src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?q=80&w=2074&auto=format&fit=crop" 
              alt="Historic School Building" 
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent-foreground">
                <History className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-primary">نبذة تاريخية</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-loose mb-6">
              تعتبر مدرسة ابن خلدون الابتدائية بمدينة العرائش (القصر الكبير) معلمة تاريخية وتربوية عريقة. تأسست المدرسة سنة 1925، وكانت تعرف سابقاً باسم "Groupo Escolar".
            </p>
            <p className="text-lg text-muted-foreground leading-loose">
              خضعت المؤسسة لعملية تجديد شاملة، حيث افتتحت في حلة جديدة مع بداية الموسم الدراسي 2019/2020، محافظة على طابعها المعماري الفريد ومجهزة بأحدث الوسائل التعليمية لتوفير بيئة ملائمة للتحصيل الدراسي.
            </p>
          </div>
        </motion.div>

        {/* Mission Vision Goals Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <motion.div variants={item}>
            <Card className="h-full border-t-4 border-t-primary shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <CardContent className="pt-8 px-6 pb-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  <Eye className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">الرؤية</h3>
                <p className="text-muted-foreground leading-relaxed">
                  الريادة في تقديم تعليم ابتدائي نوعي يجمع بين الأصالة والمعاصرة، لبناء جيل مبدع ومتمكن من أدوات المعرفة.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="h-full border-t-4 border-t-accent shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <CardContent className="pt-8 px-6 pb-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-accent-foreground">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">الرسالة</h3>
                <p className="text-muted-foreground leading-relaxed">
                  توفير بيئة تربوية آمنة ومحفزة، تنمي قدرات المتعلم معرفياً وسلوكياً ووجدانياً، وتغرس فيه قيم المواطنة والتسامح.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="h-full border-t-4 border-t-primary shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <CardContent className="pt-8 px-6 pb-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">الأهداف</h3>
                <ul className="text-muted-foreground text-sm space-y-2 text-start list-disc list-inside">
                  <li>رفع مستوى التحصيل الدراسي للتلاميذ.</li>
                  <li>تشجيع التميز والإبداع والابتكار.</li>
                  <li>تفعيل الحياة المدرسية عبر الأندية التربوية.</li>
                  <li>تعزيز الشراكة مع الأسرة والمحيط.</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
