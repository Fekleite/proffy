import express, { response } from "express";
import db from "./database/connection";
import converHourToMinutes from "./utils/convertHourToMinutes";

const routes = express.Router();

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

routes.post("/classes", async (req, res) => {
  const { name, avatar, whatsapp, bio, subject, cost, schedule } = req.body;

  const trx = await db.transaction();

  try {
    const insertedUsersIds = await trx("users").insert({
      name,
      avatar,
      whatsapp,
      bio,
    });

    const user_id = insertedUsersIds[0];

    const insertedClassesIds = await trx("classes").insert({
      subject,
      cost,
      user_id,
    });

    const class_id = insertedClassesIds[0];

    const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
      return {
        week_day: scheduleItem.week_day,
        from: converHourToMinutes(scheduleItem.from),
        to: converHourToMinutes(scheduleItem.to),
        class_id,
      };
    });

    await trx("class_schedule").insert(classSchedule);

    await trx.commit();

    return res.status(201).send();
  } catch (error) {
    await trx.rollback();

    return response.status(400).json({
      error: "Unexpected error while creating new class.",
    });
  }
});

export default routes;
