import React, { useState } from "react";
import { Car, Phone, Mail, MapPin, Calendar } from "lucide-react";

export default function LinKatzCarRental() {
  const [cars] = useState([
    {
      id: 1,
      name: "Toyota Camry",
      seats: 5,
      transmission: "Automatic",
      pricePerDay: 80,
      img: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&q=80",
      short: "舒適商務房車，省油又好開。",
    },
    {
      id: 2,
      name: "Mazda CX-5",
      seats: 5,
      transmission: "Automatic",
      pricePerDay: 95,
      img: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=1200&q=80",
      short: "適合家庭與郊遊的 SUV。",
    },
    {
      id: 3,
      name: "Toyota Hiace",
      seats: 12,
      transmission: "Manual",
      pricePerDay: 140,
      img: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=1200&q=80",
      short: "多人團體接送/商務用途最佳選擇。",
    },
  ]);

  const [booking, setBooking] = useState({
    carId: cars[0].id,
    name: "",
    email: "",
    phone: "",
    dateFrom: "",
    dateTo: "",
  });
  const [message, setMessage] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setBooking((b) => ({ ...b, [name]: value }));
  }

  function submitBooking(e) {
    e.preventDefault();
    // 基本前端驗證
    if (!booking.name || !booking.phone || !booking.dateFrom || !booking.dateTo) {
      setMessage({ type: "error", text: "請填寫完整聯絡資訊與租車日期。" });
      return;
    }

    // 模擬送出 — 真實應接後端 API
    console.log("預約送出：", booking);
    setMessage({ type: "success", text: "預約已送出！我們會在24小時內聯絡您確認。" });

    // 清空表單（保留選車）
    setBooking((b) => ({ ...b, name: "", email: "", phone: "", dateFrom: "", dateTo: "" }));
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-600 text-white rounded-lg shadow-lg">
            <Car size={20} />
          </div>
          <div>
            <div className="text-lg font-semibold">林嘉正 車行</div>
            <div className="text-sm text-gray-500">城市租車 · 短租 · 長租</div>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a className="hover:underline" href="#cars">車輛列表</a>
          <a className="hover:underline" href="#about">關於我們</a>
          <a className="hover:underline" href="#booking">線上預約</a>
          <a className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm" href="#contact">聯絡我們</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-center py-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              靈活租車，由林嘉正親自把關
            </h1>
            <p className="mt-4 text-gray-600">短期旅遊、商務出差或長租方案 — 我們提供潔淨可靠的車隊與彈性服務。</p>

            <div className="mt-6 flex gap-3">
              <a className="px-5 py-3 bg-indigo-600 text-white rounded-md shadow" href="#cars">查看車輛</a>
              <a className="px-5 py-3 border rounded-md" href="#booking">立即預約</a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gray-100 rounded-full"><Phone size={18} /></div>
                <div>
                  <div className="text-xs text-gray-500">客服電話</div>
                  <div className="font-medium">+852 9123 4567</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-gray-100 rounded-full"><MapPin size={18} /></div>
                <div>
                  <div className="text-xs text-gray-500">服務據點</div>
                  <div className="font-medium">香港 · 九龍 · 新界</div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <img alt="fleet" src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1400&q=80" className="w-full h-80 object-cover" />
          </div>
        </section>

        {/* Cars */}
        <section id="cars" className="py-8">
          <h2 className="text-2xl font-bold">熱門車款</h2>
          <p className="text-gray-600 mt-1">精選車款 — 清晰價格與規格，快速比較。</p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((c) => (
              <div key={c.id} className="bg-white rounded-xl shadow p-4 flex flex-col">
                <div className="rounded-md overflow-hidden h-40">
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover" />
                </div>
                <div className="mt-3 flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{c.name}</h3>
                      <div className="text-sm text-gray-500 mt-1">{c.short}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-indigo-600 font-bold">${c.pricePerDay}/天</div>
                      <div className="text-xs text-gray-500">起</div>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2"><Car size={16} />{c.seats} 人</div>
                    <div className="flex items-center gap-2">{c.transmission}</div>
                  </div>
                </div>

                <div className="mt-4 flex gap-3">
                  <a href="#booking" onClick={() => setBooking((b) => ({ ...b, carId: c.id }))} className="flex-1 py-2 text-center border rounded-md">預約</a>
                  <button
                    onClick={() => alert(`${c.name}\n\n${c.short}\n每日 ${c.pricePerDay} USD`)}
                    className="py-2 px-3 bg-indigo-600 text-white rounded-md"
                  >
                    詳情
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-10">
          <div className="bg-white rounded-xl shadow p-6 md:flex gap-6">
            <div className="md:w-1/3">
              <img src="https://images.unsplash.com/photo-1531123414780-f0b01775b0b8?w=800&q=80" alt="owner" className="rounded-lg w-full h-52 object-cover" />
            </div>
            <div className="md:flex-1">
              <h3 className="text-xl font-semibold">關於創辦人 — 林嘉正</h3>
              <p className="mt-3 text-gray-600">我叫林嘉正，從旅遊業出身，對服務細節與車輛保養有近十年的實務經驗。我創立這間車行，希望提供給旅客與在地客戶更透明、可靠的租車體驗。</p>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="p-3 border rounded">
                  <div className="text-sm text-gray-500">營業時間</div>
                  <div className="font-medium">每日 08:00 – 20:00</div>
                </div>
                <div className="p-3 border rounded">
                  <div className="text-sm text-gray-500">保養政策</div>
                  <div className="font-medium">每月例行檢查與清潔</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking */}
        <section id="booking" className="py-8">
          <h2 className="text-2xl font-bold">線上預約</h2>
          <p className="text-gray-600 mt-1">留下聯絡方式與租車日期，我們會儘快回覆確認。</p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <form onSubmit={submitBooking} className="bg-white rounded-xl shadow p-6">
              <div className="grid gap-3">
                <label className="text-sm text-gray-600">車款</label>
                <select name="carId" value={booking.carId} onChange={handleChange} className="p-2 border rounded">
                  {cars.map((c) => (
                    <option key={c.id} value={c.id}>{c.name} — ${c.pricePerDay}/天</option>
                  ))}
                </select>

                <label className="text-sm text-gray-600">姓名</label>
                <input name="name" value={booking.name} onChange={handleChange} className="p-2 border rounded" placeholder="你的姓名" />

                <label className="text-sm text-gray-600">手機</label>
                <input name="phone" value={booking.phone} onChange={handleChange} className="p-2 border rounded" placeholder="例如 +852 9123 4567" />

                <label className="text-sm text-gray-600">電子郵件（選填）</label>
                <input name="email" value={booking.email} onChange={handleChange} className="p-2 border rounded" placeholder="example@mail.com" />

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm text-gray-600">取車日期</label>
                    <input name="dateFrom" value={booking.dateFrom} onChange={handleChange} type="date" className="p-2 border rounded" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">還車日期</label>
                    <input name="dateTo" value={booking.dateTo} onChange={handleChange} type="date" className="p-2 border rounded" />
                  </div>
                </div>

                <button className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded">送出預約</button>

                {message && (
                  <div className={`mt-3 p-3 rounded ${message.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>{message.text}</div>
                )}
              </div>
            </form>

            <div className="bg-white rounded-xl shadow p-6 h-full">
              <h4 className="font-semibold">預約小須知</h4>
              <ul className="mt-3 list-disc list-inside text-sm text-gray-600 space-y-2">
                <li>取車時請出示身份證件與駕照。</li>
                <li>租金不含油資與過路費，車內清潔請保留原狀。</li>
                <li>若需司機或機場接送，請提前告知以便安排。</li>
                <li>保險選項可於確認時加購。</li>
              </ul>

              <div className="mt-6">
                <h5 className="text-sm text-gray-500">聯絡方式</h5>
                <div className="mt-2 font-medium">+852 9123 4567</div>
                <div className="text-sm text-gray-500">service@linkatz-carrental.com</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact / Footer */}
        <section id="contact" className="py-10">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-6 md:flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold">聯絡我們</h3>
              <p className="mt-2 text-sm">有任何問題或需要商務長租方案，歡迎直接撥打或寄信給我們。</p>

              <div className="mt-4 flex gap-4 items-center text-sm">
                <div className="flex items-center gap-2"><Phone size={16} />+852 9123 4567</div>
                <div className="flex items-center gap-2"><Mail size={16} />service@linkatz-carrental.com</div>
                <div className="flex items-center gap-2"><MapPin size={16} />香港 · 九龍 · 新界</div>
              </div>
            </div>

            <div className="mt-6 md:mt-0">
              <div className="text-sm">© {new Date().getFullYear()} 林嘉正 車行</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
