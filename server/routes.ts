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
    // Seed Activities with direct relative paths to public assets
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
    // Seed Staff with corrected names
    await storage.createStaff({
      name: "حسن التايب",
      role: "مدير المؤسسة",
      category: "admin",
      bio: "خبرة في مجال الإدارة التربوية.",
    });
    await storage.createStaff({
      name: "رحيمو ولاد الفقيه",
      role: "أستاذة التعليم الابتدائي",
      category: "teacher",
    });
    await storage.createStaff({
      name: "عثمان نيابو",
      role: "أستاذ التعليم الابتدائي",
      category: "teacher",
    });
    await storage.createStaff({
      name: "سارة ملوكي",
      role: "أستاذة التعليم الابتدائي",
      category: "teacher",
    });
    await storage.createStaff({
      name: "محمد البدراوي",
      role: "أستاذ التعليم الابتدائي",
      category: "teacher",
    });
  }

  const existingGallery = await storage.getGalleryItems();
  if (existingGallery.length === 0) {
    // Seed Gallery with provided school images
    await storage.createGalleryItem({
      title: "الاحتفال بالمسيرة الخضراء",
      description: "صور تذكارية من احتفال المؤسسة بذكرى المسيرة الخضراء المظفرة.",
      mediaUrl: "/attached_assets/WhatsApp_Image_2026-01-18_at_01.57.21_1768697931851.jpeg",
      category: "events",
    });
    await storage.createGalleryItem({
      title: "مشاركة التلاميذ في الأنشطة الثقافية",
      description: "تلاميذ المؤسسة بزي تقليدي خلال إحدى التظاهرات الثقافية.",
      mediaUrl: "/attached_assets/WhatsApp_Image_2026-01-18_at_01.57.22_1768697939202.jpeg",
      category: "trips",
    });
    await storage.createGalleryItem({
      title: "لقاءات تربوية وتواصلية",
      description: "جانب من اللقاءات التواصلية والأنشطة الموازية التي تنظمها المؤسسة.",
      mediaUrl: "/attached_assets/WhatsApp_Image_2026-01-18_at_01.57.22_(1)_1768697945368.jpeg",
      category: "classroom",
    });
  }
}
