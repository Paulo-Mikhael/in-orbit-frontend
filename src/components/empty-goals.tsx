import logo from "../assets/logo-in-orbit.svg";
import letsStart from "../assets/lets-start.svg";
import { Plus } from "lucide-react";
import { Button } from "../components/ui/button";
import { DialogTrigger } from "../components/ui/dialog";

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="Logo da in.orbit" />
      <img
        src={letsStart}
        alt="Uma mulher segurando um acionador e apertando o botão do mesmo, com um foguete voando ao fundo"
      />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar uma agora
        mesmo?
      </p>
      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  );
}
