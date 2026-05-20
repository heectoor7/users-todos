// src/app/(main)/info/user/_components/UserDataDisplay.tsx
"use client";

import { useState } from "react";
import { redirect } from "next/navigation";
import { useHydrate } from "@/hooks/useHydrate";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  TbHome,
  TbPhone,
  TbBriefcase,
  TbInfoCircle,
  TbMail,
  TbWorldWww,
  TbMapPin,
  TbRoad,
  TbCurrentLocation,
  TbBulb,
} from "react-icons/tb";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { UserInfoItem } from "@/app/(main)/users/_components/user-info-item";

export default function UserData() {
  const hydrated = useHydrate();

  const [userData] = useState<any>(() => {
    if (typeof window !== "undefined") {
      const stored = sessionStorage.getItem("searched_user");
      return stored ? JSON.parse(stored) : null;
    }
    return null;
  });

  function clearStorage() {
    sessionStorage.removeItem("searched_user");
    redirect("/info");
  }

  if (!hydrated) return <div className="animate-pulse">Cargando...</div>;

  if (!userData) {
    return (
      <>
        <p className="text-gray-500">No hay un usuario seleccionado</p>
        <Button
          type="submit"
          onClick={clearStorage}
          className="px-4 py-2 bg-blue-400 rounded text-white cursor-pointer"
        >
          Volver
        </Button>
      </>
    );
  }

  return (
    <div className="md:w-96">
    <Button
          type="submit"
          onClick={clearStorage}
          className="w-full bg-blue-400 rounded text-white cursor-pointer"
        >
          Volver
        </Button>
    <Card className="flex bg-primary/20 border border-gray-300 md:w-96 gap-0 my-5">
      <CardHeader>
        <CardTitle>
          
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage
                  src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png"
                  alt="Hallie Richards"
                />
                <AvatarFallback className="text-xs">HR</AvatarFallback>
              </Avatar>
              <div className="flex flex-col ">
                <span className="font-semibold">{userData.nombre} - ID {userData.id}</span>
                <span className="text-muted-foreground text-xs">
                  @{userData.username}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4"></div>
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col p-4 gap-4">
          <p className="text-[20px]">General</p>

          <UserInfoItem icon={TbMail} label={userData.email} />
          <UserInfoItem icon={TbPhone} label={userData.telefono} />
          <UserInfoItem icon={TbWorldWww} label={userData.website} />

          <Separator className="bg-gray-300 my-2" />

          <p className="text-[20px]">Dirección</p>
          <UserInfoItem
            icon={TbMapPin}
            label={`${userData.direccion.ciudad} - ${userData.direccion.codPostal}`}
          />
          <UserInfoItem icon={TbRoad} label={`${userData.direccion.calle}`} />
          <UserInfoItem icon={TbHome} label={`${userData.direccion.casa}`} />
          <UserInfoItem
            icon={TbCurrentLocation}
            label={`${userData.direccion.geo.lat}, ${userData.direccion.geo.lng}`}
          />

          <Separator className="bg-gray-300 my-2" />

          <p className="text-[20px]">Empresa</p>
          <div className="flex gap-2 items-center">
            <TbBriefcase className="size-5" />
            <div className="flex w-full justify-between items-center gap-2">
              <span className="text-muted-foreground text-sm">
                {userData.empresa.nombreEmpresa}
              </span>
              <Tooltip>
                <TooltipTrigger>
                  <TbInfoCircle className="size-5" />
                </TooltipTrigger>
                <TooltipContent className="bg-blue-100 border border-gray-400 mt-2 max-w-70">
                  <div className="flex items-center gap-4 mb-4">
                    <TbBulb className="size-7" />
                    <div className="flex flex-col">
                      <p className="font-semibold text-sm">
                        {userData.empresa.eslogan}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {userData.empresa.bs}
                      </p>
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    </div>
  );
}
