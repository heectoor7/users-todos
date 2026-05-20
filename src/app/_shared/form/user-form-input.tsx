import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";


export function FormInput({ label, ...props }: { label: string } & React.ComponentProps<typeof Input>) {
  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>
      <Input
        {...props}
        className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </Field>
  );
}