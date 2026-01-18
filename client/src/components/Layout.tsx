import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, Phone, Mail, MapPin, GraduationCap, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { label: "الرئيسية", path: "/" },
  { label: "من نحن", path: "/about" },
  { label: "الإدارة والأطر", path: "/staff" },
  { label: "المستويات الدراسية", path: "/levels" },
  { label: "الأنشطة", path: "/activities" },
  { label: "المعرض", path: "/gallery" },
  { label: "فضاء التلميذ", path: "/student-space" },
  { label: "اتصل بنا", path: "/contact" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans" dir="rtl">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +212 655 79 13 74
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> hassan.taib@taalim.ma
            </span>
          </div>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> شارع مولاي محمد بن عبد الله، العرائش
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-primary leading-tight">مدرسة ابن خلدون</h1>
                <span className="text-xs text-muted-foreground">الابتدائية - العرائش</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link key={item.path} href={item.path}>
                <div 
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-all hover:bg-accent/10 hover:text-accent cursor-pointer",
                    location === item.path 
                      ? "bg-primary/10 text-primary font-bold" 
                      : "text-foreground/80"
                  )}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </nav>

          {/* Mobile Nav Trigger */}
          <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-8">
                {NAV_ITEMS.map((item) => (
                  <Link key={item.path} href={item.path}>
                    <SheetClose asChild>
                      <div 
                        className={cn(
                          "px-4 py-3 rounded-lg text-lg font-medium transition-colors cursor-pointer flex items-center gap-3",
                          location === item.path 
                            ? "bg-primary text-white shadow-md" 
                            : "hover:bg-muted"
                        )}
                      >
                         {item.label}
                      </div>
                    </SheetClose>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <motion.div
          key={location}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-100 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Column 1 */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-8 h-8 text-accent" />
                <h3 className="text-xl font-bold">مدرسة ابن خلدون الابتدائية</h3>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                مؤسسة تعليمية عمومية تهدف إلى تقديم تعليم عالي الجودة وتنمية قدرات التلاميذ معرفياً وسلوكياً في بيئة آمنة ومحفزة.
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-accent">روابط سريعة</h4>
              <ul className="space-y-3">
                {NAV_ITEMS.slice(0, 5).map((item) => (
                  <li key={item.path}>
                    <Link href={item.path}>
                      <span className="text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/50"></span>
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-accent">تواصل معنا</h4>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <span>شارع مولاي محمد بن عبد الله، العرائش، المغرب</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span dir="ltr">+212 655 79 13 74</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>hassan.taib@taalim.ma</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} مدرسة ابن خلدون الابتدائية - العرائش. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
