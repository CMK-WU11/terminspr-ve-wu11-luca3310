"use client";

import { useState } from "react";

interface UserInfo {
  added: boolean;
  isInstructor: boolean;
  token: string | undefined;
  id: string | undefined;
  activityId: string | undefined;
}

type useAddReturn = [add: () => void, pending: boolean];

export default function useAdd(
  userInfo: UserInfo,
  setIsAdded: (isAdded: boolean) => void,
): useAddReturn {
  const [pending, setPending] = useState(false);

  const add = async () => {
    try {
      setPending(true);
      await fetch(
        `http://localhost:4000/api/v1/users/${userInfo.id}/activities/${userInfo.activityId}`,
        {
          method: "POST",
          headers: { Authorization: `Bearer ${userInfo.token}` },
        },
      );

      setIsAdded(true);
    } catch (err: any) {
      throw new Error(err);
    } finally {
      setPending(false);
    }
  };

  return [add, pending];
}
