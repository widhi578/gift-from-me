// --- LOGIC ---

        function openCard() {
            // Putar Musik saat amplop dibuka
            var music = document.getElementById("bgMusic");
            music.volume = 0.5; // Set volume 50%
            music.play().catch(error => {
                console.log("Autoplay dicegah browser, perlu interaksi user.");
            });

            document.getElementById('initialScreen').style.display = 'none';
            const card = document.getElementById('mainCard');
            card.style.display = 'block';
            setTimeout(() => { card.classList.add('active'); }, 10);
        }

        function moveButton() {
            const noBtn = document.getElementById('noBtn');
            const x = Math.random() * (window.innerWidth - 150);
            const y = Math.random() * (window.innerHeight - 100);
            
            noBtn.style.position = 'fixed';
            noBtn.style.left = x + 'px';
            noBtn.style.top = y + 'px';
        }

        function acceptLove() {
            document.getElementById('mainCard').style.display = 'none';
            document.getElementById('noBtn').style.display = 'none';
            
            const successScreen = document.getElementById('successScreen');
            successScreen.style.display = 'block';

            // Mulai Hujan Love
            createFloatingHearts();
            
            // Mulai Slideshow Foto
            showSlides();

            // Redirect ke WhatsApp setelah 3 detik
            setTimeout(() => {
                // Nomor dan Pesan
                const phoneNumber = "6285810632983"; 
                const message = "Hai sayang, aku udah buka webnya. Jawabannya: MAU BANGET jadi Valentine kamu! ❤️";
                
                // Buka WhatsApp
                const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.location.href = url; 
            }, 3000); // Delay 3000ms (3 detik) sebelum buka WA
        }

        // Fungsi Slideshow Otomatis
        let slideIndex = 0;
        function showSlides() {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}    
            slides[slideIndex-1].style.display = "block";  
            setTimeout(showSlides, 2500); // Ganti gambar setiap 2.5 detik
        }

        function createFloatingHearts() {
            setInterval(() => {
                const heart = document.createElement('div');
                heart.classList.add('floating-heart');
                heart.innerHTML = '❤️';
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.animationDuration = Math.random() * 3 + 2 + 's'; 
                heart.style.fontSize = Math.random() * 30 + 20 + 'px';
                document.body.appendChild(heart);
                setTimeout(() => { heart.remove(); }, 5000);
            }, 300);
        }