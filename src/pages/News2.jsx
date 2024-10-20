// こちらは、/news/2 のページです

import { Button } from "../components/Button";
import { Image } from "../components/Image";
import { useNavigate } from "react-router-dom";

export default function News1() {
  const navigate = useNavigate();

  const handleClickPrev = () => {
    navigate("/news/1");
  };
  const handleClickNext = () => {
    navigate("/news/3");
  };

  return (
    <div>
      <a href="/news" className="hover:underline">
        一覧へ戻る
      </a>
      <br />

      <br />
      <br />
      <h2>「卒論テーマの公開」と「学生課によるガイダンス」について</h2>
      <br />
      <Image
        src="https://u-aizu.ac.jp/files/images/2019finallecture11.JPG"
        alt="daikogi"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <br />
      <p>
        2024年10月18日、会津大学の学部2年生を対象としたガイダンスが催されました。
        会津大学では、多くの場合2年生の後期に配属する研究室とフィールド、卒業論文のテーマを決め、3年生から配属されます。
        みんな真面目に話を聞いていました。
      </p>

      <div>
        <div className="flex justify-center mt-8 p-4">
          <Button
            size="lg"
            variant="primary"
            onClick={handleClickPrev}
            className="mx-2"
          >
            ←prev
          </Button>
          <Button
            size="lg"
            variant="primary"
            onClick={handleClickNext}
            className="mx-2"
          >
            next→
          </Button>
        </div>
        <br />
      </div>
    </div>
  );
}
