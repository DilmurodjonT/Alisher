var nam = prompt("ismingizni kiriting");
var sorov = Number(prompt(`${nam} qancha pulingiz bor?`));
if (sorov >= 11100.61 * 250 + 11100.61 * 500 + 12247.79 * 120) {
  alert(`Oq yo'l ${nam}!`);
} else {
  alert(`${nam} ozgina sabir qilish kerak ekan.`);
}
