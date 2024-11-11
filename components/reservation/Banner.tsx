const Banner = () => {
  return (
    <section className="pad:h-[320px] ph:h-[258px] text-center bg-gray-90 mt-20 pad:rounded-3xl ph:rounded-none">
      <h1 className="pad:pt-16 ph:pt-8 font-semibold leading-[130%] text-gray-0 pad:text-[64px] ph:text-[36px]">
        ClubRoom Reservation
      </h1>
      <div className="pt-8 leading-6 pad:text-xl ph:text-base mx-4">
        <p className="text-gray-20">
          깔루아 멤버들은 당일 기준 2주 내의 동아리 사용 예약을 신청할 수
          있습니다.
          <br />
          동아리방 위치 : 홍익대학교 D동 408호
          <br />
          사용 가능 시간 : 매주 화, 수, 토요일 10:00 ~ 22:00
        </p>
      </div>
    </section>
  );
};

export default Banner;