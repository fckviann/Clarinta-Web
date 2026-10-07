import React, { useState, useRef, useEffect } from 'react';
import { VolumeModal } from './components/volume';
import { LockModal } from './components/lock';

type Slide = {
  image: string;
  alt: string;
  credit: string;
  message: string[];
};

const slides: Slide[] = [
  {
    image: "/assets/foto1.jpeg",
    alt: "Foto 1",
    credit: "26 March 2026",
    message: [
      "this is our first trip out of town",
      "Haloo sayangg, gimana kabarmu sekarang?? aku harap 4 hari ini berjalan lancar semua ya, aku ngga tau saat kamu lihat ini apakah kita udah bertukar cerita dulu atau engga, tapi aku janji bahwa aku baru akan kirim semua ini setelah aku selesai bales semua bubble chat kamu dengan baikk, fyi semua ini aku siapin waktu kamu belum buka blockku.",
    ],
  },
  {
    image: "/assets/foto2.jpeg",
    alt: "Foto 2",
    credit: "27 March 2026",
    message: [
      "this is when you realize i like you",
      "first, aku mau berterima kasih karena kamu nepati omonganmu untuk reach out duluan, aku senengg banget, aku kangen kamu sayang, walaupun di berantem terakhir aku bilang kalo aku takut aku bakalan terbiasa tanpa kamu dan ngga nyariin kamu kalo aku kamu tinggalin, tapi nyatanya engga sama sekali, 4 hari ini aku selalu kangen dan nungguin kamu, mungkin emang dasarnya kecintaan ya sampe ngga bisa tau mana yang bener dan salah, harus dan jangan, but really i never tought of anything about being usual without you.",
    ],
  },
  {
    image: "/assets/foto3.jpeg",
    alt: "Foto 3",
    credit: "11 April 2026",
    message: [
      "this is my first give for you",
      "tapiii, aku ngga terbiasa tanpa kamu, bukan berarti aku ngelewatin 4 hari ini gitu aja sambil lalu, aku berusaha keras ngelakuin itu sih, tapi di 1 sisi aku juga dapet banyak hal di sini, selama 4 hari ini dan itu bukan sekedar nyalahin kamu, muak sama kamu atau sama kita, apalagi berharap kita selesai karena aku gabisa sama sikapmu, i think about a lot of things and realize about something.",
    ],
  },
  {
    image: "/assets/foto4.jpeg",
    alt: "Foto 4",
    credit: "9 May 2026",
    message: [
      "this is our first date",
      "sebelum lanjut ke poin utama dari semua inii, aku harap sebelum kamu terusin baca, kamu bener-bener bisa baca dan pahami ini semua dengan baik, pakai kepala dingin, ditahan sebisa mungkin emosinya, diturunin egonya, dan selalu inget bahwa kita disini sama-sama, us vs problem, not you vs me, tolong bener-bener dinoted dan dipahami yaa, lanjuttt.",
    ],
  },
  {
    image: "/assets/foto5.jpeg",
    alt: "Foto 5",
    credit: "9 May 2026",
    message: [
      "this is our first photobooth",
      "jadi di sini aku mau ngebuat janjian sama kamu, untuk apa? untuk ngobrol, but this one is really communication, aku ngga mau kalo kamu cuma bakal jawab terserah, iya, oke, atau ngikut aku, aku serius butuh kamu yang mau nahan emosi dan ego, lalu terbuka dan mau nyampaiin semua yang ada di kepalamu, di hatimu, buat kita untuk sama-sama ngebawa hubungan ini lebih baik, lebih ringan, dan lebih dewasa",
    ],
  },
  {
    image: "/assets/foto6.jpeg",
    alt: "Foto 6",
    credit: "28 May 2026",
    message: [
      "this is when we are official",
      "aku ngga akan matok satu waktu, aku bebasin ke kamu, tapi aku berharap secepatnya, kamu bisa milih mau hari apa dan jam berapa yang sekiranya kamu bener-bener free untuk bisa luangin spend waktu, tenaga, dan energi untuk ngobrol sama aku, ngebahas tentang kita dan hubungan kita, aku serius tolong jangan langsung menolak ini, jawab terserah, apalagi bilang iya tapi saat hari h tetep kembali diem dan ngikut aja, karena itu aku bener-bener bebasin pemilihan waktunya ke kamu.",
    ],
  },
  {
    image: "/assets/foto7.jpeg",
    alt: "Foto 7",
    credit: "30 May 2026",
    message: [
      "this is us our first date after we start dating",
      "tolong jangan takut, males, atau negatif thinking dulu soal ngobrol ini, aku serius bahwa disini aku juga bakalan sebisa mungkin ngga nyalahin kamu, ngga balikin keadaan, ngga ngebenerin hal yang emang kamu keluhin, dan paling penting nahan emosi dan egoku sepenuhnya, aku juga butuh kamu untuk kaya gitu sehingga kita bisa selesai dengan efektif dan dapet solusi terbaik.",
    ],
  },
  {
    image: "/assets/foto8.jpeg",
    alt: "Foto 8",
    credit: "1 July 2026",
    message: [
      "this is us our first cinema date",
      "di sini juga aku gabakal fokus ke salahmu aja atau protes sikapmu aja, like i say, i think about a lot of things, aku mikir tentang kamu, sikapmu, tapi aku juga mikir tentang aku juga, sikapku yang mana yang selama ini kurang baik, yang bisa diperbaiki, yang mungkin ganggu kamu, gitupun juga tentang kita, tentang rules di hubungan kita, tentang kebiasaan kita, dan tentang masa depan kita, seperti namanya ngobrol pasti 2 arah, sehingga nanti kalau ada segala sesuatu yang aku sampein kurang kamu selalu bisa nambahin, protes, dan kamu juga bisa nyampein sesuatu yang ngga aku mention kalau itu mengganggu kamu selama ini.",
    ],
  },
  {
    image: "/assets/foto9.jpeg",
    alt: "Foto 9",
    credit: "9 July 2026",
    message: [
      "this is us our first date exploring nature",
      "yang perlu kamu noted adalah, kalau nanti ada sesuatu yang ngga aku sebutin terutama tentang keburukanku, itu bukan berarti aku ngga nganggep itu salah, bisa aja aku lupa, atau aku ngga tau kalo hal itu sebenernya ganggu kamu/kamu gasuka, karena itu aku beneran butuh ngobrol kita kali ini 2 arah dan kamu bener-bener mau ngomong baik itu untuk ngejelasin, ngebales aku, atau untuk nyampein dari sisimu sendiri.",
    ],
  },
  {
    image: "/assets/foto10.jpeg",
    alt: "Foto 10",
    credit: "15 July 2026",
    message: [
      "this is our farthest date",
      "last about this, jujur sebenernya aku pengen banget kalau kita bisa ngobrol di vc atau call, agar aku bisa denger langsung suaramu dan liat wajahmu, agar nanti kalau aku mau naik egonya atau emosinya aku bakal keinget langsung bahwa di sana itu kamu, pacarku, orang yang sangat aku sayang, tapi kembali lagi aku gamau ngeberatin kamu, kalo kamu tetep gabisa untuk vc/call, kita bisa tetep ngobrol di chat kaya biasanya as long as kamu beneran mau ngobrol 2 arah its very enough for me, tapi mungkin aku bakal ngawali pake vn dulu.",
    ],
  },
  {
    image: "/assets/foto11.jpeg",
    alt: "Foto 11",
    credit: "22 July 2026",
    message: [
      "this is our first date after we have kissed",
      "next, kalau ternyata kamu setelah baca semua ini kamu tetep milih untuk jadi orang yang keras, mungkin nolak mentah-mentah, mungkin jawab terserah/ngikut, atau mungkin bilang iya tapi saat ngobrol kamu tetep ngga 2 arah, aku bener-bener gatau lagi harus gimana dan mungkin dari aku bisa ada perubahan sikap ke kamu, ini sama sekali bukan ancaman dan malah justru aku juga takut kalo aku ngelakuin hal itu like i always say, because i love you so much.",
    ],
  },
  {
    image: "/assets/foto12.jpeg",
    alt: "Foto 12",
    credit: "26 July 2026",
    message: [
      "this is our first saturday night date",
      "mungkin kamu mikir, kenapa kamu harus ada di hubungan kaya gini, kenapa repot banget mau pacaran aja, kenapa kita gabisa bahas yang seneng-seneng aja dan saling tukar cerita, kamu harus tau, aku sendiri juga sangat mau kaya gitu terus dan gasuka kalo kita tegang apalagi diem-dieman, tapi justru ini semua harus dilakuin karena aku sayang sama kamu dan aku mau di masa depanku ada kamu.",
    ],
  },
  {
    image: "/assets/foto13.jpeg",
    alt: "Foto 13",
    credit: "28 July 2026",
    message: [
      "this is our odyssey date",
      "justru ini semua aku lakuin karena aku ngga mau kita salah satu ada yang mendem, aku ngga mau kita lebih saling nyakitin, dan aku gamau juga kalau lama-lama hubungan kita jadi fake, terpaksa, atau pelan-pelan hilang rasa karena ada sikap-sikap yang terpaksa diterima dan aslinya ngga bisa ditoleransi/ngga sesuai harapan dari salah satu dari kita.",
    ],
  },
  {
    image: "/assets/foto14.jpeg",
    alt: "Foto 14",
    credit: "31 July 2026",
    message: [
      "this is our spiderman date",
      "'and if love ever find me again, i hope its from someone who doesnt walk away when things go hard', aku juga berharap kita seneng terus, tapi aku juga sadar itu ngga realistis karena kita adalah 2 orang dan 2 pribadi berbeda yang selalu berusaha untuk jadi lebih baik satu sama lain, kita berasal dari latar belakang berbeda, punya kebiasaan dan kepribadian yang berbeda, dan punya mimpi dan harapan yang berbeda, itu normal banget, jangan mikir we are not meant to be, kita bisa, tapi kita harus mau untuk komunikasi, saling ngerti dan saling nyesuaiin satu sama lain.",
    ],
  },
  {
    image: "/assets/foto15.jpeg",
    alt: "Foto 15",
    credit: "19 August 2026",
    message: [
      "this is our tunjungan, gultik, fudgybro date",
      "kalau kamu merasa aku terlalu repot, hubungan ini terlalu rumit, terlalu berat, (huft, aku gapernah mau bilang gini, i love you so much), kamu bisa pergi, kamu selalu bisa bilang enough, but i never tought or never want you to do that, i never want us to end and i want us to be forever, we can find out things, we can get through everything, we finally chasing our dream, we are not in long distance anymore, we can get marriage and we can spend the rest of our live together, you and me (ugh, alay banget).",
    ],
  },
  {
    image: "/assets/foto16.jpeg",
    alt: "Foto 16",
    credit: "20 August 2026",
    message: [
      "this is our first living together",
      "aku mohon kamu jangan keburu emosi ngebaca part sebelumnya, kamu harus tau bahwa itu aku ketik juga dengan sangat berat, aku ngga pernah mau kehilangan kamu, aku serius saat aku bilang kalau aku takut tentang semua hal, aku takut aku lebih milih temenku, aku takut aku ngerubah sikapku, aku takut aku terbiasa tanpa kamu, dan aku takut aku bisa ngelepas kamu, kalau pada akhirnya kita selesai karena apapun itu, kamu harus tau kalau itu sangat berat buatku, sangat nyakitin aku, and will make me goes really crazy because im fucking love you with all my heart, all my live, all my soul.",
    ],
  },
  {
    image: "/assets/foto17.jpeg",
    alt: "Foto 17",
    credit: "20 September 2026",
    message: [
      "this is when we are celebrating your birthday",
      "tapi, aku tetep harus ngelakuin ini semua, maksa kamu untuk bisa terbuka, mau nyampein perasaanmu, pikiranmu, perspektifmu karena aku bener-bener gabisa kalau harus terus-terusan dapet diemmu dan have to figure it out by myself sayang, aku takut kedepannya saat kamu sibuk, capek, hectic aku kembali jadi orang yang kamu geser, kamu singkirin, kamu buang dan saat aku mencoba buat ajak kamu ngobrol kamu milih untuk say yes biar segera selesai tanpa bener-bener mahami kalau aku gapernah ngajak kamu berantem tapi aku begitu untuk hubungan kita kedepannya.",
    ],
  },
  {
    image: "/assets/foto18.jpeg",
    alt: "Foto 18",
    credit: "9 May 2026",
    message: [
      "I Love You, Clarinta",
      "aku sadar bahwa kamu adalah orang yang paling spesial, paling berharga yang pernah aku temui dan aku miliku, kamu bisa ngebuat aku berubah yang bener-bener gapernah kulakuin buat siapapun sebelumnya, kamu bisa ngembaliin seluruh standar yang udah pernah aku hapus dan gamau kulakuin, dan aku sendiri juga sudah dan selalu akan ngasih yang terbaik baik itu waktu, tenaga, energi, materi, effort untuk kamu, untuk kita.",
    ],
  },
  {
    image: "/assets/foto19.jpeg",
    alt: "Foto 19",
    credit: "20 September 2026",
    message: [
      "Happy Birthday, Clar na Atu",
      "i love you, so much, if u ever see yourself from my eyes, you will never doubt about anything else because i love you more than you can feel, you can think, you can imagine and more than everything, kamu adalah orang yang selalu ada di otakku, di hatiku, di jiwaku, kamu adalah orang yang selalu ingin ajak kemanapun, kapanpun, melakukan apapun, dan kamu adalah orang yang selalu aku inginkan ada di masa depanku.",
    ],
  },
  {
    image: "/assets/foto20.jpeg",
    alt: "Foto 20",
    credit: "Forever",
    message: [
      "this is us, story that is just begin, and will remain forever",
      "mungkin kamu mikir, kenapa aku sampe harus dan mau ngebuat semua ini, website ini? sebenernya, aku cuma mau kamu tau dan sadar bahwa aku nulis semua ini dengan kepala dingin, dengan hati yang damai, dengan tujuan yang baik, dan aku bener-bener serius sama kita, kita ldr, dan ngga akan berubah dalam waktu dekat, sehingga kita harus terbiasa menjadi semakin kuat, kalau diantara kita masih ada yang dipendem, gimana kita bisa menguatkan satu sama lain kan?",
    ],
  },
  {
    image: "/assets/foto21.jpeg",
    alt: "Foto 21",
    credit: "24 April 2025",
    message: [
      "...?",
      "i love you with all my heart, Clarinta, you're the person i search for all this time, and now you're mine and i will keep you as best as i can, but if we really dont meant to be for each other, that day will break my heart into pieces and i will die inside, i love you, you're my girlfriend, you're my person, you're my home, you're worth the distance, and you're worth every effort i've made for you and us.",
    ],
  },
];

