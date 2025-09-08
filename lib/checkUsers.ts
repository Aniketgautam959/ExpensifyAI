import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";

export const checkUsers = async () => {
  const user = await currentUser();
  if (!user) {
    return null;
  }
  
  const email = user.emailAddresses[0]?.emailAddress || '';
  
  // First, try to find existing user by clerkUserId
  let loggedInUser = await db.user.findUnique({
    where: { clerkUserId: user.id }
  });
  
  if (loggedInUser) {
    // User exists, update only if email is different and not already taken
    if (loggedInUser.email !== email) {
      // Check if email is already taken by another user
      const existingUserWithEmail = await db.user.findUnique({
        where: { email: email }
      });
      
      if (!existingUserWithEmail) {
        // Email is available, update the user
        loggedInUser = await db.user.update({
          where: { clerkUserId: user.id },
          data: {
            name: `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'User',
            imageUrl: user.imageUrl,
            email: email,
          }
        });
      } else {
        // Email is taken by another user, update everything except email
        loggedInUser = await db.user.update({
          where: { clerkUserId: user.id },
          data: {
            name: `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'User',
            imageUrl: user.imageUrl,
          }
        });
      }
    } else {
      // Email is the same, just update other fields
      loggedInUser = await db.user.update({
        where: { clerkUserId: user.id },
        data: {
          name: `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'User',
          imageUrl: user.imageUrl,
        }
      });
    }
  } else {
    // User doesn't exist, check if email is already taken
    const existingUserWithEmail = await db.user.findUnique({
      where: { email: email }
    });
    
    if (existingUserWithEmail) {
      // Email is already taken, we need to handle this case
      // For now, we'll create a user with a modified email or throw an error
      throw new Error(`Email ${email} is already registered with another account`);
    }
    
    // Create new user
    loggedInUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name: `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'User',
        imageUrl: user.imageUrl,
        email: email,
      }
    });
  }

  return loggedInUser;
};