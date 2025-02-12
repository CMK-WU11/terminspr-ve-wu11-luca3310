"use client";

import { useState } from "react";

interface UserInfo {
  added: boolean;
  isInstructor: boolean;
  token: string | undefined;
  id: string | undefined;
  activityId: string | undefined;
}

type useRemoveReturn = [remove: () => void, pending: boolean];

export default function useRemove(
  userInfo: UserInfo,
  setIsAdded: (isAdded: boolean) => void,
): useRemoveReturn {
  const [pending, setPending] = useState(false);

  const remove = async () => {
    try {
      setPending(true);
      await fetch(
        `http://localhost:4000/api/v1/users/${userInfo.id}/activities/${userInfo.activityId}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${userInfo.token}` },
        },
      );

      setIsAdded(false);
    } catch (err: any) {
      throw new Error(err);
    } finally {
      setPending(false);
    }
  };

  return [remove, pending];
}