function ArrowIcon({
  direction,
}: {
  direction: "left" | "right";
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={
        direction === "right"
          ? "arrow-icon arrow-icon--right"
          : "arrow-icon"
      }
    >
      <path d="M19 12H5M11 18l-6-6 6-6" />
    </svg>
  );
}

export default function App() {
  const [isLocked, setIsLocked] = useState<boolean>(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [volume, setVolume] = useState<number>(0.8);
  const [showVolumeModal, setShowVolumeModal] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!isLocked && currentSlide === 1) {
      setShowVolumeModal(true);
    }
  }, [currentSlide, isLocked]);

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const goTo = (index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  };

  return (
    <main className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-4">
      {isLocked && (
        <LockModal
          correctBoyfriend="Muhammad Afzal Fulvian Handoni"
          correctGirlfriend="Clarinta Anindya Mirabel"
          correctDate="28/05/2026"
          onSuccess={() => {
            setIsLocked(false);

            if (audioRef.current) {
              audioRef.current.volume = volume;
              audioRef.current.play().catch((err) => {
                console.error("Audio gagal diputar:", err);
              });
            }
          }}
        />
      )}
      {!isLocked && (
        <div className="story-shell">
          <header className="story-header">
            <p className="eyebrow">for you, the love of my life</p>

            <p className="slide-count" aria-live="polite">
              {String(currentSlide + 1).padStart(2, "0")} /{" "}
              {String(slides.length).padStart(2, "0")}
            </p>
          </header>

          <section
            className="story-window"
            aria-label="A personal story"
          >
            <div
              className="story-track"
              style={{
                transform: `translate3d(-${currentSlide * 100}%, 0, 0)`,
              }}
            >
              {slides.map((slide, index) => (
                <article
                  className="story-slide"
                  key={index}
                  aria-hidden={index !== currentSlide}
                  inert={index !== currentSlide}
                >
                  <div className="slide-content">
                    <figure className="portrait-wrap">
                      <div className="portrait-frame">
                        <img
                          className="portrait"
                          src={slide.image}
                          alt={slide.alt}
                        />
                      </div>

                      <figcaption>
                        {slide.credit}
                      </figcaption>
                    </figure>

                    <div className="message-panel">
                      <span
                        className="message-mark"
                        aria-hidden="true"
                      />

                      {slide.message.map(
                        (paragraph, paragraphIndex) => (
                          <p
                            className={
                              paragraphIndex === 0
                                ? "message-lead"
                                : "message-text"
                            }
                            key={paragraphIndex}
                          >
                            {paragraph}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <nav
            className="story-navigation"
            aria-label="Story navigation"
          >
            <button
              className="nav-button"
              type="button"
              aria-label="Previous message"
              disabled={currentSlide === 0}
              onClick={() => goTo(currentSlide - 1)}
            >
              <ArrowIcon direction="left" />
            </button>

            <div
              className="progress-dots"
              aria-label={`Slide ${currentSlide + 1} of ${slides.length}`}
            >
              {slides.map((_, index) => (
                <button
                  className={
                    index === currentSlide
                      ? "progress-dot progress-dot--active"
                      : "progress-dot"
                  }
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={
                    index === currentSlide
                      ? "step"
                      : undefined
                  }
                  onClick={() => goTo(index)}
                  key={index}
                />
              ))}
            </div>

            <button
              className="nav-button"
              type="button"
              aria-label="Next message"
              disabled={currentSlide === slides.length - 1}
              onClick={() => goTo(currentSlide + 1)}
            >
              <ArrowIcon direction="right" />
            </button>
          </nav>
        </div>
      )}

      <audio ref={audioRef} src="/song.mp3" loop />

      {showVolumeModal && (
        <VolumeModal
          volume={volume}
          onVolumeChange={handleVolumeChange}
          onClose={() => setShowVolumeModal(false)}
        />
      )}
    </main>
  );
}