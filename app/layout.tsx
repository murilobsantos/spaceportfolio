// Certifique-se de importar seus ícones corretamente
import { FaYoutube, FaInstagram } from "react-icons/fa";
import {
  RxGithubLogo,
  RxDiscordLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Comunidade</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Youtube</span>
            </p>
            {/* Outros links aqui */}
          </div>

          {/* Outros blocos de links aqui */}

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Sobre</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Torne-se patrocinador</span>
            </p>
            {/* Outros links aqui */}
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Seu Nome
        </div>
      </div>
    </div>
  );
};

export default Footer;
