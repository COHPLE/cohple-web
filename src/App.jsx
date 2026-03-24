export default function COHPLECorporateSite() {
  const brandFont = {
    fontFamily:
      "Avenir, Avenir Next, Helvetica Neue, Helvetica, Arial, sans-serif",
  }

  const shellClass =
    "mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16"

  const hrServices = [
    {
      title: "採用",
      body:
        "採用計画策定、ブランディング、求人作成、選考設計、母集団形成、オペレーションまで一貫して支援。採用市場を勝ち抜く戦略的な採用体制を構築します。",
    },
    {
      title: "労務",
      body:
        "勤怠・給与・社会保険等の基本業務を整理し、安定した運用体制を構築。法改正対応、多様な働き方、福利厚生を企画・推進し、労働環境改善に貢献します。",
    },
    {
      title: "人事制度",
      body:
        "等級・評価・報酬制度の設計や運用を支援。明確な評価基準とプロセスの標準化により、公平で納得感のある人事制度を実現します。",
    },
  ]

  const pmServices = [
    {
      title: "目標設定支援",
      body:
        "プロジェクトの目的を明確にし、到達すべきゴールと成果指標を定義します。関係者が同じ方向を向くことができる共通目標を設計します。",
    },
    {
      title: "実行計画の設計支援",
      body:
        "タスク分解・スケジュール設計・情報整理を行い、実行に必要な計画を設計。リスクや課題を事前に把握し、停滞を防ぎます。",
    },
    {
      title: "実行支援（ハンズオン）",
      body:
        "プロジェクトの管理・運営・実行など、必要な業務を“実際に手を動かして”遂行します。提言に留まらない実行力でプロジェクトを推進します。",
    },
  ]

  const achievements = [
    "IT系ベンチャー企業：優秀営業人材の母集団形成・面接代行",
    "M&Aアドバイザリー企業：人事マネージャー業務の代行（採用戦略・施策実行・スカウターチームの組成等）",
    "不動産仲介企業：給与計算・社会保険手続き・各種届出発行・助成金申請のサポート。労務管理システム導入・安定運用までのサポート。",
    "人材サービス企業：経営戦略実現に向けた課題整理・方針策定・施策実行支援",
  ]

  const worksSupplement =
    "その他、新規事業立ち上げ支援、CF/PL資料作成、Web広告の運用・効果分析、業務改善ツールの導入・構築など"

  const issues = [
    "優秀人材を採用したい",
    "安定した労務体制を整えたい",
    "強固な組織を作りたい",
    "プロジェクトが適切に設計・管理・実行されていない",
  ]

  return (
    <div className="min-h-screen bg-[#f6f8fc] text-slate-900">
      <header className="sticky top-0 z-40 border-b border-[#1c2f7a]/10 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div>
            <div
              className="text-xl font-bold tracking-normal text-[#1c2f7a]"
              style={brandFont}
            >
              COHPLE
            </div>
          </div>
          <nav
            aria-label="Primary"
            className="hidden items-center gap-6 text-sm text-slate-600 md:flex"
          >
            <a href="#mission" className="transition hover:text-[#1c2f7a]">
              ABOUT
            </a>
            <a href="#service" className="transition hover:text-[#1c2f7a]">
              SERVICE
            </a>
            <a href="#works" className="transition hover:text-[#1c2f7a]">
              WORKS
            </a>
            <a href="#profile" className="transition hover:text-[#1c2f7a]">
              PROFILE
            </a>
            <a href="#company" className="transition hover:text-[#1c2f7a]">
              COMPANY
            </a>
            <a href="#contact" className="transition hover:text-[#1c2f7a]">
              CONTACT
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-[#f6f8fc] via-white to-[#eef3ff]">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#1c2f7a]/10 blur-3xl" />
          <div className="absolute left-0 top-24 h-56 w-56 rounded-full bg-[#2d4bb3]/10 blur-3xl" />

          <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
            <h1
              className="text-5xl font-bold tracking-[0.08em] text-[#1c2f7a] sm:text-6xl"
              style={brandFont}
            >
              COHPLE
            </h1>
          </div>
        </section>

        <section id="mission" className="bg-white py-14 sm:py-16 lg:py-20">
          <div className={shellClass}>
            <div className="grid gap-8 xl:grid-cols-[240px_minmax(0,1fr)] xl:gap-16">
              <div className="xl:pt-1">
                <div className="text-sm font-semibold tracking-[0.18em] text-[#1c2f7a] uppercase">
                  About
                </div>
              </div>
              <div className="max-w-5xl space-y-6 text-[15px] leading-8 text-slate-600 sm:text-base xl:space-y-7 xl:text-lg xl:leading-9">
                <p>
                  私たちは、採用・労務を中心とした人事コンサルティングを提供するプロフェッショナルチームです。
                </p>
                <div className="grid gap-3 sm:grid-cols-2 xl:gap-4">
                  {issues.map((issue) => (
                    <div
                      key={issue}
                      className="rounded-2xl border border-[#1c2f7a]/10 bg-white p-4 text-sm shadow-sm xl:p-5 xl:text-[15px]"
                    >
                      {issue}
                    </div>
                  ))}
                </div>
                <p>
                  こうした企業の課題をハンズオン支援で解決します。企業の成長を支える組織・仕組みを構築し、持続的に成果が出る状態をつくること。それがCOHPLEの価値です。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="service" className="bg-[#1c2f7a] py-14 sm:py-16 lg:py-24">
          <div className={shellClass}>
            <div className="max-w-3xl">
              <div className="text-sm font-semibold tracking-[0.18em] text-white uppercase">
                Service
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="rounded-[28px] border border-white/20 bg-white/90 p-6 sm:p-8">
                <h3 className="mt-1 text-2xl font-bold text-slate-900">
                  人事・労務コンサルティング
                </h3>
                <div className="mt-6 grid gap-4">
                  {hrServices.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-[#1c2f7a]/10 bg-white p-5 shadow-sm"
                    >
                      <div className="text-lg font-semibold text-slate-950">
                        {item.title}
                      </div>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-white/20 bg-white/90 p-6 text-slate-900 sm:p-8">
                <h3 className="mt-1 text-2xl font-bold">
                  プロジェクトマネジメント
                </h3>
                <div className="mt-6 grid gap-4">
                  {pmServices.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-[#1c2f7a]/10 bg-white p-5"
                    >
                      <div className="text-lg font-semibold">{item.title}</div>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="works" className="bg-white py-14 lg:py-24">
          <div className={shellClass}>
            <div className="max-w-3xl">
              <div className="text-sm font-semibold tracking-[0.18em] text-[#1c2f7a] uppercase">
                Works
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                支援実績
              </h2>
            </div>
            <div className="mt-10 grid gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement}
                  className="flex gap-4 rounded-[24px] border border-[#1c2f7a]/10 bg-white p-5 shadow-sm sm:p-6"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1c2f7a]/10 text-sm font-semibold text-[#1c2f7a]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="text-sm leading-7 text-slate-700 sm:text-base">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-base">
              {worksSupplement}
            </p>
          </div>
        </section>

        <section
          id="profile"
          className="bg-white py-10 text-slate-900 sm:py-12 lg:py-14"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[24px] border border-[#1c2f7a]/10 bg-[#f8faff] p-5 shadow-sm sm:p-6 lg:p-7">
              <div className="text-sm font-semibold tracking-[0.18em] text-[#1c2f7a] uppercase">
                Profile
              </div>
              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                代表者プロフィール
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-[15px]">
                <span className="text-lg font-semibold text-slate-950">
                  代表取締役 杉田洋平
                </span>
                <br />
                <br />
                大手医療法人グループの採用担当としてキャリアをスタート。その後、大手人材サービス企業にて人材紹介事業のマーケティングを担当。大手総合コンサルティングファームでの労務コンサルティング、フリーランスを経て、スタートアップ企業に人事責任者としてジョイン。採用・労務・コーポレート領域を管掌し、事業成長を支える組織基盤の構築に携わる。2026年に株式会社COHPLEを創業。
              </p>
            </div>
          </div>
        </section>

        <section id="company" className="bg-white py-14 sm:py-16 lg:py-24">
          <div className={shellClass}>
            <div className="grid gap-8 xl:grid-cols-[240px_minmax(0,1fr)] xl:gap-16">
              <div className="xl:pt-1">
                <div className="text-sm font-semibold tracking-[0.18em] text-[#1c2f7a] uppercase">
                  Company
                </div>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  会社概要
                </h2>
              </div>
              <div className="max-w-5xl overflow-hidden rounded-[28px] border border-[#1c2f7a]/10 bg-white shadow-sm">
                <div className="grid grid-cols-1 divide-y divide-[#1c2f7a]/10 text-sm md:grid-cols-[220px_minmax(0,1fr)] md:divide-x md:divide-y-0 xl:text-[15px]">
                  <div className="bg-[#eef3ff] p-5 font-semibold text-slate-700 xl:px-6 xl:py-6">
                    会社名
                  </div>
                  <div className="p-5 text-slate-900 xl:px-6 xl:py-6">
                    株式会社COHPLE
                  </div>

                  <div className="bg-[#eef3ff] p-5 font-semibold text-slate-700 xl:px-6 xl:py-6">
                    代表者
                  </div>
                  <div className="p-5 text-slate-900 xl:px-6 xl:py-6">
                    杉田洋平
                  </div>

                  <div className="bg-[#eef3ff] p-5 font-semibold text-slate-700 xl:px-6 xl:py-6">
                    設立
                  </div>
                  <div className="p-5 text-slate-900 xl:px-6 xl:py-6">
                    2026年4月
                  </div>

                  <div className="bg-[#eef3ff] p-5 font-semibold text-slate-700 xl:px-6 xl:py-6">
                    所在地
                  </div>
                  <div className="p-5 text-slate-900 xl:px-6 xl:py-6">
                    〒154-0004
                    <br />
                    東京都世田谷区太子堂4丁目18番15号
                    <br />
                    マガザン三軒茶屋2 3F-3
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="bg-[#1c2f7a] py-14 text-white sm:py-16 lg:py-20"
        >
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <div className="text-sm font-semibold tracking-[0.18em] text-white/80 uppercase">
              Contact
            </div>

            <div className="mt-8">
              <a
                href="https://forms.gle/sNjeA1zjmaNgtiB79"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#1c2f7a] transition hover:bg-slate-100"
              >
                お問い合わせはこちら
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#1c2f7a]/10 bg-white">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-4 py-8 text-center sm:px-6 lg:flex-row lg:items-center lg:justify-center lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-xs leading-6 text-slate-500">
            © 2026 COHPLE Inc. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}