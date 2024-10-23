# Todo List Uygulaması

Bu proje, kullanıcıların todo (yapılacaklar) listesi oluşturmalarına olanak tanıyan bir React uygulamasıdır. Uygulama, kullanıcıların yeni todo öğeleri ekleyebileceği ve listeyi görüntüleyebileceği bir arayüze sahiptir.

## Özellikler
- Kullanıcı, bir todo öğesi eklemek için bir metin kutusu kullanabilir.
- Eklenen todo öğeleri, liste halinde görüntülenir.

## Teknolojiler
- React
- @testing-library/react (Test yazma)
- Vitest (Test koşucusu)

## Test Yazma
Bu proje, kullanıcı etkileşimlerini test etmek için `@testing-library/react` kullanılarak yazılmış birim testlerine sahiptir. Aşağıda, todo öğesi ekleme işlevini test eden bir örnek bulunmaktadır.

### Testin Açıklaması

- **Test Ortamı Kurulumu:** 
  - `render(<TodoList />)` ile `TodoList` bileşeni render edilir.
  
- **Girdi Değiştirme:** 
  - `fireEvent.change` ile input alanına "New Todo" değeri eklenir.
  
- **Butona Tıklama:** 
  - `fireEvent.click` ile "Add Todo" butonuna tıklanır.

- **Sonuç Doğrulama:** 
  - `expect` ile eklenen todo öğesinin sayfada görüntülendiği doğrulanır.

### Öğrendiklerim
- React uygulamalarında kullanıcı etkileşimlerini test etmek için `@testing-library/react` kütüphanesini kullanmanın önemini öğrendim.
- Test yazmanın, kodun beklenildiği gibi çalıştığını doğrulamak için kritik bir süreç olduğunu fark ettim.
- Uygulama geliştirme sürecinde, hataları önceden yakalamak ve kodun güvenilirliğini artırmak için test yazmanın önemini anladım.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# User Form Uygulaması

Bu proje, kullanıcıların isim ve e-posta bilgilerini girmelerini sağlayan basit bir React uygulamasıdır. Uygulama, kullanıcıların form verilerini gönderebileceği ve bu verileri onSubmit işlevi ile yönlendirebileceği bir arayüze sahiptir.

## Özellikler
- Kullanıcı, isim ve e-posta adresi girmek için iki ayrı metin kutusu kullanabilir.
- Kullanıcı formu doldurduktan sonra, "Submit" butonuna tıklayarak bilgilerini gönderebilir.
- Form gönderildiğinde, girişler temizlenir ve onSubmit işlevi çağrılır.

## Teknolojiler
- React
- @testing-library/react (Test yazma)
- Vitest (Test koşucusu)

## Test Yazma
Bu proje, kullanıcı etkileşimlerini test etmek için `@testing-library/react` kullanılarak yazılmış birim testlerine sahiptir. Aşağıda, kullanıcı formunun işlevselliğini test eden bir örnek bulunmaktadır.

### Testin Açıklaması

- **Test Ortamı Kurulumu:** 
  - `render(<UserForm onSubmit={handleSubmit} />)` ile `UserForm` bileşeni render edilir ve bir `onSubmit` işlevi sağlanır.
  
- **Girdi Değiştirme:** 
  - `fireEvent.change` ile isim ve e-posta alanlarına sırasıyla "Zeynep Harık" ve "zeynepharik@gmail.com" değerleri eklenir.
  
- **Butona Tıklama:** 
  - `fireEvent.click` ile "Submit" butonuna tıklanır.

- **Sonuç Doğrulama:** 
  - `expect(handleSubmit).toHaveBeenCalledWith` ile `handleSubmit` işlevinin doğru argümanlarla çağrıldığı doğrulanır.
  - Ayrıca, form alanlarının temizlendiği de doğrulanır.

### Öğrendiklerim
- React uygulamalarında kullanıcı etkileşimlerini test etmenin, uygulama güvenilirliğini artırmak ve kullanıcı deneyimini iyileştirmek için ne kadar önemli olduğunu keşfettim.
- Kullanıcı girdilerinin yönetimini test etmenin, hataları önceden tespit etmek ve kullanıcı deneyimini optimize etmek için gerekliliğini anladım.
- Test yazmanın, gelecekteki değişikliklerin mevcut işlevselliği etkilemediğini doğrulamak için önemli bir yöntem olduğunu öğrendim.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------Proje: Counter Uygulaması
Bu proje, basit bir Redux ve React entegrasyonu ile sayaç (counter) işlevselliği sağlayan bir uygulamadır. Uygulama, kullanıcıların bir sayacı artırıp azaltabileceği bir arayüz sunar. Redux, uygulamanın durum yönetimini (state management) sağlamak için kullanılmıştır ve @reduxjs/toolkit ile yapılandırılmıştır.

Özellikler:
Kullanıcı, sayaç değerini artırmak için "Increment" butonuna tıklayabilir.
Kullanıcı, sayaç değerini azaltmak için "Decrement" butonuna tıklayabilir.
Sayaç başlangıç değeri sıfırdır ve her tıklamada ilgili yön doğrultusunda değişir.
Durum yönetimi, @reduxjs/toolkit kullanılarak yapılır ve Redux store ile bileşen arasında bağlantı kurulmuştur.
Uygulama, Vitest ve @testing-library/react kullanılarak test edilmiştir.

Teknolojiler:
React
Redux Toolkit (@reduxjs/toolkit)
@testing-library/react (Test yazma)
Vitest (Test koşucusu)

Test Yazma:
Bu proje, bileşenin işlevselliğini test etmek için birim testlerine sahiptir. Aşağıda, Counter bileşeninin işlevselliğini test eden bir örnek bulunmaktadır.

Testin Açıklaması:
Test Ortamı Kurulumu:
render ile Counter bileşeni Provider içinde render edilir ve Redux store sağlanır.

Değişiklikler ve Etkileşimler:
fireEvent.click ile Increment ve Decrement butonlarına tıklanır.
Sonuç Doğrulama:
Sayaç değeri artırma ve azaltma işlemleri doğrulanır. Örneğin, sayaç değeri başta "0" ise, bir kez artırıldığında "1", ardından bir kez azaltıldığında tekrar "0" olmalıdır.

Öğrendiklerim:
Redux ile durum yönetimi yapmanın bileşenleri sadeleştirerek uygulama içi veri yönetimini ne kadar kolaylaştırdığını öğrendim.
Redux store ile React bileşenlerini bağlamanın, merkezi durum yönetimini kolaylaştırarak uygulamayı daha yönetilebilir hale getirdiğini keşfettim.
Test yazmanın, bileşenlerin işlevselliğini korumak için önemli olduğunu, kullanıcı etkileşimlerini güvence altına alarak, olası hataları önceden tespit etmenin değerini fark ettim.


