"use client";

import Button from "@/components/Button";
import useAdd from "@/hooks/useAdd";
import useRemove from "@/hooks/useRemove";
import { useState } from "react";

interface UserInfo {
  added: boolean;
  isInstructor: boolean;
  token: string | undefined;
  id: string | undefined;
  activityId: string | undefined;
}

export default function Tilmeld({ userInfo }: { userInfo: UserInfo }) {
  const [isAdded, setIsAdded] = useState(userInfo.added);
  const [add, addPending] = useAdd(userInfo, setIsAdded);
  const [remove, removePending] = useRemove(userInfo, setIsAdded);

  if (userInfo.isInstructor) {
    return null;
  } else if (!isAdded) {
    return (
      <Button
        disabled={addPending}
        content={addPending ? "loading..." : "Tilmeld"}
        onClick={() => add()}
      />
    );
  } else
    return (
      <Button
        disabled={removePending}
        content={removePending ? "loading..." : "Afmeld"}
        onClick={() => remove()}
      />
    );
}
