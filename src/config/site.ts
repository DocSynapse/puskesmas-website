const WA_NUMBER = '6285178922096';

export const SITE_INFO = {
  address: 'Jl. Balowerti GG V No 68, Kediri',
};

export const OPERATIONAL_HOURS = {
  doctorShift: 'Sen–Sab · 07.30–17.00',
  clinicWindow: '07:30 – 17:00',
  clinicCompact: 'Sen–Sab 07.30–17.00',
  emergency: 'UGD: 24 Jam',
};

export const QUEUE_INFO = {
  realtimeEnabled: false,
  queueSnapshot: '4 orang',
  waitEstimate: '15 menit',
  note: 'Data diperbarui secara manual oleh petugas.',
};

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}
