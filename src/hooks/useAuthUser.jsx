import { useUser } from "@clerk/clerk-react";

export const useAuthUser = () => {
  const { user } = useUser();
  return user ? { id: user.id, email: user.primaryEmailAddress } : null;
};
