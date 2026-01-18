import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { insertMessageSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // Activities
  app.get(api.activities.list.path, async (req, res) => {
    const activities = await storage.getActivities();
    res.json(activities);
  });

  app.get(api.activities.get.path, async (req, res) => {
    const activity = await storage.getActivity(Number(req.params.id));
    if (!activity) {
      return res.status(404).json({ message: "Activity not found" });
    }
    res.json(activity);
  });

  // Staff
  app.get(api.staff.list.path, async (req, res) => {
    const staff = await storage.getStaff();
    res.json(staff);
  });

  // Gallery
  app.get(api.gallery.list.path, async (req, res) => {
    const items = await storage.getGalleryItems();
    res.json(items);
  });

  // Contact
  app.post(api.contact.create.path, async (req, res) => {
    try {
      const input = insertMessageSchema.parse(req.body);
      const message = await storage.createMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Seed Data
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingActivities = await storage.getActivities();
  if (existingActivities.length === 0) {
    // Seed Activities with corrected image paths using public directory
    await storage.createActivity({
      title: "حملة التوعية بالسلامة الطرقية",
      content: "نظمت المؤسسة حملة تحسيسية لفائدة التلاميذ حول قواعد السلامة الطرقية وأهمية احترام قانون السير. تضمنت الحملة ورشات تطبيقية وعروضاً توضيحية لترسيخ ثقافة السلامة الطرقية لدى الناشئة.",
      category: "educational",
      imageUrl: "/attached_assets/WhatsApp_Image_2026-01-18_at_01.42.17_(1)_1768697042248.jpeg",
    });
    await storage.createActivity({
      title: "التحول الرقمي في التعليم",
      content: "استخدام التكنولوجيا الحديثة والوسائط المتعددة لتسهيل عملية التعلم وتطوير مهارات التلاميذ الرقمية. تهدف هذه المبادرة إلى دمج الأدوات الرقمية في المناهج الدراسية لتحفيز الإبداع والابتكار.",
      category: "educational",
      imageUrl: "/attached_assets/WhatsApp_Image_2026-01-18_at_01.42.16_1768697060573.jpeg",
    });
    await storage.createActivity({
      title: "ورشة العمل الجماعي",
      content: "تشجيع التلاميذ على التعاون والعمل كفريق واحد من خلال أنشطة تفاعلية داخل الفصل. تركز الورشة على تنمية المهارات الاجتماعية وروح الفريق لدى المتعلمين.",
      category: "cultural",
      imageUrl: "/attached_assets/WhatsApp_Image_2026-01-18_at_01.42.17_1768697050251.jpeg",
    });
  }

  const existingStaff = await storage.getStaff();
  if (existingStaff.length === 0) {
    // Seed Staff
    await storage.createStaff({
      name: "حسن الطايب",
      role: "مدير المؤسسة",
      category: "admin",
      bio: "خبرة 20 سنة في مجال الإدارة التربوية.",
    });
    await storage.createStaff({
      name: "فاطمة الزهراء",
      role: "أستاذة اللغة العربية",
      category: "teacher",
    });
    await storage.createStaff({
      name: "أحمد العمراني",
      role: "أستاذ الرياضيات",
      category: "teacher",
    });
    await storage.createStaff({
      name: "سناء العلمي",
      role: "أستاذة اللغة الفرنسية",
      category: "teacher",
    });
  }

  const existingGallery = await storage.getGalleryItems();
  if (existingGallery.length === 0) {
    // Seed Gallery
    await storage.createGalleryItem({
      title: "حفل نهاية السنة",
      description: "صور من حفل توزيع الجوائز على المتفوقين.",
      mediaUrl: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3",
      category: "events",
    });
    await storage.createGalleryItem({
      title: "الرحلة المدرسية",
      description: "زيارة للمآثر التاريخية بالمدينة.",
      mediaUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3",
      category: "trips",
    });
    await storage.createGalleryItem({
      title: "أنشطة القسم",
      description: "تفاعل التلاميذ داخل الفصل.",
      mediaUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3",
      category: "classroom",
    });
  }
}
