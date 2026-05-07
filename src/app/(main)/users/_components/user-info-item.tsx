import { IconType } from "react-icons";

type UserInfoItemProps = {
  icon: IconType;
  label: string | undefined;
}

export function UserInfoItem({ icon: Icon, label }: UserInfoItemProps) {
  if (!label) return null; // Opcional: no renderiza nada si no hay dato

  return (
    <div className="flex gap-2 items-center">
      <Icon className="size-5" />
      <span className="text-muted-foreground text-sm">
        {label}
      </span>
    </div>
  );
}