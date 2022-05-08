import React from 'react'
import { Link } from 'react-router-dom';
import profileImage from "../Images/kazu.png";
import portfolio01Image from "../Images/portfolio01.png";
import portfolio02Image from "../Images/portfolio02.png";
import portfolio03Image from "../Images/portfolio03.png";
import rubyImage from "../Images/ruby_icon.png";
import htmlImage from "../Images/htmlcss.png";
import bootstrapImage from "../Images/bootstrap_icon.png";
import tailwindImage from "../Images/css_tailwind_icon.png";
import dockerImage from "../Images/docker_icon.png";

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
              <p>私が作った作品の一部です。リンク先は,<span>立ち上がりに少し時間</span>がかかります</p>
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
                  <br></br><Link to="/blog">作品説明</Link>
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
                <br></br><Link to="/blog">作品説明</Link>
              </p>
            </div>
            <div className="col-md-4 border border-secondary">
              <a href="https://aqueous-refuge-45243.herokuapp.com/">
                  <img src={portfolio03Image} className="portfolioImage" />
              </a>
              <h4 className="my-3">読み上げ掲示板</h4>
              <p className="text-muted">
                発語障害を抱えている方が健常者とのコミュニケーションをとるためにスマホで使えるものをと思い作成しました。Chrome専用で、テキストを保存、読み上げ、他の人と共有、bookmark機能などを盛り込んでいます。
                <br></br><Link to="/blog">作品説明</Link>
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
              <img src={rubyImage} />
              <h4>Ruby on Rails</h4>
              <p>Ruby on Railsがつかえます</p>
            </div>
            <div className="col-md-4 services">
              <img src={htmlImage} />
              <h4>HTML/CSS</h4>
              <p>HTML/CSSがつかえます</p>
            </div>
            <div className="col-md-4 services">
              <img src={bootstrapImage} />
              <h4>Bootstrap</h4>
              <p>Bootstrapがつかえます</p>
            </div>
            <div className="col-md-4 services">
              <img src={tailwindImage} />
              <h4>Tailwind css</h4>
              <p>Tailwind cssがつかえます</p>
            </div>
            <div className="col-md-4 services">
              <img src={dockerImage} />
              <h4>Docker</h4>
              <p>Dockerがつかえます</p>
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