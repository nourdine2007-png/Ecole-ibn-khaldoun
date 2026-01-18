import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema } from "@shared/schema";
import { useSendMessage } from "@/hooks/use-school-data";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import type { InsertMessage } from "@shared/schema";

export default function Contact() {
  const { toast } = useToast();
  const sendMessageMutation = useSendMessage();

  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertMessage) => {
    sendMessageMutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: "تم إرسال رسالتك بنجاح",
          description: "شكراً لتواصلك معنا، سنقوم بالرد عليك في أقرب وقت.",
          variant: "default",
          className: "bg-green-600 text-white border-none"
        });
        form.reset();
      },
      onError: (error) => {
        toast({
          title: "حدث خطأ",
          description: error.message,
          variant: "destructive",
        });
      },
    });
  };

  return (
    <div className="bg-background min-h-screen pb-20">
      <div className="bg-primary/5 py-16 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">اتصل بنا</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            يسعدنا استقبال استفساراتكم وملاحظاتكم. نحن هنا لخدمتكم.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
        {/* Contact Info & Map */}
        <div className="space-y-8">
           <div className="grid sm:grid-cols-2 gap-4">
              <Card className="hover:shadow-md transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold mb-2">العنوان</h3>
                  <p className="text-sm text-muted-foreground">شارع مولاي محمد بن عبد الله، العرائش، المغرب</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold mb-2">الهاتف</h3>
                  <p className="text-sm text-muted-foreground" dir="ltr">+212 655 79 13 74</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold mb-2">البريد الإلكتروني</h3>
                  <p className="text-sm text-muted-foreground">hassan.taib@taalim.ma</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold mb-2">أوقات العمل</h3>
                  <p className="text-sm text-muted-foreground">الاثنين - السبت: 8:30 - 18:30</p>
                </CardContent>
              </Card>
           </div>

           {/* Google Map Placeholder */}
           <div className="w-full h-[300px] bg-muted rounded-xl overflow-hidden relative">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3257.697425114138!2d-6.147395024256667!3d35.18731097274987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0bc94628102d99%3A0x679075d97151122a!2sLarache%2C%20Morocco!5e0!3m2!1sen!2sus!4v1709494483756!5m2!1sen!2sus" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
           </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-border/50 h-fit">
          <h2 className="text-2xl font-bold mb-6 text-primary">راسلنا</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>الاسم الكامل</FormLabel>
                    <FormControl>
                      <Input placeholder="محمد العلوي" {...field} className="h-12 bg-muted/20" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>البريد الإلكتروني</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="example@gmail.com" {...field} className="h-12 bg-muted/20" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>رقم الهاتف</FormLabel>
                      <FormControl>
                        <Input placeholder="06XXXXXXXX" {...field} value={field.value || ''} className="h-12 bg-muted/20" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>الرسالة</FormLabel>
                    <FormControl>
                      <Textarea placeholder="اكتب رسالتك هنا..." className="min-h-[150px] resize-none bg-muted/20" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full h-12 text-lg" disabled={sendMessageMutation.isPending}>
                {sendMessageMutation.isPending ? "جاري الإرسال..." : (
                  <>إرسال الرسالة <Send className="mr-2 w-4 h-4 rtl:ml-2 rtl:mr-0" /></>
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
