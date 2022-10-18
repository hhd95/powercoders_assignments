// Javascript program to find GCD (Greatest Common Divisor) of two numbers
function gcd(a, b) {
    let result = Math.min(a, b); // Find minimum of a nd b
    while (result > 0) {
      if (a % result == 0 && b % result == 0) {
        break;
      }
      result--;
    }
    return result;
  }
  let a = 98;
  let b = 56;
  console.log(“GCD of “, a, ” and “, b, ” is “, gcd(a, b));
  /*
  Sonuç, çıkarılan herhangi bir sayıya eşit olana kadar sonucu her seferinde ileriye taşıyan tekrar çıkarma işlemidir.
  Cevap 1'den büyükse EBOB vardır (1'in dışında). Cevap 1 ise, ortak bölen yoktur (1'den başka) ve bu nedenle her iki sayı da eş asaldır.
  Yukarıdaki yaklaşım için sözde kod:
  def gcd(a, b):
   if a == b:
   return a
   if a > b:
   gcd(a – b, b)
   else:
   gcd(a, b – a)
  Bir noktada bir sayı diğerinin çarpanı olur, bu yüzden her ikisi de eşit olana kadar art arda çıkarmak yerine,
  diğerinin çarpanı olup olmadığını kontrol ederiz.
  Örneğin, a=98 & b=56 a>b’yi varsayalım, bu nedenle a= a-b koyun ve b aynı kalır. Yani a=98-56=42 & b= 56 . b>a olduğundan, b%a==0 olup
  olmadığını kontrol ederiz. cevap hayır olduğu için daha ileri gidiyoruz. Şimdi b>a yani b=b-a ve a aynı kalıyor.
  Yani b= 56-42 = 14 & a= 42 . a>b olduğundan, a%b==0 olup olmadığını kontrol ederiz. Şimdi cevap evet.
  Yani a ve b arasında daha küçük yazdırıyoruz H.C.F olarak. yani 42, 14'ün 3 katıdır, yani HCF 14'tür.
  aynı şekilde a=36 & b=60 olduğunda, burada b>a yani b = 24 & a= 36 ama a%b!=0. Şimdi a>b yani a= 12 & b= 24 .
  ve b%a==0. a ve b arasında daha küçük olan 12, 36 ve 60'ın HCF’si olur.

  farklı çözüm function gcd(a, b) {
  // Everything divides 0
  if (a == 0) return b;
  if (b == 0) return a;
  if (a == b) return a;
  // a is greater
  if (a > b) return gcd(a - b, b);
  return gcd(a, b - a);
}
let a = 98;
let b = 56;
console.log(“GCD of “, a, ” and “, b, ” is “, gcd(a, b));