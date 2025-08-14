
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export interface BookingData {
  name: string;
  email: string;
  dateRange: {
    from: Date;
    to: Date;
  };
}

export async function saveBooking(bookingData: BookingData): Promise<string> {
  try {
    const docRef = await addDoc(collection(db, "bookings"), {
      ...bookingData,
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
    throw new Error("Could not save booking.");
  }
}
