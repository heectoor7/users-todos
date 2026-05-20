import { ToastT } from "sonner";

export type ExtendedToastT = ToastT & {
  pathname?: string;
};

/**
 * Reproduce dos pitidos cortos para notificaciones de error o alerta.
 * Utiliza la API Web Audio para generar los sonidos.
 * Crea 2 pitidos de 100ms cada uno, separados por un intervalo de 100ms.
 * Funciona solo en el navegador (linea 14)
 * Usa un oscilador de tipo "square" con una frecuencia de 100Hz.
 */
export function playBeep() {
  if (typeof window !== "undefined") {
    const beep = (delay: number) => {
      setTimeout(() => {
        const ctx = new window.AudioContext();
        const oscillator = ctx.createOscillator();
        oscillator.type = "square";
        oscillator.frequency.value = 100;
        oscillator.connect(ctx.destination);
        oscillator.start();
        setTimeout(() => {
          oscillator.stop();
          ctx.close();
        }, 100);
      }, delay);
    };
    beep(0); // Primer pitido inmediato
    beep(150); // Segundo pitido tras 100ms
  }
}
