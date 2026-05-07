"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UsersT } from "../_core/users.definitions";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  TbHome,
  TbPhone,
  TbBriefcase,
  TbInfoCircle,
  TbInfoSquareRounded,
  TbMail,
  TbChevronUp,
  TbChevronDown,
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

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { UserInfoItem } from "./user-info-item";

export function UsersItem({ user }: { user: UsersT }) {
  const [collapsibleOpen, setCollapsibleOpen] = useState(false);

  return (
    <Card className="flex bg-primary/20 border border-gray-300 max-w-md w-75 gap-0 my-5 hover:transition-transform hover:scale-105">
      <Dialog>
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
                  <span className="font-semibold">{user.nombre}</span>
                  <span className="text-muted-foreground text-xs">
                    @{user.username}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <DialogTrigger>
                  <TbInfoSquareRounded className="size-6 cursor-pointer" />
                </DialogTrigger>
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <DialogContent className="bg-white border border-gray-300">
          <DialogHeader>
            <DialogTitle>
              <div className="flex items-center gap-4 mb-4">
                <Avatar>
                  <AvatarImage
                    src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png"
                    alt="Hallie Richards"
                  />
                  <AvatarFallback className="text-xs">HR</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-semibold">{user.nombre}</span>
                  <span className="text-muted-foreground text-xs">
                    @{user.username}
                  </span>
                </div>
              </div>
            </DialogTitle>
            <DialogDescription asChild>
              <CardContent>
                <Collapsible
                  open={collapsibleOpen}
                  onOpenChange={setCollapsibleOpen}
                >
                  <CollapsibleTrigger className="w-full flex items-center justify-between bg-gray-100 hover:bg-gray-200 px-4 rounded-md">
                    <div className="p-2">
                      {!collapsibleOpen ? (
                        <p>Ver más información</p>
                      ) : (
                        <p>Ver menos información</p>
                      )}
                    </div>
                    <div className="flex items-center justify-center">
                      {!collapsibleOpen ? (
                        <TbChevronDown className="size-6" />
                      ) : (
                        <TbChevronUp className="size-6" />
                      )}
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="flex flex-col p-4 gap-4">
                      <p className="text-[20px]">General</p>

                      <UserInfoItem icon={TbMail} label={user.email} />
                      <UserInfoItem icon={TbPhone} label={user.telefono} />
                      <UserInfoItem icon={TbWorldWww} label={user.website} />

                      <Separator className="bg-gray-300 my-2" />

                      <p className="text-[20px]">Dirección</p>
                      <UserInfoItem
                        icon={TbMapPin}
                        label={`${user.direccion.ciudad} - ${user.direccion.codPostal}`}
                      />
                      <UserInfoItem
                        icon={TbRoad}
                        label={`${user.direccion.calle}`}
                      />
                      <UserInfoItem
                        icon={TbHome}
                        label={`${user.direccion.casa}`}
                      />
                      <UserInfoItem
                        icon={TbCurrentLocation}
                        label={`${user.direccion.geo.lat}, ${user.direccion.geo.lng}`}
                      />

                      <Separator className="bg-gray-300 my-2" />

                      <p className="text-[20px]">Empresa</p>
                      <div className="flex gap-2 items-center">
                        <TbBriefcase className="size-5" />
                        <div className="flex w-full justify-between items-center gap-2">
                          <span className="text-muted-foreground text-sm">
                            {user.empresa.nombreEmpresa}
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
                                    {user.empresa.eslogan}
                                  </p>
                                  <p className="text-muted-foreground text-xs">
                                    {user.empresa.bs}
                                  </p>
                                </div>
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </Card>
  );
}
