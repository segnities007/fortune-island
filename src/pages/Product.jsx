// こちらは、/product　プロダクト紹介ページです

import { Button } from "../components/Button";
import { Image } from "../components/Image";
import { useNavigate } from "react-router-dom";

export default function Product() {
  const navigate = useNavigate();
  return (
    <div>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div class="mb-10 md:mb-16">
            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              事業紹介
            </h2>
            <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              WED株式会社は、「あたりまえを超える」態度を私たちの生み出すプロダクトで表現していきます。レシート買取アプリONEや大型商業施設の売上管理ソフトウェアZeroを運営・管理しています。
            </p>
          </div>

          <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
            <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
              <a
                href="#"
                class="group relative block h-24 overflow-hidden bg-gray-100 md:h-64"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgaEfy6Pl3PQ46WaGUI9ZQWenAraJFzutlqg&s"
                  class="absolute inset-0 h-full w-full object-contain object-center transition duration-200 group-hover:scale-110"
                />
              </a>
              <div class="flex flex-1 flex-col p-4 sm:p-6">
                <h2 class="mb-2 text-lg font-semibold text-gray-800">
                  <a
                    href="#"
                    class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    ONEレシート
                  </a>
                </h2>
                <p class="mb-8 text-gray-500">
                  購入したレシートや購入履歴をONEで送ると、1円から数千円のキャッシュバックがもらえるアプリ
                </p>
              </div>
            </div>

            <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
              <a
                href="#"
                class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
              >
                <img
                  src="data:image/jpeg;base64,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"
                  loading="lazy"
                  alt="Photo by Lorenzo Herrera"
                  class="absolute inset-0 h-full w-full object-contain object-center transition duration-200 group-hover:scale-110"
                />
              </a>
              <div class="flex flex-1 flex-col p-4 sm:p-6">
                <h2 class="mb-2 text-lg font-semibold text-gray-800">
                  <a
                    href="#"
                    class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    ONEモール
                  </a>
                </h2>
                <p class="mb-8 text-gray-500">
                  ONE経由でオンラインショッピングをすると、購入金額の数%がもらえるサービス
                </p>
              </div>
            </div>

            <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
              <a
                href="#"
                class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
              >
                <img
                  src="https://www.wed.day/content/images/2023/09/Image-Service-ONEMall.png"
                  loading="lazy"
                  alt="Photo by Magicle"
                  class="absolute inset-0 h-full w-full object-contain object-center transition duration-200 group-hover:scale-110"
                />
              </a>
              <div class="flex flex-1 flex-col p-4 sm:p-6">
                <h2 class="mb-2 text-lg font-semibold text-gray-800">
                  <a
                    href="#"
                    class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    ONEプラザ
                  </a>
                </h2>
                <p class="mb-8 text-gray-500">
                  ONEプラザは、ONEがイチオシする食品やコスメ、新鮮な産地直送品をおトクなお値段で買えて、さらにONEモールでお金をもらうことができるショップ
                </p>
              </div>
            </div>

            <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
              <a
                href="#"
                class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
              >
                <img
                  src="https://tiims.jp/company/image/?id=158&field=3&pattern=0"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  class="absolute inset-0 h-full w-full object-contain object-center transition duration-200 group-hover:scale-110"
                />
              </a>
              <div class="flex flex-1 flex-col p-4 sm:p-6">
                <h2 class="mb-2 text-lg font-semibold text-gray-800">
                  <a
                    href="#"
                    class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Zero
                  </a>
                </h2>
                <p class="mb-8 text-gray-500">
                  Zeroは読取率90%以上のOCR技術を基に、既存の売上管理業務効率化とデータ化を実現する売上管理ツール
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
