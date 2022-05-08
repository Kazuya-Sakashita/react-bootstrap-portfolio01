import React from 'react'
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import firebaseImage from "../Images/firebase.jpg";
import profileImage from "../Images/kazu.png";
import portfolio01Image from "../Images/portfolio01.png";
import portfolio02Image from "../Images/portfolio02.png";
import portfolio03Image from "../Images/portfolio03.png";


function HomePage() {
  return (
    <div className="container text-center">
      <h1>KAZUYA</h1>

      <img src={profileImage} className="profileImage" />

      <p>
        KAZUYAと申します。この度は、私のportfolioに訪問いただきましてありがとうございます。
        私が作成したものや、どのようなスキルがあるのかをお伝えしたいと思います。経験が浅くまだまだですが、よろしくお願いします。
      
      </p>

      <section className="page-section" id="services">
        <div className="service">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">PORTFOLIO</h2>
            <h3 className="section-subheading text-muted mb-5">
              私が作った作品の一部です。
            </h3>
          </div>
          <div className="row text-center">
            <div className="col-md-4 border border-secondary">
              
              <a href="https://kazu-123.herokuapp.com/">
                  <img src={portfolio01Image} className="portfolioImage" />
              </a>
              <h4 className="my-3">理容室予約サイト(架空)</h4>
              <p className="text-muted">
                学習しはじめて4ヶ月目くらいから実装したものでコードはダメダメ。CRUDの基本を学び実装でき、達成感はありました。優しい目でみてくださいね。
              </p>
            </div>
            <div className="col-md-4 border border-secondary">
              <a href="https://calm-crag-17496.herokuapp.com/">
                  <img src={portfolio02Image} className="portfolioImage" />
              </a>
              <h4 className="my-3">エンジニア稼働管理WB(架空)</h4>
              <p className="text-muted">
                ログイン・サインアップ、権限管理、検索、ステータス管理、SNSログイン、非同期処理など多くの機能について実装することで良い経験となりました。
                業務支援の管理WEBのためフロントは、Tailwind CSSを使用しシンプルにしました。
              </p>
            </div>
            <div className="col-md-4 border border-secondary">
              <a href="https://aqueous-refuge-45243.herokuapp.com/">
                  <img src={portfolio03Image} className="portfolioImage" />
              </a>
              <h4 className="my-3">読み上げ掲示板</h4>
              <p className="text-muted">
                発語障害を抱えている方が健常者とのコミュニケーションをとるためにスマホで使えるものをと思い作成しました。Chrome専用で、テキストを保存、読み上げ、他の人と共有、bookmark機能などを盛り込んでいます。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skill">
        <div className="text-center">
          <h1 className="title">スキル</h1>
          <div className="row text-center">
            <div className="col-md-4 services">
              <img src={reactImage} />
              <h4>React</h4>
              <p>Reactがつかえます</p>
            </div>
            <div className="col-md-4 services">
              <img src={jsImage} />
              <h4>HTML/CSS</h4>
              <p>HTML/CSSがつかえます</p>
            </div>
            <div className="col-md-4 services">
              <img src={firebaseImage} />
              <h4>Firebase</h4>
              <p>Firebaseがつかえます</p>
            </div>
          </div>
          <button type="button" className="btn btn-primary">
            スキル一覧
          </button>
        </div>
      </section>
    </div>
  )
}

export default HomePage