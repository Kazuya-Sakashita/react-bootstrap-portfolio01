import React from 'react'
import portfolio01Image from "../Images/portfolio01.png";
import portfolio02Image from "../Images/portfolio02.png";
import portfolio03Image from "../Images/portfolio03.png";

function BlogPage() {
  return (
    <div className="container">
      <h1>作品について</h1>
      <hr></hr>
      <div className="d-md-flex flex-row">
        <div className="col-md-6">
              <a href="https://kazu-123.herokuapp.com/">
                  <img src={portfolio01Image} className="portfolioImage" />
              </a>
        </div>
        <div className="col-md-6 mx-2 px-2">
          <p>
          仕様・主な機能<br></br>
          スタイリストを選択、予約希望日選択、メニュー選択、予約時間を選択し予約できる。<br></br>
          管理者は、ユーザー管理、メニュー管理、スタッフ管理、休業日設定ができる。<br></br><br></br>
          <li>サインイン、サインアップ機能(Devise)</li>
          <li>環境変数(dotenv-rails)</li>
          <br></br>
          使用技術<br></br>
          <li>Ruby on Rails</li>
          <li>PostgreSQL </li>
          <li>Bootstrap</li>
          </p><br></br>
          <p>
              苦労した部分<br></br>
              はじめてのデプロイでエラーが出て苦しみましたが、なんとかデプロイすることができました。
              アセットパイプラインでエラーがかかり,スクールのインスタクタクターに相談したことをおぼえています。
              このアプリで一番苦労した部分は、<span>予約時間枠と施術に必要な時間を照らし合わせ、施術時間以上
              のところを予約できるようにするための仕組みの部分</span>でした。
              時間枠を設定し、空き状況の法則をみつけ、それを実装したことでした。
          </p>
        </div>
      </div>
      <hr></hr>
      <div className="d-md-flex flex-row mt-5">
        <div className="col-md-6">
              <a href="https://calm-crag-17496.herokuapp.com/">
                  <img src={portfolio02Image} className="portfolioImage" />
              </a>
        </div>
        <div className="col-md-6 mx-2 px-2">
          <p>
          仕様・主な機能<br></br>
          管理者は、エンジニアの稼働時間を確認し、2ヶ月先の稼働予定を管理できる。<br></br>
          管理者は、エンジニアの単価設定、変更、ステータス変更ができる。<br></br>
          エンジニアはスキル登録、稼働時間の管理ができる。<br></br><br></br>
          <li>サインイン、サインアップ機能(Devise)</li>
          <li>環境変数(dotenv-rails)</li>
          <li>検索機能(ransack)</li>
          <li>ページネーション(kaminari)</li>
          <li>権限管理(pundit)</li>
          <li>ステータス管理(AASM)</li>
          <li>ソーシャルログイン(Devise+Omniauth)</li>
          <li>非同期処理(Active Job + Sidekiq)</li>
          <br></br>
          使用技術<br></br>
          <li>Ruby on Rails</li>
          <li>PostgreSQL </li>
          <li>Docker</li>
          <li>Tailwind CSS </li>
          </p><br></br>
          <p>
              苦労した部分<br></br>
              権限管理やステータス管理、非同期処理など多くのgemを用いて実装する際に
              一度も触ったことがない機能の場合、いきなり開発中のアプリに実装すると複雑すぎて混乱するため
              <span>簡易アプリを作成し動きを確認し、その後に開発中のアプリに実装する方がエラーの際の解決も早く
              効率的</span>であることを学びました。
          </p>
        </div>
      </div>
      <hr></hr>
            <div className="d-md-flex flex-row mt-5">
        <div className="col-md-6">
              <a href="https://aqueous-refuge-45243.herokuapp.com/">
                  <img src={portfolio03Image} className="portfolioImage" />
              </a>
        </div>
        <div className="col-md-6 mx-2 px-2">
          <p>
          仕様・主な機能<br></br>
          利用者は言葉の登録ができ、そのテキストを音声で読み上げてくれる。<br></br>
          利用者は、登録した言葉を他の人に共有することができる。<br></br>
          他の利用者の共有された言葉をブックマークすることができる<br></br><br></br>
          <li>サインイン、サインアップ機能(Devise)</li>
          <li>環境変数(dotenv-rails)</li>
          <li>検索機能(ransack)</li>
          <li>ページネーション(kaminari)</li>
          <li>ソーシャルログイン(Devise+Omniauth)</li>
          <li>公開・非公開　ステータス管理(AASM)</li>
          <li>bookmark機能</li>
          <br></br>
          使用技術<br></br>
          <li>Ruby on Rails</li>
          <li>PostgreSQL </li>
          <li>Docker</li>
          <li>Tailwind CSS </li>
          </p><br></br>
          <p>
              苦労した部分<br></br>
              ソーシャルログインとして、google ,Twitter , Github の３つを実装に少し時間がかかった。
          </p>
        </div>
      </div>
    </div>
  )
}

export default BlogPage