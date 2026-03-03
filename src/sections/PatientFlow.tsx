import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    number: '01',
    title: 'Kedatangan Pasien & Skrining',
    desc: 'Pasien datang dan langsung melakukan skrining untuk memisahkan pasien gawat darurat (langsung ke ruang tindakan) dan pasien umum.',
    icon: '🚶',
    color: '#C9A87C',
  },
  {
    number: '02',
    title: 'Pendaftaran',
    desc: 'Pasien mengambil nomor antrean, menuju loket pendaftaran, dan menyerahkan identitas (KTP / kartu berobat / kartu BPJS). Pasien baru mendaftar dengan data diri; pasien lama cukup menunjukkan kartu berobat.',
    icon: '📋',
    color: '#5BB8D4',
  },
  {
    number: '03',
    title: 'Menunggu Poli',
    desc: 'Pasien menunggu panggilan di ruang tunggu poli yang dituju — Poli Umum, Poli Gigi, KIA/KB, dan lainnya.',
    icon: '🪑',
    color: '#C9A87C',
  },
  {
    number: '04',
    title: 'Pemeriksaan & Pelayanan',
    desc: 'Pasien dipanggil ke ruang pemeriksaan untuk dilayani oleh dokter atau petugas kesehatan.',
    icon: '🩺',
    color: '#5BB8D4',
  },
  {
    number: '05',
    title: 'Pelayanan Penunjang',
    desc: 'Jika diperlukan, pasien diarahkan ke laboratorium, konseling gizi, atau unit sanitasi.',
    icon: '🔬',
    color: '#C9A87C',
  },
  {
    number: '06',
    title: 'Penyelesaian Biaya / Administrasi',
    desc: 'Peserta BPJS/Jamkesda langsung lanjut ke farmasi. Pasien umum melakukan pembayaran di kasir terlebih dahulu.',
    icon: '💳',
    color: '#5BB8D4',
  },
  {
    number: '07',
    title: 'Farmasi / Apotek',
    desc: 'Pasien menyerahkan resep dan mengambil obat di apotek Puskesmas.',
    icon: '💊',
    color: '#C9A87C',
  },
  {
    number: '08',
    title: 'Pulang atau Rujukan',
    desc: 'Pasien diperbolehkan pulang. Jika kondisi tidak dapat ditangani di Puskesmas, pasien akan dirujuk ke rumah sakit.',
    icon: '🏠',
    color: '#5BB8D4',
  },
];

const PatientFlow = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="patient-flow"
      className="relative w-full py-14 lg:py-20 bg-white overflow-hidden"
    >
      <div className="px-6 lg:px-[7vw]">

        {/* Header */}
        <div className={`mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="text-xs uppercase tracking-[0.2em] text-[#8B7D6F] font-medium">
            Alur Pelayanan
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2420] mt-4">
            Alur <span className="text-[#C9A87C]">Pasien</span>
          </h2>
          <p className="text-base text-[#8B7D6F] mt-3 max-w-xl">
            Proses pelayanan di Puskesmas PONED Balowerti Kota Kediri — dari kedatangan hingga pulang.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Kiri — Diagram */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="sticky top-24 rounded-2xl overflow-hidden border border-[#FAF3EB] shadow-sm bg-[#FAFAFA] p-4">
              <img
                src="/images/alur.png"
                alt="Diagram Alur Pelayanan Pasien Puskesmas Balowerti"
                className="w-full h-auto object-contain rounded-xl"
              />
              <p className="text-center text-xs text-[#8B7D6F] mt-3 tracking-wide">
                Alur Pelayanan Pasien — UPTD Puskesmas PONED Balowerti Kota Kediri
              </p>
            </div>
          </div>

          {/* Kanan — Deskripsi step by step */}
          <div className="flex flex-col gap-5">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`flex gap-4 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {/* Timeline line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{ background: step.color }}
                  >
                    {step.number}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 mt-1" style={{ background: `${step.color}40`, minHeight: 24 }} />
                  )}
                </div>

                {/* Content */}
                <div className="pb-4 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{step.icon}</span>
                    <h3 className="font-semibold text-[#2D2420] text-sm">{step.title}</h3>
                  </div>
                  <p className="text-sm text-[#8B7D6F] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PatientFlow;
