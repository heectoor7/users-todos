import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { TbChevronDown, TbChevronUp } from "react-icons/tb";

type PanelId = "details" | "address" | "company" | null;
export function FormSection({
  title,
  id,
  currentOpen,
  setOpen,
  children,
}: {
  title: string;
  id: PanelId;
  currentOpen: PanelId;
  setOpen: (id: PanelId) => void;
  children: React.ReactNode;
}) {
  const isOpen = currentOpen === id;
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={() => setOpen(isOpen ? null : id)}
      className="rounded-md data-[state=open]:bg-muted"
    >
      <CollapsibleTrigger
        asChild
        className="w-full flex items-center justify-between bg-gray-100 hover:bg-gray-200 px-4 rounded-md"
      >
        <Button variant="ghost" type="button" className="group w-full">
          {title}
          <div className="flex items-center justify-center">
            {!isOpen ? (
              <TbChevronDown className="size-6" />
            ) : (
              <TbChevronUp className="size-6" />
            )}
          </div>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent
        forceMount
        className="force-mount-content gap-2 pt-0 text-sm grid grid-cols-2 mt-4 data-[state=closed]:hidden"
      >
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
}
