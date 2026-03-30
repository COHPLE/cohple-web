export default function Kessan() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-slate-800">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-10 text-3xl font-bold text-[#1c2f7a]">決算公告</h1>

        <div className="space-y-6 text-sm leading-8 sm:text-base">
          <section>
            <p>令和〇年〇月〇日</p>
          </section>

          <section>
            <p>株式会社COHPLE</p>
            <p>代表取締役　杉田洋平</p>
          </section>

          <section>
            <p>
              当社の第〇期決算につき、下記のとおり公告いたします。
            </p>
          </section>

          <section>
            <p>記</p>
          </section>

          <section>
            <p>貸借対照表の要旨</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse border border-slate-300 text-left text-sm">
                <tbody>
                  <tr>
                    <th className="border border-slate-300 px-4 py-3 bg-slate-50 w-1/2">
                      資産の部
                    </th>
                    <td className="border border-slate-300 px-4 py-3">
                      〇〇〇円
                    </td>
                  </tr>
                  <tr>
                    <th className="border border-slate-300 px-4 py-3 bg-slate-50">
                      負債の部
                    </th>
                    <td className="border border-slate-300 px-4 py-3">
                      〇〇〇円
                    </td>
                  </tr>
                  <tr>
                    <th className="border border-slate-300 px-4 py-3 bg-slate-50">
                      純資産の部
                    </th>
                    <td className="border border-slate-300 px-4 py-3">
                      〇〇〇円
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <p className="pt-6">以上</p>
          </section>
        </div>
      </div>
    </main>
  )
}