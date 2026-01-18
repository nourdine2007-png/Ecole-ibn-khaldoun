import { useGallery } from "@/hooks/use-school-data";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { PlayCircle, Image as ImageIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Gallery() {
  const { data: galleryItems, isLoading } = useGallery();

  return (
    <div className="bg-background min-h-screen pb-20">
      <div className="bg-primary/5 py-16 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">معرض الصور والفيديو</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            توثيق للحظات الجميلة والأنشطة المتميزة داخل فضاء المؤسسة.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1,2,3,4,5,6,7,8].map(i => <Skeleton key={i} className="aspect-square rounded-xl" />)}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {galleryItems?.map((item, idx) => (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <div className={`
                    group relative overflow-hidden rounded-xl cursor-pointer bg-muted
                    ${idx % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''}
                    ${idx % 7 === 0 ? 'md:col-span-2' : ''}
                  `}>
                    <img 
                      src={item.mediaUrl} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                      {item.mediaType === 'video' ? (
                        <PlayCircle className="w-12 h-12 mb-2" />
                      ) : (
                        <ImageIcon className="w-8 h-8 mb-2" />
                      )}
                      <h3 className="font-bold text-sm md:text-base">{item.title}</h3>
                    </div>
                    {item.mediaType === 'video' && (
                      <div className="absolute top-2 right-2 bg-black/50 p-1.5 rounded-full text-white backdrop-blur-sm">
                        <PlayCircle className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
                     {item.mediaType === 'video' ? (
                        <video controls className="w-full h-full" poster={item.mediaUrl}>
                          <source src={item.mediaUrl} type="video/mp4" />
                          متصفحك لا يدعم تشغيل الفيديو.
                        </video>
                     ) : (
                        <img 
                          src={item.mediaUrl} 
                          alt={item.title} 
                          className="w-full h-full object-contain"
                        />
                     )}
                     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        {item.description && <p className="text-white/80 mt-2">{item.description}</p>}
                     </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
