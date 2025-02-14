"use server";

export default async function errorTester() {
  throw new Error("test");
}
