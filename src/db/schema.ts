import { pgTable, serial, varchar, timestamp, text } from "drizzle-orm/pg-core";

export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  city: varchar("city", { length: 100 }).notNull(),
  address: varchar("address", { length: 255 }).notNull(),
  image: varchar("image", { length: 512 }),
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
