"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";

export default function Home() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    api.get("/health")
      .then((res) => {
        setStatus(res.data.message);
      })
      .catch(() => {
        setStatus("Backend not connected");
      });
  }, []);

  return (
    <main className="flex h-screen items-center justify-center">
      <h1 className="text-3xl font-bold">{status}</h1>
    </main>
  );
}