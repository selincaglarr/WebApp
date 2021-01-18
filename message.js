module.exports.message = (age, day, hour) => {
  if (age !== Number(age) || age < 0) {
    return ' Lütfen yaşınızı doğru girdiğinizden emin olun :)';
  }
  else if (day == 0 || day == 6) {
    return 'Hafta Sonu Dışarıya Çıkamazsınız ';
  }
  else if (age > 65) {
    return `Yaşınız ${age} olduğu için sadece saat 10 ile 13.00 arası dışarı çıkabilirsiniz.`;
  }
  else if (age < 20) {
    return `Yaşınız ${age} olduğu için saat 13.00 ile 16.00 arasi dışarı çıkabilirsiniz.`;
  }
  else if ((age > 20 && age < 65) && (hour > 10 && hour < 21)) {
    return `Dışarıya Çıkabilirsiniz`;
  }
  else if ((age > 20 && age < 65) && (hour < 10 || hour > 21)) {
    return `Dışarıya çıkamazsınız.`;
  }
}
