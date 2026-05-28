"use client";

import { useTranslation } from "react-i18next";
import "./i18n";
import { Button } from "@/components/ui/button";

export default function Traductor() {
  const { t, i18n } = useTranslation();

  function changeLanguage(lang: string) {
    i18n.changeLanguage(lang);
  }

  return (
    <main className="flex flex-col p-8 w-full justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">{t("Principal.Welcome")}</h1>
      <div className="flex gap-6">
        <Button
          className="bg-blue-500 hover:bg-blue-700 text-white"
          onClick={() => changeLanguage("es")}
        >
          Cambiar a Español
        </Button>
        <Button
          className="bg-blue-500 hover:bg-blue-700 text-white"
          onClick={() => changeLanguage("en")}
        >
          Cambiar a Inglés
        </Button>
      </div>
    </main>
  );
}
