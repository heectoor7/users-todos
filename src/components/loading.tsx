import Spinner from './Spinner';
export function Loading() {
  return (
    <div className="flex items-center gap-2 animate-pulse">
      <p className="text-gray-400 text-sm">Cargando ...</p>
      <Spinner className="size-5 text-blue-500" />
    </div>
  );
}