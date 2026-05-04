"use client";

import { useState } from "react";
import type { Accommodation } from "@/lib/accommodations";

export default function BookingWidget({ acc }: { acc: Accommodation }) {
  const today = new Date().toISOString().split("T")[0];
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [isBooked, setIsBooked] = useState(false);
  const [showGuestPicker, setShowGuestPicker] = useState(false);

  const nights =
    checkIn && checkOut
      ? Math.max(0, Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000))
      : 0;
  const subtotal = acc.price * Math.max(1, nights);
  const serviceFee = Math.round(subtotal * 0.12);
  const total = subtotal + serviceFee;

  const handleBooking = () => {
    if (!checkIn || !checkOut || nights <= 0) {
      alert("체크인/체크아웃 날짜를 선택해주세요.");
      return;
    }
    setIsBooked(true);
  };

  if (isBooked) {
    return (
      <div className="sticky top-28 border border-gray-200 rounded-2xl p-6 shadow-xl text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">예약 완료!</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          <span className="font-semibold text-gray-700">{checkIn}</span> →{" "}
          <span className="font-semibold text-gray-700">{checkOut}</span>
          <br />
          {acc.name}에서의{" "}
          <span className="font-semibold text-[#1B4F72]">{nights}박</span>이 예약되었습니다.
        </p>
        <div className="bg-gray-50 rounded-xl p-3 mb-4">
          <p className="text-xs text-gray-400 mb-1">총 결제 금액</p>
          <p className="text-2xl font-bold text-[#1B4F72]">₩{total.toLocaleString()}</p>
        </div>
        <button
          onClick={() => { setIsBooked(false); setCheckIn(""); setCheckOut(""); }}
          className="text-sm text-gray-400 underline underline-offset-2 hover:text-gray-600"
        >
          예약 취소
        </button>
      </div>
    );
  }

  return (
    <div className="sticky top-28 border border-gray-200 rounded-2xl p-6 shadow-xl">
      {/* Price Header */}
      <div className="flex items-baseline justify-between mb-5">
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-gray-900">₩{acc.price.toLocaleString()}</span>
          <span className="text-gray-500 text-sm">/ 박</span>
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-700">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="font-semibold">{acc.rating}</span>
          <span className="text-gray-400 text-xs">({acc.reviewCount})</span>
        </div>
      </div>

      {/* Date + Guest Picker */}
      <div className="border border-gray-300 rounded-xl overflow-hidden mb-3">
        <div className="grid grid-cols-2 divide-x divide-gray-300">
          <div className="p-3 hover:bg-gray-50 transition-colors">
            <div className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">체크인</div>
            <input
              type="date"
              value={checkIn}
              min={today}
              onChange={(e) => {
                setCheckIn(e.target.value);
                if (checkOut && e.target.value >= checkOut) setCheckOut("");
              }}
              className="w-full text-sm text-gray-700 outline-none cursor-pointer bg-transparent"
            />
          </div>
          <div className="p-3 hover:bg-gray-50 transition-colors">
            <div className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">체크아웃</div>
            <input
              type="date"
              value={checkOut}
              min={checkIn || today}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full text-sm text-gray-700 outline-none cursor-pointer bg-transparent"
            />
          </div>
        </div>
        <div
          className="border-t border-gray-300 p-3 cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => setShowGuestPicker(!showGuestPicker)}
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-0.5">인원</div>
              <span className="text-sm text-gray-700">게스트 {guests}명</span>
            </div>
            <svg
              className={`w-4 h-4 text-gray-500 transition-transform ${showGuestPicker ? "rotate-180" : ""}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {showGuestPicker && (
          <div className="border-t border-gray-200 p-4 bg-gray-50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-800">게스트</p>
                <p className="text-xs text-gray-400">최대 {acc.maxGuests}명</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-500 transition-colors text-gray-700 font-bold disabled:opacity-30"
                  disabled={guests <= 1}
                >
                  −
                </button>
                <span className="text-sm font-bold w-5 text-center text-gray-900">{guests}</span>
                <button
                  onClick={() => setGuests(Math.min(acc.maxGuests, guests + 1))}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-500 transition-colors text-gray-700 font-bold disabled:opacity-30"
                  disabled={guests >= acc.maxGuests}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Reserve Button */}
      <button
        onClick={handleBooking}
        className="w-full py-3.5 bg-gradient-to-r from-[#E67E22] to-[#d35400] text-white font-bold rounded-xl hover:from-[#d35400] hover:to-[#c0392b] transition-all shadow-md hover:shadow-lg active:scale-[0.98] text-base"
      >
        예약하기
      </button>
      <p className="text-center text-xs text-gray-400 mt-2">예약 확정 전까지 요금이 청구되지 않습니다</p>

      {/* Price Breakdown */}
      {nights > 0 && (
        <div className="mt-5 space-y-3 pt-5 border-t border-gray-100">
          <div className="flex justify-between text-sm text-gray-600">
            <span>₩{acc.price.toLocaleString()} × {nights}박</span>
            <span>₩{subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span className="underline underline-offset-2 cursor-pointer hover:text-gray-900">서비스 수수료</span>
            <span>₩{serviceFee.toLocaleString()}</span>
          </div>
          <div className="flex justify-between font-bold text-gray-900 pt-3 border-t border-gray-200 text-sm">
            <span>합계</span>
            <span>₩{total.toLocaleString()}</span>
          </div>
        </div>
      )}
    </div>
  );
}
