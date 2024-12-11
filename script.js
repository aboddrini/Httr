<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>اتصل بنا - شركة الأجهزة الكهربائية</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        /* تنسيق الرسائل */
        #formResult {
            margin-top: 20px;
            padding: 10px;
            border-radius: 5px;
            text-align: center;
            font-size: 1rem;
            display: none; /* إخفاء الرسالة في البداية */
        }
        #formResult.success {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        #formResult.error {
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
    </style>
</head>
<body>
    <!-- الهيدر -->
    <header>
        <nav>
            <ul>
                <li><a href="index.html">الصفحة الرئيسية</a></li>
                <li><a href="products.html">المنتجات</a></li>
                <li><a href="about.html">عن الشركة</a></li>
                <li><a href="contact.html" class="active">اتصل بنا</a></li>
            </ul>
        </nav>
    </header>

    <!-- العنوان الرئيسي -->
    <section class="contact-header">
        <h1>اتصل بنا</h1>
        <p>نسعد بالإجابة على جميع استفساراتكم!</p>
    </section>

    <!-- نموذج الاتصال -->
    <section>
        <div class="contact-form">
            <form id="contactForm">
                <label for="name">الاسم:</label>
                <input type="text" id="name" name="name" placeholder="أدخل اسمك" required>
                
                <label for="email">البريد الإلكتروني:</label>
                <input type="email" id="email" name="email" placeholder="أدخل بريدك الإلكتروني" required>
                
                <label for="message">الرسالة:</label>
                <textarea id="message" name="message" placeholder="أدخل رسالتك هنا" required></textarea>
                
                <button type="submit">إرسال</button>
            </form>
            <div id="formResult"></div>
        </div>
    </section>

    <!-- الفوتر -->
    <footer>
        <p>&copy; 2024 شركة الأجهزة الكهربائية. جميع الحقوق محفوظة.</p>
    </footer>

    <!-- إضافة سكريبت -->
    <script>
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();

            // جلب القيم
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // تحديد عنصر الرسالة
            const resultDiv = document.getElementById('formResult');

            if (name && email && message) {
                resultDiv.textContent = 'تم إرسال رسالتك بنجاح!';
                resultDiv.className = 'success';
                resultDiv.style.display = 'block';
                // إعادة تعيين الحقول
                document.getElementById('contactForm').reset();
            } else {
                resultDiv.textContent = 'يرجى تعبئة جميع الحقول.';
                resultDiv.className = 'error';
                resultDiv.style.display = 'block';
            }
        });
    </script>
</body>
</html>