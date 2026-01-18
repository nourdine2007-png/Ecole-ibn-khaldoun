import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Users, Trophy, Star } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import { ActivityCard } from "@/components/ActivityCard";
import { useActivities } from "@/hooks/use-school-data";

import bannerImg from "@assets/WhatsApp_Image_2026-01-18_at_01.35.17_1768696739472.jpeg";
import classImg1 from "@assets/WhatsApp_Image_2026-01-18_at_01.42.17_(3)_1768697024039.jpeg";
import classImg2 from "@assets/WhatsApp_Image_2026-01-18_at_01.42.17_(2)_1768697030895.jpeg";

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
      <section className="relative w-full overflow-hidden">
        <img 
          src={bannerImg} 
          alt="مدرسة ابن خلدون - المدارس الرائدة" 
          className="w-full h-auto object-contain"
        />
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
                <img 
                  src={classImg1} 
                  alt="Students in classroom" 
                  className="rounded-2xl shadow-lg mt-8 h-64 object-cover"
                />
                <img 
                  src={classImg2} 
                  alt="Teacher with student" 
                  className="rounded-2xl shadow-lg h-64 object-cover"
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

      {/* FOOTER CREDITS */}
      <footer className="py-6 bg-background border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="text-sm">من اعداد بكر السعيدي حيون</p>
        </div>
      </footer>
    </div>
  );
}
