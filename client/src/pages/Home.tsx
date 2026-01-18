import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Users, Trophy, Star } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import { ActivityCard } from "@/components/ActivityCard";
import { useActivities } from "@/hooks/use-school-data";

export default function Home() {
  const { data: activities, isLoading } = useActivities();

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="flex flex-col gap-0">
      {/* HERO SECTION */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Unsplash School Image */}
          <img 
            src="https://pixabay.com/get/ga44aed7e9aba1b2e0d1807a3d5dae21ab841639843cbfa474ae3512c198aab91c3ac699ac655d6ca8bb07ee821d1f161f58d2be965de35fa4e21ac22df82ccc1_1280.jpg" 
            alt="مدرسة ابن خلدون" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 mix-blend-multiply"></div>
        </div>

        {/* Content */}
        <div className="container relative z-10 px-4 text-center text-white">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/40 backdrop-blur-sm text-accent-foreground font-semibold text-sm">
              مؤسسة تعليمية عمومية رائدة
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              مدرسة ابن خلدون الابتدائية
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              نسعى لبناء جيل واعد، متسلح بالعلم والمعرفة، متشبع بالقيم الوطنية والإنسانية، في بيئة تربوية آمنة ومحفزة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 h-14">
                  اكتشف مدرستنا
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 hover:text-white text-lg px-8 h-14 bg-transparent">
                  تواصل معنا
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO/ABOUT SNIPPET */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <SectionHeader 
                title="مرحباً بكم في فضاء المعرفة" 
                subtitle="كلمة ترحيبية"
                align="start" 
                className="mb-6"
              />
              <p className="text-lg text-muted-foreground leading-loose mb-6">
                مدرسة ابن خلدون الابتدائية بالعرائش هي صرح تربوي عريق يجمع بين أصالة التاريخ وحداثة المناهج التعليمية. نلتزم بتوفير تعليم ابتدائي ذو جودة عالية يمكن تلاميذنا من اكتساب المهارات الأساسية.
              </p>
              <p className="text-lg text-muted-foreground leading-loose mb-8">
                تتميز مدرستنا بطاقم تربوي وإداري متمرس، وفضاءات تعليمية مجهزة، وأنشطة موازية تصقل مواهب المتعلمين وتنمي شخصياتهم.
              </p>
              <Link href="/about">
                <Button variant="link" className="p-0 text-primary font-bold text-lg group">
                  اقرأ المزيد عن تاريخنا <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {/* Unsplash Education Images */}
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop" 
                  alt="Students" 
                  className="rounded-2xl shadow-lg mt-8"
                />
                <img 
                  src="https://pixabay.com/get/g11755d556e0ceee1a08e8a6f086ac67895f652fc6ccc0d8b32a4f2c12191dc851c90c9d99e8900b09749aad3cd0a680ad3604c7f85b1e3c41f5109b2a1cb64c6_1280.jpg" 
                  alt="Classroom" 
                  className="rounded-2xl shadow-lg"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
              <div className="absolute -z-10 top-1/2 left-1/2 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUES / STATS */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4 text-accent-foreground">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">تعليم متميز</h3>
              <p className="text-primary-foreground/80 text-sm">مناهج دراسية حديثة تواكب التطور</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4 text-accent-foreground">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">أطر كفؤة</h3>
              <p className="text-primary-foreground/80 text-sm">طاقم تربوي ذو خبرة وكفاءة عالية</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4 text-accent-foreground">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">أنشطة متنوعة</h3>
              <p className="text-primary-foreground/80 text-sm">برامج ثقافية ورياضية وفنية</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4 text-accent-foreground">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">بيئة آمنة</h3>
              <p className="text-primary-foreground/80 text-sm">فضاء مدرسي يشجع على الإبداع</p>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST ACTIVITIES */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeader title="آخر الأنشطة المدرسية" subtitle="أخبارنا" />
          
          {isLoading ? (
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-96 bg-gray-200 rounded-xl animate-pulse"></div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activities?.slice(0, 3).map((activity) => (
                <motion.div 
                  key={activity.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <ActivityCard activity={activity} />
                </motion.div>
              ))}
            </div>
          )}
          
          <div className="text-center mt-12">
            <Link href="/activities">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8">
                عرض كل الأنشطة
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
