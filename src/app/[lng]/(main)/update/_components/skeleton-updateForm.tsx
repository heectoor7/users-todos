import { FieldSet } from "@/components/ui/field";

export function UpdateFormSkeleton() {
  return (
    <div className="w-full flex flex-col items-center gap-4 animate-pulse">
      {/* TEXTO USER FOUND */}
      <div className="h-5 w-64 bg-gray-300 rounded" />

      {/* UPDATE FORM SKELETON (el que ya tienes) */}
      <FieldSet className="w-full">
        <div className="flex bg-primary/10 border border-gray-200 gap-0 my-5 rounded-lg">
          <div className="w-full p-6 space-y-6">
            {/* GENERAL TITLE */}
            <div className="h-5 w-24 bg-gray-300 rounded" />

            {/* GENERAL GRID */}
            <div className="grid grid-cols-2 p-4 gap-4">
              <div className="space-y-4">
                <div className="h-10 bg-gray-300 rounded" />
                <div className="h-10 bg-gray-300 rounded" />
              </div>

              <div className="space-y-4">
                <div className="h-10 bg-gray-300 rounded" />
                <div className="h-10 bg-gray-300 rounded" />
              </div>
            </div>

            {/* SEPARATOR */}
            <div className="h-px bg-gray-300 w-full" />

            {/* SUBTITLE */}
            <div className="h-5 w-32 bg-gray-300 rounded" />

            {/* OTROS DATOS */}
            <div className="grid grid-cols-2 p-4 gap-4">
              <div className="space-y-4">
                <div className="h-10 bg-gray-300 rounded" />
                <div className="h-10 bg-gray-300 rounded" />
              </div>

              <div className="space-y-4">
                <div className="h-10 bg-gray-300 rounded" />
                <div className="h-10 bg-gray-300 rounded" />
              </div>
            </div>

            {/* FINAL SEPARATOR */}
            <div className="h-px bg-gray-300 w-full" />
          </div>
        </div>
      </FieldSet>
    </div>
  );
}
