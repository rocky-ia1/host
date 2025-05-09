#!/data/data/com.termux/files/usr/bin/bash

# تشغيل خادم SSH
sshd

# تعيين كلمة مرور للوصول
salah

# تشغيل خادم الويب
node backend/server.js &

# تشغيل خدمة الويب للوحة التحكم
python -m http.server 8080 &
