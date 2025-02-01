document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    const amountButtons = document.querySelectorAll('.amount-btn');
    const amountInput = document.querySelector('#amount');
    const ibanInput = document.querySelector('#iban');
    const ibanError = document.querySelector('#iban-error');
    const amountError = document.querySelector('#amount-error');
    const nameInput = document.querySelector('#name');
    const surnameInput = document.querySelector('#surname');

    // Miktar butonları işlevselliği
    amountButtons.forEach(button => {
        button.addEventListener('click', function() {
            const amount = this.getAttribute('data-amount');
            amountInput.value = amount;
            amountError.textContent = '';
        });
    });

    // IBAN formatı ve doğrulama
    ibanInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/[^\dA-Z]/g, '');
        if (value.length > 2 && !value.startsWith('TR')) {
            value = 'TR' + value;
        }
        let formatted = '';
        for (let i = 0; i < value.length && i < 26; i++) {
            if (i > 0 && i % 4 === 0) {
                formatted += ' ';
            }
            formatted += value[i];
        }
        e.target.value = formatted;
        ibanError.textContent = '';
    });

    // Form gönderme işlemi
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let hasError = false;

        // IBAN kontrolü
        const ibanValue = ibanInput.value.replace(/\s/g, '');
        if (ibanValue.length !== 26) {
            ibanError.textContent = 'IBAN eksik veya hatalı girildi. TR ile başlayan 26 karakter olmalıdır.';
            ibanError.style.color = 'red';
            hasError = true;
        } else if (!ibanValue.startsWith('TR')) {
            ibanError.textContent = 'IBAN "TR" ile başlamalıdır';
            ibanError.style.color = 'red';
            hasError = true;
        } else {
            ibanError.textContent = '';
        }

        // Miktar kontrolü
        if (!amountInput.value || amountInput.value < 1) {
            amountError.textContent = 'Lütfen geçerli bir miktar giriniz';
            amountError.style.color = 'red';
            hasError = true;
        }

        if (!hasError) {
            // Onay mesajı göster
            const message = `Bağış bilgilerinizi onaylıyor musunuz?

Ad: ${nameInput.value}
Soyad: ${surnameInput.value}
IBAN: ${ibanInput.value}
Miktar: ${amountInput.value}₺`;

            if (confirm(message)) {
                alert('Bağışınız için teşekkür ederiz! İşleminiz alınmıştır.');
                form.reset();
            }
        }
    });
});
