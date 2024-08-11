const INDONESIA_MONTH = [
  "januari",
  "februari",
  "maret",
  "april",
  "mei",
  "juni",
  "juli",
  "agustus",
  "september",
  "oktober",
  "november",
  "desember",
];

function formatDate(date_: string) {
  const date = new Date(date_);
  const day = date.getDate();
  const month = INDONESIA_MONTH[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

export { formatDate };
