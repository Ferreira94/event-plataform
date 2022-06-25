import { LogoRocketseat } from "./LogoRocketseat";

export function Footer() {
  return (
    <footer className="w-full py-2 flex flex-col items-center bg-gray-900 border-t border-gray-600">
      <LogoRocketseat />
      <p className="text-[0.8rem]">Rocketseat - Todos os direitos reservados</p>
    </footer>
  );
}
