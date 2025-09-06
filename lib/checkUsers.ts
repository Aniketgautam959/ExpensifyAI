import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";

export const checkUsers = async () => {
  const user = await currentUser();
  if (!user) {
    return null;
  }
  
  const loggedInUser = await db.user.findUnique({
    where: { clerkUserId: user.id },
  });
  
  if (loggedInUser) {
    return loggedInUser;
  }

  // Create new user if they don't exist
  const newUser = await db.user.create({
    data: {
      clerkUserId: user.id,
      name: `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'User',
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0]?.emailAddress || '',
    },
  });

  return newUser;
};