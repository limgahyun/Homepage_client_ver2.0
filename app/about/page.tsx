import Image from 'next/image';
import music from '@/public/image/about/music.svg';
import guitar from '@/public/image/about/guitar.svg';
import celebrate from '@/public/image/about/celebrate.svg';
import beer from '@/public/image/about/beer.svg';
import ensemble1 from '@/public/image/about/ensemble1.avif';
import ensemble2 from '@/public/image/about/ensemble2.avif';
import ensemble3 from '@/public/image/about/ensemble3.avif';
import concert1 from '@/public/image/about/concert1.avif';
import concert2 from '@/public/image/about/concert2.avif';
import concert3 from '@/public/image/about/concert3.avif';
import networking1 from '@/public/image/about/networking1.avif';
import networking2 from '@/public/image/about/networking2.avif';
import networking3 from '@/public/image/about/networking3.avif';
import travel1 from '@/public/image/about/travel1.avif';
import travel2 from '@/public/image/about/travel2.avif';
import travel3 from '@/public/image/about/travel3.avif';
import Banner from '@/components/about/Banner';
import Card from '@/components/about/Card';

const page = () => {
  return (
    <div className="font-pretendard w-full h-[3129px] flex justify-center">
      <div className="mx-[360px] w-full">
        {/* About KAHLUA */}
        <Banner />

        {/* 새내기 첫 합주 */}
        <section className="mt-[72px] h-[470px] flex">
          <Card
            bgColor="bg-gray-90"
            title1="새내기 첫 합주"
            title2=""
            width="w-80"
            description1=""
            description2="깔루아 모집 후 직속 선배들의 악기 연주를"
            description3="위한 속성 과외가 준비되어 있습니다."
            description4="그리고 새내기들끼리 대망의 첫 합주를"
            description5="하게되는데요."
            description6="이 첫 합주를 기점으로 밴드의 매력에"
            description7="푹 빠지게 될거예요!"
            imageSrc={music}
            altText="ensemble"
          />
          <div className="ml-6">
            <div className="relative rounded-3xl w-96 h-[470px] overflow-hidden">
              <Image
                src={ensemble1}
                alt="ensemble1"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="ml-6">
            <div className="relative rounded-3xl w-96 h-[223px] overflow-hidden mb-6">
              <Image
                src={ensemble2}
                alt="ensemble2"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative rounded-3xl w-96 h-[223px] overflow-hidden">
              <Image
                src={ensemble3}
                alt="ensemble3"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </section>

        {/* 정기 공연 및 각종 행사 */}
        <section className="mt-[200px] h-[470px] flex">
          <Card
            bgColor="bg-danger-40"
            title1="정기 공연"
            title2="및 각종 행사"
            width="w-84"
            description1="밴드의 꽃은 바로 공연! 깔루아는 매년 3월과"
            description2="9월 정기 공연을 열고 있습니다."
            description3="이 외에도 학교 축제, 학과 축제 등 무대만 있다"
            description4="면 달려가 다양한 공연을 하고 있습니다."
            description5="공연 전 한두 달간 수십번의 합주를 하며 팀워"
            description6="크를 다지고, 공연 직전에는 런스루와 리허설"
            description7="도 합니다."
            imageSrc={guitar}
            altText="concert"
          />
          <div className="ml-6">
            <div className="relative rounded-3xl w-96 h-[223px] overflow-hidden mb-6">
              <Image
                src={concert1}
                alt="concert1"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative rounded-3xl w-96 h-[223px] overflow-hidden">
              <Image
                src={concert2}
                alt="concert2"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="ml-6">
            <div className="relative rounded-3xl w-96 h-[470px] overflow-hidden">
              <Image
                src={concert3}
                alt="concert3"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </section>

        {/* 창립제와 연말 송년회 */}
        <section className="mt-[200px] h-[470px] flex">
          <Card
            bgColor="bg-warning-40"
            title1="창립제와"
            title2="연말 송년회"
            width="w-80"
            description1="7월에는 깔루아의 창립일을 기념하는 창립제,"
            description2="12월에는 다함께 연말을 마무리하는 송년회가"
            description3="열립니다."
            description4="1기부터 활동기수까지 선후배가 함께 모여"
            description5="네트워킹을 할 수 있는 행사입니다."
            description6="이렇게 많은 선배들, 동기들, 후배들을 사귈 수"
            description7="있는 것이 깔루아의 자랑 중 하나입니다."
            imageSrc={celebrate}
            altText="networking"
          />
          <div className="ml-6">
            <div className="relative rounded-3xl w-96 h-[470px] overflow-hidden">
              <Image
                src={networking1}
                alt="networking1"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="ml-6">
            <div className="relative rounded-3xl w-96 h-[223px] overflow-hidden mb-6">
              <Image
                src={networking2}
                alt="networking2"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative rounded-3xl w-96 h-[223px] overflow-hidden">
              <Image
                src={networking3}
                alt="networking3"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </section>

        {/* MT, 번개, 여행 */}
        <section className="mt-[200px] h-[470px] flex">
          <div className="w-96 rounded-3xl h-full">
            <div className="flex">
              <h3 className="w-[282px] h-[102px] rounded-t-3xl bg-primary-50 text-gray-0">
                <p className="mt-8 ml-8 text-[32px] font-semibold leading-[150%]">
                  MT · 번개 · 여행
                </p>
              </h3>
              <div className="w-[102px] h-[102px] bg-primary-50 relative">
                <div className="w-[102px] h-[102px] rounded-bl-3xl absolute bg-gray-0">
                  <div className="w-[78px] h-[78px] absolute bg-gray-5 ml-6 mb-6 rounded-3xl flex justify-center items-center">
                    <Image src={beer} className="w-12 h-12" alt="About Music" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-96 h-[368px] flex flex-col items-center rounded-r-3xl rounded-bl-3xl bg-primary-50 text-gray-0">
              <div className="flex-grow"></div>
              <p className="w-80 h-[162px] mb-8 text-lg font-medium leading-[150%]">
                MT, 바다 여행, 놀이공원 등의
                <br />
                친목을 다질 수 있는 활동과
                <br />
                산책, 보드게임 카페, 술자리, 맛집 탐방 등
                <br />
                일상을 함께하는 다양한 모임들이 있습니다.
                <br />
                이렇게 많은 시간을 함께 보내는 만큼 깔루아
                <br />는 가족보다 더 가족같은 사이랍니다.
              </p>
            </div>
          </div>

          <div className="ml-6">
            <div className="relative rounded-3xl w-96 h-[223px] overflow-hidden mb-6">
              <Image
                src={travel1}
                alt="travel1"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative rounded-3xl w-96 h-[223px] overflow-hidden">
              <Image
                src={travel2}
                alt="travel2"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="ml-6">
            <div className="relative rounded-3xl w-96 h-[470px] overflow-hidden">
              <Image
                src={travel3}
                alt="travel3"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
